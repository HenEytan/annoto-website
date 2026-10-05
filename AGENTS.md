# AGENTS.md — coding-agent guide for annoto-website

Rules live here; every `CLAUDE.md` is a one-line `@AGENTS.md` import. Edit this file, never the
import. A rule that applies to one folder goes in a nested `AGENTS.md` there, with its own
one-line `CLAUDE.md` beside it.

## What this repo is

The working repo for annoto.net, the marketing website of Annoto (an in-video collaboration, assessment and analytics layer for LMS-embedded learning). The site is an inbound sales funnel for Higher Ed and Enterprise L&D buyers, with Book a Demo as its primary CTA. The site itself is built and hosted in Webflow: this repo holds the custom JavaScript the site loads, the design handoff, illustrations, and the plans and runbooks behind it. Nothing here builds or deploys, so a commit here does not change the live site. Owner: Hen (hen.aton@gmail.com). _[FILL IN: who else works in this repo, if anyone.]_

## Layout

| Package / folder                                                   | Role                                                                                                                                                                                                                                                                                                                                                            | Depends on                                         |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [scripts/](scripts/)                                               | Custom JS that annoto.net loads: cookie consent and the GA4 gate (`annotoconsent-*`), form spam guard and conversion events (`annotoformguard-*`), the mega-menu nav (`annotonavmega.js`), and the Home "How it works" section (`home-flow.js`). Each file is self-contained browser JS (an IIFE, no build step); its version, date and change notes live in its header comment, and some files also carry the version in the filename. Shipping one to the live site is a Webflow custom-code step outside this repo — _[FILL IN: the deploy recipe]_. | GA4 `gtag`, the Webflow page markup                |
| [design_handoff_annoto_website/](design_handoff_annoto_website/)   | The design handoff for the redesign: a 21-page HTML reference (`site/`) and full-page screenshots. It is the pixel spec for the Webflow build, not production code — its [README](design_handoff_annoto_website/README.md) says what to port and what not to.                                                                                                     | —                                                  |
| [feature-assets/](feature-assets/)                                 | SVG feature illustrations for the /features page.                                                                                                                                                                                                                                                                                                               | —                                                  |
| [docs/](docs/)                                                     | Runbooks and plans, e.g. [the 2026-09-22 measurement fixes](docs/analytics-2026-09-22.md), plus the folders in Docs below.                                                                                                                                                                                                                                       | —                                                  |
| [website-structure.md](website-structure.md)                       | The redesign's current-state audit and proposed sitemap.                                                                                                                                                                                                                                                                                                         | —                                                  |
| [MEMORY.md](MEMORY.md), [memory/](memory/), [TASKS.md](TASKS.md)   | Working memory (glossary, people, projects) and the task list, updated as work goes.                                                                                                                                                                                                                                                                            | —                                                  |

_[FILL IN: the boundary rule between them — what may import what, and where a cross-cutting helper goes.]_

## Public contracts

- **The script files the live site loads** — a filename or version that Webflow's custom code points at; renaming one breaks the site until Webflow is updated.
- **DOM hooks the scripts read or create** — the `.anr-flow-mount` mount point, the `.anr-nav-*` nav classes, the `#anr-cc` consent banner, and the hidden form fields `anr_hp_url` (honeypot), `anr_t` and `hutk`, which the Webflow → n8n → HubSpot feed reads.
- **Analytics names** — the GA4 events `demo_request`, `contact_request`, `newsletter_signup` and `form_accepted` (marked as key events in GA4), the `traffic_type` / `anr_bot` parameters, and the GA4 measurement ID.
- **Browser state** — the `annoto_consent` localStorage key and the `window.__anrBot` / `window.__axmNav` globals.

Changing any of them is a behavior change, never a refactor. Before changing a shared module, grep its consumers across the repo; a signature change enumerates every call site.

## Docs

| Folder                       | What it holds                                                      |
| ---------------------------- | ------------------------------------------------------------------ |
| [docs/adr/](docs/adr/)       | Immutable architecture decision records.                           |
| [docs/design/](docs/design/) | Design specs for a feature or subsystem.                           |
| [docs/plans/](docs/plans/)   | Implementation plans, task by task.                                |
| [docs/guides/](docs/guides/) | Guides, indexed by [docs/guides/README.md](docs/guides/README.md). |

Docs mirror rules and code for humans. When a change makes a guide, design doc, or README wrong, update it in the same change. Don't load a doc to follow a rule.

## Common tasks

