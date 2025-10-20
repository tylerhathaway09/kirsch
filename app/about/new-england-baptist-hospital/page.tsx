import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
  title: "New England Baptist Hospital | Dr. Jacob Kirsch",
  description: "Learn about Dr. Kirsch's affiliation with the nationally renowned New England Baptist Hospital.",
};

export default function NewEnglandBaptistHospitalPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">New England Baptist Hospital</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        <p className="leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <p className="leading-relaxed">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>

        <p className="leading-relaxed">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>

      <Separator className="my-12" />

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Hospital Excellence</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Lorem Ipsum</h3>
            <p className="text-muted-foreground">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Dolor Sit Amet</h3>
            <p className="text-muted-foreground">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Consectetur</h3>
            <p className="text-muted-foreground">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Adipiscing Elit</h3>
            <p className="text-muted-foreground">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* CTA Section */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Schedule Your Consultation</h3>
        <p className="text-muted-foreground">
          Experience world-class shoulder care at New England Baptist Hospital
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Book a Consultation</Link>
        </Button>
      </div>
    </div>
  );
}
