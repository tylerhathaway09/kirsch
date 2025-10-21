import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Dr. Kirsch's Research | Jacob Kirsch, MD",
  description: "Publications and research contributions by Dr. Jacob Kirsch.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "publications", title: "Publications" },
  { id: "research-interests", title: "Research Interests" },
];

export default function DrKirschResearchPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />



        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Dr. Kirsch&apos;s Research</h1>

          <section id="overview" className="scroll-mt-24">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
              <p className="leading-relaxed text-lg">
                Dr. Kirsch has authored more than 75 peer-reviewed scientific papers and contributed to more than 13 textbooks on shoulder surgery and orthopedics. His research focuses on improving outcomes for patients with shoulder conditions.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          <div className="space-y-8">
            <section id="publications" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6">Publications</h2>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Dr. Kirsch has authored more than 75 peer-reviewed scientific papers and contributed to more than a dozen textbooks on shoulder surgery and orthopedics. His research spans a wide range of topics in shoulder care, including rotator cuff repair, shoulder replacement outcomes, surgical techniques, and patient-reported outcomes.
                  </p>
                  <p className="text-muted-foreground">
                    He serves as a clinical reviewer for prestigious journals including the Journal of Shoulder and Elbow Surgery, and regularly presents his research at national and international conferences.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="research-interests" className="scroll-mt-24">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Research Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Shoulder replacement surgery and outcomes</li>
                    <li>• Rotator cuff repair techniques and healing</li>
                    <li>• Revision shoulder surgery</li>
                    <li>• Tendon transfer procedures</li>
                    <li>• Patient-reported outcome measures</li>
                    <li>• Surgical techniques and innovations</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="p-6 bg-accent/10 rounded-lg border border-accent/20 mt-6">
                <p className="text-sm text-muted-foreground">
                  For a complete list of publications or to request copies of specific research papers, please contact our office.
                </p>
              </div>
            </section>
          </div>

          <Separator className="my-12" />

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Interested in Learning More?</h3>
            <p className="text-muted-foreground">
              Contact us to discuss your shoulder care needs
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