| Command                                 | Effect                                                                                                                              |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| _[FILL IN: the static-server command]_ | Serves `design_handoff_annoto_website/site/` so `Home.dc.html` opens in a browser — the handoff README says to serve it statically but names no command. |

There is no aggregate check yet: the rows above are run one at a time. _[FILL IN: the one command that should run all of them, once it exists.]_

---

## Git

- Never include the Claude Code session link (`Claude-Session:` trailer, `https://claude.ai/code/session_...`) in commit messages, PR bodies, or issue and review comments.
- The `Co-Authored-By` trailer names `Agent`, never the full model/email.
- A PR body ends with `Co-Authored-By: Agent`, never with a "Generated with Claude Code" line or any other tool attribution.

### Git Commit Conventions

Commits follow Conventional Commits

```
type(scope): short description
```

| Type       | When to use                               |
| ---------- | ----------------------------------------- |
| `feat`     | New feature or capability                 |
| `fix`      | Bug fix                                   |
| `refactor` | Code change with no functional difference |
| `test`     | Adding or fixing tests                    |
| `chore`    | Maintenance, dependency updates, tooling  |

Scope identifies the affected package(s) or area.
Scope is optional for changes that span the whole repo or don't map cleanly to a single package.

**Rules**

- Description is lowercase, no trailing period.
- Use imperative mood: "add", "fix", "remove" — not "added" or "fixes".
- If a commit spans more than 2 scopes, omit the scope, keep only the type, and use a multi-line commit for details.

**Multi-line commits**

Prefer multi-line format whenever a commit includes multiple distinct changes — not just for PR squash merges. Use a single-line message only when the commit does exactly one thing.

Add a body listing the individual changes as bullet points. Omit iterative `type(scope)` bullets that only refine or clean up work introduced earlier in the same PR — include only bullets that add distinct value.

**Bullet prefix rule:** if every bullet has the same `type(scope)` as the subject line, omit `type(scope):` from all bullets and write only the description. If any bullet differs, include `type(scope):` on all bullets.

### Git Branch Rules

- **Protected branches: `main` — commits land there only via PRs or automated tooling, never manually.** Always work on a feature branch and open a PR.
- Branch naming: `feat/<description>`, `fix/<issue-number>-<description>`, `refactor/<issue-number>-<description>`.

### Issues

Issues carry the label of their kind: `bug` for a defect or regression, `enhancement` for a feature or behavior change, `documentation` for a docs-only change, and _[FILL IN: the label for a refactor — the repo has no `refactor` label]_. Title: one specific line naming the area and the symptom, capability, or target.

### Pull Requests

- Label the PR to match the issue it closes, adding `security`, `breaking`, etc. when they apply.
- The PR body closes its issue (`Closes #<n>`).

---

## House rules

### Workflow rules

