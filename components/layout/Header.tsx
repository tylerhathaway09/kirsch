"use client";

import Link from "next/link";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [patientResourcesOpen, setPatientResourcesOpen] = useState(false);
  const [shoulderConditionsOpen, setShoulderConditionsOpen] = useState(false);
  const [shoulderProceduresOpen, setShoulderProceduresOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Jacob Kirsch, MD
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {/* About Dropdown */}
          <DropdownMenu open={aboutOpen} onOpenChange={setAboutOpen}>
            <DropdownMenuTrigger
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
            >
              About <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[300px]"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <DropdownMenuItem asChild>
                <Link href="/about/dr-jacob-kirsch" className="cursor-pointer">
                  Dr. Jacob Kirsch
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about/patient-care-philosophy" className="cursor-pointer">
                  Patient Care Philosophy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about/team" className="cursor-pointer">
                  Team
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about/new-england-baptist-hospital" className="cursor-pointer">
                  New England Baptist Hospital
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about/patient-testimonials" className="cursor-pointer">
                  Patient Testimonials
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about/research-and-education" className="cursor-pointer">
                  Research and Education
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Patient Resources Dropdown */}
          <DropdownMenu open={patientResourcesOpen} onOpenChange={setPatientResourcesOpen}>
            <DropdownMenuTrigger
              onMouseEnter={() => setPatientResourcesOpen(true)}
              onMouseLeave={() => setPatientResourcesOpen(false)}
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
            >
              Patient Resources <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[280px]"
              onMouseEnter={() => setPatientResourcesOpen(true)}
              onMouseLeave={() => setPatientResourcesOpen(false)}
            >
              <DropdownMenuItem asChild>
                <Link href="/patient-resources/patient-experience" className="cursor-pointer">
                  Patient Experience
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/patient-resources/first-visit-guide" className="cursor-pointer">
                  First Visit Guide
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/patient-resources/patient-education-videos" className="cursor-pointer">
                  Patient Education Videos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/patient-resources/preparing-for-surgery" className="cursor-pointer">
                  Preparing for Surgery
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/patient-resources/what-to-expect-after-surgery" className="cursor-pointer">
                  What To Expect After Surgery
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/patient-resources/post-operative-instructions" className="cursor-pointer">
                  Post-Operative Instructions
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/patient-resources/physical-therapy-protocols" className="cursor-pointer">
                  Physical Therapy Protocols
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/patient-resources/faq" className="cursor-pointer">
                  FAQ
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Shoulder Conditions Dropdown */}
          <DropdownMenu open={shoulderConditionsOpen} onOpenChange={setShoulderConditionsOpen}>
            <DropdownMenuTrigger
              onMouseEnter={() => setShoulderConditionsOpen(true)}
              onMouseLeave={() => setShoulderConditionsOpen(false)}
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
            >
              Shoulder Conditions <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[280px]"
              onMouseEnter={() => setShoulderConditionsOpen(true)}
              onMouseLeave={() => setShoulderConditionsOpen(false)}
            >
              <DropdownMenuItem asChild>
                <Link href="/shoulder-conditions/overview" className="cursor-pointer">
                  Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-conditions/rotator-cuff-tear" className="cursor-pointer">
                  Rotator Cuff Tear
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-conditions/shoulder-arthritis" className="cursor-pointer">
                  Shoulder Arthritis
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-conditions/cuff-tear-arthropathy" className="cursor-pointer">
                  Cuff Tear Arthropathy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-conditions/shoulder-instability" className="cursor-pointer">
                  Shoulder Instability
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-conditions/biceps-tendonitis" className="cursor-pointer">
                  Biceps Tendonitis/Superior Labral Injury
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-conditions/shoulder-fractures" className="cursor-pointer">
                  Shoulder Fractures
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-conditions/ac-joint-injury" className="cursor-pointer">
                  AC Joint Injury
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-conditions/shoulder-bursitis-impingement" className="cursor-pointer">
                  Shoulder Bursitis/Impingement
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-conditions/frozen-shoulder" className="cursor-pointer">
                  Frozen Shoulder
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Shoulder Procedures Dropdown */}
          <DropdownMenu open={shoulderProceduresOpen} onOpenChange={setShoulderProceduresOpen}>
            <DropdownMenuTrigger
              onMouseEnter={() => setShoulderProceduresOpen(true)}
              onMouseLeave={() => setShoulderProceduresOpen(false)}
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
            >
              Shoulder Procedures <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-[300px]"
              onMouseEnter={() => setShoulderProceduresOpen(true)}
              onMouseLeave={() => setShoulderProceduresOpen(false)}
            >
              <DropdownMenuItem asChild>
                <Link href="/shoulder-procedures/overview" className="cursor-pointer">
                  Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-procedures/rotator-cuff-repair" className="cursor-pointer">
                  Rotator Cuff Repair
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-procedures/anatomic-total-shoulder-replacement" className="cursor-pointer">
                  Anatomic Total Shoulder Replacement
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-procedures/reverse-shoulder-replacement" className="cursor-pointer">
                  Reverse Shoulder Replacement
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-procedures/revision-shoulder-replacement" className="cursor-pointer">
                  Revision Shoulder Replacement
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-procedures/tendon-transfer" className="cursor-pointer">
                  Tendon Transfer
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-procedures/shoulder-stabilization" className="cursor-pointer">
                  Shoulder Stabilization
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-procedures/biceps-tenodesis" className="cursor-pointer">
                  Biceps Tenodesis
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-procedures/fracture-treatment" className="cursor-pointer">
                  Fracture Treatment
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-procedures/ac-joint-stabilization" className="cursor-pointer">
                  AC Joint Stabilization
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/shoulder-procedures/subacromial-decompression" className="cursor-pointer">
                  Subacromial Decompression
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Research */}
          <Link
            href="/research/research-philosophy"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
          >
            Research
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <Link
              href="/about/dr-jacob-kirsch"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/patient-resources/patient-experience"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Patient Resources
            </Link>
            <Link
              href="/shoulder-conditions/overview"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shoulder Conditions
            </Link>
            <Link
              href="/shoulder-procedures/overview"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shoulder Procedures
            </Link>
            <Link
              href="/research/research-philosophy"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Research
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
