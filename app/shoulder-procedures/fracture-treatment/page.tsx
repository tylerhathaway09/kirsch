import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { TableOfContents } from "@/components/layout/TableOfContents";

export const metadata = {
  title: "Fracture Treatment | Dr. Jacob Kirsch",
  description: "Information about shoulder fracture treatment options ranging from conservative care to surgical fixation and shoulder replacement.",
};
const sections = [
  { id: "overview", title: "Overview" },
  { id: "types", title: "Types of Shoulder Fractures" },
  { id: "treatment", title: "Treatment Options" },
  { id: "recovery", title: "Recovery" },
  { id: "expectations", title: "What to Expect" },
];


export default function FractureTreatmentPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
      <h1 className="text-4xl font-bold mb-8">Fracture Treatment</h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section id="overview" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Shoulder fractures involve broken bones in the shoulder complex, most commonly affecting the proximal humerus (upper arm bone), clavicle (collarbone), or scapula (shoulder blade). Treatment depends on the type, location, and severity of the fracture, as well as the patient&apos;s age, activity level, and bone quality.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Dr. Kirsch has extensive experience treating all types of shoulder fractures, from simple non-displaced fractures managed conservatively to complex comminuted fractures requiring advanced surgical techniques including fracture fixation or shoulder replacement.
          </p>
        </section>

        <Separator className="my-8" />

        <section id="types" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">Types of Shoulder Fractures</h2>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Proximal Humerus Fractures</h3>
              <p className="text-sm text-muted-foreground">
                Most common shoulder fractures, especially in elderly patients with osteoporosis. These fractures occur at the top of the upper arm bone, near the shoulder joint. They can range from simple cracks to complex multi-part fractures involving the joint surface.
              </p>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Clavicle Fractures</h3>
              <p className="text-sm text-muted-foreground">
                More common in younger, active individuals from falls or direct trauma. The clavicle (collarbone) connects the shoulder to the chest and is visible just beneath the skin. Fractures typically occur in the middle third of the bone.
              </p>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Scapula Fractures</h3>
              <p className="text-sm text-muted-foreground">
                Less common and usually result from high-energy trauma such as motor vehicle accidents. The scapula (shoulder blade) is protected by thick muscles, so significant force is required to cause a fracture.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section id="treatment" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">Treatment Options</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Treatment is highly individualized based on multiple factors including fracture pattern, displacement, patient age, bone quality, and functional demands.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Conservative (Non-Surgical) Treatment</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Many nondisplaced or minimally displaced fractures can be successfully treated without surgery:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Immobilization in a sling for comfort and protection</li>
                <li>• Pain management with medications</li>
                <li>• Early gentle range of motion exercises to prevent stiffness</li>
                <li>• Gradual rehabilitation as healing progresses</li>
                <li>• Regular X-rays to monitor healing</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                Many proximal humerus fractures can heal well without surgery, especially in older patients with lower functional demands.
              </p>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Surgical Fixation</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Displaced or unstable fractures may require surgical stabilization:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• <strong>Plate and screw fixation:</strong> Metal plate attached to the bone with screws to hold fragments in proper alignment</li>
                <li>• <strong>Intramedullary nailing:</strong> Rod placed inside the bone to stabilize the fracture</li>
                <li>• <strong>Pin fixation:</strong> Pins or wires used to hold bone fragments together</li>
                <li>• <strong>Tension band wiring:</strong> Specialized technique for certain fracture patterns</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                The goal is to restore normal anatomy, allow early motion, and achieve solid healing for optimal function.
              </p>
            </div>

            <div className="p-4 bg-primary/5 rounded-lg">
              <h3 className="font-semibold mb-2">Shoulder Replacement for Fractures</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Complex fractures, especially in older patients, may be best treated with shoulder replacement:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                <li>• Severe comminution (many bone fragments)</li>
                <li>• Fractures involving the joint surface</li>
                <li>• Fractures with disrupted blood supply to the humeral head</li>
                <li>• Osteoporotic bone that won&apos;t hold fixation</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                Reverse shoulder replacement is often preferred for fractures in elderly patients, providing reliable pain relief and functional improvement even when the rotator cuff is damaged.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section id="recovery" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">Recovery</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Recovery varies significantly based on the treatment method and fracture severity.
          </p>

          <div className="grid gap-4">
            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Conservative Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Most fractures heal within 6-12 weeks. Early gentle motion is important to prevent stiffness while protecting the healing bone. Strengthening begins once the fracture has healed, typically around 8-12 weeks. Full recovery may take 4-6 months.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Surgical Fixation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Surgery allows earlier motion since the fracture is stabilized. Physical therapy typically begins 2-4 weeks after surgery. Bone healing takes 8-12 weeks. Return to full activities usually occurs at 4-6 months depending on the fracture pattern and healing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Shoulder Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Recovery follows similar protocols to shoulder replacement for arthritis. Motion begins early, typically within 4-6 weeks. Full recovery takes 6-12 months. Outcomes are generally good for pain relief, though function may be somewhat limited compared to replacement for arthritis.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-8" />

        <section id="expectations" className="scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4">What to Expect</h2>

          <div className="space-y-4">
            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Choosing the Right Treatment</h3>
              <p className="text-sm text-muted-foreground">
                Dr. Kirsch will thoroughly evaluate your fracture using physical examination and advanced imaging (X-rays, CT scans) to determine the best treatment approach. The decision considers your age, activity level, bone quality, fracture pattern, and overall health.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Importance of Early Motion</h3>
              <p className="text-sm text-muted-foreground">
                Regardless of treatment method, early gentle motion is critical to prevent shoulder stiffness. Physical therapy plays a vital role in achieving optimal outcomes after shoulder fractures.
              </p>
            </div>

            <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h3 className="font-semibold mb-2">Outcomes</h3>
              <p className="text-sm text-muted-foreground">
                Most patients achieve good functional outcomes after shoulder fractures with appropriate treatment. Younger patients with simple fractures typically return to full activities. Older patients with complex fractures can achieve excellent pain relief and functional independence for daily activities.
              </p>
            </div>
          </div>
        </section>
      </div>
      </div>

      <Separator className="my-12" />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Related Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Shoulder Fractures</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn more about different types of shoulder fractures, symptoms, and diagnosis.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-conditions/shoulder-fractures">Shoulder Fractures</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Reverse Shoulder Replacement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about reverse shoulder replacement for complex proximal humerus fractures.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/shoulder-procedures/reverse-shoulder-replacement">Reverse Replacement</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Preparing for Surgery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Important information about pre-operative testing, medications, and home preparation.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/patient-resources/preparing-for-surgery">Pre-Surgery Guide</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Physical Therapy Protocols</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Understanding the importance of early motion and rehabilitation after fractures.
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
        <h3 className="text-2xl font-semibold">Questions About Fracture Treatment?</h3>
        <p className="text-muted-foreground">
          Schedule a consultation with Dr. Kirsch to discuss the best treatment option for your fracture
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
          </div>

        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />
      </div>
    </div>
  );
}
