import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Biceps Tenodesis | Dr. Jacob Kirsch",
  description: "Information about biceps tenodesis surgery for treatment of biceps tendonitis and SLAP tears, providing reliable pain relief and improved function.",
};

export default function BicepsTenodesis Page() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Biceps Tenodesis</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Biceps tenodesis is a surgical procedure that addresses problems with the long head of the biceps tendon (LHBT), particularly biceps tendonitis and SLAP (Superior Labrum Anterior to Posterior) tears. The procedure involves releasing the biceps tendon from the labrum at the top of the shoulder socket and reattaching it to the humerus (upper arm bone) in a more stable position.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This procedure provides reliable pain relief for patients with chronic biceps tendon pain that has not responded to conservative treatment. By moving the tendon attachment point away from the labrum, the procedure eliminates the source of pain while maintaining biceps function.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">When Is Biceps Tenodesis Needed?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Biceps tenodesis may be recommended for:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Chronic biceps tendonitis that has failed conservative treatment</li>
            <li>• SLAP tears (tears of the superior labrum where the biceps attaches)</li>
            <li>• Partial tears of the long head of the biceps tendon</li>
            <li>• Biceps instability or subluxation</li>
            <li>• Persistent anterior shoulder pain despite physical therapy and injections</li>
            <li>• Overhead athletes with SLAP tears who have not responded to non-operative care</li>
          </ul>

          <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="font-semibold mb-2">SLAP Tears in Overhead Athletes</h3>
            <p className="text-sm text-muted-foreground">
              SLAP tears are particularly common in overhead athletes such as baseball pitchers, tennis players, and swimmers. Biceps tenodesis has become the preferred treatment for many SLAP tears, especially in patients over 30-35 years old, as it provides more predictable outcomes and faster return to activities compared to SLAP repair.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">The Surgical Procedure</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Biceps tenodesis is typically performed arthroscopically through small incisions, though sometimes a small open incision may be used for the tendon reattachment portion.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Surgical Technique</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The procedure involves several steps:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Arthroscopic examination of the shoulder to assess the biceps and address any other pathology</li>
                <li>• Release of the biceps tendon from its attachment at the labrum</li>
                <li>• Preparation of the humerus at the new attachment site</li>
                <li>• Reattachment of the biceps tendon to the humerus using a specialized anchor or interference screw</li>
                <li>• The new attachment point is typically in the upper humerus, away from the painful labral area</li>
              </ul>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Combined Procedures</h3>
              <p className="text-sm text-muted-foreground">
                Biceps tenodesis is often performed in combination with other shoulder procedures such as rotator cuff repair or subacromial decompression. When combined procedures are necessary, they can all be addressed during the same surgery without additional incisions.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Recovery Timeline</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Recovery from biceps tenodesis is generally faster than rotator cuff repair, though protection of the repair is still important.
          </p>

          <div className="grid gap-4">
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Early Recovery (Weeks 1-4)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Protection of the biceps repair while controlling pain.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• Arm in sling for comfort and protection</li>
                  <li>• Can move hand, wrist, and elbow immediately</li>
                  <li>• Avoid lifting or pulling with the operative arm</li>
                  <li>• Pain management with multimodal approach</li>
                  <li>• Ice therapy to reduce swelling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Intermediate Recovery (Weeks 4-8)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Begin gentle range of motion exercises. Physical therapy focuses on gradually restoring shoulder mobility while protecting the biceps repair. Avoid resisted elbow flexion (bending) or forearm supination (turning palm up) during this phase.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Late Recovery (2-4 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Progressive strengthening begins around 8-10 weeks. Most patients experience significant pain relief by this point. Gradual return to normal activities of daily living. Biceps-specific strengthening is delayed until 12 weeks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Full Recovery (4-6 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Return to full activities including sports. Most patients achieve excellent pain relief and can resume overhead activities. For overhead athletes, sport-specific training begins around 4 months with gradual return to competition at 5-6 months.
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
              <h3 className="font-semibold mb-2">Pain Relief</h3>
              <p className="text-sm text-muted-foreground">
                The vast majority of patients experience significant pain relief after biceps tenodesis. The procedure eliminates the chronic irritation and inflammation at the labral attachment site, providing lasting relief from anterior shoulder pain.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Appearance and Function</h3>
              <p className="text-sm text-muted-foreground">
                Most patients maintain normal biceps function after tenodesis. Some patients may notice a slight change in the contour of the biceps muscle (slight lowering of the muscle belly), but this is typically minimal and not noticeable to most people. Strength is generally well-preserved.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Return to Sports</h3>
              <p className="text-sm text-muted-foreground">
                Athletes can typically return to their sport within 5-6 months. The procedure has shown excellent outcomes for overhead athletes, allowing most to return to their previous level of competition with improved comfort and function.
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
              <CardTitle className="text-lg">Biceps Tendonitis / SLAP Tears</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn more about biceps tendonitis and SLAP tears, and when surgery is recommended.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-conditions/biceps-tendonitis">Biceps Tendonitis</Link>
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
                Understanding the phases of recovery and the importance of protecting the biceps repair.
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
        <h3 className="text-2xl font-semibold">Questions About Biceps Tenodesis?</h3>
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
