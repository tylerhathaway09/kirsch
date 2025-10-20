import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
  title: "Surgery Locations | Dr. Jacob Kirsch",
  description: "Dr. Kirsch performs surgery at New England Baptist Hospital and Boston Outpatient Surgical Suites (BOSS).",
};

export default function NewEnglandBaptistHospitalPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Surgery Locations</h1>

      {/* New England Baptist Hospital */}
      <section className="space-y-6 mb-12">
        <h2 className="text-3xl font-bold">New England Baptist Hospital</h2>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="leading-relaxed">
            New England Baptist Hospital (NEBH) was founded in 1893 and is one of the oldest orthopedic hospitals in the United States. It is currently the only orthopedic specialty hospital in New England, performing the highest annual volume of joint replacement procedures in our region.
          </p>

          <p className="leading-relaxed">
            NEBH serves as a destination for patients all over the world seeking orthopedic care, and is consistently recognized by U.S. News & World Report as one of the best hospitals in the country.
          </p>

          <p className="leading-relaxed">
            Dr. Kirsch is one of only two surgeons at NEBH that specialize in only shoulder surgery. Dr. Kirsch is also one of the highest volume shoulder replacement surgeons at NEBH. Patients may be directed to have their surgery at NEBH because of their medical history, or because of the increased complexity of their surgery.
          </p>

          <div className="p-6 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Address:</h3>
            <p>125 Parker Hill Ave, Boston, MA 02120</p>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Boston Outpatient Surgical Suites */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Boston Outpatient Surgical Suites (BOSS)</h2>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="leading-relaxed">
            Boston Outpatient Surgical Suites (BOSS) was the first ambulatory care surgery center in the greater Boston area. BOSS has recently undergone a 30 million dollar upgrade and is now located in the newly built medical office building in Waltham, MA.
          </p>

          <p className="leading-relaxed">
            BOSS is currently the most state-of-the-art surgery center in New England, with 8 operating rooms and an array of perisurgical services. The goal of BOSS is simple, to provide the highest-quality outpatient surgical care in the country.
          </p>

          <p className="leading-relaxed">
            Dr. Kirsch performs the majority of his shoulder surgeries, including shoulder replacements, rotator cuff repairs, tendon transfers and shoulder stabilization procedures at BOSS.
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
  );
}
