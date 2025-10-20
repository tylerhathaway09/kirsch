import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Research and Education | Dr. Jacob Kirsch",
  description: "Learn about Dr. Kirsch's contributions to shoulder surgery research and medical education.",
};

export default function ResearchAndEducationPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Research and Education</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        <p className="leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dr. Kirsch&apos;s academic work includes more than 75 peer-reviewed scientific papers and contributions to more than 13 textbooks on shoulder surgery and orthopedics. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p className="leading-relaxed">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. He is dedicated to training the next generation of shoulder surgeons and is involved as an educator with the Tufts University Orthopedic Residency program as well as in both the Massachusetts General Hospital and New England Baptist Shoulder Fellowships.
        </p>

        <p className="leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Dr. Kirsch is a sought-after speaker, lecturing nationally and internationally on various shoulder conditions, and serves as a clinical reviewer for prestigious journals, including the Journal of Shoulder and Elbow Surgery.
        </p>
      </div>

      <Separator className="my-12" />

      {/* Research Areas */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Research Focus Areas</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Lorem Ipsum</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dolor Sit Amet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Consectetur Adipiscing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Elit Sed Do</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Education Activities */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Educational Contributions</h2>

        <div className="space-y-4">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Academic Appointments</h3>
            <p className="text-muted-foreground">
              Assistant Professor of Orthopedic Surgery, Tufts University School of Medicine
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Fellowship Training</h3>
            <p className="text-muted-foreground">
              Educator for Massachusetts General Hospital and New England Baptist Shoulder Fellowships
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Residency Education</h3>
            <p className="text-muted-foreground">
              Active educator with the Tufts University Orthopedic Residency program
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Publications</h3>
            <p className="text-muted-foreground">
              More than 75 peer-reviewed scientific papers and contributions to more than 13 textbooks
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* CTA Section */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Learn More About Our Research</h3>
        <p className="text-muted-foreground">
          View our complete research publications and contributions
        </p>
        <Button asChild size="lg">
          <Link href="/research/dr-kirsch-research">View Research</Link>
        </Button>
      </div>
    </div>
  );
}
