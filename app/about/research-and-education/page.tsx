import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Research and Education | Dr. Jacob Kirsch",
  description: "Learn about Dr. Kirsch's contributions to shoulder surgery research and medical education.",
};

export default function ResearchAndEducationPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Research and Education</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        <p className="leading-relaxed text-lg">
          Dr. Kirsch is highly committed to raising the bar of high-quality patient care through research and education. Foundational to his practice is the commitment to provide evidence-based patient care, perform cutting-edge research, and offer interdisciplinary education to the next generation of physicians.
        </p>

        <p className="leading-relaxed">
          Dr. Kirsch accomplishes this through collecting patient reported data from all his surgical cases, as well as publishing research to advance the field. Dr. Kirsch&apos;s academic work includes more than 75 peer-reviewed scientific papers and contributions to more than 13 textbooks on shoulder surgery and orthopedics.
        </p>

        <p className="leading-relaxed">
          Another core element of education is developed through partnering with patients to help formulate an individualized treatment plan based on the pathology and the available evidence-based treatment options. To that end, we have assembled various resources to help provide a more comprehensive understanding of common shoulder conditions and the possible treatment options.
        </p>
      </div>

      <Separator className="my-12" />

      {/* Education Activities */}
      <section className="space-y-6">
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
  );
}
