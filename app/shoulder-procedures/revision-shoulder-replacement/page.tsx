import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Revision Shoulder Replacement | Dr. Jacob Kirsch",
  description: "Information about revision shoulder replacement for failed previous shoulder arthroplasty due to loosening, infection, instability, or other complications.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "indications", title: "When Is Revision Surgery Needed?" },
  { id: "procedure", title: "The Surgical Procedure" },
  { id: "recovery", title: "Recovery Timeline" },
  { id: "outcomes", title: "Expected Outcomes" },
];

export default function RevisionShoulderReplacementPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Revision Shoulder Replacement</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section id="overview" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Revision shoulder replacement is performed when a previous shoulder arthroplasty (either anatomic or reverse) fails due to complications such as implant loosening, infection, instability, periprosthetic fracture, or progressive rotator cuff dysfunction. This is one of the most complex procedures in shoulder surgery, requiring specialized expertise and careful planning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Kirsch is one of only a few surgeons in the Boston and Greater New England region who regularly performs complex revision shoulder surgery. His extensive experience with these challenging cases allows him to achieve the best possible outcomes for patients with failed previous shoulder replacements.
              </p>
            </section>

            <Separator className="my-8" />

            <section id="indications" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">When Is Revision Surgery Needed?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Revision surgery may be necessary for:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Implant loosening (wear of the plastic component or bone around the implant)</li>
                <li>• Infection of the shoulder replacement</li>
                <li>• Instability (shoulder dislocation or subluxation)</li>
                <li>• Periprosthetic fracture (bone fracture around the implant)</li>
                <li>• Progressive rotator cuff dysfunction</li>
                <li>• Persistent pain despite appropriate healing</li>
              </ul>
            </section>

            <Separator className="my-8" />

            <section id="procedure" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">The Surgical Procedure</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Revision shoulder replacement is significantly more complex than primary shoulder replacement. The procedure requires careful removal of the old components and meticulous preparation for the new implants.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Surgical Approach</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    The approach may involve:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• <strong>Single-stage procedure:</strong> Old components removed and replaced in one operation (most common)</li>
                    <li>• <strong>Two-stage procedure:</strong> Used in cases of infection, involving removal of the implant, placement of a temporary spacer, and reimplantation at a later date</li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Complex Reconstruction</h3>
                  <p className="text-sm text-muted-foreground">
                    Sometimes, this complex procedure involves replacing missing areas of bone with bone from a cadaver (allograft) or doing tendon transfers to stabilize the shoulder and optimize function. Each revision is highly individualized based on the specific reason for failure and the condition of the remaining bone and soft tissues.
                  </p>
                </div>

                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <h3 className="font-semibold mb-2">Important Considerations</h3>
                  <p className="text-sm text-muted-foreground">
                    In general, revision shoulder replacements are more complex and have higher risks of complications compared to primary procedures. However, when well-planned and performed by an experienced surgeon, many patients still experience meaningful pain relief and functional improvement.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="recovery" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Recovery Timeline</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Recovery from revision shoulder replacement is typically longer than primary replacement. Patients may take a full year or more to reach their full potential.
              </p>

              <div className="grid gap-4">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Early Recovery (Weeks 1-6)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Immobilization is very important after a revision procedure to help protect the shoulder and the reconstruction.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                      <li>• Patients are in a sling for 6 weeks (longer than primary replacement)</li>
                      <li>• Can move hand, wrist, and elbow immediately</li>
                      <li>• Must stay &quot;in the box&quot; (no rotation, reaching behind back, or pushing up)</li>
                      <li>• Physician-directed exercises begin at 6 weeks</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Intermediate Recovery (Weeks 6-12)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Focus on improving range of motion through physician-directed, patient-led exercises. You don&apos;t ever have to do formal physical therapy! Progress is gradual - it&apos;s important not to go too fast too soon.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Late Recovery (3-6 Months)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      After a revision shoulder replacement, patients often take longer to improve their function compared to a primary procedure. Continue to work on stretching exercises. Be patient with your progress.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Full Recovery (6 Months - 1 Year+)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Patients may start resuming more normal activities if they are able at this point. Following revision shoulder replacement, patients may be more limited with their motion or strength compared to a primary procedure. However, in most instances by this point patients have significantly improved pain compared to before surgery.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="outcomes" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Expected Outcomes</h2>

              <div className="space-y-4">
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <h3 className="font-semibold mb-2">Realistic Expectations</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Outcomes of revision shoulder replacement are generally less favorable than primary procedures, with:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• Reduced range of motion compared to primary replacement</li>
                    <li>• Higher complication rates</li>
                    <li>• Longer recovery time</li>
                    <li>• Greater chance of needing additional surgery</li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Positive Outcomes</h3>
                  <p className="text-sm text-muted-foreground">
                    Despite the challenges, many patients still experience meaningful pain relief and functional improvement, particularly when the revision is well-planned and tailored to the specific cause of failure. Dr. Kirsch will have a very individualized discussion with you regarding your specific risk factors and what can be done to optimize the chances of having the most successful outcome possible.
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
                  <CardTitle className="text-lg">Anatomic Shoulder Replacement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about primary anatomic total shoulder replacement for patients with arthritis.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/shoulder-procedures/anatomic-total-shoulder-replacement">Anatomic Replacement</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Reverse Shoulder Replacement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about primary reverse shoulder replacement for rotator cuff tear arthropathy.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/shoulder-procedures/reverse-shoulder-replacement">Reverse Replacement</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Preparing for Surgery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Important information about pre-operative testing, medications, home preparation, and what to bring to the hospital.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/patient-resources/preparing-for-surgery">Pre-Surgery Guide</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What to Expect After Surgery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detailed information about anesthesia, nerve blocks, recovery room procedures, and hospital discharge.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/patient-resources/what-to-expect-after-surgery">After Surgery</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Questions About Revision Shoulder Replacement?</h3>
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
