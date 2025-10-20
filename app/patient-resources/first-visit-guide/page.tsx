import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "First Visit Guide | Dr. Jacob Kirsch",
  description: "What to expect during your first visit with Dr. Kirsch and how to prepare for your consultation.",
};

export default function FirstVisitGuidePage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">First Visit Guide</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
        <p className="leading-relaxed text-lg">
          We want your first visit to be informative and comfortable. This guide will help you prepare for your consultation with Dr. Kirsch and understand what to expect.
        </p>
      </div>

      <section className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Before Your Visit</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">What to Bring:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Photo ID and insurance card</li>
                <li>Completed patient forms (if provided in advance)</li>
                <li>List of current medications and dosages</li>
                <li>Any previous imaging (X-rays, MRI, CT scans) on disc or through your patient portal</li>
                <li>Relevant medical records from other providers</li>
                <li>List of questions or concerns you want to discuss</li>
              </ul>
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
  );
}
