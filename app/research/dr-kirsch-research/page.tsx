import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Dr. Kirsch's Research | Jacob Kirsch, MD",
  description: "Publications and research contributions by Dr. Jacob Kirsch.",
};

export default function DrKirschResearchPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Dr. Kirsch&apos;s Research</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
        <p className="leading-relaxed text-lg">
          Dr. Kirsch has authored more than 75 peer-reviewed scientific papers and contributed to more than 13 textbooks on shoulder surgery and orthopedics. His research focuses on improving outcomes for patients with shoulder conditions.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Selected Publications</h2>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Lorem Ipsum Dolor Sit Amet</CardTitle>
            <p className="text-sm text-muted-foreground">Journal of Shoulder and Elbow Surgery, 2024</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Consectetur Adipiscing Elit</CardTitle>
            <p className="text-sm text-muted-foreground">American Journal of Sports Medicine, 2023</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Duis Aute Irure Dolor</CardTitle>
            <p className="text-sm text-muted-foreground">Journal of Bone and Joint Surgery, 2023</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Interested in Learning More?</h3>
        <p className="text-muted-foreground">
          Contact us to discuss your shoulder care needs
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
