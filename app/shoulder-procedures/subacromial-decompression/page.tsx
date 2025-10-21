import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { TableOfContents } from "@/components/layout/TableOfContents";

export const metadata = {
  title: "Subacromial Decompression | Dr. Jacob Kirsch",
  description: "Information about subacromial decompression surgery for shoulder impingement and bursitis that has not responded to conservative treatment.",
};
const sections = [
  { id: "overview", title: "Overview" },
  { id: "indications", title: "When Is Surgery Needed?" },
  { id: "procedure", title: "The Surgical Procedure" },
  { id: "recovery", title: "Recovery Timeline" },
  { id: "expectations", title: "What to Expect" },
];


export default function SubacromialDecompressionPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />



        {/* Main Content */}
        <div>
      <h1 className="text-4xl font-bold mb-8">Subacromial Decompression</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section id="overview" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Subacromial decompression, also known as acromioplasty, is an arthroscopic surgical procedure designed to relieve shoulder pain caused by impingement syndrome and chronic subacromial bursitis. The procedure involves removing the inflamed bursa and shaving down bone spurs on the underside of the acromion that are compressing the rotator cuff tendons.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By creating more space in the subacromial area, the procedure reduces mechanical irritation of the rotator cuff tendons and bursa, alleviating pain and improving shoulder function. This minimally invasive arthroscopic approach uses small incisions and specialized instruments, allowing for faster recovery compared to traditional open surgery.
          </p>
        </section>

        <Separator className="my-8" />

        <section id="indications" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">When Is Surgery Needed?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Subacromial decompression is typically recommended after conservative treatment has failed to provide adequate relief. Surgery may be appropriate if:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Symptoms persist for 6 months or longer despite conservative treatment</li>
            <li>• Physical therapy, activity modification, and anti-inflammatory medications have not provided relief</li>
            <li>• Corticosteroid injections provided only temporary improvement</li>
            <li>• Pain significantly interferes with daily activities, work, or sleep</li>
            <li>• Imaging shows bone spurs or anatomical factors contributing to impingement</li>
            <li>• There is no evidence of a full-thickness rotator cuff tear requiring repair</li>
          </ul>

          <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="font-semibold mb-2">Conservative Treatment First</h3>
            <p className="text-sm text-muted-foreground">
              Most patients with shoulder impingement and bursitis improve with conservative measures including physical therapy, NSAIDs, activity modification, and corticosteroid injections. Surgery is reserved for cases where these treatments have been unsuccessful after an appropriate trial period.
            </p>
          </div>
        </section>

        <Separator className="my-8" />

        <section id="procedure" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">The Surgical Procedure</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Subacromial decompression is performed arthroscopically through small poke-hole incisions, allowing the surgeon to visualize and treat the problem areas with minimal tissue disruption.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Surgical Technique</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The procedure involves several key steps:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Small arthroscopic incisions (approximately 1 cm each)</li>
                <li>• Complete removal of the inflamed subacromial bursa (bursectomy)</li>
                <li>• Reshaping the underside of the acromion to remove bone spurs (acromioplasty)</li>
                <li>• Smoothing any rough areas that may be irritating the rotator cuff tendons</li>
                <li>• Inspection of the rotator cuff, biceps tendon, and labrum for any additional pathology</li>
                <li>• Treatment of any associated problems identified during the procedure</li>
              </ul>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Combined Procedures</h3>
              <p className="text-sm text-muted-foreground">
                During arthroscopic surgery, if other shoulder problems are identified such as partial rotator cuff tears, biceps tendon issues, or labral fraying, these can often be addressed during the same procedure without additional incisions or significantly prolonging recovery.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section id="recovery" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">Recovery Timeline</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Recovery from subacromial decompression is generally faster than rotator cuff repair, as no tendon repair needs to heal. However, following the rehabilitation protocol is still important for optimal outcomes.
          </p>

          <div className="grid gap-4">
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Early Recovery (Weeks 1-2)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Focus on pain control and protecting the surgical site.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• Arm in sling for comfort (typically 1-2 weeks)</li>
                  <li>• Can move hand, wrist, and elbow immediately</li>
                  <li>• Gentle pendulum exercises as directed</li>
                  <li>• Pain management with prescribed medications</li>
                  <li>• Ice therapy to reduce swelling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Intermediate Recovery (Weeks 2-6)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Physical therapy begins to restore range of motion. Most patients experience significant pain relief during this phase. Gradual progression of shoulder motion exercises under therapist guidance. No heavy lifting or overhead activities during this period.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Late Recovery (6-12 Weeks)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Strengthening exercises begin around 6 weeks. Progressive resistance training to restore shoulder strength. Most patients return to normal daily activities during this phase. Continue with home exercise program.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Full Recovery (3-4 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Return to full activities including sports and heavy labor. Most patients achieve excellent pain relief and functional improvement. Continue regular shoulder exercises to maintain strength and flexibility. Most patients can return to overhead activities and sports by 3-4 months.
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
                Most patients experience significant pain relief after subacromial decompression, particularly with overhead activities and at night. The removal of the inflamed bursa and bone spurs eliminates the mechanical source of irritation, providing lasting relief.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Improved Function</h3>
              <p className="text-sm text-muted-foreground">
                With pain relief comes improved shoulder function. Most patients can return to overhead activities, sports, and work without the limitations they experienced before surgery. Physical therapy plays a crucial role in restoring full strength and range of motion.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Success Rates</h3>
              <p className="text-sm text-muted-foreground">
                Subacromial decompression has good success rates when performed for appropriate indications in patients who have failed conservative treatment. Outcomes are best in patients without significant rotator cuff pathology and with clear mechanical impingement on imaging studies.
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
              <CardTitle className="text-lg">Shoulder Bursitis / Impingement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn more about shoulder impingement syndrome and bursitis, including symptoms and diagnosis.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-conditions/shoulder-bursitis-impingement">Bursitis & Impingement</Link>
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
                Understanding the phases of recovery and the importance of physical therapy after decompression.
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
        <h3 className="text-2xl font-semibold">Questions About Subacromial Decompression?</h3>
        <p className="text-muted-foreground">
          Schedule a consultation with Dr. Kirsch to discuss whether this procedure is right for you
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
          </div>
      </div>
    </div>
  );
}
