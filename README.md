# Dr. Jacob Kirsch - Shoulder Specialist Website

A professional medical website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Project Overview

This is a complete rebuild of Dr. Kirsch's shoulder specialist practice website, featuring:

- Clean, professional design inspired by michaelfumd.com
- Full navigation structure with dropdown menus
- Responsive mobile-first design
- Contact form with email integration (ready for backend setup)
- SEO-optimized pages
- Accessible UI components from shadcn/ui

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Fonts**: Geist Sans & Geist Mono

## 🏁 Getting Started

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Site Structure

### ✅ Completed Pages

#### Home Page (`/`)
- Hero section with Dr. Kirsch's introduction
- About preview
- Quick links cards (About, Patient Resources, Education)
- Focused Care section
- Featured research preview
- Call-to-action buttons

#### About Section (`/about/*`)
1. **Dr. Jacob Kirsch** - Complete bio with actual content ✅
2. **Patient Care Philosophy** - Complete with actual content ✅
3. **Team** - Lorem ipsum template ✅
4. **New England Baptist Hospital** - Lorem ipsum template ✅
5. **Patient Testimonials** - Lorem ipsum with testimonial cards ✅
6. **Research and Education** - Lorem ipsum template ✅

#### Contact Page (`/contact`) ✅
- Fully functional contact form
- Contact information display
- Office & surgery locations
- Ready for backend email integration

### 📝 Pages Needing Completion

The folder structure and routing is set up. Create page.tsx files for:

#### Patient Resources (`/app/patient-resources/*/page.tsx`)
- patient-experience
- first-visit-guide
- patient-education-videos
- preparing-for-surgery
- what-to-expect-after-surgery
- post-operative-instructions
- physical-therapy-protocols
- faq

#### Shoulder Conditions (`/app/shoulder-conditions/*/page.tsx`)
- overview
- rotator-cuff-tear
- shoulder-arthritis
- cuff-tear-arthropathy
- shoulder-instability
- biceps-tendonitis
- shoulder-fractures
- ac-joint-injury
- shoulder-bursitis-impingement
- frozen-shoulder

#### Shoulder Procedures (`/app/shoulder-procedures/*/page.tsx`)
- overview
- rotator-cuff-repair
- anatomic-total-shoulder-replacement
- reverse-shoulder-replacement
- revision-shoulder-replacement
- tendon-transfer
- shoulder-stabilization
- biceps-tenodesis
- fracture-treatment
- ac-joint-stabilization
- shoulder-bursitis-impingement

#### Research (`/app/research/*/page.tsx`)
- research-philosophy
- dr-kirsch-research

## 📄 Page Template

Use this template for creating the remaining pages:

```typescript
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
  title: "Page Title | Dr. Jacob Kirsch",
  description: "Page description for SEO",
};

export default function PageName() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Page Title</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        <p className="leading-relaxed text-lg">
          Main content here...
        </p>

        <p className="leading-relaxed">
          Additional paragraphs...
        </p>
      </div>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Ready to get started?</h3>
        <p className="text-muted-foreground">
          Schedule a consultation today
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
```

## 🎨 Customization

### Custom Brand Colors

The site uses default colors. To apply your brand colors:

1. Open `app/globals.css`
2. Find the "CUSTOM BRAND COLORS" comment
3. Update CSS variables in `:root`:

```css
:root {
  --primary: /* Your color in oklch format */;
  --secondary: /* Your secondary color */;
}
```

### Adding Images

1. Place images in `public/` folder
2. Update Hero component backgrounds
3. Replace placeholder sections marked with `{/* TODO */}`
4. Use Next.js Image component:

```typescript
import Image from "next/image";

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### Email Integration

The contact form is ready for backend integration with Resend:

1. Install: `npm install resend`
2. Create `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['your-email@example.com'],
      subject: `Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
```

3. Uncomment the fetch call in `app/contact/page.tsx`
4. Add `RESEND_API_KEY` to `.env.local`

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Auto-deploys on push
4. Add environment variables

### Registered Domains

- jacobkirschmd.com
- jacobkirsch.com
- bostonshoulderdoc.com
- bostonshouldercenter.com

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Tailwind CSS Docs](https://tailwindcss.com)

## 📄 License

© 2025 Dr. Jacob Kirsch. All rights reserved.
