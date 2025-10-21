import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Patient Experience | Dr. Jacob Kirsch",
  description: "Learn about the patient experience at Dr. Kirsch's practice.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "our-commitment", title: "Our Commitment to You" },
];

export default function PatientExperiencePage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Patient Experience</h1>

          <section id="overview" className="scroll-mt-24">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="leading-relaxed text-lg">
                Our team is dedicated to providing an exceptional patient experience through personalized attention, open communication, and compassionate care. We understand that you have many choices when it comes to your orthopedic care, and we are truly honored that you&apos;ve placed your trust in us.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          <section id="our-commitment" className="scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Our Commitment to You</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed">
                From your first visit to your final follow-up, our goal is to make the process as smooth, supportive, and stress-free as possible. Dr. Kirsch, Tessa, and Michelle are always available to answer your questions, guide you through your care plan, and ensure that you feel confident and cared for every step of the way.
              </p>
            </div>
          </section>

          <Separator className="my-12" />

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Ready to get started?</h3>
            <p className="text-muted-foreground">
              Schedule a consultation today
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
