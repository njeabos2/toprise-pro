# ✨ [toprise.pro](https://toprise.pro)

Multi-tenant full stack website with Project Management and Dashboards.

![toprise-home](https://github.com/user-attachments/assets/b1916f9a-f1f8-47ef-8fea-77833432a7aa)

## Features

```text
┌ ○ Tech stack: ▲ Next.js 14.2.5, Bun, Prisma, MySQL & Tailwind css.
├ ƒ 📊 Multivendor B2B2B SaaS (Agencies and Sub accounts)
├ ƒ 🌐 virtually unlimited subdomains (using midleware.ts)
├ ƒ 🔐 Multiple signin options: (google, apple, linkedIn, username & phone)
├ ƒ 🚀 Full Website & Funnel builder
├ ƒ 💻 Role-based Access
├ ƒ 🔄 Subscription plans
├ ƒ 🔐 Connect payment accounts for all users!
├ ƒ 💳 Charge application fee per sale and recurring sales
├ ƒ 💰 Custom Dashboards per account
├ ƒ 📂 Media Storage
├ ƒ 📌 Custom checkouts
├ ƒ 🎨 Khanban board
├ ƒ 🔗 Event notifications
├ ƒ 📆 Performance metrics
└ ƒ 📄 Functioning landing page usinng https://ui.shadcn.com
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup wiki

For future reference:

### Theme

[🔗 Website background grids from ibelick](https://bg.ibelick.com/)

[🔗 Shadcn UI Theme creator](https://gradient.page/tools/shadcn-ui-theme-generator)

[Database migration](https://supabase.com/dashboard/project/dcsglrjetbzwyyhierki/database/migrations)

> Link your project

```bash
supabase link --project-ref dcsglrjetbzwyyhierki
```

> Create a new migration called "new-migration"

```bash
supabase migration new init
```

> Run all migrations against this project

```bash
supabase db push
```

Start development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

### [🔗 vercel.app](https://toprise.vercel.app/)

The easiest way to deploy Next.js apps is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.
