import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Shoulder Bursitis & Impingement | Dr. Jacob Kirsch",
  description: "Comprehensive information about shoulder bursitis and rotator cuff tendonitis, including causes, symptoms, diagnosis, and treatment options.",
};

export default function ShoulderBursitisImpingementPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Shoulder Bursitis / Impingement</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-3xl font-semibold mb-4">Background</h2>
          <p className="text-muted-foreground leading-relaxed">
            Bursitis and rotator cuff tendonitis are common causes of shoulder pain, often occurring together due to their anatomical proximity and shared mechanisms of injury. Subacromial bursitis involves inflammation of the bursa that cushions the rotator cuff tendons beneath the acromion, while rotator cuff tendonitis refers to inflammation or degeneration of the rotator cuff tendons, usually from overuse, repetitive overhead activity, or age-related wear.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            These conditions are prevalent in both athletes and older adults and can result from acute injury or chronic impingement of the tendons and bursa.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Symptoms</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Patients with bursitis or rotator cuff tendonitis typically report:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Dull, aching pain in the outer shoulder</li>
            <li>• Pain especially during overhead activities or at night</li>
            <li>• Pain that worsens with reaching, lifting, or lying on the affected side</li>
            <li>• Weakness and stiffness in the shoulder</li>
            <li>• Catching or grinding sensation during movement</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            <strong>Note:</strong> Although the symptoms of the two conditions are similar, bursitis tends to cause more generalized tenderness, while tendonitis is more often associated with weakness and pain during active motion.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Diagnosis</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Diagnosis is primarily clinical, based on history and physical examination findings such as:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
            <li>• Pain with resisted shoulder abduction or external rotation</li>
            <li>• Tenderness over the subacromial space</li>
            <li>• Positive impingement signs (e.g., Neer or Hawkins-Kennedy test)</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Imaging helps confirm the diagnosis and rule out other causes such as a full thickness rotator cuff tear. X-rays may reveal acromial spurs or calcific deposits, while an MRI can visualize inflammation, tendon thickening, or small tears in the rotator cuff. These modalities also help distinguish between bursitis and tendonitis when both are suspected.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Treatment Options</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Treatment typically begins conservatively and includes several approaches tailored to your specific condition.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Conservative Treatment</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Initial treatment includes:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Rest and activity modification</li>
                <li>• Nonsteroidal anti-inflammatory drugs (NSAIDs)</li>
                <li>• Physical therapy to improve shoulder mechanics and strengthen surrounding muscles</li>
                <li>• Ice or heat application</li>
                <li>• Posture correction</li>
                <li>• Corticosteroid injections into the subacromial space for persistent pain</li>
              </ul>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Surgical Treatment</h3>
              <p className="text-sm text-muted-foreground">
                If symptoms do not improve with nonoperative management, further imaging may be warranted to assess for partial or full-thickness rotator cuff tears, which may require surgical intervention such as bursectomy, debridement, or rotator cuff repair.
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
                Learn about subacromial decompression and other surgical options for persistent bursitis and impingement.
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
                Understanding the important role of physical therapy in treating shoulder bursitis and impingement syndrome.
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
        <h3 className="text-2xl font-semibold">Questions About Shoulder Bursitis or Impingement?</h3>
        <p className="text-muted-foreground">
          Schedule a consultation with Dr. Kirsch to discuss your diagnosis and treatment options
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
