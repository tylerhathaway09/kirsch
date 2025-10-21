import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions | Dr. Jacob Kirsch",
  description: "Common questions about shoulder care, surgery, and recovery answered by Dr. Kirsch.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "questions", title: "Common Questions" },
];

export default function FAQPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

          <section id="overview" className="scroll-mt-24">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
              <p className="leading-relaxed text-lg">
                Find answers to common questions about shoulder conditions, treatments, and what to expect during your care with Dr. Kirsch.
              </p>
            </div>
          </section>

          <section id="questions" className="scroll-mt-24">
            <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold">
            When should I see a shoulder specialist?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            You should consider seeing a shoulder specialist if you experience persistent shoulder pain, limited range of motion, weakness, instability, or if conservative treatments haven&apos;t provided relief. Additionally, if you&apos;ve had a shoulder injury or notice difficulty with daily activities, it&apos;s important to seek specialized care.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold">
            Do I need surgery for my shoulder problem?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Not all shoulder problems require surgery. Dr. Kirsch believes in a conservative-first approach, exploring non-surgical treatments such as physical therapy, medications, and injections before considering surgery. Surgery is typically recommended only when conservative treatments have failed or in cases of acute injuries requiring immediate intervention.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold">
            What is the recovery time for shoulder surgery?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Recovery time varies depending on the type of surgery and individual factors. Minor arthroscopic procedures may require 3-4 months, while more complex surgeries like rotator cuff repairs or shoulder replacements may require 6-12 months for full recovery. Dr. Kirsch will provide a personalized recovery timeline during your consultation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-semibold">
            Will I need physical therapy after surgery?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes, physical therapy is a crucial component of recovery after most shoulder surgeries. A structured rehabilitation program helps restore strength, range of motion, and function. Dr. Kirsch works closely with experienced physical therapists to ensure optimal recovery outcomes.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-semibold">
            How do I prepare for my first appointment?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Please bring any relevant medical records, imaging studies (MRI, X-rays), a list of current medications, and your insurance information. It&apos;s also helpful to prepare a list of questions and note when your symptoms began and what activities make them better or worse.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg font-semibold">
            What types of shoulder conditions does Dr. Kirsch treat?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Dr. Kirsch treats the full spectrum of shoulder conditions including rotator cuff tears, shoulder arthritis, instability, fractures, biceps tendonitis, impingement, frozen shoulder, and complex revision cases. His specialized focus allows him to handle even the most challenging shoulder problems.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger className="text-lg font-semibold">
            Does insurance cover shoulder surgery?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Most insurance plans cover medically necessary shoulder surgery. Our office staff will work with your insurance provider to verify coverage and obtain any required pre-authorizations. We recommend contacting your insurance company to understand your specific benefits and out-of-pocket costs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Have More Questions?</h3>
        <p className="text-muted-foreground">
          Contact our office to speak with our team or schedule a consultation
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>

    {/* Table of Contents Sidebar */}
    <TableOfContents sections={sections} />
    </div>
    </div>
  );
}
