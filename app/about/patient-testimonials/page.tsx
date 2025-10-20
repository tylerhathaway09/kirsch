import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Patient Testimonials | Dr. Jacob Kirsch",
  description: "Read what patients say about their experience with Dr. Kirsch and his shoulder care practice.",
};

export default function PatientTestimonialsPage() {
  return (
    <div className="container py-16 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8">Patient Testimonials</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
        <p className="leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hear from our patients about their experience with Dr. Kirsch and our practice.
        </p>
      </div>

      {/* Testimonials Grid */}
      <section className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dr. Kirsch was exceptional in every way.&quot;
              </p>
              <p className="font-semibold">- John D.</p>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                &quot;Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Highly recommend!&quot;
              </p>
              <p className="font-semibold">- Sarah M.</p>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                &quot;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Best decision I ever made.&quot;
              </p>
              <p className="font-semibold">- Michael R.</p>
            </CardContent>
          </Card>

          {/* Testimonial 4 */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                &quot;Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Professional and caring.&quot;
              </p>
              <p className="font-semibold">- Jennifer K.</p>
            </CardContent>
          </Card>

          {/* Testimonial 5 */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                &quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Back to playing tennis!&quot;
              </p>
              <p className="font-semibold">- David L.</p>
            </CardContent>
          </Card>

          {/* Testimonial 6 */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">★★★★★</div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                &quot;Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Excellent surgeon and wonderful bedside manner.&quot;
              </p>
              <p className="font-semibold">- Lisa T.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* CTA Section */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Experience Excellence in Shoulder Care</h3>
        <p className="text-muted-foreground">
          Join our many satisfied patients and schedule your consultation today
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Book a Consultation</Link>
        </Button>
      </div>
    </div>
  );
}
