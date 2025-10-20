import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
  title: "Patient Experience | Dr. Jacob Kirsch",
  description: "Learn about the patient experience at Dr. Kirsch's practice.",
};

export default function PatientExperiencePage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Patient Experience</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        <p className="leading-relaxed text-lg">
          Our team is committed to provide an unmatched patient experience through dedicated service and unwavering support. We recognize that there are many providers in our region, and we are honored that you have chosen our team to help you navigate your shoulder condition.
        </p>

        <p className="leading-relaxed">
          We take that responsibility seriously. Dr. Kirsch, Tessa and Michelle are all available to help answer your questions and ensure that this process is as seamless as possible.
        </p>
      </div>

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
  );
}
