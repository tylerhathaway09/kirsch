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
          Our team is dedicated to providing an exceptional patient experience through personalized attention, open communication, and compassionate care. We understand that you have many choices when it comes to your orthopedic care, and we are truly honored that you&apos;ve placed your trust in us.
        </p>

        <p className="leading-relaxed">
          From your first visit to your final follow-up, our goal is to make the process as smooth, supportive, and stress-free as possible. Dr. Kirsch, Tessa, and Michelle are always available to answer your questions, guide you through your care plan, and ensure that you feel confident and cared for every step of the way.
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
