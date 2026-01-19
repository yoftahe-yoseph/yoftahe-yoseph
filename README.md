## Portfolio (Next.js + MongoDB)

Personal portfolio for Yoftahe Yoseph — Full Stack Developer & Cybersecurity Enthusiast. Built with Next.js App Router, Tailwind, TypeScript, and a MongoDB (Mongoose) API endpoint for contact submissions.

### Quick start

1) Install deps
```bash
npm install
```

2) Set environment
```
cp .env.example .env.local
# fill MONGODB_URI
```

2.5) Add front-page photo
- Place your photo at `public/profile.jpg`.
- The home page displays this portrait prominently.

3) Run dev server
```bash
npm run dev
# open http://localhost:3000
```

#### Dev server tips
- If you see a lock error, remove the Next.js dev cache and restart:
	```powershell
	Remove-Item -Recurse -Force .next\dev
	npm run dev
	```
- If port 3000 is busy, Next.js will auto-fallback to another port (e.g. 3001). The terminal will show the actual URL.

### Contact API
- Endpoint: POST /api/contact
- Body: `{ "name": string, "email": string, "message": string }`
- Validation: zod; persists to MongoDB via Mongoose.

### Contact Links (UI)
- Phone: +251 961 613 758 (tap-to-call enabled)
- Email: yoftaheyoseph5@gmail.com (mailto link)
- X/Twitter: https://x.com/YosephYoft34823

### Scripts
- `npm run dev` — start dev server
- `npm run lint` — run ESLint
- `npm run build` — production build
- `npm run start` — start production server

### Navigation
- Header with links to Home, Projects, Experience, Contact.
- Dedicated pages at `/projects`, `/experience`, `/contact`.
- Contact form component reused on Home and Contact pages.
 - Footer includes phone, email, and X/Twitter link on every page.

### Tech
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 styles
- MongoDB + Mongoose
- Zod for validation

### Structure (front vs back)
- Front: [src/app/layout.tsx](src/app/layout.tsx), [src/app/page.tsx](src/app/page.tsx), [src/app/globals.css](src/app/globals.css), [src/app/contact/page.tsx](src/app/contact/page.tsx), [src/app/experience/page.tsx](src/app/experience/page.tsx), [src/app/projects/page.tsx](src/app/projects/page.tsx), [src/components/ContactForm.tsx](src/components/ContactForm.tsx), [src/components/ContactInfo.tsx](src/components/ContactInfo.tsx), [src/components/Footer.tsx](src/components/Footer.tsx), [src/components/Header.tsx](src/components/Header.tsx), [src/data/experience.ts](src/data/experience.ts), [src/data/projects.ts](src/data/projects.ts), [public](public)
- Back: [src/app/api/contact/route.ts](src/app/api/contact/route.ts), [src/app/api/experience/route.ts](src/app/api/experience/route.ts), [src/app/api/projects/route.ts](src/app/api/projects/route.ts), [src/lib/cors.ts](src/lib/cors.ts), [src/lib/mongodb.ts](src/lib/mongodb.ts), [src/models/message.ts](src/models/message.ts)

### Notes
- Set `MONGODB_URI` before using the contact form.
- Update site metadata in `src/app/layout.tsx` if you deploy under a real domain.
- Replace `public/profile.jpg` with your own portrait.

### Deploy to Vercel
- Push repo to GitHub.
- In Vercel, import the repo and select the default Next.js settings (build command `npm run build`, output `.next`).
- Add environment variable `MONGODB_URI` (same value as `.env.local`) via Settings → Environment Variables or `vercel env add MONGODB_URI`.
- Deploy; preview builds run per-branch and production on main.
- If the contact API needs CORS tweaks, adjust `src/lib/cors.ts` accordingly.

### CI
- GitHub Actions runs lint and build on push/PR to main; see [.github/workflows/ci.yml](.github/workflows/ci.yml).
