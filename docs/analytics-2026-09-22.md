# Measurement fixes, 2026-09-22

Companion to scripts/annotoconsent-1.3.0.js, scripts/annotoformguard-1.2.0.js and annotonavmega 1.17.0.
Everything below that is marked **UI** has no API and must be done by a person with admin access.

## 1. Webflow (UI, once)
Site settings > Integrations > Google Analytics: remove `G-RB2LBDL082`. AnnotoConsent 1.3.0 loads the tag
itself after the consent default. While the native tag is still present the script detects it and does not
load a second copy, but the native tag will keep firing page_view before consent is declared.

## 2. GA4 property 390426624 (UI)
1. Admin > Data settings > Data filters > Create filter > **Internal traffic**. Name `bot`, filter operation
   Exclude, parameter `traffic_type` value `bot`. Leave in **Testing** for 7 days (check the
   "Test data filter name" dimension in Explorations), then set **Active**.
2. Same path, a second Internal-traffic filter with value `internal` (staging host + office IPs). Add the
   office IP ranges under Data streams > annoto.net > Configure tag settings > Define internal traffic.
3. Admin > Events > Mark as key event: `demo_request`, `contact_request`, `newsletter_signup`
   (they arrive from AnnotoFormGuard 1.2.0 only after Webflow accepts a submission).
4. Admin > Custom definitions > Create custom dimension, event scope, name `Bot reason`, parameter `anr_bot`.
5. Delete the `purchase` key event (it has never fired on this property).

## 3. HubSpot portal 4053789 (UI)
1. Settings > Marketing > Forms > Non-HubSpot forms: turn **off** "Collect data from website forms".
   The collector fires on the Submit click, before reCAPTCHA and Webflow validation, and creates leads
   from rejected submits.
2. Marketing > Forms > Create form (regular): "Website: Book a demo" with fields First name, Last name,
   Email, Company, and the hidden field `hutk`. Note its form GUID.
3. Repeat for "Website: Contact".

## 4. Server-side feed: Webflow form_submission webhook -> n8n -> HubSpot Forms API
Import the workflow below into n8n, set FORM_GUID, then register the Webflow webhook
(`data_webhook_tool` create_webhook, trigger `form_submission`, filter name "Email Form",
url = the n8n production webhook URL). Webflow sends every accepted submission, including the hidden
`hutk` and `anr_t` fields that AnnotoFormGuard adds.

```json
{
  "name": "Webflow demo form -> HubSpot",
  "nodes": [
    {"parameters": {"httpMethod": "POST", "path": "annoto-demo-form", "responseMode": "onReceived"},
     "name": "Webflow webhook", "type": "n8n-nodes-base.webhook", "typeVersion": 1, "position": [0, 0]},
    {"parameters": {"functionCode": "const d = $json.body && $json.body.payload ? $json.body.payload.data : ($json.body.data || $json.body);\nconst f = (k) => d[k] || '';\nreturn [{ json: {\n  fields: [\n    {objectTypeId: '0-1', name: 'firstname', value: f('Contact us first name')},\n    {objectTypeId: '0-1', name: 'lastname', value: f('Last name')},\n    {objectTypeId: '0-1', name: 'email', value: f('Email 3')},\n    {objectTypeId: '0-1', name: 'company', value: f('Company')}\n  ],\n  context: { hutk: f('hutk') || undefined, pageUri: 'https://www.annoto.net/demo', pageName: 'Book a Demo' }\n}}];"},
     "name": "Map fields", "type": "n8n-nodes-base.function", "typeVersion": 1, "position": [250, 0]},
    {"parameters": {"url": "https://api.hsforms.com/submissions/v3/integration/submit/4053789/FORM_GUID", "method": "POST", "jsonParameters": true, "bodyParametersJson": "={{ JSON.stringify($json) }}", "options": {}},
     "name": "HubSpot Forms API", "type": "n8n-nodes-base.httpRequest", "typeVersion": 1, "position": [500, 0]}
  ],
  "connections": {"Webflow webhook": {"main": [[{"node": "Map fields", "type": "main", "index": 0}]]},
                  "Map fields": {"main": [[{"node": "HubSpot Forms API", "type": "main", "index": 0}]]}}
}
```

## 5. Search Console (UI)
URL inspection for https://www.annoto.net/annoto-vs-hypothesis > Request indexing. The Inspection API is read-only.

## 6. Screpy (blocked for the agent)
Prompt 562 ("How do I prove regular and substantive interaction in an online video course?") should be
replaced by "What tools help prove regular and substantive interaction in online video courses?".
Deleting a prompt is a classifier-blocked action for the agent; do it in the Screpy UI, then add the new one.
Perplexity was added as the third provider on 2026-09-22.
