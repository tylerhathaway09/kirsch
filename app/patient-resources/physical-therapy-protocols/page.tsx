import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
  title: "Physical Therapy Protocols | Dr. Jacob Kirsch",
  description: "Physical therapy protocols and rehabilitation guidelines for shoulder surgery recovery.",
};

export default function PhysicalTherapyProtocolsPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Physical Therapy Protocols</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
        <p className="leading-relaxed text-lg">
          Physical therapy is a critical component of recovery after shoulder surgery.
        </p>
      </div>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Questions About Therapy?</h3>
        <p className="text-muted-foreground">
          Contact our office to discuss physical therapy options
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
