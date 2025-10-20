import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage = "/hero-bg.jpg"
}: HeroProps) {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-center overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700">
      {/* Background Image - TODO: Add actual background image */}
      <div
        className="absolute inset-0 bg-black/40"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container px-4 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-gray-200">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Button asChild size="lg" variant="secondary">
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        )}
      </div>
    </section>
  );
}
