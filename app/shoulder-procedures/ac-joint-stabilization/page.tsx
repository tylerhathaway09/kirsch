import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { TableOfContents } from "@/components/layout/TableOfContents";

export const metadata = {
  title: "AC Joint Stabilization | Dr. Jacob Kirsch",
  description: "Information about AC joint stabilization surgery for high-grade AC joint separations that fail conservative treatment or cause persistent symptoms.",
};
const sections = [
  { id: "overview", title: "Overview" },
  { id: "indications", title: "When Is Surgery Needed?" },
  { id: "procedure", title: "The Surgical Procedure" },
  { id: "recovery", title: "Recovery Timeline" },
  { id: "expectations", title: "What to Expect" },
];


export default function ACJointStabilizationPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
      <h1 className="text-4xl font-bold mb-8">AC Joint Stabilization</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section id="overview" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            AC joint stabilization is a surgical procedure to repair damaged ligaments of the acromioclavicular (AC) joint, which connects the acromion (part of the shoulder blade) to the clavicle (collarbone). The procedure uses ligament reconstruction with graft and heavy suture to restore stability to the AC joint.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            While the vast majority of AC joint injuries can be managed non-operatively, surgery may be necessary for high-grade separations that fail conservative treatment or cause persistent symptoms affecting quality of life and function.
          </p>
        </section>

        <Separator className="my-8" />

        <section id="indications" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">When Is Surgery Needed?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            AC joint stabilization may be recommended for:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• High-grade AC joint separations (Type IV, V, VI) that have failed conservative treatment</li>
            <li>• Persistent pain and functional limitations after adequate trial of non-operative care</li>
            <li>• Significant cosmetic deformity that is bothersome to the patient</li>
            <li>• Overhead athletes or laborers with high functional demands</li>
            <li>• Chronic AC joint instability affecting daily activities or sports performance</li>
          </ul>

          <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="font-semibold mb-2">Evidence-Based Approach</h3>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Important:</strong> Studies in active military cadets have demonstrated that 70% of them with high-grade AC joint injuries can resume active military duty without surgery.
            </p>
            <p className="text-sm text-muted-foreground">
              Furthermore, studies have demonstrated that there is no difference in the acute or delayed management of these injuries, so most patients should have a trial of non-operative treatment initially. Surgery is reserved for those who do not improve with conservative care.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        <section id="procedure" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">The Surgical Procedure</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            AC joint stabilization reconstructs the damaged ligaments to restore normal joint alignment and stability.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Surgical Technique</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The procedure involves several key steps:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Incision over the AC joint</li>
                <li>• Removal of any damaged tissue or scar tissue</li>
                <li>• Preparation of the clavicle and acromion for graft placement</li>
                <li>• Placement of graft material to reconstruct the damaged ligaments</li>
                <li>• Heavy suture augmentation to provide additional stability</li>
                <li>• Fixation techniques to hold the reconstruction in place while it heals</li>
                <li>• Reduction of the AC joint to restore normal alignment</li>
              </ul>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Graft Options</h3>
              <p className="text-sm text-muted-foreground">
                Several graft options are available, including allograft (cadaver tissue) or autograft (patient&apos;s own tissue). Dr. Kirsch will discuss the best option for your specific situation. Modern techniques also incorporate high-strength suture tape systems that provide excellent stability while allowing biological healing.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section id="recovery" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">Recovery Timeline</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Recovery from AC joint stabilization requires careful protection of the reconstruction while gradually restoring motion and strength.
          </p>

          <div className="grid gap-4">
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Early Recovery (Weeks 1-6)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Protection of the AC joint reconstruction is critical.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• Arm in sling for protection (typically 4-6 weeks)</li>
                  <li>• Can move hand, wrist, and elbow immediately</li>
                  <li>• No lifting or pulling with the operative arm</li>
                  <li>• Avoid cross-body movements that stress the AC joint</li>
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
                  Gradually begin range of motion exercises. Physical therapy focuses on restoring shoulder mobility while protecting the AC joint reconstruction. Avoid overhead activities and heavy lifting during this phase.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Late Recovery (3-6 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Progressive strengthening begins around 12 weeks. Gradual return to overhead activities and sports. Most patients experience significant improvement in pain and stability during this phase. By 4-5 months, most can return to non-contact activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Full Recovery (6-9 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Return to full activities including contact sports typically occurs around 6-9 months. Most patients achieve excellent stability and can return to their desired activity level. The reconstruction continues to mature and strengthen over the first year.
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
              <h3 className="font-semibold mb-2">Pain Relief</h3>
              <p className="text-sm text-muted-foreground">
                Most patients experience significant pain relief after AC joint stabilization, particularly with overhead activities and cross-body movements that previously caused discomfort.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Stability and Appearance</h3>
              <p className="text-sm text-muted-foreground">
                The procedure restores stability to the AC joint and improves the cosmetic appearance by reducing the prominent bump at the top of the shoulder. Most patients are very satisfied with both the functional and cosmetic outcomes.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Return to Activities</h3>
              <p className="text-sm text-muted-foreground">
                Athletes can typically return to their sport within 6-9 months. The procedure has shown excellent outcomes for overhead athletes and laborers, allowing most to return to their previous level of activity with improved comfort and function.
              </p>
            </div>
          </div>
        </section>
      </div>
      </div>

      <Separator className="my-12" />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Related Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">AC Joint Injury</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn more about AC joint injuries, including evidence that 70% improve without surgery.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-conditions/ac-joint-injury">AC Joint Injury</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Preparing for Surgery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Important information about medications, home preparation, and what to bring to surgery.
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
                Understanding the phases of recovery and the importance of protecting the AC joint reconstruction.
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
        <h3 className="text-2xl font-semibold">Questions About AC Joint Stabilization?</h3>
        <p className="text-muted-foreground">
          Schedule a consultation with Dr. Kirsch to discuss whether this procedure is right for you
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
          </div>

        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />
      </div>
    </div>
  );
}
