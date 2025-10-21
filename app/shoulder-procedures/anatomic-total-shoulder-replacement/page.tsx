import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Anatomic Total Shoulder Replacement | Dr. Jacob Kirsch",
  description: "Information about anatomic total shoulder replacement surgery for patients with shoulder arthritis and an intact rotator cuff.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "candidates", title: "Who Is a Candidate?" },
  { id: "procedure", title: "The Surgical Procedure" },
  { id: "recovery", title: "Recovery Timeline" },
  { id: "expectations", title: "What to Expect" },
];

export default function AnatomicTotalShoulderReplacementPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Anatomic Total Shoulder Replacement</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section id="overview" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Anatomic total shoulder replacement maintains the natural anatomy of your shoulder. A metal ball replaces the end of the upper arm bone (humerus) and a plastic cup replaces the socket (glenoid). This procedure is designed for patients with shoulder arthritis who have an intact rotator cuff.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Overall, anatomic total shoulder replacements are performed less commonly in the United States and internationally compared to reverse shoulder replacements. However, in certain patients this can still be a very effective type of shoulder replacement, providing excellent pain relief and restoration of function.
          </p>
            </section>

            <Separator className="my-8" />

            <section id="candidates" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Who Is a Candidate?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Anatomic total shoulder replacement is best suited for patients with:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Shoulder arthritis (osteoarthritis or inflammatory arthritis)</li>
            <li>• Intact or reparable rotator cuff tendons</li>
            <li>• Good bone quality in the glenoid (socket)</li>
            <li>• Adequate soft tissue integrity</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            The main determining factors include the quality and strength of the bone in the glenoid, and the quality of your soft tissues and rotator cuff tendons. Dr. Kirsch will thoroughly evaluate your condition using physical examination and advanced imaging to determine which type of shoulder replacement is best for you.
          </p>
            </section>

            <Separator className="my-8" />

            <section id="procedure" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">The Surgical Procedure</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Anatomic total shoulder replacement is performed through an incision on the front of the shoulder. The procedure involves preparing the bone surfaces and implanting the prosthetic components with precision.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Subscapularis Repair</h3>
              <p className="text-sm text-muted-foreground">
                A critical aspect of anatomic total shoulder replacement is the subscapularis repair (the front rotator cuff tendon). The repair of the subscapularis is essential for a successful anatomic total shoulder replacement. After surgery, it is crucial to protect this repair by remaining &quot;in the box&quot; - avoiding rotation away from the body, reaching behind your back, or pushing yourself up with the operative arm.
              </p>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Anesthesia and Pain Management</h3>
              <p className="text-sm text-muted-foreground">
                You will receive a nerve block on the day of surgery to help manage postoperative pain. This numbs the nerves for 18-24 hours, minimizing immediate pain and reducing narcotic requirements. We use a multimodal pain management approach including Tylenol, anti-inflammatory medications, and a low-dose steroid to optimize your comfort.
              </p>
            </div>
          </div>
            </section>

            <Separator className="my-8" />

            <section id="recovery" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Recovery Timeline</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Recovery from shoulder replacement takes up to a full year, with approximately 90% of progress made by 6 months.
          </p>

          <div className="grid gap-4">
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Early Recovery (Weeks 1-6)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Protect your shoulder, particularly the subscapularis repair. Goals are to control pain and begin basic motion.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• Arm in sling for comfort and protection</li>
                  <li>• Can move hand, wrist, and elbow immediately</li>
                  <li>• Must stay &quot;in the box&quot; (no rotation or reaching behind back)</li>
                  <li>• Physician-directed exercises begin at 4 weeks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Intermediate Recovery (Weeks 6-12)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Focus on improving range of motion. All exercises are physician-directed and patient-led - you don&apos;t ever have to do formal physical therapy! Motion will improve significantly, but slow and steady wins the race.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Late Recovery (3-6 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Return to certain sporting activities in a graduated fashion:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• 4 months: Start golf chipping, light tennis ground strokes</li>
                  <li>• 5-5.5 months: Full golf swings without hitting ball</li>
                  <li>• 6 months: Full unrestricted golf and tennis</li>
                  <li>• Continue daily stretching to maximize function</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Full Recovery (6 Months - 1 Year)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Many patients continue to improve significantly up to one year. Long-term, Dr. Kirsch doesn&apos;t put formal restrictions on activity or weightlifting. The best rule of thumb: if you can&apos;t lift or do something 20 times, it is likely too much.
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
              <h3 className="font-semibold mb-2">Hospital Stay</h3>
              <p className="text-sm text-muted-foreground">
                Patients are typically discharged either the same day or the day after surgery. Most patients prefer to go home the same day. Dr. Kirsch strongly prefers patients to be discharged to their home without the need for a rehab facility.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Sleeping</h3>
              <p className="text-sm text-muted-foreground">
                Many patients have increased shoulder pain lying flat. We recommend sleeping in a recliner or reclined position in bed with wedge pillows. You may place a pillow between your body and arm and behind your elbow for comfort.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Driving</h3>
              <p className="text-sm text-muted-foreground">
                It is never acceptable to drive while taking narcotic pain medications. It is generally not advisable to drive while in your sling. Dr. Kirsch will discuss this in detail during your postoperative visits.
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
              <CardTitle className="text-lg">Shoulder Arthritis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn more about shoulder arthritis and when shoulder replacement surgery is recommended.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-conditions/shoulder-arthritis">Shoulder Arthritis</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Reverse Shoulder Replacement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about the alternative reverse shoulder replacement for patients with rotator cuff deficiency.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-procedures/reverse-shoulder-replacement">Reverse Shoulder Replacement</Link>
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
            <h3 className="text-2xl font-semibold">Questions About Anatomic Shoulder Replacement?</h3>
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
