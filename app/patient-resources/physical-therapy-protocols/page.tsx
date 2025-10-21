import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";
import { Clock, Activity, TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Physical Therapy Protocols | Dr. Jacob Kirsch",
  description: "Comprehensive physical therapy protocols and rehabilitation guidelines for shoulder surgery recovery, including phases of recovery, timeline expectations, and return to activity guidelines.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "importance", title: "Importance of PT" },
  { id: "when-starts", title: "When PT Starts" },
  { id: "what-to-expect", title: "What to Expect" },
  { id: "recovery-phases", title: "Recovery Phases" },
  { id: "home-exercises", title: "Home Exercise Program" },
  { id: "return-activity", title: "Return to Activity" },
  { id: "long-term", title: "Long-Term Success" },
];

export default function PhysicalTherapyProtocolsPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
        {/* Table of Contents Sidebar */}
        <TableOfContents sections={sections} />



        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Physical Therapy Protocols</h1>

          <section id="overview" className="scroll-mt-24">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
              <p className="leading-relaxed text-lg">
                Physical therapy is a critical component of recovery after shoulder surgery. Understanding the phases of rehabilitation and what to expect during each stage will help you achieve the best possible outcome.
              </p>
            </div>
          </section>

          <section id="importance" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Importance of Physical Therapy in Recovery</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Recovery from shoulder surgery is a slow and gradual process. Proper pain management and adherence to physical therapy protocols are essential for optimal recovery. A combination of cryotherapy (icing) and oral medications will help keep you comfortable as your shoulder heals.
            </p>
            <p className="text-muted-foreground">
              The goals early on are to reduce pain and inflammation while protecting the surgical repair. Physical therapy helps restore motion, build strength, and return you to your normal activities safely and effectively.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="when-starts" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>When Physical Therapy Starts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The timing of when physical therapy begins varies depending on the type and complexity of your shoulder procedure:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong>Rotator Cuff Repairs:</strong> Typically starts between 4-6 weeks following surgery, depending on the severity of the tear</li>
              <li>• <strong>Shoulder Replacements:</strong> Usually begins around 6 weeks after surgery</li>
              <li>• <strong>Less Complex Procedures:</strong> May start as early as 2 weeks post-surgery</li>
            </ul>
            <p className="text-muted-foreground font-semibold mt-4">
              Dr. Kirsch will provide specific instructions tailored to your procedure and individual needs.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="what-to-expect" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to Expect in Physical Therapy Sessions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Your physical therapist will work closely with you throughout your recovery journey. During sessions, you will learn:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• Safe techniques for shoulder exercises and movements</li>
              <li>• How to perform passive, active-assisted, and active motion exercises</li>
              <li>• Proper form to protect your surgical repair while improving mobility</li>
              <li>• Home exercise programs you can do independently between sessions</li>
              <li>• Progressive strengthening exercises as your shoulder heals</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Your therapist will instruct you on how to safely perform these exercises at home, so you can continue improving your motion and strength while protecting the repair.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="recovery-phases" className="scroll-mt-24 space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Early Recovery (Weeks 1-6)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                <strong>Focus:</strong> Protection and pain control
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Shoulder motion is restricted to protect the repair</li>
                <li>• You may come out of the sling to move hand, wrist, and elbow</li>
                <li>• At 6 weeks, repairs are only 20% healed - protection is critical</li>
                <li>• If motion begins, it will be exclusively passive (therapist-guided)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-600" />
                Intermediate (Weeks 6-12)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                <strong>Focus:</strong> Improving motion
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Emphasis on MOTION, not strength yet</li>
                <li>• Progress from passive → active-assisted → active motion</li>
                <li>• Basic activities with elbows at side allowed</li>
                <li>• Overhead activities still restricted</li>
                <li>• Strengthening delayed until 3 months</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                Late Recovery (3-6 Months)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                <strong>Focus:</strong> Strengthening begins
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Most patients feel significantly better</li>
                <li>• PT focuses on strengthening the shoulder</li>
                <li>• Continue working on motion if needed</li>
                <li>• &quot;Danger zone&quot; - avoid overexertion</li>
                <li>• Listen to your body and back off if experiencing pain</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600" />
                Full Recovery (6-12 Months)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                <strong>Focus:</strong> Return to full activity
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• At 6 months: 70-80% recovered</li>
                <li>• Around 10 months: fully trust shoulder</li>
                <li>• Full recovery takes approximately 1 year</li>
                <li>• Transition to home exercise program (~6 months)</li>
                <li>• Return to recreational and competitive sports</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      <section id="home-exercises" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Home Exercise Program</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Your physical therapist will teach you exercises that you can perform at home between formal therapy sessions. These home exercises are a critical part of your recovery and help you:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• Maintain and improve range of motion</li>
              <li>• Build strength progressively</li>
              <li>• Accelerate your recovery timeline</li>
              <li>• Maintain long-term shoulder health</li>
            </ul>
            <p className="text-muted-foreground font-semibold mt-4">
              After discharge from formal physical therapy (typically around 6 months), it is critical to continue your home exercise program 3 times a week for the longitudinal health of your shoulder.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="return-activity" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Return to Activity Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Returning to normal activities and sports should be done gradually and safely:
            </p>
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold mb-2">Timeline for Common Activities:</h4>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• <strong>Light daily activities:</strong> 6-12 weeks (as tolerated)</li>
                  <li>• <strong>Running:</strong> Approximately 6 months</li>
                  <li>• <strong>Swimming:</strong> Approximately 6 months</li>
                  <li>• <strong>Golf:</strong> Approximately 6 months</li>
                  <li>• <strong>Contact sports:</strong> 9-12 months (with physician clearance)</li>
                  <li>• <strong>High-demand occupational work:</strong> Variable, discuss with Dr. Kirsch</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold mb-2">Important Guidelines:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Always listen to your body</li>
                  <li>• If you experience pain or discomfort, back off from the aggravating activity</li>
                  <li>• Do not push through pain - this can compromise your surgical repair</li>
                  <li>• Gradual progression is key to long-term success</li>
                  <li>• Obtain clearance from Dr. Kirsch before returning to high-demand activities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="long-term" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Long-Term Success</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Most patients are extremely pleased with their outcome following shoulder surgery given the significant improvement in pain, strength, quality of life, and function. Success depends on:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• Adhering to your physical therapy protocol</li>
              <li>• Following activity restrictions during healing phases</li>
              <li>• Continuing home exercises long-term</li>
              <li>• Maintaining open communication with Dr. Kirsch and your therapy team</li>
              <li>• Being patient with the recovery process - healing takes time</li>
            </ul>
            <p className="text-muted-foreground font-semibold mt-4">
              Remember: Shoulder rehabilitation is a long recovery, but following the protocol carefully will give you the best chance for an excellent outcome.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Questions About Physical Therapy?</h3>
        <p className="text-muted-foreground">
          Contact our office to discuss physical therapy options and expectations
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
    </div>
    </div>
  );
}
