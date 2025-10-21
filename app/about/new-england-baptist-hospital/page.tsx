import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Surgery Locations | Dr. Jacob Kirsch",
  description: "Dr. Kirsch performs surgery at New England Baptist Hospital and Boston Outpatient Surgical Suites (BOSS).",
};

const sections = [
  { id: "nebh", title: "New England Baptist Hospital" },
  { id: "boss", title: "Boston Outpatient Surgical Suites" },
];

export default function NewEnglandBaptistHospitalPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Surgery Locations</h1>

          {/* New England Baptist Hospital */}
          <section id="nebh" className="scroll-mt-24 space-y-6 mb-12">
            <h2 className="text-3xl font-bold">New England Baptist Hospital</h2>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Founded in 1893, New England Baptist Hospital (NEBH) is one of the oldest and most respected orthopedic hospitals in the United States. It remains the only hospital in New England dedicated exclusively to orthopedic care and performs the highest annual volume of joint replacement procedures in the region. Patients from across the country and around the world choose NEBH for its world-class orthopedic expertise. The hospital is consistently recognized by U.S. News & World Report as one of the best hospitals in the nation for orthopedic surgery.
              </p>

              <p className="leading-relaxed">
                Dr. Jacob Kirsch is one of only two surgeons at NEBH who focus exclusively on shoulder surgery, and he is among the highest-volume shoulder replacement surgeons at the hospital. Some patients have their surgery at NEBH due to specific medical considerations or because their case involves a higher level of complexity that benefits from the hospital&apos;s specialized resources.
              </p>

              <div className="p-6 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Address:</h3>
                <p>125 Parker Hill Avenue, Boston, MA 02120</p>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Boston Outpatient Surgical Suites */}
          <section id="boss" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-bold">Boston Outpatient Surgical Suites (BOSS)</h2>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Boston Outpatient Surgical Suites (BOSS) was the first ambulatory surgery center in the Greater Boston area and continues to set the standard for outpatient surgical care. Following a recent $30 million renovation, BOSS is now located in a state-of-the-art medical facility in Waltham, MA, featuring eight advanced operating rooms and a full range of perisurgical services designed to ensure safety, comfort, and exceptional outcomes.
              </p>

              <p className="leading-relaxed">
                The mission of BOSS is simple: to deliver the highest-quality outpatient surgical care in the country.
              </p>

              <p className="leading-relaxed">
                Dr. Jacob Kirsch performs the majority of his shoulder surgeries at BOSS, including shoulder replacements, rotator cuff repairs, tendon transfers, and shoulder stabilization procedures. Patients benefit from the center&apos;s modern technology, efficient care environment, and highly skilled staff, all focused on helping you recover quickly and return to the activities you love.
              </p>

              <div className="p-6 bg-muted rounded-lg space-y-2">
                <div>
                  <h3 className="font-semibold mb-1">Website:</h3>
                  <a href="https://bostonoutpatient.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://bostonoutpatient.com/
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address:</h3>
                  <p>71 Border Rd, Waltham, MA 02451</p>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* CTA Section */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Schedule Your Consultation</h3>
            <p className="text-muted-foreground">
              Experience world-class shoulder care at state-of-the-art facilities
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
