import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Preparing for Surgery | Dr. Jacob Kirsch",
  description: "How to prepare for shoulder surgery with Dr. Kirsch.",
};

export default function PreparingForSurgeryPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Preparing for Surgery</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
        <p className="leading-relaxed text-lg">
          Proper preparation is essential for a successful surgical outcome.
        </p>
      </div>

      <section className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Before Surgery</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Follow all pre-operative instructions provided by Dr. Kirsch and his team.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Questions About Your Surgery?</h3>
        <p className="text-muted-foreground">
          Contact our office for more information
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
