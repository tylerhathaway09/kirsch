import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Patient Education Videos | Dr. Jacob Kirsch",
  description: "Educational videos about shoulder conditions, treatments, and recovery.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "coming-soon", title: "Coming Soon" },
];

export default function PatientEducationVideosPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Patient Education Videos</h1>

          <section id="overview" className="scroll-mt-24">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
              <p className="leading-relaxed text-lg">
                Watch educational videos to learn more about shoulder conditions, surgical procedures, and recovery processes.
              </p>
            </div>
          </section>

          <section id="coming-soon" className="scroll-mt-24">
            <div className="text-center py-16 bg-muted rounded-lg">
              <p className="text-muted-foreground mb-4">
                Educational video content coming soon
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Have Questions?</h3>
            <p className="text-muted-foreground">
              Contact our office to learn more about your condition
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />
      </div>
    </div>
  );
}
