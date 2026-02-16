# Archive

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/shared-8867s-projects/v0-archive)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/7OBKdWwIbzR)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/shared-8867s-projects/v0-archive](https://vercel.com/shared-8867s-projects/v0-archive)**

### Environment variables (Vercel)

The contact form (`/contact`) needs these in production. Add them in **Vercel → Project → Settings → Environment Variables** (do not commit `.env` to Git):

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Your [Resend](https://resend.com) API key |
| `CONTACT_EMAIL` | Email address where contact submissions are sent |
| `CONTACT_FROM_EMAIL` | *(Optional)* Required to send to any inbox. Resend’s default `onboarding@resend.dev` only delivers to the email on your Resend account. To send to `CONTACT_EMAIL` or others: [verify a domain](https://resend.com/docs/dashboard/domains/introduction) in Resend, then set this to e.g. `Kinesia Labs <contact@yourdomain.com>`. |

Set them for **Production** (and **Preview** if you want the form on preview deployments). Redeploy after adding or changing variables.

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/7OBKdWwIbzR](https://v0.app/chat/projects/7OBKdWwIbzR)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
