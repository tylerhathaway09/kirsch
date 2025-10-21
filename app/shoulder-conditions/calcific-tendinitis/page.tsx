import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Calcific Tendinitis | Dr. Jacob Kirsch",
  description: "Information about calcific tendinitis, a condition where calcium deposits form in the rotator cuff tendons causing acute or chronic shoulder pain.",
};

const sections = [
  { id: "background", title: "Background" },
  { id: "symptoms", title: "Symptoms" },
  { id: "diagnosis", title: "Diagnosis" },
  { id: "treatment", title: "Treatment Options" },
];

export default function CalcificTendinitisPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />



        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Calcific Tendinitis</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section id="background" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Background</h2>
              <p className="text-muted-foreground leading-relaxed">
                Calcific tendinitis is a condition characterized by the deposition of calcium crystals within the rotator cuff tendons, most commonly the supraspinatus tendon. The exact cause of calcium deposit formation is not fully understood, but it is believed to result from a cell-mediated process rather than simple degeneration or trauma.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This condition typically affects adults between 30 and 50 years of age and is more common in women. Calcific tendinitis can cause both acute and chronic shoulder pain, and the calcium deposits can vary in size and density. In some cases, the condition may be completely asymptomatic and discovered incidentally on X-rays taken for other reasons.
              </p>
            </section>

            <Separator className="my-8" />

            <section id="symptoms" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Symptoms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Symptoms of calcific tendinitis can range from mild to severe and may include:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Acute, severe shoulder pain (particularly during the resorptive phase when the body tries to remove the calcium)</li>
                <li>• Chronic, persistent shoulder pain</li>
                <li>• Pain that worsens with overhead activities or reaching</li>
                <li>• Pain at night that disrupts sleep</li>
                <li>• Limited range of motion due to pain</li>
                <li>• Shoulder stiffness</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Note:</strong> The acute phase, when calcium is being reabsorbed by the body, can cause sudden and intense pain that may be mistaken for other serious shoulder conditions.
              </p>
            </section>

            <Separator className="my-8" />

            <section id="diagnosis" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Diagnosis</h2>
              <p className="text-muted-foreground leading-relaxed">
                Diagnosis of calcific tendinitis begins with a thorough clinical examination to assess pain patterns, range of motion, and specific tender points. X-rays are the primary diagnostic tool and can clearly visualize calcium deposits within the rotator cuff tendons. The deposits typically appear as cloudy or well-defined white areas on the X-ray.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ultrasound can also be useful for identifying calcium deposits and assessing their consistency. An MRI may be ordered to evaluate the surrounding soft tissues and rule out other shoulder pathology such as rotator cuff tears, though it is less effective at visualizing calcium deposits compared to X-rays.
              </p>
            </section>

            <Separator className="my-8" />

            <section id="treatment" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Treatment Options</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Treatment for calcific tendinitis varies depending on the severity of symptoms and the phase of the disease. Many cases resolve spontaneously as the calcium is reabsorbed by the body.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Conservative Treatment</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Initial treatment typically includes:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• Rest and activity modification</li>
                    <li>• Nonsteroidal anti-inflammatory drugs (NSAIDs)</li>
                    <li>• Physical therapy to maintain range of motion and strengthen the shoulder</li>
                    <li>• Ice application to reduce pain and inflammation</li>
                    <li>• Corticosteroid injections for severe pain</li>
                  </ul>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Minimally Invasive Procedures</h3>
                  <p className="text-sm text-muted-foreground">
                    For persistent cases, ultrasound-guided needle aspiration or lavage may be performed to break up and remove calcium deposits. This procedure can provide significant pain relief and accelerate recovery.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Surgical Treatment</h3>
                  <p className="text-sm text-muted-foreground">
                    When conservative treatments fail and symptoms significantly impact quality of life, arthroscopic surgery may be recommended. The procedure involves removing the calcium deposits from the tendon and performing a subacromial decompression if needed. Most patients experience substantial pain relief following surgical removal of the calcium deposits.
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
                  <CardTitle className="text-lg">Surgical Treatment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about arthroscopic removal of calcium deposits and subacromial decompression procedures.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/shoulder-procedures/shoulder-bursitis-impingement">Subacromial Decompression</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Physical Therapy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Understanding the role of physical therapy in managing calcific tendinitis and maintaining shoulder function.
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
            <h3 className="text-2xl font-semibold">Questions About Calcific Tendinitis?</h3>
            <p className="text-muted-foreground">
              Schedule a consultation with Dr. Kirsch to discuss your diagnosis and treatment options
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
