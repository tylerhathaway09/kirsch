import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const metadata = {
  title: "Dr. Jacob Kirsch - Boston Shoulder Specialist | Jacob Kirsch, MD",
  description: "Board-certified orthopedic surgeon and shoulder specialist. Graduated with distinction from George Washington University School of Medicine. Fellowship at Rothman Institute.",
};

export default function DrJacobKirschPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Dr. Jacob Kirsch</h1>

      {/* Main Bio Section */}
      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        <p className="leading-relaxed">
          Dr. Jacob Kirsch is a board-certified orthopedic surgeon and shoulder specialist at the Boston Bone and Joint Institute and the nationally renowned New England Baptist Hospital. He also serves as an Assistant Professor of Orthopedic Surgery at Tufts University School of Medicine.
        </p>

        <p className="leading-relaxed">
          As a shoulder specialist, Dr. Kirsch is dedicated to treating the entire spectrum of shoulder pathology. Focusing exclusively on caring for patients with shoulder problems, Dr. Kirsch provides unparalleled specialized clinical experience and expertise. He utilizes the latest technology to treat various shoulder conditions through both arthroscopic (minimally invasive) as well as open approaches. Dr. Kirsch has extensive experience performing rotator cuff repairs, anatomic as well as reverse shoulder replacements, shoulder instability procedures, and revision surgery. He is one of only a few surgeons in the Boston and Greater New England region who regularly performs unique complex procedures involving tendon transfers, instability with bone loss, and failed prior surgery.
        </p>

        <p className="leading-relaxed">
          Dr. Kirsch attended The George Washington University School of Medicine, graduating with distinction as an Alpha Omega Alpha National Medical Honor Society member. He pursued an Orthopedic Surgery residency at the University of Michigan, where he served as a team physician for the men&apos;s basketball team for 3 years, blending his passion for sports and orthopedic care. He then further specialized his training during a Shoulder and Elbow fellowship at the prestigious Rothman Institute and received advanced international training in shoulder surgery from world-renowned experts in Lyon, France.
        </p>

        <p className="leading-relaxed">
          Dr. Kirsch&apos;s academic work includes more than 75 peer-reviewed scientific papers and contributions to more than 13 textbooks. He is dedicated to training the next generation of shoulder surgeons and is involved as an educator with the Tufts University Orthopedic Residency program as well as in both the Massachusetts General Hospital and New England Baptist Shoulder Fellowships. Moreover, Dr. Kirsch is a sought-after speaker, lecturing nationally and internationally on various shoulder conditions, and serves as a clinical reviewer for prestigious journals, including the Journal of Shoulder and Elbow Surgery. He is an active member of the American Shoulder and Elbow Surgeons, Arthroscopy Association of North America and the American Academy of Orthopedic Surgeons, reflecting his commitment to maintaining the highest standards in orthopedic surgery. He was recognized by his peers as a Castle Connelly Top Doctor for 2025.
        </p>
      </div>

      <Separator className="my-12" />

      {/* Education Section */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground">
            The George Washington University School of Medicine - Graduated with distinction as an Alpha Omega Alpha National Medical Honor Society member
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Professional Training</h2>
          <div className="space-y-2 text-muted-foreground">
            <p><strong>Residency:</strong> University of Michigan - Orthopedic Surgery</p>
            <p><strong>Fellowship:</strong> Rothman Institute - Shoulder and Elbow Surgery</p>
            <p><strong>Advanced Training:</strong> Lyon, France - International training in shoulder surgery</p>
            <p><strong>Team Physician:</strong> University of Michigan Men&apos;s Basketball (3 years)</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Academic Appointments</h2>
          <p className="text-muted-foreground">
            Assistant Professor of Orthopedic Surgery, Tufts University School of Medicine
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Professional Memberships</h2>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>American Shoulder and Elbow Surgeons (ASES)</li>
            <li>Arthroscopy Association of North America (AANA)</li>
            <li>American Academy of Orthopedic Surgeons (AAOS)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Honors and Awards</h2>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Castle Connelly Top Doctor 2025</li>
            <li>Alpha Omega Alpha National Medical Honor Society</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Publications</h2>
          <p className="text-muted-foreground">
            More than 75 peer-reviewed scientific papers and contributions to more than 13 textbooks on shoulder surgery and orthopedics.
          </p>
        </div>
      </section>

      <Separator className="my-12" />

      {/* CTA Section */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Ready to get started?</h3>
        <p className="text-muted-foreground">
          Schedule a consultation to discuss your shoulder care needs
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Book a Consultation</Link>
        </Button>
      </div>
    </div>
  );
}
