import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "AC Joint Injury | Dr. Jacob Kirsch",
  description: "Information about acromioclavicular (AC) joint injuries, including symptoms, diagnosis, and treatment options. Learn why 70% of patients improve without surgery.",
};

export default function ACJointInjuryPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">AC Joint Injury</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-3xl font-semibold mb-4">Background</h2>
          <p className="text-muted-foreground leading-relaxed">
            Acromioclavicular (AC) joint injuries involve damage to the ligaments that stabilize the joint between the acromion (part of the scapula) and the clavicle. These injuries are common in athletes and active individuals, particularly from direct trauma to the shoulder, such as a fall onto the shoulder or a collision in contact sports.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            AC joint injuries range from mild sprains to complete dislocations with significant ligament damage and clavicular displacement.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Symptoms</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Symptoms of AC joint injuries include:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Pain at the top of the shoulder, especially with arm movement or lifting</li>
            <li>• Swelling, bruising, and tenderness over the AC joint</li>
            <li>• Visible bump or deformity due to clavicle displacement (in severe injuries)</li>
            <li>• Limited shoulder motion</li>
            <li>• Sensation of instability or weakness during overhead activities</li>
            <li>• Pain with cross-body movements</li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Diagnosis</h2>
          <p className="text-muted-foreground leading-relaxed">
            Diagnosis of an AC joint injury begins with a clinical examination, noting tenderness, deformity, and pain with specific movements such as cross-body adduction. X-rays are typically used to evaluate the alignment of the clavicle and acromion and to classify the severity of the injury.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Advanced imaging such as an MRI is often not needed.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Treatment Options</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The vast majority of AC joint injuries can be managed non-operatively. Even high-grade (Type V) AC joint injuries can be successfully managed non-operatively in the majority of patients.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Non-Operative Treatment</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Non-operative treatment consists of:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Rest and ice application</li>
                <li>• NSAIDs for pain management</li>
                <li>• Sling immobilization</li>
                <li>• Physical therapy to restore range of motion and strength</li>
              </ul>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Evidence-Based Approach</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>70% success rate:</strong> Studies in active military cadets have demonstrated that 70% of them with high-grade AC joint injuries can resume active military duty without surgery.
              </p>
              <p className="text-sm text-muted-foreground">
                Furthermore, studies have demonstrated that there is no difference in the acute or delayed management of these injuries, so most patients should have a trial of non-operative treatment initially.
              </p>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Surgical Treatment</h3>
              <p className="text-sm text-muted-foreground">
                If surgery is required, ligament reconstruction with a graft and heavy suture is performed.
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
                Learn about AC joint stabilization surgery for cases that do not improve with conservative treatment.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-procedures/ac-joint-stabilization">AC Joint Stabilization</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Physical Therapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Understanding the role of physical therapy in recovering from AC joint injuries and restoring shoulder function.
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
        <h3 className="text-2xl font-semibold">Questions About AC Joint Injuries?</h3>
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
