import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Our Team | Dr. Jacob Kirsch",
  description: "Meet the dedicated team supporting Dr. Kirsch in providing exceptional shoulder care.",
};

export default function TeamPage() {
  return (
    <div className="container py-16 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
        <p className="leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Team Members */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Meet Our Team</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <Card>
            <div className="bg-muted h-64 rounded-t-lg flex items-center justify-center">
              <p className="text-muted-foreground">Team Photo</p>
            </div>
            <CardHeader>
              <CardTitle>Lorem Ipsum</CardTitle>
              <p className="text-sm text-muted-foreground">Practice Manager</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </CardContent>
          </Card>

          {/* Team Member 2 */}
          <Card>
            <div className="bg-muted h-64 rounded-t-lg flex items-center justify-center">
              <p className="text-muted-foreground">Team Photo</p>
            </div>
            <CardHeader>
              <CardTitle>Dolor Sit</CardTitle>
              <p className="text-sm text-muted-foreground">Medical Assistant</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
            </CardContent>
          </Card>

          {/* Team Member 3 */}
          <Card>
            <div className="bg-muted h-64 rounded-t-lg flex items-center justify-center">
              <p className="text-muted-foreground">Team Photo</p>
            </div>
            <CardHeader>
              <CardTitle>Amet Consectetur</CardTitle>
              <p className="text-sm text-muted-foreground">Patient Coordinator</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* CTA Section */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Ready to meet our team?</h3>
        <p className="text-muted-foreground">
          Schedule a consultation today
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Book a Consultation</Link>
        </Button>
      </div>
    </div>
  );
}
