# Priorcheck (formerly AreTheyCringe) — Build Brief

Status: **name confirmed.** Product is not actually live — current site is a demand-testing landing page ("a marketing number"), not a shipped product, which is why renaming now was cheap. Rest of the brief (repositioning, legal/platform risk, placement) still needs founder decisions.

## 1. What this product is

Cross-platform social graph analysis: examines who someone follows on Instagram, X/Twitter, and TikTok to surface potentially concerning accounts (extremist, conspiracy-adjacent, bot/fake). Originally positioned as a "cringe score" for vetting dates, hires, or public figures. This brief proposes keeping the technical product but changing the name and the framing.

## 2. Naming — decided: Priorcheck

Checked against web search (same process used for Fairhand/Havenline/Fairhold IT). Two strong candidates in this space were already taken by real, established products: **Forewarn** (a well-known safety/identity-verification app for real estate professionals) and **ClearCheck** (an employment/background-check app). Both are close enough in category to be real conflicts, not just incidental hits.

**Priorcheck** came back clean. It's also a better name than AreTheyCringe on its own terms — "check before you commit" is a due-diligence framing, not a judgment one, and pairs with the repositioning in §3. Runner-up: **Vetfirst** (plain, clear meaning, minor unrelated-industry hits only — a small unconnected veterinary business, low real risk). Still needs an actual NUANS/trademark/domain check before final commitment, same caveat as every other name in this project.

## 3. Repositioning — from judgment tool to safety tool

This is the substantive change, not just the name. "Score people as cringe" is a tool for judging strangers — that's what put it in tension with the master site's "no judgment" thread in the first place. "Check before you commit" is a due-diligence tool for **protecting the person doing the checking**, particularly people who take on real physical risk meeting strangers: someone using a dating app, a companion or escort screening a new client, a small business owner meeting a new contractor or landlord for the first time. That's not a cosmetic reframe — it's a genuine shift in who the product is for and what it's doing for them.

Worth noting: this isn't a new category. **Garbo** is a real, established dating-safety background-check service built around a similar idea (background checks specifically framed around protecting people, particularly women, before a first date). Its existence isn't a naming conflict to route around here — it's validation that "safety screening before you meet someone" is a real, fundable category with actual demand, not a novel idea that needs inventing from scratch. Worth a look at how it's positioned before finalizing Priorcheck's own framing.

**This repositioning may resolve the original master-site exclusion.** The earlier call to leave AreTheyCringe off the master portfolio was specifically because a judgment/scoring tool contradicted the "no judgment, we build for who others turn away" thread every other entry shares. A genuine safety tool doesn't have that problem — it's arguably a *stronger* fit than most of the portfolio, since it directly serves the same population Havenline and Rent a Feeling serve (people who need to vet who they're meeting and don't have access to corporate-grade screening tools). Recommend revisiting the master-site-brief.md exclusion once this repositioning is locked in — see Open Decisions.

## 4. Legal & platform risk — different category than Havenline's, still real

This isn't the criminal-liability category Havenline deals with (Criminal Code s.286.2) — it's platform Terms of Service risk and possibly privacy-law exposure, both civil/regulatory rather than criminal:

- **Scraping ToS violations**: Instagram, X, and TikTok all prohibit unauthorized scraping in their terms. Platforms have sued over exactly this before — hiQ v. LinkedIn is the well-known case, and it didn't end cleanly in the scraper's favor long-term. Real risk of a cease-and-desist or access being cut off if the product gets enough traction to draw attention.
- **Clearview AI is the cautionary tale worth knowing, not a comparison to invite.** Clearview built a similar "analyze public data about people who never consented" model and it resulted in lawsuits and regulatory bans across multiple countries. Priorcheck's use case is narrower and more consent-adjacent (checking someone before a specific interaction, not building a mass surveillance database), but the category has a genuinely bad precedent worth being deliberate about staying far away from in both design and marketing.
- **Privacy-law nuance specific to this product**: unlike the rest of the portfolio, this product's primary data subject (the person being checked) is not the customer and never consented to anything. Canada's PIPEDA applies to personal information handling generally, and processing third-party public data at scale for a commercial product is a genuinely different compliance posture than a typical SaaS product processing its own users' data. Worth a specific legal read on this before scaling past a landing page, separate from the Havenline legal work already flagged.

## 5. Technical scope (as already built/prototyped)

