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
          My number one goal in treating patients is to improve their quality of life through individualized and compassionate care. Shoulder problems can significantly impact one's life, whether they're a professional athlete, weekend warrior, or an average person struggling to do basic activities such as sleep and work due to shoulder pain from a rotator cuff tear or arthritis. Every patient has unique symptoms, life circumstances, and goals related to their life. I believe in a patient-centered approach with shared decision-making to achieve the best possible outcome for each patient. Not all problems require a surgical solution and I reserve surgery for those patients who have either failed conservative treatment or have acute injuries, which necessitate surgical intervention. Often shoulder problems can be managed with non-operative treatment such as physical therapy, anti-inflammatory medications, and selective injections.
        </p>

        <p className="leading-relaxed">
          Since starting practice, I have focused exclusively and entirely on treating patients with shoulder issues. By fully committing my professional and academic focus to caring for patients with shoulder problems, I can offer patients a comprehensive and evidence-based approach to their condition with a level of clinical and surgical expertise that results in better and more predictable patient outcomes. While this approach may seem atypical, as it is far more common for surgeons to take care of multiple body parts, I have found that by focusing only on shoulder problems, my experience and insight result in higher-quality and specialized care for patients, especially those with more complex pathology.
        </p>

        <p className="leading-relaxed">
          Our team is committed to not only providing the highest-quality care but to improving patient outcomes and satisfaction for all patients. To this end, our team collects patient-reported outcomes on all patients and is committed to following patients longitudinally to better understand how patients do over the long term so that we may continue to improve the experience and outcomes for future patients. We also use this information to educate other surgeons so they can provide better care for their patients as well.
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
