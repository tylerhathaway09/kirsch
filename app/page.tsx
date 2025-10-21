import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Hero } from "@/components/layout/Hero";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Jacob Kirsch, MD"
        subtitle="Board-certified orthopedic surgeon and shoulder specialist at the Boston Bone and Joint Institute and nationally renowned New England Baptist Hospital"
        ctaText="Learn More"
        ctaLink="/about/dr-jacob-kirsch"
      />

      {/* Main Content */}
      <div className="container py-20 space-y-20">
        {/* About Preview Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dr. Jacob Kirsch is a board-certified orthopedic surgeon and shoulder specialist at the Boston Bone and Joint Institute and the nationally renowned New England Baptist Hospital. Dr. Kirsch is also an Assistant Professor of Orthopedic Surgery at Tufts University School of Medicine.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a shoulder specialist, Dr. Kirsch is dedicated to treating the entire spectrum of shoulder pathology. Focusing exclusively on caring for patients with shoulder problems, Dr. Kirsch provides unparalleled specialized clinical experience and expertise.
            </p>
            <Button asChild>
              <Link href="/about/dr-jacob-kirsch">Meet Dr. Kirsch</Link>
            </Button>
          </div>
          <div className="bg-muted h-[400px] rounded-lg flex items-center justify-center">
            {/* TODO: Add Dr. Kirsch's portrait image */}
            <p className="text-muted-foreground">Dr. Kirsch Portrait</p>
          </div>
        </section>

        <Separator />

        {/* Quick Links Cards */}
        <section>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle>About Our Practice</CardTitle>
                <CardDescription>
                  Learn about our patient-centered approach to shoulder care
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/about/patient-care-philosophy">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle>Patient Resources</CardTitle>
                <CardDescription>
                  Everything you need to prepare for your visit and surgery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/patient-resources/patient-experience">View Resources</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle>Patient Education</CardTitle>
                <CardDescription>
                  Comprehensive information about shoulder conditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/shoulder-conditions/overview">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Focused Care Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-muted h-[400px] rounded-lg flex items-center justify-center order-2 md:order-1">
            {/* TODO: Add focused care image */}
            <p className="text-muted-foreground">Shoulder Surgery Image</p>
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <h2 className="text-3xl font-bold">Focused Care</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our singular focus on the shoulder allows us to provide the full range of the latest treatments for your shoulder condition. Whether this includes activity optimization, physical therapy, injections, minimally-invasive arthroscopic surgery, or open surgery, we are here to guide you on the road to recovery.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dr. Kirsch has extensive experience performing rotator cuff repairs, anatomic as well as reverse shoulder replacements, shoulder instability procedures, and revision surgery. He is one of only a few surgeons in the Boston and Greater New England region who regularly performs unique complex procedures involving tendon transfers, instability with bone loss, and failed prior surgery.
            </p>
          </div>
        </section>

        <Separator />

        {/* Featured Research Section */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Featured Research</h2>
            <p className="text-muted-foreground">
              Dr. Kirsch&apos;s academic work includes more than 75 peer-reviewed scientific papers and contributions to more than 13 textbooks. He is dedicated to training the next generation of shoulder surgeons and advancing the field through research and education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Research Card 1 */}
            <Card className="border-l-4 border-l-primary p-0 overflow-hidden">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 h-48 flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-4xl font-bold text-primary mb-2">75+</p>
                  <p className="text-sm text-muted-foreground">Published Papers</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Shoulder Surgery Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Dr. Kirsch has authored more than 75 peer-reviewed scientific papers on rotator cuff repair, shoulder replacement outcomes, and surgical techniques.
                </p>
                <Button asChild variant="link" className="p-0 text-primary">
                  <Link href="/research/dr-kirsch-research">View Publications →</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Research Card 2 */}
            <Card className="border-l-4 border-l-primary p-0 overflow-hidden">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 h-48 flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-4xl font-bold text-primary mb-2">13+</p>
                  <p className="text-sm text-muted-foreground">Textbook Contributions</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Educational Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Contributing author to more than 13 orthopedic textbooks, sharing expertise with the next generation of shoulder surgeons worldwide.
                </p>
                <Button asChild variant="link" className="p-0 text-primary">
                  <Link href="/about/research-and-education">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Research Card 3 */}
            <Card className="border-l-4 border-l-primary p-0 overflow-hidden">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 h-48 flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-4xl font-bold text-primary mb-2">100%</p>
                  <p className="text-sm text-muted-foreground">Evidence-Based</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Research-Driven Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Our practice integrates the latest research findings to provide evidence-based treatments and collect patient-reported outcomes for continuous improvement.
                </p>
                <Button asChild variant="link" className="p-0 text-primary">
                  <Link href="/research/research-philosophy">Our Philosophy →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Final CTA */}
        <section className="text-center py-8">
          <Button asChild size="lg">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </section>
      </div>
    </>
  );
}
