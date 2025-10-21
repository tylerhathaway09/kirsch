import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Frozen Shoulder (Adhesive Capsulitis) | Dr. Jacob Kirsch",
  description: "Information about frozen shoulder (adhesive capsulitis), its three phases, symptoms, diagnosis, and treatment options. Learn about the connection with diabetes.",
};

const sections = [
  { id: "background", title: "Background" },
  { id: "symptoms", title: "Symptoms" },
  { id: "diagnosis", title: "Diagnosis" },
  { id: "treatment", title: "Treatment Options" },
];

export default function FrozenShoulderPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />



        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Frozen Shoulder</h1>
          <p className="text-xl text-muted-foreground mb-8">(Adhesive Capsulitis)</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section id="background" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Background</h2>
              <p className="text-muted-foreground leading-relaxed">
                Frozen shoulder, or adhesive capsulitis, is a condition characterized by progressive stiffness and pain in the shoulder joint due to thickening and contraction of the joint capsule. The exact cause is often unknown (idiopathic), but it can also develop after trauma, surgery, or prolonged immobilization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                It is more common in female patients aged 40–60 and is frequently associated with systemic conditions such as diabetes and thyroid disorders. The condition typically progresses through three phases: freezing (painful), frozen (stiffness), and thawing (gradual improvement). While this is a self-limited disease and will eventually resolve, it can sometimes take patients 2-3 years to fully improve. It is essential to recognize a frozen shoulder early so that treatment can effectively shorten the symptomatic period.
              </p>
            </section>

            <Separator className="my-8" />

            <section id="symptoms" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Symptoms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Frozen shoulder typically begins with a gradual onset of symptoms:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Shoulder pain, particularly with movement</li>
                <li>• Increasing stiffness and restricted range of motion</li>
                <li>• Pain that is often worse at night</li>
                <li>• Sleep disruption and pain at end range of motion</li>
                <li>• Severe limitation in activities such as reaching overhead, behind the back, or lifting objects</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                As the condition progresses, pain may lessen, but stiffness becomes more prominent. The total course of frozen shoulder can last anywhere from several months to a few years if left untreated.
              </p>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <h3 className="font-semibold mb-3">Three Phases of Frozen Shoulder</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Phase 1 - Freezing (Painful):</strong> Gradual onset of pain with progressive loss of motion</p>
                  <p><strong>Phase 2 - Frozen (Stiffness):</strong> Pain may decrease, but stiffness becomes severe</p>
                  <p><strong>Phase 3 - Thawing (Gradual Improvement):</strong> Slow return of shoulder motion over time</p>
                </div>
              </div>
            </section>

            <Separator className="my-8" />

            <section id="diagnosis" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Diagnosis</h2>
              <p className="text-muted-foreground leading-relaxed">
                Diagnosis of frozen shoulder is clinical, based on a detailed history and physical examination showing a global restriction in both active and passive shoulder range of motion, particularly in external rotation. The loss of motion differentiates it from other causes of shoulder pain like rotator cuff disorders.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                An MRI is not needed, although it may show thickening of the joint capsule and synovium but is not routinely required for diagnosis.
              </p>
            </section>

            <Separator className="my-8" />

            <section id="treatment" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Treatment Options</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Treatment for frozen shoulder focuses on relieving pain and restoring motion, and most cases improve over time with conservative management.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Conservative Treatment</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Early stages benefit from:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• NSAIDs for pain management</li>
                    <li>• Corticosteroid injections</li>
                    <li>• Gentle stretching exercises</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Important:</strong> The key is to try to normalize shoulder motion. Often patients focus on strengthening, which can worsen their symptoms.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Surgical Treatment</h3>
                  <p className="text-sm text-muted-foreground">
                    In cases where conservative measures fail, surgery can be considered. At the time of surgery, the thickened and inflamed capsule is released arthroscopically. Most patients eventually regain functional range of motion, though some residual stiffness can persist.
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
                  <CardTitle className="text-lg">Physical Therapy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Understanding the role of gentle stretching and range of motion exercises in treating frozen shoulder.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/patient-resources/physical-therapy-protocols">PT Protocols</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Patient Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn more about what to expect during your treatment journey for frozen shoulder.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/patient-resources/patient-experience">Patient Experience</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Questions About Frozen Shoulder?</h3>
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
