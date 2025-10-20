import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/dr-jacob-kirsch" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Dr. Jacob Kirsch
                </Link>
              </li>
              <li>
                <Link href="/about/patient-care-philosophy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Patient Care Philosophy
                </Link>
              </li>
              <li>
                <Link href="/about/new-england-baptist-hospital" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  New England Baptist Hospital
                </Link>
              </li>
            </ul>
          </div>

          {/* Patients Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Patients</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/patient-resources/patient-experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Patient Resources
                </Link>
              </li>
              <li>
                <Link href="/patient-resources/patient-education-videos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Patient Education
                </Link>
              </li>
              <li>
                <Link href="/patient-resources/physical-therapy-protocols" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Physical Therapy Protocols
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/research/research-philosophy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/shoulder-conditions/overview" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shoulder Conditions
                </Link>
              </li>
              <li>
                <Link href="/shoulder-procedures/overview" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shoulder Procedures
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            Copyright © {new Date().getFullYear()} - Jacob Kirsch, MD | All Rights Reserved
          </p>
          <p className="mt-2 text-xs">
            Domains: jacobkirschmd.com | jacobkirsch.com | bostonshoulderdoc.com | bostonshouldercenter.com
          </p>
        </div>
      </div>
    </footer>
  );
}
