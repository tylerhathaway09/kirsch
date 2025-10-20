import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Cuff Tear Arthropathy | Dr. Jacob Kirsch",
  description: "Information about rotator cuff tear arthropathy, a complex condition combining massive rotator cuff tears with shoulder arthritis, and treatment with reverse shoulder replacement.",
};

export default function CuffTearArthropathyPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Cuff Tear Arthropathy</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-3xl font-semibold mb-4">Background</h2>
          <p className="text-muted-foreground leading-relaxed">
            Rotator cuff tear arthropathy is a complex shoulder condition that arises from a massive, chronic rotator cuff tear combined with degenerative changes in the glenohumeral joint. Over time, the absence of functional rotator cuff muscles leads to abnormal joint mechanics, superior migration of the humeral head, and progressive cartilage loss.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This condition primarily affects older adults and is often the result of long-standing, untreated rotator cuff tears that cause joint instability and degeneration of the shoulder. Patients develop progressive mechanical dysfunction of the shoulder secondary to a lack of rotator cuff function and then develop arthritic changes as a consequence.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Symptoms</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Patients with rotator cuff tear arthropathy typically present with:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Chronic shoulder pain</li>
            <li>• Reduced range of motion</li>
            <li>• Significant weakness, particularly in lifting the arm overhead</li>
            <li>• <strong>Pseudoparalysis</strong> - inability to actively raise the arm despite no true neurological deficit</li>
            <li>• Night pain</li>
            <li>• Difficulty with daily activities (grooming, reaching overhead)</li>
            <li>• Shoulder instability or crepitus with movement</li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Diagnosis</h2>
          <p className="text-muted-foreground leading-relaxed">
            Diagnosis of rotator cuff tear arthropathy involves a combination of clinical evaluation and imaging studies. Physical examination may reveal limited active range of motion, muscle atrophy, and signs of impingement.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            X-rays typically show superior migration of the humeral head, narrowed joint space, and acetabularization of the acromion. An MRI is not necessary when you have these changes on plain radiographs, however, it may be helpful early in the disease process. A CT scan is obtained when surgery is being considered to help guide surgical planning.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Treatment Options</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Management of rotator cuff tear arthropathy depends on symptom severity, functional impairment, and patient health status.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Conservative Treatment</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Conservative treatments may provide temporary relief in mild cases:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Physical therapy</li>
                <li>• Activity modification</li>
                <li>• Anti-inflammatory medications</li>
                <li>• Anterior deltoid strengthening protocol for patients with mild symptoms</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold mb-2">Surgical Treatment</h3>
              <p className="text-sm text-muted-foreground">
                <strong>Reverse shoulder arthroplasty is the gold standard</strong> for advanced cases of rotator cuff tear arthropathy. This innovative procedure relies on the deltoid muscle rather than the rotator cuff to restore shoulder function, providing excellent pain relief and functional improvement for patients with significant pain and dysfunction.
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
            <CardTitle className="text-lg">Reverse Shoulder Replacement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Learn about reverse shoulder replacement, the gold standard treatment for rotator cuff tear arthropathy.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-procedures/reverse-shoulder-replacement">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Questions About Cuff Tear Arthropathy?</h3>
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
