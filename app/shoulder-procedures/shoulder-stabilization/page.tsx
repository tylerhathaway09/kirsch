import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { TableOfContents } from "@/components/layout/TableOfContents";

export const metadata = {
  title: "Shoulder Stabilization Surgery | Dr. Jacob Kirsch",
  description: "Information about shoulder stabilization procedures including arthroscopic Bankart repair and open Latarjet surgery for recurrent shoulder dislocations.",
};
const sections = [
  { id: "overview", title: "Overview" },
  { id: "options", title: "Surgical Options" },
  { id: "recovery", title: "Recovery Timeline" },
  { id: "expectations", title: "What to Expect" },
];


export default function ShoulderStabilizationPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />



        {/* Main Content */}
        <div>
      <h1 className="text-4xl font-bold mb-8">Shoulder Stabilization</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section id="overview" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Shoulder stabilization surgery is performed to restore stability to shoulders that have experienced recurrent dislocations or subluxations. The procedure repairs damaged structures—typically the labrum and joint capsule—that normally keep the shoulder stable, preventing the humeral head from slipping out of the socket.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The surgical approach depends on several factors including the extent of damage, presence of bone loss, patient activity level, and risk of recurrence. Dr. Kirsch is highly experienced in both arthroscopic and open stabilization procedures, including complex cases with bone loss.
          </p>
        </section>

        <Separator className="my-8" />

        <section id="options" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">Surgical Options</h2>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Arthroscopic Bankart Repair</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Commonly performed for anterior instability caused by a torn labrum and capsular laxity, particularly in patients without significant bone loss. This minimally invasive approach allows for:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Small incisions (poke-hole size)</li>
                <li>• Reattachment of the torn labrum using suture anchors</li>
                <li>• Tightening of the joint capsule</li>
                <li>• Addressing any concomitant injuries</li>
                <li>• Faster recovery compared to open procedures</li>
              </ul>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Open Latarjet Surgery</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Preferred in cases with substantial glenoid bone loss, engaging Hill-Sachs lesions, or failed previous repairs. This procedure involves:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Transferring the coracoid process to the anterior glenoid</li>
                <li>• Restoring stability through bony augmentation</li>
                <li>• Creating a dynamic sling effect from the conjoined tendon</li>
                <li>• Addressing significant bone deficiency</li>
                <li>• Lower recurrence rates in high-risk patients</li>
              </ul>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Choosing the Right Procedure</h3>
              <p className="text-sm text-muted-foreground">
                The choice between arthroscopic Bankart repair and open Latarjet surgery depends on the extent of damage, patient activity level, amount of bone loss, and risk of recurrence. Dr. Kirsch will thoroughly evaluate your condition using physical examination and advanced imaging (CT scan) to determine which approach offers you the best outcome.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section id="recovery" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">Recovery Timeline</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Recovery from shoulder stabilization surgery requires careful protection of the repair while gradually restoring motion and strength.
          </p>

          <div className="grid gap-4">
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Early Recovery (Weeks 1-6)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Protection of the repair is critical during this phase.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• Arm in sling for protection</li>
                  <li>• Can move hand, wrist, and elbow immediately</li>
                  <li>• No shoulder motion initially</li>
                  <li>• Pain management with multimodal approach</li>
                  <li>• Ice therapy to reduce swelling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Intermediate Recovery (Weeks 6-12)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Gradually begin range of motion exercises under the guidance of your physical therapist. Motion is progressed carefully to protect the repair while preventing stiffness. All exercises should be pain-free.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Late Recovery (3-6 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Strengthening begins and progressively increases. By 4-5 months, most patients can return to non-contact activities. Sport-specific training begins during this phase for athletes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Full Recovery (6-12 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Return to full contact sports and activities typically occurs around 6 months for arthroscopic procedures and 6-9 months for open Latarjet procedures. Most patients achieve excellent stability and can return to their desired activity level.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-8" />

        <section id="expectations" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">What to Expect</h2>

          <div className="space-y-4">
            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Pre-Surgery Preparation</h3>
              <p className="text-sm text-muted-foreground">
                Apply Hibiclens in the shower for 3 days before surgery to decrease infection risk. Stop NSAIDs and certain medications one week prior to surgery as directed. Arrange for someone to drive you home and assist you for the first few days.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Pain Management</h3>
              <p className="text-sm text-muted-foreground">
                We utilize a multimodal approach including nerve blocks (18-20 hours of relief), oral medications, and ice therapy to minimize postoperative pain and narcotic use.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Success Rates</h3>
              <p className="text-sm text-muted-foreground">
                Shoulder stabilization surgery has excellent success rates when performed by an experienced surgeon. Most patients achieve stable shoulders and return to their desired activity levels, including contact sports. Recurrence rates are low, especially with the Latarjet procedure in high-risk patients.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Separator className="my-12" />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Related Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Shoulder Instability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn more about shoulder instability, dislocations, and when surgery is recommended.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-conditions/shoulder-instability">Shoulder Instability</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Preparing for Surgery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Important information about medications, Hibiclens prep, and home preparation.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/patient-resources/preparing-for-surgery">Pre-Surgery Guide</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Post-Operative Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Detailed guidelines for sling use, pain management, wound care, and activity restrictions.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/patient-resources/post-operative-instructions">Post-Op Instructions</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Physical Therapy Protocols</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Understanding the phases of recovery and importance of following the stabilization protocol.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/patient-resources/physical-therapy-protocols">PT Protocols</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Questions About Shoulder Stabilization?</h3>
        <p className="text-muted-foreground">
          Schedule a consultation with Dr. Kirsch to discuss whether this procedure is right for you
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
        </div>
      </div>
    </div>
  );
}
