import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Lower Trapezius Tendon Transfer | Dr. Jacob Kirsch",
  description: "Information about lower trapezius tendon transfer, a joint-preserving surgical option for patients with massive, irreparable rotator cuff tears.",
};

export default function TendonTransferPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Tendon Transfer</h1>
      <p className="text-xl text-muted-foreground mb-8">(Lower Trapezius Tendon Transfer)</p>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Lower trapezius tendon transfer (LTT) has emerged as a promising surgical option for patients with massive, irreparable posterosuperior rotator cuff tears, particularly when the patient is younger, active, and not yet a good candidate for reverse shoulder arthroplasty (RSA). This advanced procedure is one of Dr. Kirsch&apos;s areas of specialized expertise.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The procedure involves rerouting the lower portion of the trapezius muscle, often augmented with a tendon graft (typically Achilles allograft), to the greater tuberosity of the humerus. The lower trapezius&apos;s line of pull closely replicates that of the infraspinatus and teres minor, making it biomechanically ideal for restoring external rotation and improving shoulder function in the absence of a functional rotator cuff.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Who Is a Candidate?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Patients may be better candidates for LTT over shoulder replacement if they:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Are relatively young (typically under 65-70 years old)</li>
            <li>• Have no or minimal arthritis of the shoulder</li>
            <li>• Desire more function and strength</li>
            <li>• Are highly motivated for a longer recovery</li>
            <li>• Have external rotation lag and difficulty with activities like grooming or reaching behind the back</li>
          </ul>

          <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="font-semibold mb-2">LTT vs. Reverse Shoulder Replacement</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Unlike RSA, which compensates for cuff deficiency by altering joint mechanics and relying heavily on the deltoid, LTT attempts to restore more natural shoulder biomechanics using the patient&apos;s own musculature.
            </p>
            <p className="text-sm text-muted-foreground">
              LTT provides a joint-preserving alternative that can significantly enhance quality of life in appropriately selected patients, offering superior gains in pain and function with the advantage of preserving native anatomy and avoiding the long-term complications associated with joint replacement in younger patients.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">The Surgical Procedure</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Lower trapezius tendon transfer involves both an open and arthroscopic approach to restore function in patients with massive, irreparable posterosuperior rotator cuff tears.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Surgical Technique</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The procedure involves:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• A small incision on your back over the scapula to harvest the lower trapezius tendon</li>
                <li>• Augmentation with an Achilles tendon allograft (the native tendon is not long enough to reach)</li>
                <li>• Arthroscopic poke-hole incisions to address concomitant pathology (rotator cuff, biceps tears)</li>
                <li>• Anchors placed in the greater tuberosity, similar to a rotator cuff repair</li>
                <li>• The graft is tunneled from the back incision and attached to the humerus</li>
                <li>• The lower trapezius tendon is secured to the other end of the graft with proper tensioning</li>
              </ul>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Post-Operative Immobilization</h3>
              <p className="text-sm text-muted-foreground">
                Patients are placed in a custom-fit brace after surgery. You will have a follow-up with the brace fitters a few days after surgery to ensure proper fit. The brace is worn for 6 weeks to protect the transfer while it heals.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Recovery Timeline</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Lower trapezius tendon transfer rehabilitation is a long recovery! On average, this process takes 4-6 months longer than rotator cuff repair, so it&apos;s important to not get discouraged. Slow and steady progress are key!
          </p>

          <div className="grid gap-4">
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Early Recovery (Weeks 1-6)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Protection and pain control are the main goals.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• In specialized brace for 6 weeks (only come out for hygiene)</li>
                  <li>• Waterproof dressing on back remains for 2 weeks</li>
                  <li>• Pain management with multimodal approach</li>
                  <li>• It is imperative to protect the shoulder to allow optimal healing</li>
                  <li>• Physical therapy begins at 6 weeks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Intermediate Recovery (Weeks 6-12)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Physical therapy focuses on progressing motion while continuing to protect the repair. The tendon transfer and graft are still very vulnerable. Therapy emphasizes improving MOTION, not strength. Strengthening is delayed until 4.5 months. Therapy progresses more slowly compared to a rotator cuff repair.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Late Recovery (3-6 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  By 3 months, most patients feel much better. This is the &quot;danger zone&quot; where patients need to be careful not to overexert.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• Between 3-4.5 months: Therapist may start strengthening</li>
                  <li>• The graft is still healing - not fully healed yet</li>
                  <li>• 10 months: Can return to activities like running and swimming</li>
                  <li>• Golf may take longer</li>
                  <li>• Always listen to your body and back off from aggravating activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Full Recovery (6 Months - 16 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  It takes most patients approximately 10-12 months to fully trust their shoulder and 16 months to recover completely. Most patients return to recreational or competitive sporting activities. Continue home exercise program 3 times a week for longitudinal shoulder health. Most patients are extremely pleased with their outcome given the significant improvement in pain, strength, quality of life, and function.
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
              <h3 className="font-semibold mb-2">Pre-Surgery Preparation</h3>
              <p className="text-sm text-muted-foreground">
                Starting at least 2 weeks before surgery, take 2,000 IU of Vitamin D3 daily (continue for 3 months post-op). Dr. Kirsch also recommends Complete Surgical Nutrition to enhance healing. Apply Hibiclens in the shower for 3 days before surgery to decrease infection risk.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Pain Management</h3>
              <p className="text-sm text-muted-foreground">
                We utilize a multimodal approach including nerve blocks (18-20 hours of relief), oral medications, and ice therapy to minimize postoperative pain and narcotic use.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Long Recovery, Excellent Results</h3>
              <p className="text-sm text-muted-foreground">
                While the recovery is significantly longer than other shoulder procedures, the majority of patients with failed prior rotator cuff surgery find that lower trapezius tendon transfer provides significant improvement in pain, strength, and quality of life. The procedure is joint-preserving and avoids the need for shoulder replacement in younger, active patients.
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
                Learn more about massive, irreparable rotator cuff tears and treatment options.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-conditions/rotator-cuff-tear">Rotator Cuff Tears</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Reverse Shoulder Replacement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about the alternative reverse shoulder replacement for patients who are better candidates for joint replacement.
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
                Important information about medications, Vitamin D supplementation, Hibiclens prep, and home preparation.
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
                Understanding the extended phases of recovery and the critical importance of following the PT protocol.
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
        <h3 className="text-2xl font-semibold">Questions About Tendon Transfer?</h3>
        <p className="text-muted-foreground">
          Schedule a consultation with Dr. Kirsch to discuss whether this specialized procedure is right for you
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
