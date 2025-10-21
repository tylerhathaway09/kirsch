import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Research and Education | Dr. Jacob Kirsch",
  description: "Learn about Dr. Kirsch's contributions to shoulder surgery research and medical education.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "contributions", title: "Educational Contributions" },
];

export default function ResearchAndEducationPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Research and Education</h1>

          {/* Overview */}
          <section id="overview" className="scroll-mt-24">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="leading-relaxed text-lg">
                Dr. Kirsch is deeply committed to advancing the standard of high-quality, evidence-based shoulder care through both research and education. Central to his practice is the belief that outstanding patient care depends on continual learning, innovation, and collaboration.
              </p>

              <p className="leading-relaxed">
                He integrates cutting-edge research into everyday practice by collecting patient-reported outcomes from all surgical cases. This data helps evaluate and improve treatment results, contributing to published studies that shape the future of shoulder surgery.
              </p>

              <p className="leading-relaxed">
                Education is also a cornerstone of Dr. Kirsch&apos;s approach, both for physicians and for patients. He mentors the next generation of orthopedic surgeons through teaching and research, while also empowering patients to make informed decisions. By working together to create a personalized treatment plan grounded in the latest evidence and tailored to each individual&apos;s goals, Dr. Kirsch ensures every patient receives the most effective care possible.
              </p>

              <p className="leading-relaxed">
                To support this, we&apos;ve assembled a collection of patient resources that provide clear, easy-to-understand information about common shoulder conditions and their treatment options.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Education Activities */}
          <section id="contributions" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-bold">Educational Contributions</h2>

            <div className="space-y-4">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Academic Appointments</h3>
                <p className="text-muted-foreground">
                  Assistant Professor of Orthopedic Surgery, Tufts University School of Medicine
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Fellowship Training</h3>
                <p className="text-muted-foreground">
                  Educator for Massachusetts General Hospital and New England Baptist Shoulder Fellowships
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Residency Education</h3>
                <p className="text-muted-foreground">
                  Active educator with the Tufts University Orthopedic Residency program
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Publications</h3>
                <p className="text-muted-foreground">
                  More than 75 peer-reviewed scientific papers and contributions to more than 13 textbooks
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* CTA Section */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Learn More About Our Research</h3>
            <p className="text-muted-foreground">
              View our complete research publications and contributions
            </p>
            <Button asChild size="lg">
              <Link href="/research/dr-kirsch-research">View Research</Link>
            </Button>
          </div>
        </div>

        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />
      </div>
    </div>
  );
}