- Cross-platform follow-graph retrieval (Instagram, X/Twitter, TikTok)
- Classification/scoring pipeline for flagging extremist, conspiracy-adjacent, or bot/fake accounts
- Shareable report output
- No-login flow for public profiles; permissioned read-only access for private profiles

## 6. Placement — three live options, needs a decision

1. **Standalone brand, fully independent** of both the founder's name and Fairhand — safest if the repositioning isn't fully locked in yet, or if there's any chance this draws platform/legal attention before the company's other, lower-risk ventures have traction.
2. **Personal portfolio, as a technical case study** (already recommended in personal-portfolio-suggestions.md §4) — regardless of what happens with the live product, the engineering itself is a strong, differentiated portfolio piece under either name.
3. **Master site Portfolio, under the new safety-tool framing** — now genuinely on the table given §3. Would need the master-site-brief.md exclusion note reversed and a proper entry written once naming/positioning is final.

These aren't mutually exclusive — the personal-portfolio technical case study can exist regardless of what the live product does. The real decision is about the live product itself: independent brand vs. folded into the company story.

## 7. Design direction

Not yet specified elsewhere in this brief, so starting from scratch here — same cross-portfolio system as the rest of the family (see master-site-brief.md §10d), with its own register:

### 7a. Color palette — decided

Slightly cooler than the rest of the portfolio on purpose — this product's job is clarity and calm verification, not warmth or mission-storytelling, so it sits closer to Fairhold IT's register than to Fairhand/Havenline's:

- **Background (light):** `#F5F7F6` — cool-neutral off-white, a shade cooler than the rest of the portfolio's warm neutrals but still not clinical stark white
- **Background (dark):** `#14181A` — cool near-black
- **Text:** `#1B211F` (light mode) / `#EBEFEC` (dark mode)
- **Primary accent:** `#2F6D5C` — deep forest/pine green. Reads as "clear to proceed" and calm without being clinical, and deliberately avoids red or amber as the brand color — those read as alarm/warning, wrong tone for a product whose framing is due diligence, not danger
- **Neutral/borders:** `#7E8B87` — cool sage-gray
- **In-product flagged-result indicator only** (not a brand color, used narrowly inside actual check results): a muted rust `#B4553D` — reserve any red/warm-alert color strictly for this one functional purpose so it never bleeds into general branding or marketing surfaces

### 7b. Typography — decided

- **Headlines and body both: Inter.** Unlike the rest of the portfolio, this is a utility-first tool where a visitor is scanning a report or a landing page for information fast, not reading a mission story — one typeface, no separate display face, prioritizes scanning speed and a slightly more clinical/precise feel that suits a verification tool
- Numerals/scores in check results can use a monospace accent (e.g. **IBM Plex Mono**), same rationale as Fairhold IT's stat treatment (see msp-site-brief.md §8b) — makes a result read as measured data, not a marketing claim

### 7c. UI details

- Sharper corners (4–8px), same "trust/verification" register as Fairhold IT (see master-site-brief.md §10d) — not the soft rounded style used on Fairhand/Havenline
- Report/result UI should look like a clean summary document, not a dashboard trying to look impressive — clarity and restraint over visual density
- No red/alarm color language outside the single narrow use described in §7a — the whole positioning shift in §3 (judgment tool → safety tool) depends on the product not visually reading as accusatory
- No stock photography (portfolio-wide rule, see master-site-brief.md §10d); if illustration is needed, simple line-based icons only

## 8. Non-goals

- Not positioned as a mass-surveillance or dossier-building tool — the safety-check framing is a real constraint, not just marketing copy; features should stay narrow (checking one specific person before one specific interaction) rather than expanding into general profile-building
- Not claiming to be a substitute for an actual professional background check (criminal record, identity verification) — it's social-graph pattern analysis, and the copy should be honest about that distinction

## 9. Open decisions

- [x] Name — **confirmed: Priorcheck.** Still needs a real NUANS/domain/trademark check before final commitment, same as every other name in this project.
- [ ] Decide placement: standalone brand vs. master-site inclusion vs. personal-portfolio-only for now
- [ ] If master-site inclusion is chosen: reverse the exclusion note in master-site-brief.md §8 and write a proper Portfolio entry
- [ ] Legal read on the PIPEDA/third-party-data angle (§4) — different from, and in addition to, the Havenline legal work already in progress
- [ ] Decide how closely to study Garbo's positioning/model before finalizing Priorcheck's own framing and copy