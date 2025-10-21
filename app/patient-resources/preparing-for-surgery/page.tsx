import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "@/components/layout/TableOfContents";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export const metadata = {
  title: "Preparing for Surgery | Dr. Jacob Kirsch",
  description: "Comprehensive guide to preparing for shoulder surgery with Dr. Kirsch, including pre-operative instructions, medications, home preparation, and what to expect on surgery day.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "pre-operative", title: "Pre-Operative Appointment" },
  { id: "medications", title: "Medications to Stop" },
  { id: "home-prep", title: "Preparing Your Home" },
  { id: "clothing", title: "Clothing" },
  { id: "cold-therapy", title: "Cold Therapy Machine" },
  { id: "diet", title: "Diet" },
  { id: "practice-sling", title: "Practice Using a Sling" },
  { id: "day-before", title: "Day Before Surgery" },
  { id: "night-before", title: "Night Before Surgery" },
  { id: "nebh", title: "New England Baptist Hospital" },
  { id: "what-to-pack", title: "What to Pack" },
  { id: "what-to-bring", title: "What to Bring" },
  { id: "boss", title: "Boston Outpatient Surgical Suites" },
];

export default function PreparingForSurgeryPage() {
  return (
    <div className="container py-20 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        {/* Main Content */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Preparing for Surgery</h1>

          <section id="overview" className="scroll-mt-24">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
              <p className="leading-relaxed text-lg">
                Preparing for surgery can seem like a big undertaking. We have put together information to help make this process less stressful and make you more prepared to help facilitate the smoothest recovery after surgery. If at any point, you have questions or concerns, do not hesitate to reach out to your team (Dr. Kirsch, Tessa or Michelle), as they are here to help you navigate this process.
              </p>
            </div>
          </section>

          <section id="pre-operative" className="scroll-mt-24 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Pre-Operative Appointment</CardTitle>
              </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              You will need a pre-operative testing appointment at your primary care provider within 30 days of your surgery. Certain patients with more complicated medical issues may have to have a pre-operative appointment at the New England Baptist Hospital. It is essential that you make this appointment early in the 30-day window, as additional testing may be required, which may impact the timing of your surgery.
            </p>
            <p className="text-muted-foreground">
              If you see medical specialists (cardiologist, nephrologist, rheumatologist, pulmonologist) for certain medical conditions, you will likely need to obtain a special clearance from these specialists. Michelle Milks will provide clear instructions on what you need to obtain. If you have any questions regarding the medical clearance process, please reach out to Michelle directly.
            </p>
            <p className="text-muted-foreground">
              In some cases, blood work, EKG (heart tracing), or a chest X-ray may be needed for your pre-operative clearance. If any of these tests are needed, they will be scheduled for you and will be done during pre-testing when you meet with the anesthesia staff. If it has been some time since you have seen your primary care physician and you have a lot of medical problems, it would be best that you see your medical doctor before your pre-test date.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="medications" className="scroll-mt-24 space-y-8">
        <Card className="border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              Medications to STOP Prior to Surgery
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm font-semibold text-red-600">
              Make sure to discuss with Dr. Kirsch
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>1. Aspirin</strong> - Enteric-coated, baby, and plain aspirin or any other product containing aspirin. In some cases, we may recommend stopping your aspirin 1 week before surgery. In other cases, low-dose aspirin may be continued based on your medical condition. Please discuss with Dr. Kirsch.
              </li>
              <li>
                <strong>2. Coumadin</strong> - Discuss this with the prescriber as to the best time to stop this medication before surgery.
              </li>
              <li>
                <strong>3. Celebrex</strong> - Stop 1 week prior to surgery.
              </li>
              <li>
                <strong>4. Ibuprofen (Advil, Motrin)</strong> - Stop 1 week prior to surgery.
              </li>
              <li>
                <strong>5. Naprosyn (Aleve)</strong> - Stop 1 week prior to surgery.
              </li>
              <li>
                <strong>6. Plavix</strong> - Discuss this with the prescriber as to the best time to stop this medication before surgery.
              </li>
              <li>
                <strong>7. Over-the-counter herbs</strong> - Some can affect bleeding. These include chondroitin, dan shen, feverfew, garlic tablets, ginger tablets, ginkgo, ginseng, quilinggao, and fish oil. Discuss with Dr. Kirsch if you take any of these medications.
              </li>
              <li>
                <strong>8. GLP-1 Agonists</strong> - Class of medications used to treat type 2 diabetes and obesity. They work by mimicking a natural hormone called GLP-1, which helps regulate blood sugar levels and promotes satiety. These medications typically need to be held 1 week prior to surgery.
                <ul className="ml-6 mt-2 space-y-1 text-sm">
                  <li>• Semaglutide (Ozempic, Wegovy)</li>
                  <li>• Exenatide (Byetta, Bydureon)</li>
                  <li>• Liraglutide (Saxenda, Victoza)</li>
                  <li>• Dulaglutide (Trulicity)</li>
                  <li>• Lixisenatide (Adlyxin)</li>
                  <li>• Tirzepatide (Mounjaro)</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="home-prep" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Preparing Your Home for After Surgery</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Below are some helpful tips that we have put together to help you prepare for after surgery:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Move frequently used items, especially in the kitchen, bathroom, and bedroom, to easy-to-reach drawers and/or shelves.</li>
              <li>• Make sure all your medications are within easy reach.</li>
              <li>• Have a cell phone or cordless phone close to you.</li>
              <li>• Place a list of emergency phone numbers by the phone.</li>
              <li>• Shampoo and soap containers with pump tops are much easier to use than pop open tops.</li>
              <li>• Stock your freezer with easy-to-reheat meals and stock up on non-perishables which are pre-cut, as using a knife is not easy immediately after surgery. You will need to drink a lot of water and eat plenty of healthy foods and snacks.</li>
              <li>• If possible, arrange assistance with laundry and cleaning.</li>
              <li>• Clear pathways between your most commonly used areas — such as from your bedroom to your bathroom and kitchen, and between the living room, bedroom, and bathroom.</li>
              <li>• Remove all clutter and keep stairs free of objects.</li>
              <li>• Install night lights between bedroom and bathroom.</li>
              <li>• Make arrangements to keep pets in another area of the house when you first get home. They can be an unintentional hazard.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="clothing" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Clothing for After Surgery</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Loose-fitting clothing is recommended after surgery or Shoulder Shirts. You can purchase Shoulder Shirts at <a href="https://www.ShoulderShirts.com" className="text-primary hover:underline">www.ShoulderShirts.com</a> or <a href="https://www.ShoulderShirts.etsy.com" className="text-primary hover:underline">www.ShoulderShirts.etsy.com</a>.</li>
              <li>• You may want to get a couple pairs of pants that have elastic waists.</li>
              <li>• Many patients prefer bras that fasten in the front.</li>
              <li>• You will want to be sure to have a pair of slip-on shoes. Do not wear flip flops as it is too easy to trip.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="cold-therapy" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Cold Therapy Machine</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A Cold Therapy Machine to use following your surgery is highly recommended, as it seems to make recovery less painful and reduces swelling. Unfortunately, insurance does not cover these machines. We have these options for purchase on our practice website, which can be purchased ahead of surgery. Please reach out to Michelle Milks if you have any questions or are interested in this.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="diet" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Diet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Healthy eating before surgery helps you heal and recover after surgery. Good nutrition is necessary for healing. During the healing process, the body needs increased amounts of calories, protein, vitamins A, C, and D. Additionally, certain proteins like lysine and minerals like zinc are needed in higher quantities than normal.
            </p>
            <p className="text-muted-foreground">
              The following guidelines will help you choose &quot;power&quot; foods to promote healing. Eat a variety of foods to get all the calories, proteins, vitamins, and minerals you need. If you have been given a special diet, follow it as much as possible. It will help promote wound healing and may prevent infection and some complications.
            </p>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Iron-Rich Foods</h4>
              <p className="text-muted-foreground mb-2">
                Eat iron-rich foods prior to surgery. Iron combines with protein to make hemoglobin, the substance that carries oxygen in the blood to all parts of your body. When hemoglobin is low, weakness and fatigue may result causing a slower recovery.
              </p>
              <p className="text-muted-foreground mb-2">Foods that contain a high amount of iron include:</p>
              <ul className="space-y-1 text-muted-foreground ml-6">
                <li>• Lean red meat/liver</li>
                <li>• Enriched bread, pasta, fortified cereals</li>
                <li>• Dried beans and peas</li>
                <li>• Dried apricots and raisins</li>
                <li>• Green leafy vegetables (NOTE: Patients on Coumadin should talk with their physician)</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Vitamin C</h4>
              <p className="text-muted-foreground mb-2">
                Eating foods high in vitamin C along with iron-rich food will help your body absorb the iron. Foods that are high in vitamin C include:
              </p>
              <ul className="space-y-1 text-muted-foreground ml-6">
                <li>• Oranges and orange juice</li>
                <li>• Cantaloupe</li>
                <li>• Tomatoes</li>
                <li>• Potatoes</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Vitamin D</h4>
              <p className="text-muted-foreground">
                There is increasing evidence that Vitamin D plays an important role in tendon-to-bone healing. This may improve the ability of your rotator cuff to heal! Starting at least 2 weeks prior to surgery (sooner the better!) please take 2,000 IU of Vitamin D3 every day. Please continue to take this until 3 months after surgery. This can be purchased over the counter at your local pharmacy.
              </p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Eating in the Days Leading Up to Surgery</h4>
              <p className="text-muted-foreground">
                Eat only light meals, especially the day before surgery. The combined effects of anesthesia and your medication may slow down your bowel function. This can cause constipation after surgery. Increase fluids (water) and fiber in your diet as well.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="practice-sling" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Practice Using a Sling</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We suggest practicing daily activities or household duties using one arm or while wearing a sling for a few weeks prior to surgery. This will help you adapt and prepare for after surgery.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="day-before" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>The Day Before Surgery</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              It is important to make sure you eat a healthy, well-balanced diet leading up to your surgery. Make sure you also drink plenty of liquids to make sure you are well hydrated.
            </p>
            <p className="text-muted-foreground">
              Dr. Kirsch recently completed a study which demonstrated that taking Tylenol 1,000 mg every 8 hours the day prior to surgery can improve overall pain control and decrease opioid usage after surgery. Therefore, we recommend that you do this unless you have medical reasons that prevent you from taking Tylenol.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="night-before" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>The Night Before Surgery</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong>Nothing to eat or drink after midnight.</strong> Remember that you are to have nothing to eat or drink after midnight the night before surgery. You may be instructed by NEBH to consume Ensure the day before surgery and the morning of your surgery. Please follow the instructions given to you by the hospital! Otherwise, do not eat or drink anything including gum, mints, or candy, and water or black coffee.
              </li>
              <li>
                • If you are experiencing any signs of infection such as fever, cold/flu symptoms, diarrhea, skin rash, or open sores, please call the team and your medical doctor as soon as possible.
              </li>
              <li>
                • Try to get a good night&apos;s sleep. It is important to be well rested before surgery.
              </li>
              <li>
                • Bathe or shower the night before or the morning of your surgery. A special wash may have been recommended by pre-screening.
              </li>
              <li>
                • All nail polish should be removed before your arrival for surgery. Your fingers will be used to accurately monitor your oxygen level during surgery.
              </li>
              <li>
                • Creams and lotions should not be worn on the day of surgery. A light application of deodorant is allowed.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="nebh" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Surgeries at New England Baptist Hospital</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              You are typically asked to arrive about three hours prior to your actual surgery time. New England Baptist Hospital will contact you the day prior to your surgery between 12-4 pm with an exact time to arrive at the hospital registration area on the day of surgery. Please make every effort to arrive on time.
            </p>
            <p className="text-muted-foreground">
              Patients are either discharged the day after surgery, or the same day as you have your surgery. In our experience, most patients prefer to go home the same day as their surgery, however, we want all patients to feel safe and comfortable when they go home. Please discuss with Dr. Kirsch if you have a strong preference one way or another. If you have certain more significant medical conditions, it may be recommended that you spend the night in the hospital to monitor your overall health. It is our strong preference to have patients get discharged to their home without the need for a rehab facility.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="what-to-pack" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to Pack for an Overnight Stay</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Pack a bag or small suitcase with only the items you may need during your hospital stay. Please bring your own toiletries and any necessary personal items. While in the hospital you may opt to wear the hospital gown or you may bring your own clothes from home.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="what-to-bring" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to Bring to the Hospital</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• A full set of comfortable clothing. The clothing should be loose-fitting to allow room for any post-operative swelling.</li>
              <li>• Shoes with non-skid soles.</li>
              <li>• Personal items: contact lenses/denture care materials, glasses, hearing aids.</li>
              <li>• CPAP/BIPAP machine (if routinely used). If you require a CPAP/BIPAP, you must stay overnight at the hospital for monitoring.</li>
              <li>• A form of photo ID and insurance cards to present to the registration and admitting department.</li>
              <li>• Cell phone and charger.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section id="boss" className="scroll-mt-24 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Surgeries at Boston Outpatient Surgical Suites (BOSS)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              You will be contacted the day prior to your surgery, typically between 12-3 pm to confirm your arrival and surgery time. All patients will go home the same day as their surgery. Please make every effort to arrive on time as surgeries typically start earlier in the day compared to NEBH.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Questions About Your Surgery?</h3>
        <p className="text-muted-foreground">
          Contact our office for more information
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
