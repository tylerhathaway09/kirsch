import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
  title: "Post-Operative Instructions | Dr. Jacob Kirsch",
  description: "Post-operative care instructions for shoulder surgery patients.",
};

export default function PostOperativeInstructionsPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Post-Operative Instructions</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
        <p className="leading-relaxed text-lg">
          Following post-operative instructions carefully is crucial for optimal healing and recovery.
        </p>
      </div>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Need Assistance?</h3>
        <p className="text-muted-foreground">
          Contact our office if you have questions about your post-operative care
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
