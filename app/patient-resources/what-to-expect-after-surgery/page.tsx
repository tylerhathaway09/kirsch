import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
  title: "What To Expect After Surgery | Dr. Jacob Kirsch",
  description: "Learn what to expect during recovery after shoulder surgery.",
};

export default function WhatToExpectAfterSurgeryPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">What To Expect After Surgery</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
        <p className="leading-relaxed text-lg">
          Understanding the recovery process helps ensure the best possible outcome after shoulder surgery.
        </p>
      </div>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Questions About Recovery?</h3>
        <p className="text-muted-foreground">
          Contact our office to discuss your recovery expectations
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
