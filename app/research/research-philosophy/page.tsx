import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
  title: "Research Philosophy | Dr. Jacob Kirsch",
  description: "Learn about Dr. Kirsch's research philosophy and approach.",
};

export default function ResearchPhilosophyPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Research Philosophy</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        <p className="leading-relaxed text-lg">
          Dr. Kirsch is highly committed to raising the bar of high-quality patient care through research and education. Foundational to his practice is the commitment to provide evidence-based patient care, perform cutting-edge research, and offer interdisciplinary education to the next generation of physicians.
        </p>

        <p className="leading-relaxed">
          Dr. Kirsch accomplishes this through collecting patient reported data from all his surgical cases, as well as publishing research to advance the field. His academic work includes more than 75 peer-reviewed scientific papers and contributions to more than 13 textbooks on shoulder surgery and orthopedics.
        </p>

        <p className="leading-relaxed">
          He is dedicated to training the next generation of shoulder surgeons and is involved as an educator with the Tufts University Orthopedic Residency program as well as in both the Massachusetts General Hospital and New England Baptist Shoulder Fellowships.
        </p>
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
  );
}
