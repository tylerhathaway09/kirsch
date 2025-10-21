import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Patient Testimonials | Dr. Jacob Kirsch",
  description: "Read what patients say about their experience with Dr. Kirsch and his shoulder care practice.",
};

const sections = [
  { id: "overview", title: "Excellence in Care" },
  { id: "outcomes", title: "Patient-Reported Outcomes" },
  { id: "share", title: "Share Your Experience" },
];

export default function PatientTestimonialsPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Patient Testimonials</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
            <p className="leading-relaxed text-lg">
              At the heart of our practice is a commitment to exceptional patient care and outcomes. We are grateful for the trust our patients place in us and the opportunity to help them return to the activities they love.
            </p>
          </div>

          {/* Main Content Card */}
          <section id="overview" className="scroll-mt-24 space-y-8">
            <Card>
              <CardContent className="pt-8 pb-8">
                <div className="space-y-6 text-center max-w-3xl mx-auto">
                  <div className="text-6xl mb-4">⭐⭐⭐⭐⭐</div>

                  <h2 className="text-2xl font-semibold">Excellence in Shoulder Care</h2>

                  <p className="text-muted-foreground">
                    Our patients consistently report high satisfaction with their care experience and outcomes. Dr. Kirsch and his team are dedicated to providing personalized, compassionate care that helps patients achieve their goals and return to the activities that matter most to them.
                  </p>

                  <div className="pt-6 space-y-4">
                    <p className="text-muted-foreground">
                      Many of our patients have shared their positive experiences with Dr. Kirsch&apos;s expertise in shoulder surgery, from rotator cuff repairs and shoulder replacements to complex revision procedures. Patients appreciate:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 text-left">
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-semibold mb-2">Specialized Expertise</p>
                        <p className="text-sm text-muted-foreground">
                          Dr. Kirsch&apos;s exclusive focus on shoulder conditions and use of the most advanced techniques
                        </p>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-semibold mb-2">Personalized Care</p>
                        <p className="text-sm text-muted-foreground">
                          Individualized treatment plans tailored to each patient&apos;s unique needs and goals
                        </p>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-semibold mb-2">Clear Communication</p>
                        <p className="text-sm text-muted-foreground">
                          Thorough explanations of conditions, treatment options, and what to expect during recovery
                        </p>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-semibold mb-2">Successful Outcomes</p>
                        <p className="text-sm text-muted-foreground">
                          Excellent results with return to work, sports, and daily activities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="outcomes" className="scroll-mt-24">
            <Card>
              <CardContent className="pt-6 pb-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold">Patient-Reported Outcomes</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We continuously collect and analyze patient-reported outcomes from all surgical cases to monitor and improve our results. This commitment to quality and evidence-based care ensures that our patients receive the best possible treatment and outcomes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="share" className="scroll-mt-24">
            <div className="p-6 bg-accent/10 rounded-lg border border-accent/20 text-center">
              <h3 className="font-semibold mb-2">Share Your Experience</h3>
              <p className="text-sm text-muted-foreground">
                If you&apos;ve been treated by Dr. Kirsch and would like to share your experience, please let us know. Your feedback helps us continue to improve and helps others make informed decisions about their shoulder care.
              </p>
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

        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />
      </div>
    </div>
  );
}
