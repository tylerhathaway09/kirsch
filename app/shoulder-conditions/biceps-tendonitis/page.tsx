import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Biceps Tendonitis & Superior Labral Injury | Dr. Jacob Kirsch",
  description: "Information about biceps tendonitis and SLAP tears, including causes, symptoms, diagnosis, and treatment options including biceps tenodesis surgery.",
};

const sections = [
  { id: "background", title: "Background" },
  { id: "symptoms", title: "Symptoms" },
  { id: "diagnosis", title: "Diagnosis" },
  { id: "treatment", title: "Treatment Options" },
];

export default function BicepsTendonitisPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Biceps Tendonitis & Superior Labral Injury</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section id="background" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Background</h2>
              <p className="text-muted-foreground leading-relaxed">
                Biceps tendonitis and injuries to the biceps-labral complex often involve inflammation or degeneration of the long head of the biceps tendon (LHBT) and its attachment to the superior labrum of the glenoid. These conditions are commonly seen in overhead athletes or individuals performing repetitive shoulder activities, leading to overuse and microtrauma.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The biceps-labral complex plays a role in shoulder stability and motion, and injuries such as SLAP (superior labrum anterior to posterior) tears can compromise both function and comfort. These issues may also occur in conjunction with other shoulder pathologies, such as rotator cuff tears or shoulder instability.
              </p>
            </section>

            <Separator className="my-8" />

            <section id="symptoms" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Symptoms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Patients with biceps tendonitis or biceps-labral complex injuries typically report:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Pain in the front of the shoulder</li>
                <li>• Pain especially with overhead motion or lifting</li>
                <li>• Pain radiating down the front of the arm</li>
                <li>• Worsening with elbow flexion or forearm supination</li>
                <li>• Deep, catching, or clicking sensation within the joint</li>
                <li>• Weakness and reduced athletic performance</li>
                <li>• Possible tendon rupture in chronic cases</li>
              </ul>
            </section>

            <Separator className="my-8" />

            <section id="diagnosis" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Diagnosis</h2>
              <p className="text-muted-foreground leading-relaxed">
                Diagnosis begins with a detailed history and physical exam, including specific tests such as Speed&apos;s test, Yergason&apos;s test, and O&apos;Brien&apos;s test to assess biceps and labral involvement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Occasionally a diagnostic injection into the bicipital groove or the glenohumeral joint can be helpful to truly localize the source of symptoms. These injections can be both diagnostic and therapeutic. If symptoms persist despite non-operative care, an MRI can provide supporting evidence of biceps/labral disease and also evaluate for other sources of pain.
              </p>
            </section>

            <Separator className="my-8" />

            <section id="treatment" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Treatment Options</h2>

              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Non-Operative Management</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Initial treatment typically includes:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• Rest and activity modification</li>
                    <li>• Physical therapy</li>
                    <li>• Anti-inflammatory medications</li>
                    <li>• Corticosteroid injections (diagnostic and therapeutic)</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold mb-2">Surgical Treatment</h3>
                  <p className="text-sm text-muted-foreground">
                    When conservative treatment fails, <strong>biceps tenodesis</strong> is often recommended. This procedure involves releasing the biceps tendon from the labrum and reattaching it to the humerus, providing reliable pain relief while maintaining biceps function. This procedure is particularly effective for biceps tendonitis and SLAP tears.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <Separator className="my-12" />

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Related Information</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Biceps Tenodesis Surgery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about biceps tenodesis, a surgical procedure to treat biceps tendonitis and SLAP tears.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/shoulder-procedures/biceps-tenodesis">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12" />

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Questions About Biceps Tendonitis?</h3>
            <p className="text-muted-foreground">
              Schedule a consultation with Dr. Kirsch to discuss your diagnosis and treatment options
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
