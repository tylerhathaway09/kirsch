import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Shoulder Instability | Dr. Jacob Kirsch",
  description: "Information about shoulder instability and dislocations, including causes, symptoms, diagnosis, and surgical stabilization procedures.",
};

const sections = [
  { id: "background", title: "Background" },
  { id: "symptoms", title: "Symptoms" },
  { id: "diagnosis", title: "Diagnosis" },
  { id: "treatment", title: "Treatment Options" },
];

export default function ShoulderInstabilityPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />



        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Shoulder Instability</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section id="background" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Background</h2>
              <p className="text-muted-foreground leading-relaxed">
                Shoulder instability occurs when the structures that normally keep the humeral head centered in the glenoid socket are compromised, leading to excessive movement or dislocation of the joint. It is most commonly seen in young, active individuals, particularly athletes involved in contact or overhead sports.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Instability can result from acute trauma (e.g., a shoulder dislocation) or repetitive microtrauma that stretches or tears the ligaments and capsule. It is categorized into anterior, posterior, or multidirectional instability based on the direction of joint displacement, with anterior instability being the most prevalent.
              </p>
            </section>

            <Separator className="my-8" />

            <section id="symptoms" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Symptoms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Common symptoms of shoulder instability include:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Sensation of the shoulder &quot;slipping,&quot; &quot;popping out,&quot; or feeling loose</li>
                <li>• Episodes during certain movements or arm positions</li>
                <li>• Acute dislocations with sudden, intense pain and visible deformity</li>
                <li>• Chronic instability with intermittent discomfort and weakness</li>
                <li>• Feeling of apprehension when the arm is in vulnerable positions</li>
                <li>• Nerve symptoms like numbness or tingling from traction on nerves</li>
              </ul>
            </section>

            <Separator className="my-8" />

            <section id="diagnosis" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Diagnosis</h2>
              <p className="text-muted-foreground leading-relaxed">
                Diagnosis involves a detailed patient history, physical examination, and imaging studies. The physical examination is essential to assess the directions and degree of instability as well as generalized hyperlaxity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Plain radiographs are part of the standard workup. If surgery is being considered, an MRI or CT scan is needed. MRIs detect soft tissue pathology such as tears of the labrum or ligaments. In cases of recurrent instability, a CT scan is necessary to determine bone loss, as this may dictate a different type of surgical procedure.
              </p>
            </section>

            <Separator className="my-8" />

            <section id="treatment" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Treatment Options</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Treatment can be nonoperative or surgical, depending on severity, frequency of dislocations, patient activity level, and underlying structural damage.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-semibold mb-2">Non-Operative Management</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Initial management typically includes:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                    <li>• Rest</li>
                    <li>• Physical therapy to strengthen rotator cuff and scapular stabilizers</li>
                    <li>• Activity modification</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    There is increasing evidence that early surgical intervention is more beneficial compared to non-operative treatment, however, certain patients may still benefit from an initial trial of non-operative care.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold mb-2">Surgical Treatment</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Recurrent instability, or first-time events in younger athletes or those at higher risk of recurrent dislocations, often necessitates surgical intervention:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                    <li>• <strong>Arthroscopic Bankart Repair</strong> - Commonly performed for anterior instability</li>
                    <li>• <strong>Latarjet Procedure</strong> - Indicated in cases with significant bone loss</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">
                    Dr. Kirsch will individualize a treatment plan for you based on your specific pathology and risk factors.
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
                <CardTitle className="text-lg">Shoulder Stabilization Surgery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about surgical stabilization procedures including arthroscopic Bankart repair and the Latarjet procedure.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/shoulder-procedures/shoulder-stabilization">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12" />

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Questions About Shoulder Instability?</h3>
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
