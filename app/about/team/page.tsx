import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Our Team | Dr. Jacob Kirsch",
  description: "Meet the dedicated team supporting Dr. Kirsch in providing exceptional shoulder care.",
};

const sections = [
  { id: "philosophy", title: "Team Philosophy" },
  { id: "members", title: "Meet Our Team" },
];

export default function TeamPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />



        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Our Team</h1>

          {/* Team Philosophy */}
          <section id="philosophy" className="scroll-mt-24">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
              <p className="leading-relaxed text-lg italic">
                &quot;The Team, The Team, The Team.&quot; - Bo Schembechler
              </p>
              <p className="leading-relaxed">
                The legendary Michigan football coach Bo Schembechler said it best when he said, &quot;The Team, The Team, The Team.&quot; These words are written on the bannisters underneath the University of Michigan stadium, to provide an important reminder to the athletes as they take the field, that ultimate success depends on your team.
              </p>
              <p className="leading-relaxed">
                Similarly, our ability to be the premier provider of shoulder care in our region depends on the success of our team. We work together to ensure that you have the best possible experience and outcome.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Team Members */}
          <section id="members" className="scroll-mt-24 space-y-8">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Tessa Lilley */}
              <Card className="p-0 overflow-hidden">
                <div className="bg-muted h-64 flex items-center justify-center">
                  <p className="text-muted-foreground">Team Photo</p>
                </div>
                <CardHeader>
                  <CardTitle>Tessa Lilley, PA-C</CardTitle>
                  <p className="text-sm text-muted-foreground">Physician Assistant</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Tessa Lilley is a physician assistant who works with Dr. Jacob Kirsch. She completed her Bachelor of Science in Biology with a concentration in pre-med from the University of Maine and her Master of Physician Assistant Studies at Northeastern University in Boston.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    She assists Dr. Kirsch in surgery and will directly interface with you throughout the management of your shoulder condition. She also provides several nonoperative treatment modalities (ie. Injections). She is available to answer your questions throughout the perioperative course.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    She can be contacted through the patient portal, by calling Michelle&apos;s direct number, or by calling the main office number: <a href="tel:7818902133" className="text-primary hover:underline">781-890-2133</a>.
                  </p>
                </CardContent>
              </Card>

              {/* Michelle Milks */}
              <Card className="p-0 overflow-hidden">
                <div className="bg-muted h-64 flex items-center justify-center">
                  <p className="text-muted-foreground">Team Photo</p>
                </div>
                <CardHeader>
                  <CardTitle>Michelle Milks</CardTitle>
                  <p className="text-sm text-muted-foreground">Surgical Coordinator</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Michelle handles all surgery, imaging and procedure scheduling for Dr. Kirsch. She is the bridge between patient and provider.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    She is able to answer common logistical questions before and after surgery, as well as connect patients with the team to answer any clinical questions.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Michelle can be reached at <a href="tel:6177515242" className="text-primary hover:underline">617-751-5242</a>
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
      </div>
    </div>
  );
}
