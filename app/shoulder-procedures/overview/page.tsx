import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Shoulder Procedures Overview | Dr. Jacob Kirsch",
  description: "Comprehensive overview of shoulder procedures performed by Dr. Kirsch, from arthroscopic repairs to complex shoulder replacements and revision surgeries.",
};

export default function ShoulderProceduresOverviewPage() {
  return (
    <div className="container py-16 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">Shoulder Procedures</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
        <p className="leading-relaxed text-lg">
          The shoulder is a complex joint composed of the humerus (upper arm bone), scapula (shoulder blade), and clavicle (collarbone), with the glenohumeral joint being the primary articulation. Stability and movement are provided by both static structures (like the labrum, joint capsule, and ligaments) and dynamic structures, most notably the rotator cuff muscles (supraspinatus, infraspinatus, teres minor, and subscapularis) and the deltoid.
        </p>
        <p className="leading-relaxed text-lg">
          A variety of surgical procedures are available to address shoulder conditions, ranging from minimally invasive arthroscopic techniques to more extensive open surgeries. Arthroscopic procedures, performed through small incisions using a camera and specialized instruments, are commonly used to treat rotator cuff tears, labral injuries, biceps tendon pathology, and shoulder instability. Open procedures are typically reserved for more severe or complex cases, including shoulder arthroplasty (replacement), which may be anatomic or reverse depending on the integrity of the rotator cuff. Each surgical option is tailored to the patient&apos;s specific pathology, functional demands, and overall health, with the goal of relieving pain, restoring mobility, and improving quality of life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Rotator Cuff Repair</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Arthroscopic repair of torn rotator cuff tendons using suture anchors and specialized techniques, often with biological augmentation for optimal healing.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-procedures/rotator-cuff-repair">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Anatomic Total Shoulder Replacement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Replacement of the ball and socket with prosthetic components for patients with arthritis and an intact rotator cuff, restoring pain-free motion.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-procedures/anatomic-total-shoulder-replacement">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Reverse Shoulder Replacement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Gold standard for patients with rotator cuff tear arthropathy, utilizing the deltoid muscle to restore function when the rotator cuff is deficient.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-procedures/reverse-shoulder-replacement">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Revision Shoulder Replacement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Complex procedure for failed previous shoulder replacements due to loosening, infection, instability, or other complications requiring specialized expertise.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-procedures/revision-shoulder-replacement">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Tendon Transfer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Advanced procedure transferring healthy tendons to restore shoulder function in patients with massive irreparable rotator cuff tears, particularly lower trapezius transfer.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-procedures/tendon-transfer">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Shoulder Stabilization</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Repair of torn labrum and capsule for recurrent shoulder dislocations, including arthroscopic Bankart repair and open Latarjet procedure for bone loss cases.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-procedures/shoulder-stabilization">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Biceps Tenodesis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Release of the biceps tendon from the labrum and reattachment to the humerus for biceps tendonitis and SLAP tears, providing reliable pain relief.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-procedures/biceps-tenodesis">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Fracture Treatment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Management of shoulder fractures ranging from non-operative care to surgical fixation or replacement, depending on fracture pattern and patient factors.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-procedures/fracture-treatment">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>AC Joint Stabilization</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Ligament reconstruction with graft and heavy suture for high-grade AC joint separations that fail conservative treatment or cause persistent symptoms.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-procedures/ac-joint-stabilization">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Subacromial Decompression</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Arthroscopic removal of inflamed bursa and bone spurs to relieve shoulder impingement and bursitis that hasn&apos;t responded to conservative treatment.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-procedures/shoulder-bursitis-impingement">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Ready to Discuss Your Treatment Options?</h3>
        <p className="text-muted-foreground">
          Schedule a consultation with Dr. Kirsch to learn about the best surgical approach for your condition
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
