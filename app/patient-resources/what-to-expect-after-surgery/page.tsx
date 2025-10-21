import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";

export const metadata = {
  title: "What To Expect After Surgery | Dr. Jacob Kirsch",
  description: "Comprehensive guide to what happens on surgery day, including arrival procedures, anesthesia, nerve blocks, surgical monitoring, and post-anesthesia recovery.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "arrival", title: "When You Arrive" },
  { id: "anesthesiologist", title: "Meeting the Anesthesiologist" },
  { id: "general-anesthesia", title: "General Anesthesia" },
  { id: "nerve-block", title: "Nerve Block" },
  { id: "during-surgery", title: "During Surgery" },
  { id: "pacu", title: "Post Anesthesia Care Unit" },
  { id: "recovery-expectations", title: "Recovery Room Expectations" },
  { id: "visitors", title: "Family and Visitors" },
];

export default function WhatToExpectAfterSurgeryPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">What To Expect After Surgery</h1>

          <section id="overview" className="scroll-mt-24">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
              <p className="leading-relaxed text-lg">
                Understanding what happens on the day of surgery and immediately after helps ensure the best possible outcome and reduces anxiety about the process.
              </p>
            </div>
          </section>

          <section id="arrival" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>When You Arrive at the Hospital or Outpatient Suite</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The day of surgery you will check in and proceed to the pre-operative area where you will change into a hospital gown. You will be asked to confirm your name, date of birth, your surgeon&apos;s name, and the procedure for which you are scheduled.
            </p>
            <p className="text-muted-foreground">
              Before your surgery, several different people who are in charge of your care will ask you to repeat this information. Do not be alarmed, this is a routine safety measure. The nurse in the surgery area will take your vital signs, start an IV, and review your medical history.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="anesthesiologist" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Meeting the Anesthesiologist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              You will also meet with the anesthesiologist. Anesthesiologists are physicians who administer the medication to make you fall asleep and provide pain management during and following the surgery. During surgery, anesthesiologists choose from a variety of medications for their different functions such as relieving pain, making the patient unconscious, and relaxing the body&apos;s muscles.
            </p>
            <p className="text-muted-foreground">
              To do this they may administer inhalation (gas) anesthetic agents, sedatives, muscle relaxants, and other medications. The anesthesiologist balances all of these medications in accordance with medical and surgical needs of each patient.
            </p>
            <p className="text-muted-foreground font-semibold">
              It is important to inform your anesthesiologist in the pre-operative area of any allergies or medications that have caused you problems in the past. It is also important to discuss any problems you may have had in the past with anesthesia.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="general-anesthesia" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>General Anesthesia</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The most common method of providing anesthesia during shoulder replacement is general anesthesia. With this, you are unconscious and have no awareness of the surgical procedure or any sensations. A tube is placed into the airway into your lungs. In addition to this, it is common to have a regional nerve block administered either before surgery or right after surgery. This will be discussed with you further by the anesthesiologist.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="nerve-block" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Nerve Block</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              You will be offered a nerve block before surgery to control your pain after surgery. A nerve block is used when pain from surgery affects a smaller area of your body, such as an arm.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Advantages of a Nerve Block:</h4>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Nerve blocks may allow for a significant decrease in the amount of opioid (narcotic) medication needed</li>
                <li>• This may result in fewer side effects such as nausea, vomiting, itching, drowsiness, constipation, and light-headedness</li>
                <li>• Nerve blocks generally last for 18-24 hours after surgery</li>
              </ul>
            </div>
            <p className="text-muted-foreground font-semibold mt-4">
              We recommend taking pain medication prior to when your block wears off even though you are not experiencing pain; therefore, you do not fall behind in pain management when the block wears off.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="during-surgery" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>During Surgery</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Once in the surgery suite, you will be assisted onto the surgical table. The surgery room itself is kept cool and the nurses will give you warm blankets if needed. The anesthesiologist will attach monitoring equipment and check your IV.
            </p>
            <p className="text-muted-foreground">
              They will constantly monitor your vital signs, including your heart rate and rhythm, blood pressure, and amount of oxygen in your blood throughout your procedure.
            </p>

            <div className="mt-4 p-4 bg-primary/5 rounded-lg">
              <h4 className="font-semibold mb-3">The &quot;Time Out&quot; Safety Measure</h4>
              <p className="text-muted-foreground mb-2">
                An additional aspect of our culture of safety is called the &quot;time out.&quot; In this safety measure, we confirm that we have the following before surgery begins:
              </p>
              <ul className="space-y-1 text-muted-foreground ml-6">
                <li>• The correct patient</li>
                <li>• The correct side and site marking</li>
                <li>• The correct procedure</li>
                <li>• The correct position on the operating table</li>
                <li>• The correct implants, special equipment, and X-rays (when applicable)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="pacu" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Post Anesthesia Care Unit (PACU)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              After surgery, you will be taken to the Recovery Room/Post-Anesthesia Care Unit (PACU) where a nurse will care for you for at least the next 2-3 hours. The total time spent in recovery varies for each patient.
            </p>
            <p className="text-muted-foreground">
              The nurse will take your temperature, pulse, and blood pressure and assess your pain level. Pain medication will be started. You may feel very cold after surgery and may be warmed with blankets. Your arm will be in a sling.
            </p>
            <p className="text-muted-foreground">
              Dr. Kirsch will assess your ability to move your fingers, wrist, and elbow and the sensation in your hand.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="recovery-expectations" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Recovery Room Expectations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Breathing Support:</strong> To assist your breathing, you may receive oxygen through a small nasal tube or mask.
              </li>
              <li>
                <strong>Circulation Aids:</strong> Circulation aids will be applied to your lower legs to prevent blood clots.
              </li>
              <li>
                <strong>Cold Pack System:</strong> A cold pack system may be wrapped around your surgical site to reduce swelling and pain.
              </li>
              <li>
                <strong>X-ray:</strong> An X-ray will be done on your operative shoulder.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="visitors" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Family and Visitors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              <strong>At New England Baptist Hospital:</strong> Friends and family cannot visit with you in the PACU but can meet you in your hospital room.
            </p>
            <p className="text-muted-foreground">
              <strong>At BOSS:</strong> Your accompaniment will be brought into the recovery room when you are ready to see them.
            </p>
            <p className="text-muted-foreground">
              Dr. Kirsch, or the hospital staff will inform your family members that once they leave you in the pre-operative waiting area it may be a number of hours before they see you again.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Questions About Your Surgery Day?</h3>
        <p className="text-muted-foreground">
          Contact our office to discuss any concerns about what to expect
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
