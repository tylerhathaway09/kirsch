import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
  title: "Patient Care Philosophy | Dr. Jacob Kirsch",
  description: "Learn about Dr. Kirsch's patient-centered approach to shoulder care with shared decision-making and individualized treatment plans.",
};

export default function PatientCarePhilosophyPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Patient Care Philosophy</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        <p className="leading-relaxed text-lg">
          My top priority is to help each patient improve their quality of life through personalized, compassionate care. Shoulder problems can affect anyone, whether you&apos;re a professional athlete, a weekend golfer, or simply someone struggling to sleep or work because of shoulder pain from a rotator cuff tear or arthritis. Every patient&apos;s situation is unique, and so are their goals. That&apos;s why I take a patient-centered approach, working together through shared decision-making to find the treatment plan that best fits each person&apos;s needs and lifestyle.
        </p>

        <p className="leading-relaxed">
          Not every shoulder problem requires surgery. Whenever possible, I begin with non-surgical treatments such as physical therapy, anti-inflammatory medications, and targeted injections. Surgery is reserved for patients who either do not improve with conservative care or who have an acute injury that clearly requires surgical repair.
        </p>

        <p className="leading-relaxed">
          Since the beginning of my career, I have chosen to focus exclusively on shoulder care. By dedicating my entire professional and academic work to the shoulder, I&apos;m able to offer patients the most up-to-date, evidence-based treatments and a depth of experience that leads to more reliable, successful outcomes. While many surgeons treat multiple joints, I&apos;ve found that concentrating solely on the shoulder allows me to deliver a higher level of expertise, especially for patients with complex or challenging conditions.
        </p>

        <p className="leading-relaxed">
          Our team is deeply committed to delivering the highest quality care and the best possible results for every patient. We continuously track and analyze patient-reported outcomes to understand how our patients recover and improve over time. This data not only helps us enhance the care experience for future patients but also contributes to the education of other surgeons, ensuring that more people everywhere receive better shoulder care.
        </p>
      </div>

      <Separator className="my-12" />

      {/* Key Principles Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Our Approach to Care</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Patient-Centered Care</h3>
            <p className="text-muted-foreground">
              Every patient has unique symptoms, life circumstances, and goals. We tailor our treatment approach to meet your individual needs and lifestyle.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Shared Decision-Making</h3>
            <p className="text-muted-foreground">
              We believe in partnering with our patients to make informed decisions about their care, ensuring you understand all available treatment options.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Conservative First</h3>
            <p className="text-muted-foreground">
              Surgery is reserved for patients who have failed conservative treatment or have acute injuries requiring intervention. We explore all non-surgical options first.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Evidence-Based Medicine</h3>
            <p className="text-muted-foreground">
              Our approach is grounded in the latest research and clinical evidence, ensuring you receive the most effective treatments available.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Specialized Expertise</h3>
            <p className="text-muted-foreground">
              By focusing exclusively on shoulder problems, we offer a level of specialized clinical and surgical expertise that leads to better outcomes.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Continuous Improvement</h3>
            <p className="text-muted-foreground">
              We collect patient-reported outcomes and follow patients long-term to continuously improve care for future patients.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* CTA Section */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Experience Compassionate Shoulder Care</h3>
        <p className="text-muted-foreground">
          Schedule a consultation to discuss how we can help you achieve your goals
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Book a Consultation</Link>
        </Button>
      </div>
    </div>
  );
}
