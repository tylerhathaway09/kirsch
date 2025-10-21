import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Shoulder Conditions Overview | Dr. Jacob Kirsch",
  description: "Comprehensive overview of shoulder conditions treated by Dr. Kirsch, including rotator cuff tears, arthritis, instability, fractures, and more.",
};

const sections = [
  { id: "overview", title: "Overview" },
];

export default function ShoulderConditionsOverviewPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />



        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Shoulder Conditions</h1>

          <section id="overview" className="scroll-mt-24">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
              <p className="leading-relaxed text-lg">
                Dr. Kirsch has a specialty practice focusing exclusively on treating all conditions of the shoulder. This ranges from non-operative management of strains and rotator cuff disorders to the complex surgical management of arthritis, shoulder instability, rotator cuff tears and revision surgery. The information here is designed to provide a helpful resource pertaining to some of the most common conditions that Dr. Kirsch takes care of.
              </p>
            </div>
          </section>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Rotator Cuff Tears</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              One of the most common causes of shoulder pain, ranging from inflammation to complete tears. Treatment options include both non-operative care and surgical repair.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-conditions/rotator-cuff-tear">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Shoulder Arthritis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Wear and tear of cartilage leading to pain, stiffness, and limited function. Treatment ranges from medications to shoulder replacement surgery.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-conditions/shoulder-arthritis">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Cuff Tear Arthropathy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              A complex condition combining a massive rotator cuff tear with arthritis. Often requires reverse shoulder replacement for optimal outcomes.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-conditions/cuff-tear-arthropathy">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Shoulder Instability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Occurs when structures keeping the shoulder stable are compromised, leading to dislocations or feeling of the shoulder slipping out of place.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-conditions/shoulder-instability">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Biceps Tendonitis / Superior Labral Injury</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Inflammation or injury to the biceps tendon and labrum, often seen in overhead athletes. May require biceps tenodesis surgery.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-conditions/biceps-tendonitis">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Shoulder Fractures</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Broken bones in the shoulder from trauma, including proximal humerus, clavicle, and scapula fractures. Treatment ranges from conservative to surgical.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-conditions/shoulder-fractures">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>AC Joint Injury</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Damage to the acromioclavicular joint from direct trauma, common in contact sports. Most cases can be managed non-operatively.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-conditions/ac-joint-injury">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Shoulder Bursitis / Impingement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Inflammation of the bursa or impingement of tendons causing pain with overhead activities. Often responds well to conservative treatment.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-conditions/shoulder-bursitis-impingement">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Frozen Shoulder</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Progressive stiffness and pain due to capsule thickening. More common in diabetics. Early recognition allows for more effective treatment.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-conditions/frozen-shoulder">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Calcific Tendinitis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Calcium deposits in the rotator cuff tendons causing acute or chronic pain. Treatment options range from therapy to surgical removal.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-conditions/calcific-tendinitis">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

          <Separator className="my-12" />

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Have Questions About Your Shoulder Condition?</h3>
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
