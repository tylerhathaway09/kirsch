import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Rotator Cuff Tears | Dr. Jacob Kirsch",
  description: "Comprehensive information about rotator cuff tears, including causes, symptoms, diagnosis, and treatment options from leading shoulder specialist Dr. Jacob Kirsch.",
};

const sections = [
  { id: "background", title: "Background" },
  { id: "symptoms", title: "Symptoms" },
  { id: "diagnosis", title: "Diagnosis" },
  { id: "treatment", title: "Treatment Options" },
];

export default function RotatorCuffTearPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />



        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Rotator Cuff Tears</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section id="background" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Background</h2>
          <p className="text-muted-foreground leading-relaxed">
            Injuries to the rotator cuff are one of the most common causes of shoulder pain. Approximately 85% of all rotator cuff tears result from chronic wear-and-tear or degeneration of the tendon, whereas 15% result from acute traumatic injuries. Rotator cuff issues fall on a spectrum of pathology ranging from strains and inflammation (tendonitis/bursitis) to partial tears and complete full-thickness tears.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The rotator cuff consists of four separate muscle/tendon structures (Supraspinatus, Infraspinatus, Teres Minor, and Subscapularis), which stabilize the shoulder and allow for a wide range of shoulder movements. Each tendon of the rotator cuff attaches to a unique portion of the proximal humerus, which allows them to have specific functions, but also allows them to compensate for deficiencies elsewhere in the rotator cuff. Often, patients with rotator cuff injuries can have concomitant biceps injuries or tendonitis.
          </p>
            </section>

            <Separator className="my-8" />

            <section id="symptoms" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Symptoms</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Patients with rotator cuff issues frequently experience:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Pain over the outside of the shoulder or arm</li>
            <li>• Pain that is often worse at night and can disrupt sleep</li>
            <li>• Pain with overhead reaching, lifting, and pulling</li>
            <li>• Difficulty with daily activities and reduced quality of life</li>
            <li>• Referred pain radiating down the side of the arm to the elbow</li>
            <li>• Decreased strength in the shoulder</li>
            <li>• Reduced mobility and range of motion</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            <strong>Note:</strong> Pain going past the level of the elbow down to the hand is often not associated with a shoulder or rotator cuff injury.
          </p>
            </section>

            <Separator className="my-8" />

            <section id="diagnosis" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Diagnosis</h2>
          <p className="text-muted-foreground leading-relaxed">
            Diagnosis of a rotator cuff injury starts with a proper history and physical examination. Patients who sustain acute traumatic rotator cuff injuries will often report pain and a &quot;pop or snap&quot; after falling or lifting something, followed by difficulty lifting their arm.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Chronic or degenerative rotator cuff tears present with pain that is worse at night and with lifting the arm, often accompanied by decreased strength or reduced mobility. An MRI is used to confirm the diagnosis of a rotator cuff tear and also provides important information relating to the tendon and muscle quality, which may impact treatment options.
          </p>
            </section>

            <Separator className="my-8" />

            <section id="treatment" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold mb-4">Treatment Options</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Treatment for a rotator cuff tear depends on a variety of factors including:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
            <li>• The mechanism of injury (acute injury vs. chronic)</li>
            <li>• The extent of damage (partial vs. full-thickness tear)</li>
            <li>• Intrinsic factors relating to the rotator cuff muscle and tendon</li>
          </ul>

          <div className="space-y-4 mt-6">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Acute Traumatic Tears</h3>
              <p className="text-sm text-muted-foreground">
                Acute traumatic tears of the rotator cuff are often managed surgically. Dr. Kirsch&apos;s recent research looking at the largest series of patients in the literature with acute traumatic rotator cuff tears demonstrated that these patients do better with surgery closer to the time of their initial injury.
              </p>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Chronic/Degenerative Tears</h3>
              <p className="text-sm text-muted-foreground mb-3">
                However, 75% of patients with chronic or degenerative rotator cuff tears can do well without surgery. Treatment for these tears consists of:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Physical therapy</li>
                <li>• Anti-inflammatory medications</li>
                <li>• Occasionally a cortisone injection</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Important:</strong> There is emerging evidence that suggests multiple cortisone injections can have an adverse impact on rotator cuff healing, so multiple injections are not recommended.
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
                Learn about rotator cuff repair surgery, including arthroscopic techniques and recovery expectations.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-procedures/rotator-cuff-repair">Rotator Cuff Repair</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Preparing for Surgery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Important information about how to prepare for shoulder surgery, including medications and home preparation.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/patient-resources/preparing-for-surgery">Pre-Surgery Guide</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
          </section>

          <Separator className="my-12" />

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Questions About Rotator Cuff Tears?</h3>
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
