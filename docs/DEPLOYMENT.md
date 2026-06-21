# Deployment Guide

The site is a standard Next.js 16 app. It deploys to **Vercel** on the free tier,
with a custom domain attachable later. Two short manual steps are required — both
described below with exact links.

---

## 1. Web3Forms key (live contact form) — ~2 min

The contact form posts to [Web3Forms](https://web3forms.com); no backend needed.
The access key is **public by design** (it lives in the page's form markup), so
it is safe to store as a public env var.

1. Open **https://web3forms.com**.
2. In the **"Create your Access Key"** box, enter the email address where you
   want contact submissions delivered, then click **Create Access Key**.
3. Open that inbox and click the verification link Web3Forms sends. The email
   contains your **Access Key** (a UUID like `a1b2c3d4-…`).
4. You'll add this key as `NEXT_PUBLIC_WEB3FORMS_KEY` in step 2 below.

> Until the key is set, the contact form still works — it falls back to opening a
> pre-filled `mailto:` link to the address in `data/site.ts`.

---

## 2. Deploy to Vercel — ~5 min

1. Go to **https://vercel.com/new** and sign in with GitHub.
2. **Import** the `Vodkadav/chimney-service` repository. Vercel auto-detects
   Next.js — no build settings to change.
3. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` → your eventual public URL (e.g.
     `https://chimney-service.vercel.app`; update it once a domain is attached).
   - `NEXT_PUBLIC_WEB3FORMS_KEY` → the key from step 1.
4. Click **Deploy**. Every push to `main` then auto-deploys; pull requests get
   preview URLs.

CI (lint → typecheck → test → build) runs in GitHub Actions on every push and
gates merges; Vercel handles the actual deploy via its Git integration.

---

## 3. Attach a paid custom domain (later, optional)

1. Buy the domain from any registrar.
2. In Vercel: **Project → Settings → Domains → Add**, enter the domain.
3. Add the DNS records Vercel shows (an `A`/`CNAME` or nameserver change) at your
   registrar. Vercel provisions HTTPS automatically.
4. Update `NEXT_PUBLIC_SITE_URL` to the new domain and redeploy so metadata,
   sitemap and OG tags use it.

---

## Local production check

```bash
npm ci
npm run build
npm run start   # serves the production build at http://localhost:3000
```