- **When the user asks a question, discuss first** — don't jump to implementation or edits as a response.
- **Be direct and concise** — no pleasantries, no preamble, no filler. Disclaimers and caveats stay short; the response goes to the main answer. Asked to explain something, give the high-level summary unless depth is asked for.
- **Link what you name.** A file or a doc section in a reply is a markdown link ([AGENTS.md](AGENTS.md), [Git](AGENTS.md#git)), never a bare path.
- **Report an edit, don't paste it.** What changed, where (linked), and why — the user reads the file.
- **Feedback in chunks.** Review findings or suggestions you volunteer in an interactive conversation come in chunks of up to five points, saying how many remain. A skill's prescribed report is presented as that skill says, and an unattended run sends the whole report in one message.
- **Ask before adding a dependency.** Prefer what the repo already has.
- **Ask before generating `.md` docs**, unless explicitly instructed otherwise.
- **A document is as long as its task needs.** Cover the substance; no filler sections, restated summaries, or boilerplate. A skill's or template's required sections are substance — the rule governs what fills them and what is added beyond them.
- **Search the web for current docs when researching a dependency, API, or tool** — training data is stale. Verify against the installed version before applying advice.
- **If a rule conflicts with a task, ask** — don't silently bypass.
- **TDD is mandatory for features, fixes, and behavior changes** — the `tdd` skill: a failing test first, then the minimum to pass.
- **Every check in Common tasks must pass before committing** — there is no one command that runs them all. Before reporting a PR ready, run them again.
- **Working memory lives in [MEMORY.md](MEMORY.md) and [memory/](memory/)** — people, terms and projects, updated as we work together; check there for deeper context. It never goes in `CLAUDE.md`, which stays the one-line import.

### Technical rules

- **Design principles: DRY, KISS, YAGNI, SOLID — in that order of frequency.** Don't abstract until the second duplicate. Don't add config knobs, hooks, or generics for a use case that isn't in the diff. An established codebase pattern is not over-engineering: repeating it for new code is expected; flag as YAGNI only abstractions nothing in the codebase uses.
- **Tests live next to source as `*.test.js`.** _[FILL IN: no test runner exists yet — name one, or state how a browser script is verified instead, e.g. on the Webflow staging site.]_ Every new public function, type, or component ships with tests in the same commit; cover the happy path, the documented edge cases (empty, null, error), and failure paths. Tests exercise real logic.
- **Document non-obvious logic only.** A short comment explaining _why_ (invariant, workaround, protocol quirk, ADR reference) is welcome. Don't restate _what_ the code does.
- **Never count what the text lists.** "The three options", "both callbacks", "these five steps" — in a doc, a comment, a docstring, or a commit body — go stale the moment an item is added or removed. Let the list carry its length.
- **When a code question is really an architecture question, read the ADR before editing.** A boundary or a shape that looks wrong was decided, not overlooked.
- **Follow existing code patterns.** Different areas may differ in style — adapt. When existing code and these rules disagree, the rules win: legacy code may predate them.

### Checks and evidence

Each of these exists because its absence ships something wrong.

- **Every claim in a report is audited against a tool result from this session.** Report only work you can point to evidence for, and say explicitly what is not yet verified. Outcomes faithfully: a failing test with its output, a skipped step named, and what is done and verified stated plainly, without hedging.
- Every guard, gate, or check must be provably able to fail: break what it guards, watch it go red, revert. A check you cannot demonstrate red is not a check.
- Catches fail closed. A tool error, an empty result, or a skipped step never reads as "no findings".
- Numbers in commit messages and PR bodies are prose; evidence is the command that ran and its exit status.

## Security

When writing or reviewing code, check for the following. The categories follow the OWASP Top 10; look an item up there for depth. Severity: **HIGH** = blocker,
**MEDIUM** = should fix, **LOW** = consider fixing but always notify the team.

### HIGH — Blockers

- **Hardcoded credentials or API keys** (Security Misconfiguration) in source code or committed config files.
- **Sensitive data exposure** (Cryptographic Failures): secrets, tokens, or PII written to logs, included in error output, or returned beyond what the caller needs.
- **Untrusted input reaching a shell, a query, a parser, or a filesystem path unvalidated** (Injection) — injection and path traversal. Parameterize queries; sanitize any path built from input.

### MEDIUM — Should fix

- **Cryptographic failures** (Cryptographic Failures): weak algorithms, hardcoded IVs, home-rolled crypto, insufficient key lengths; secrets encrypted at rest and in transit.
- **Unhandled errors** (Security Misconfiguration) — an uncaught rejection, panic, or exception that leaks a stack trace or internal state to a caller.

### LOW — Consider

- **Vulnerable or outdated components** (Vulnerable and Outdated Components): when adding or upgrading a dependency, verify it has no known CVEs and is actively maintained.

## Code conventions

### General

- No magic numbers or strings — named constants.
- No commented-out code. A `TODO` / `FIXME` references a ticket or states a clear action.
- No debug prints in shipped code — use the project's logger.
- Prefer early return over nested conditionals; split a function with many branches.
- When a function takes more than two parameters, two of the same type, or any boolean, take one named argument object (or struct) instead.
- Lint and typecheck every file you touch before finishing; lint errors are often real bugs — a missing await, an unhandled error, a wrong import.

### JavaScript

_[FILL IN: naming, typing, and idiom rules for JavaScript that a linter does not already enforce]_

## Permissions when running unattended

This section applies when you run as a subagent, in a background task, or in a non-interactive session — anywhere a permission prompt has no one to answer it. An interactive session simply asks; a denied call there means the user declined, so adjust the approach rather than retry it.

Unattended, a denied tool call is a silent failure mid-workflow. A call must pass both the tools the session has and the project's permission lists (`.claude/settings.json` for Claude Code — `permissions.allow` is auto-approved, `permissions.deny` is blocked). Read them at the start and plan around them.

- Each piped variant of a shell command needs its own allow entry: `Bash(git log*)` does not cover `git log | head`.
- Fetch only allowed domains; call only allowed MCP tools; check the deny list for path restrictions before editing.
- When a needed tool is missing, try a permitted alternative; if none exists, stop and report — do not retry the denied call.
- At the end of your work, list any tool you needed but could not use, so the user can extend the settings:

```
MISSING PERMISSIONS:
  - <Tool>(<pattern>): <why needed>
```
