import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Research Philosophy | Dr. Jacob Kirsch",
  description: "Learn about Dr. Kirsch's research philosophy and approach.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "research-commitment", title: "Research Commitment" },
  { id: "education-training", title: "Education & Training" },
];

export default function ResearchPhilosophyPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />



        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Research Philosophy</h1>

          <section id="overview" className="scroll-mt-24">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="leading-relaxed text-lg">
                Dr. Kirsch is highly committed to raising the bar of high-quality patient care through research and education. Foundational to his practice is the commitment to provide evidence-based patient care, perform cutting-edge research, and offer interdisciplinary education to the next generation of physicians.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          <div className="space-y-8">
            <section id="research-commitment" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">Research Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Kirsch accomplishes this through collecting patient reported data from all his surgical cases, as well as publishing research to advance the field. His academic work includes more than 75 peer-reviewed scientific papers and contributions to more than 13 textbooks on shoulder surgery and orthopedics.
              </p>
            </section>

            <section id="education-training" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-4">Education & Training</h2>
              <p className="text-muted-foreground leading-relaxed">
                He is dedicated to training the next generation of shoulder surgeons and is involved as an educator with the Tufts University Orthopedic Residency program as well as in both the Massachusetts General Hospital and New England Baptist Shoulder Fellowships.
              </p>
            </section>
          </div>

          <Separator className="my-12" />

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">View Publications</h3>
            <p className="text-muted-foreground">
              Learn more about Dr. Kirsch&apos;s research contributions
            </p>
            <Button asChild size="lg">
              <Link href="/research/dr-kirsch-research">View Research</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
