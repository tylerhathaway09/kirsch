import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Shoulder Fractures | Dr. Jacob Kirsch",
  description: "Comprehensive information about shoulder fractures including proximal humerus, clavicle, and scapula fractures, their symptoms, diagnosis, and treatment options.",
};

export default function ShoulderFracturesPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Shoulder Fractures</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section>
          <h2 className="text-3xl font-semibold mb-4">Background</h2>
          <p className="text-muted-foreground leading-relaxed">
            Trauma to the shoulder can result in a fracture or broken bone. This can involve several bones that make up the shoulder joint, most commonly the proximal humerus, clavicle, and scapula. These fractures often result from trauma such as falls, motor vehicle accidents, or high-impact sports injuries, and are particularly common in older adults with osteoporosis.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Proximal humerus fractures are the most frequently seen shoulder fractures, especially in elderly patients, while clavicle fractures are more common in younger, active individuals. The severity of the fracture can vary from nondisplaced cracks to complex, comminuted, or displaced fractures involving joint surfaces.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Symptoms</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Shoulder fractures typically present with:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li>• Sudden, severe pain following trauma</li>
            <li>• Swelling and bruising around the affected area</li>
            <li>• Visible deformity or bump over the fracture site</li>
            <li>• Limited range of motion</li>
            <li>• Inability to lift the arm or move the shoulder</li>
            <li>• Occasional numbness or tingling due to nerve involvement</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Pain is usually localized to the fracture site depending on the bone involved.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Diagnosis</h2>
          <p className="text-muted-foreground leading-relaxed">
            Diagnosis of shoulder fractures begins with a physical examination to assess for deformity, swelling, neurovascular status, and range of motion. Imaging is essential and typically starts with standard X-rays to identify the location, pattern, and displacement of the fracture.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In complex cases or when joint involvement is suspected, CT scans may be ordered to provide detailed visualization of the bony anatomy and assist in surgical planning.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-3xl font-semibold mb-4">Treatment Options</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Treatment of shoulder fractures depends on several factors:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
            <li>• Type, location, and severity of the fracture</li>
            <li>• Patient&apos;s age and activity level</li>
            <li>• Bone quality</li>
            <li>• Presence of joint surface involvement</li>
          </ul>

          <div className="space-y-4 mt-6">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Conservative Treatment</h3>
              <p className="text-sm text-muted-foreground">
                Many nondisplaced or minimally displaced fractures can be managed conservatively with immobilization in a sling, followed by gradual rehabilitation.
              </p>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Surgical Treatment</h3>
              <p className="text-sm text-muted-foreground">
                Displaced or complex fractures, particularly those involving the joint surface or associated with soft tissue injury, may require surgical intervention. Surgery may involve fixing the fracture in certain instances, or it may involve performing a shoulder replacement in more complex situations.
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
                Learn about surgical options for shoulder fractures, including fracture fixation and shoulder replacement procedures.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-procedures/fracture-treatment">Fracture Treatment</Link>
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
        <h3 className="text-2xl font-semibold">Questions About Shoulder Fractures?</h3>
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
