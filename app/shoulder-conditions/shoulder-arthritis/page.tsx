import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Shoulder Arthritis | Dr. Jacob Kirsch",
  description: "Comprehensive information about shoulder arthritis, including causes, symptoms, diagnosis, and treatment options including shoulder replacement surgery.",
};

export default function ShoulderArthritisPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Shoulder Arthritis</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-3xl font-semibold mb-4">Background</h2>
          <p className="text-muted-foreground leading-relaxed">
            Shoulder arthritis is a common condition which can lead to pain, stiffness, and limitations in function. Cartilage normally lines the outside of the humerus (ball) and glenoid (socket). Cartilage rubbing on cartilage is smoother than ice rubbing on ice. Furthermore, cartilage has no nerve endings, so it provides a very smooth, pain-free surface.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When the cartilage wears down, the underlying bone is rough and has nerve endings, so when bone rubs on bone it can be very rough and painful. As a result of this, many patients develop pain and stiffness which limits their daily activity, sleep, and quality of life.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Symptoms</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Patients with shoulder arthritis typically experience:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Pain in the shoulder joint</li>
            <li>• Stiffness and reduced range of motion</li>
            <li>• Difficulty sleeping, especially lying on the affected side</li>
            <li>• Limitations with daily activities</li>
            <li>• Clicking, catching, or grinding sensations (crepitus)</li>
            <li>• Rarely, a sensation of the shoulder &quot;slipping&quot;</li>
            <li>• Occasional swelling of the shoulder</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            When these symptoms persist, they can dramatically impact one&apos;s quality of life. It is not uncommon for patients to experience fluctuations in the severity of their symptoms over time.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Diagnosis</h2>
          <p className="text-muted-foreground leading-relaxed">
            Shoulder arthritis can be easily diagnosed with standard X-rays. An MRI is not necessary to diagnose shoulder arthritis and is often never needed for patients with shoulder arthritis.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A CT scan will be obtained prior to surgery to better evaluate the patient&apos;s arthritis and aid in pre-operative planning for shoulder replacement surgery.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Treatment Options</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            There are a variety of treatment options for patients with symptomatic shoulder arthritis:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Medications</h3>
              <p className="text-sm text-muted-foreground">
                Tylenol and NSAIDs are often very effective medications to help patients who are mildly symptomatic. Taking these medications before bed and prior to certain activities that exacerbate symptoms can be quite helpful.
              </p>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Injections</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Injections are another helpful treatment for arthritis. Cortisone injections are the gold-standard treatment for shoulder arthritis, however, occasionally other types of injections may be used.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Important considerations:</strong>
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6 mt-2">
                <li>• Use injections sparingly with at least 4 months between injections</li>
                <li>• Patients must wait 3-4 months after an injection before having surgery to minimize infection risk</li>
              </ul>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Physical Therapy</h3>
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Physical therapy is not recommended for patients with shoulder arthritis as this has not been shown to have significant benefits and can often worsen patients&apos; symptoms.
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold mb-2">Surgical Treatment</h3>
              <p className="text-sm text-muted-foreground">
                When conservative treatments fail to provide adequate relief, shoulder replacement surgery may be recommended. The type of replacement (anatomic total shoulder replacement or reverse shoulder replacement) depends on the condition of your rotator cuff and other factors.
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
              <CardTitle className="text-lg">Anatomic Total Shoulder Replacement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                For patients with arthritis and an intact rotator cuff. Restores pain-free motion and function.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-procedures/anatomic-total-shoulder-replacement">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Reverse Shoulder Replacement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                For patients with rotator cuff tear arthropathy. Gold standard when the rotator cuff is deficient.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-procedures/reverse-shoulder-replacement">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Questions About Shoulder Arthritis?</h3>
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
