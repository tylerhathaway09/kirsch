import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export const metadata = {
  title: "Post-Operative Instructions | Dr. Jacob Kirsch",
  description: "Comprehensive post-operative care instructions for shoulder surgery patients, including sling use, pain management, wound care, activity restrictions, and when to call the doctor.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "sling", title: "Sling Instructions" },
  { id: "pain-management", title: "Pain Management" },
  { id: "medications", title: "Pain Medications" },
  { id: "constipation", title: "Managing Constipation" },
  { id: "wound-care", title: "Wound Care" },
  { id: "ice-therapy", title: "Ice Therapy" },
  { id: "sleeping", title: "Sleeping Position" },
  { id: "activity", title: "Activity Restrictions" },
  { id: "when-to-call", title: "When to Call the Doctor" },
];

export default function PostOperativeInstructionsPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Post-Operative Instructions</h1>

          <section id="overview" className="scroll-mt-24">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
              <p className="leading-relaxed text-lg">
                There are several important aspects of post-operative care that will help facilitate the smoothest recovery process. At any point, please do not hesitate to reach out to Dr. Kirsch or your care team if you have any questions.
              </p>
            </div>
          </section>

          <section id="sling" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Sling Instructions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              After surgery your shoulder will be placed in a sling. Depending on the type of surgery you have had, you may be in a simple sling or one with a small pillow. The sling should be worn as directed by Dr. Kirsch. The sling is used to limit motion of your shoulder.
            </p>
            <p className="text-muted-foreground">
              You may remove your arm from the sling to bend and straighten your elbow and to move your fingers several times a day. You may remove the sling to bathe, dress, and perform elbow range of motion several times a day. In some cases where no soft tissue repairs are performed your surgeon may ask you to discontinue sling use as soon as possible to prevent stiffness of the shoulder.
            </p>
            <div className="p-4 bg-primary/5 rounded-lg mt-4">
              <h4 className="font-semibold mb-2">Remember:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Use the sling/brace until your next office visit</li>
                <li>• Remove the sling/brace to allow your arm and elbow to straighten at your side 3-4 times a day for 15-20 minutes at a time</li>
                <li>• You may move your wrist and fingers either in or out of the sling</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="pain-management" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Pain Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Effective pain management following surgery is a major priority for both you and your healthcare providers. Every effort is made to safely minimize your pain; however, it is normal to experience some discomfort following surgery. Most commonly, post-operative pain is best managed with oral pain medications.
            </p>
            <p className="text-muted-foreground">
              A prescription for several medications will be sent to your pharmacy several days prior to surgery. We advise that you pick it up prior to the day of surgery, so that any issues may be addressed preemptively. Oral narcotic medication is frequently administered to patients after surgery to help control post-operative pain, however, we believe in a multimodal pain management approach to help minimize narcotic use.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="medications" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Post-Operative Pain Medications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground font-semibold mb-4">
              General medication guidelines (ask Dr. Kirsch if you have specific questions):
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Oxycodone 5-10mg (1-2 pills)</strong> - Every 4-6 hours as needed for pain
              </li>
              <li>
                <strong>Tylenol 650mg every 6 hours or 1,000mg every 8 hours</strong> - As needed for pain (Important to take with Oxycodone)
              </li>
              <li>
                <strong>Medrol Dose Pack (methylprednisolone)</strong> - Start taking this the day after surgery and follow the directions on the card it comes with
              </li>
              <li>
                <strong>Meloxicam (Mobic)</strong> - This is an anti-inflammatory. Depending on the procedure you have had, this may be prescribed
              </li>
            </ul>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-3">About the Medrol Dose Pack</h4>
              <p className="text-muted-foreground mb-3">
                As part of your recovery following surgery, we aim to control pain while minimizing the need for stronger medications like opioids. A recent randomized controlled study demonstrated that patients who received a low-dose steroid required fewer opioid medications compared to patients who did not. Furthermore, there were no adverse effects associated with the low-dose steroid.
              </p>
              <div className="mt-3">
                <p className="text-sm font-semibold mb-2">What Is a Medrol Dose Pack?</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• A 6-day tapering dose of methylprednisolone, a corticosteroid that reduces inflammation</li>
                  <li>• Taken orally daily according to a scheduled dose</li>
                  <li>• Begins on the first post-operative day</li>
                </ul>
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold mb-2">Benefits:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                  <li>• Reduces post-operative pain and inflammation</li>
                  <li>• Decreases swelling around the surgical site</li>
                  <li>• Reduces the need for narcotic pain medications</li>
                  <li>• Higher reported satisfaction scores during recovery</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <strong>Is It Safe?</strong> Yes—when taken as directed. The Medrol Dose Pack is short-term and low-dose and generally well tolerated. Diabetic patients will not receive the Medrol Dose Pack.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="constipation" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Managing Constipation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Narcotic pain medications can cause constipation. To help manage this side effect:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• Take Colace 100mg twice a day while on narcotics (available over the counter)</li>
              <li>• Increase your fluid intake</li>
              <li>• Increase fiber in your diet</li>
              <li>• Stay as active as safely possible</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="wound-care" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Wound Care</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Your postoperative dressing remains in place for the first 2-3 days following surgery, during which time you cannot shower or get the shoulder wet.
            </p>
            <p className="text-muted-foreground">
              After this time period you may remove the outer dressing, however, the steri-strips (small white pieces of tape) that cover your arthroscopic incisions stay in place until you are seen in the office for follow-up.
            </p>
            <p className="text-muted-foreground font-semibold">
              After the initial 2-3 day period, you are allowed to shower, but no soap, scrubbing or lotions are allowed around your shoulder.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="ice-therapy" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Ice Therapy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We recommend using a cold pack machine after surgery. This machine has a sleeve which is attached to an ice cooler. You place ice and some water in the cooler and plug this into a regular outlet. This circulates cold water through the shoulder sleeve providing relief of pain and swelling after surgery.
            </p>
            <p className="text-muted-foreground font-semibold">
              Important: Put a t-shirt or a thin towel between you and the ice so that it doesn&apos;t injure your skin.
            </p>
            <p className="text-muted-foreground">
              You should keep ice on the shoulder frequently for the first 48-72 hours after surgery (20 minutes on, 20 minutes off).
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="sleeping" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Sleeping Position</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Sleeping is often one of the most challenging things for patients following shoulder surgery. It can take up to 3 months following surgery for patients&apos; sleep patterns to normalize.
            </p>
            <p className="text-muted-foreground">
              Often sleeping in more of an inclined position is more comfortable for patients. Some patients find using a recliner helpful, however, this is not necessary. Wedge pillows can also be a good alternative to buying or renting a recliner and can also help patients feel more comfortable at night.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="activity" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Activity Restrictions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Driving:</h4>
              <p className="text-muted-foreground">
                Operating a motor vehicle may be difficult due to your inability to use your operative arm. If you should have an accident or get pulled over while wearing a sling, the authorities may consider you to be driving while impaired.
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Important guidelines:</strong>
              </p>
              <ul className="space-y-1 text-muted-foreground ml-6 mt-2">
                <li>• Do NOT drive while taking narcotic pain medication</li>
                <li>• Wait until you have seen your doctor at the first postoperative visit before driving</li>
                <li>• Once you are out of your sling, you may drive once you feel safe operating a vehicle</li>
                <li>• The decision to drive is based on your comfort level with driving essentially one-handed</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Returning to Work:</h4>
              <p className="text-muted-foreground">
                Return to work depends on the type of surgery performed and the physical demands of your job. Dr. Kirsch will discuss this with you during your postoperative visits based on your specific situation and occupation.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="when-to-call" className="scroll-mt-24 space-y-8">
        <Card className="border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              When to Call the Doctor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">
              Contact our office immediately if you experience any of the following warning signs:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Fever over 101.5°F</li>
              <li>• Increasing redness, warmth, or swelling around the surgical site</li>
              <li>• Drainage from the incision that is yellow, green, or foul-smelling</li>
              <li>• Severe pain that is not relieved by prescribed medications</li>
              <li>• Numbness or tingling in your fingers that is worsening</li>
              <li>• Inability to move your fingers</li>
              <li>• Chest pain or difficulty breathing</li>
              <li>• Calf pain, swelling, or redness (may indicate blood clot)</li>
            </ul>
            <p className="text-muted-foreground mt-4 font-semibold">
              If you are experiencing any signs of infection such as fever, cold/flu symptoms, diarrhea, skin rash, or open sores, please call the team and your medical doctor as soon as possible.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Questions About Your Recovery?</h3>
        <p className="text-muted-foreground">
          Contact our office if you have questions about your post-operative care
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
