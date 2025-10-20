import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Shoulder Procedures Overview | Dr. Jacob Kirsch",
  description: "Overview of shoulder procedures performed by Dr. Kirsch.",
};

export default function ShoulderProceduresOverviewPage() {
  return (
    <div className="container py-16 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">Shoulder Procedures</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
        <p className="leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dr. Kirsch performs a comprehensive range of shoulder procedures.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Rotator Cuff Repair</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-procedures/rotator-cuff-repair">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shoulder Replacement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-procedures/anatomic-total-shoulder-replacement">Learn More</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shoulder Stabilization</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/shoulder-procedures/shoulder-stabilization">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Ready to Learn More?</h3>
        <p className="text-muted-foreground">
          Schedule a consultation to discuss your treatment options
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
