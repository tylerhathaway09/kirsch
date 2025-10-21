import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "First Visit Guide | Dr. Jacob Kirsch",
  description: "What to expect during your first visit with Dr. Kirsch and how to prepare for your consultation.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "before-visit", title: "Before Your Visit" },
  { id: "during-visit", title: "During Your Visit" },
  { id: "after-visit", title: "After Your Visit" },
];

export default function FirstVisitGuidePage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">First Visit Guide</h1>

          <section id="overview" className="scroll-mt-24">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
              <p className="leading-relaxed text-lg">
                We want your first visit to be informative and comfortable. This guide will help you prepare for your consultation with Dr. Kirsch and understand what to expect.
              </p>
            </div>
          </section>

          <section id="before-visit" className="scroll-mt-24 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Before Your Visit</CardTitle>
              </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">What to Bring:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Driver&apos;s License</li>
                <li>Insurance information</li>
                <li>Injection history (dates of injections are important!)</li>
                <li>Records from non-operative care</li>
                <li>Records from prior surgical treatment on shoulder (imaging results, operative reports, etc.)</li>
                <li>List of current medications and dosages</li>
                <li>List of questions or concerns you want to discuss</li>
              </ul>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-2">Previous Imaging:</h3>
              <p className="text-muted-foreground mb-2">
                It is extremely important to bring any prior imaging that you have had done on your shoulder. The imaging report, while helpful, is not necessary. However, the actual images are essential!
              </p>
              <p className="text-muted-foreground">
                Please ensure that if you have had a prior MRI or CT to bring the actual images on a CD. If you have had prior X-rays, you may be asked to get new ones at your visit.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-2">Arrival Time:</h3>
              <p className="text-muted-foreground">
                Please arrive 15 minutes early to complete any remaining paperwork and check-in procedures.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="during-visit" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>During Your Visit</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Medical History Review:</h3>
              <p className="text-muted-foreground">
                Dr. Kirsch will review your medical history, current symptoms, and how your shoulder problem affects your daily life and activities.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-2">Physical Examination:</h3>
              <p className="text-muted-foreground">
                A comprehensive shoulder examination will be performed to assess range of motion, strength, stability, and identify specific areas of concern.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-2">Imaging Review:</h3>
              <p className="text-muted-foreground">
                If you have previous imaging studies, Dr. Kirsch will review them with you. Additional imaging may be ordered if needed.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-2">Diagnosis and Treatment Plan:</h3>
              <p className="text-muted-foreground">
                Dr. Kirsch will explain his findings, discuss your diagnosis, and review all available treatment options with you, including both non-surgical and surgical approaches.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="after-visit" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>After Your Visit</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              You will receive a summary of your visit, treatment plan, and any necessary prescriptions or referrals. Our staff will help schedule any follow-up appointments, imaging studies, or procedures as needed.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Ready to Schedule Your Visit?</h3>
        <p className="text-muted-foreground">
          Contact our office to book your consultation with Dr. Kirsch
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Schedule Appointment</Link>
        </Button>
      </div>
    </div>

    {/* Table of Contents Sidebar */}
    <TableOfContents sections={sections} />
    </div>
    </div>
  );
}
