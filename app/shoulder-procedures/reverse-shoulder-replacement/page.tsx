import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Reverse Shoulder Replacement | Dr. Jacob Kirsch",
  description: "Information about reverse shoulder replacement, the gold standard treatment for rotator cuff tear arthropathy and massive rotator cuff tears with arthritis.",
};

export default function ReverseShoulderReplacementPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Reverse Shoulder Replacement</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Reverse shoulder replacement &quot;reverses&quot; the position of the ball and the socket. A metal ball replaces the glenoid (socket), and a plastic cup replaces the end of the humerus (upper arm bone). This design allows the deltoid muscle to compensate for a deficient rotator cuff, making it the gold standard treatment for patients with rotator cuff tear arthropathy.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Unlike anatomic total shoulder replacement which requires an intact rotator cuff, reverse shoulder replacement can restore function and relieve pain even when the rotator cuff is severely damaged or absent. The altered biomechanics rely on the deltoid muscle to power shoulder movement.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Who Is a Candidate?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Reverse shoulder replacement is recommended for patients with:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Rotator cuff tear arthropathy (massive rotator cuff tear with arthritis)</li>
            <li>• Severe degenerative joint disease with rotator cuff deficiency</li>
            <li>• Pseudoparalysis (inability to actively lift the arm)</li>
            <li>• Failed rotator cuff repair with arthritis</li>
            <li>• Complex fractures in older patients</li>
          </ul>

          <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="font-semibold mb-2">Expected Outcomes</h3>
            <p className="text-sm text-muted-foreground">
              Reverse shoulder replacement performed for osteoarthritis generally yields more favorable outcomes than other conditions treated with the same procedure. Patients with osteoarthritis tend to have more predictable outcomes due to preserved deltoid and soft tissue integrity, whereas those with complex indications often face higher complication rates and less consistent functional gains.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">The Surgical Procedure</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The surgical procedure for reverse shoulder replacement is very similar to anatomic total shoulder replacement, only the implants are different. The ball is made of stainless steel, titanium, and cobalt-chrome. The plastic cup is made of ultra-high molecular weight polyethylene.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Key Advantages</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Compared to anatomic shoulder replacement, reverse shoulder replacement:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Does not require a subscapularis repair</li>
                <li>• Allows for earlier motion and less restrictive post-operative protocols</li>
                <li>• Can restore function even with severe rotator cuff damage</li>
                <li>• Relies on the deltoid muscle for shoulder movement</li>
              </ul>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Anesthesia and Pain Management</h3>
              <p className="text-sm text-muted-foreground">
                You will receive a nerve block on the day of surgery to manage postoperative pain for 18-24 hours. We use a comprehensive multimodal pain management approach to minimize discomfort and narcotic use, including Tylenol, anti-inflammatory medications, and low-dose steroids.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Recovery Timeline</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Recovery from reverse shoulder replacement takes up to a full year, with approximately 90% of progress made by 6 months.
          </p>

          <div className="grid gap-4">
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Early Recovery (Weeks 1-6)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Focus on protecting your shoulder while controlling pain and beginning basic motion.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• Arm in sling for comfort</li>
                  <li>• Can move hand, wrist, and elbow immediately</li>
                  <li>• Less restrictive than anatomic replacement (no subscapularis repair to protect)</li>
                  <li>• Physician-directed exercises begin at 4 weeks</li>
                  <li>• Physical therapy may start earlier than with anatomic replacement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Intermediate Recovery (Weeks 6-12)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Work on improving range of motion through physician-directed, patient-led exercises. You don&apos;t ever have to do formal physical therapy! Progress is gradual - slow and steady wins the race.
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
                  <li>• Continue daily stretching exercises to maximize function</li>
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

        <section>
          <h2 className="text-3xl font-semibold mb-4">What to Expect</h2>

          <div className="space-y-4">
            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Hospital Stay</h3>
              <p className="text-sm text-muted-foreground">
                Patients are typically discharged either the same day or the day after surgery. Most patients prefer to go home the same day. It is Dr. Kirsch&apos;s strong preference to have patients discharged to their home without the need for a rehab facility.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Pain Management</h3>
              <p className="text-sm text-muted-foreground">
                Most patients find reverse shoulder replacement to be less painful than anatomic replacement since there is no subscapularis repair to protect. The multimodal pain management approach keeps most patients very comfortable.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Function Expectations</h3>
              <p className="text-sm text-muted-foreground">
                While reverse shoulder replacement provides excellent pain relief and functional improvement, rotation may be somewhat limited compared to normal. However, most patients are extremely satisfied with their ability to perform daily activities pain-free.
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
              <CardTitle className="text-lg">Cuff Tear Arthropathy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn more about cuff tear arthropathy, the condition most commonly treated with reverse shoulder replacement.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-conditions/cuff-tear-arthropathy">Cuff Tear Arthropathy</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Anatomic Shoulder Replacement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about anatomic shoulder replacement for patients with arthritis and an intact rotator cuff.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-procedures/anatomic-total-shoulder-replacement">Anatomic Replacement</Link>
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
              <CardTitle className="text-lg">Physical Therapy Protocols</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Understanding the phases of recovery and home exercise programs to optimize your shoulder function.
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
        <h3 className="text-2xl font-semibold">Questions About Reverse Shoulder Replacement?</h3>
        <p className="text-muted-foreground">
          Schedule a consultation with Dr. Kirsch to discuss whether this procedure is right for you
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
