import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Rotator Cuff Repair | Dr. Jacob Kirsch",
  description: "Comprehensive information about arthroscopic rotator cuff repair surgery, including the procedure, recovery timeline, and what to expect.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "procedure", title: "The Surgical Procedure" },
  { id: "recovery", title: "Recovery Timeline" },
  { id: "expectations", title: "What to Expect" },
];

export default function RotatorCuffRepairPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Rotator Cuff Repair</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section id="overview" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Rotator cuff repair is an arthroscopic (minimally invasive) procedure to reattach torn rotator cuff tendons back to the bone. The surgery is performed through small 1 cm incisions using specialized instruments and a camera. This approach allows for precise repair while minimizing tissue damage and promoting faster recovery.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Dr. Kirsch utilizes the latest surgical techniques, including the use of high-strength suture anchors and biological augmentation patches when appropriate, to optimize healing and patient outcomes. The procedure addresses not only the rotator cuff tear but also any concomitant injuries such as labral tears, biceps tears, or bone spurs.
          </p>
            </section>

            <Separator className="my-8" />

            <section id="procedure" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">The Surgical Procedure</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Rotator cuff surgery is performed under general anesthesia in addition to a nerve block for pain management. The procedure typically takes 1-2 hours depending on the extent of your rotator cuff damage.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Surgical Technique</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Small 1 cm incisions are used to introduce specialized instruments into the shoulder. Suture anchors are placed in the bone first, allowing Dr. Kirsch to take high-strength sutures and tie the rotator cuff tendon back down to the bone from where it tore off.
              </p>
              <p className="text-sm text-muted-foreground">
                Dr. Kirsch often uses special techniques including augmenting the rotator cuff repair with biological patches in the shoulder to help increase the likelihood of getting the rotator cuff to heal, thus optimizing patient outcomes.
              </p>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Additional Procedures</h3>
              <p className="text-sm text-muted-foreground">
                Often, patients will have concomitant injuries in the shoulder such as labral tears, biceps tears, or bone spurs, all of which can be addressed at the same time without any additional incisions around the shoulder.
              </p>
            </div>
          </div>
            </section>

            <Separator className="my-8" />

            <section id="recovery" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Recovery Timeline</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Recovery from rotator cuff surgery is a slow and gradual process. Following surgery, you will be in a sling to help protect the rotator cuff repair.
          </p>

          <div className="grid gap-4">
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Early Recovery (Weeks 1-6)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  The main goals are to protect the repair and control pain. The rotator cuff is only 20% healed at 6 weeks, so protection is critical.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• Sling use for protection</li>
                  <li>• Pain management with multimodal approach</li>
                  <li>• Ice therapy (20 min on/off for 48-72 hours)</li>
                  <li>• Elbow/wrist motion allowed; no shoulder motion</li>
                  <li>• Physical therapy typically starts at 4-6 weeks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Intermediate Recovery (Weeks 6-12)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Focus on improving range of motion through passive motion exercises (the operative shoulder is not doing work on its own). Your physical therapist will instruct you on safe exercises to perform at home.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Late Recovery (3-6 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Progressive strengthening begins as the rotator cuff continues to heal. Most patients experience significant improvement in pain and function during this phase.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Full Recovery (6-12 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Return to full activity and sports. Most rotator cuff repairs achieve full maturation and healing by one year after surgery.
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
              <h3 className="font-semibold mb-2">Pain Management</h3>
              <p className="text-sm text-muted-foreground">
                We utilize a multimodal approach including nerve blocks, oral medications, and ice therapy to minimize postoperative pain and narcotic use. Most patients find their pain very manageable with this comprehensive approach.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Vitamin D Supplementation</h3>
              <p className="text-sm text-muted-foreground">
                There is increasing evidence that Vitamin D plays an important role in tendon-to-bone healing. Starting at least 2 weeks before surgery, take 2,000 IU of Vitamin D3 daily and continue until 3 months after surgery.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Sleeping</h3>
              <p className="text-sm text-muted-foreground">
                Sleeping can be challenging after surgery. It may take up to 3 months for sleep patterns to normalize. Sleeping in an inclined position (recliner or wedge pillows) is often more comfortable.
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
              <CardTitle className="text-lg">Rotator Cuff Tears</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn more about rotator cuff tears, their causes, symptoms, and when surgery is recommended.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-conditions/rotator-cuff-tear">Rotator Cuff Tears</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Preparing for Surgery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Important information about medications, home preparation, diet, and what to bring to surgery.
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
                Detailed guidelines for sling use, pain management, wound care, and activity restrictions after surgery.
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
                Understanding the phases of recovery and the importance of physical therapy in achieving optimal outcomes.
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
            <h3 className="text-2xl font-semibold">Questions About Rotator Cuff Repair?</h3>
            <p className="text-muted-foreground">
              Schedule a consultation with Dr. Kirsch to discuss whether this procedure is right for you
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />
      </div>
    </div>
  );
}
