# Content Update TODO

## Completed ✅

### Batch 1 (Committed: 83f8a45)
- [x] Team page - Added Tessa Lilley PA-C and Michelle Milks with contact info
- [x] Surgery Locations page - Added NEBH and BOSS facilities with addresses
- [x] Research and Education page - Updated with research philosophy
- [x] Patient Experience page - Added team dedication message
- [x] Research Philosophy page - Updated with research commitment

### Batch 2 (Committed: b87c335)
- [x] First Visit Guide - Enhanced with detailed checklist, injection history, imaging requirements
- [x] Contact page - Real phone numbers (781-890-2133, 617-751-5242), BOSS location added

---

## Remaining Work 📋

### Phase 1: Update Existing Pages with Real Content

#### Patient Resources - Large Instruction Pages (HIGH PRIORITY - EXTENSIVE CONTENT)
These pages have VERY detailed content in the document (multiple pages each):

1. **Preparing for Surgery** (`app/patient-resources/preparing-for-surgery/page.tsx`)
   - Pre-operative appointment instructions
   - Medications to STOP prior to surgery (Aspirin, Coumadin, Celebrex, Ibuprofen, Plavix, GLP-1 Agonists, etc.)
   - Preparing home for recovery (moving items, clothing, safety measures)
   - Clothing recommendations (shoulder shirts, elastic waist pants)
   - Cold therapy machine information
   - Diet guidelines (iron-rich foods, Vitamin C, Vitamin D protocol)
   - Day before surgery instructions (Tylenol protocol)
   - Night before surgery (nothing after midnight, special wash, nail polish removal)
   - What to pack for overnight stay
   - What to bring to hospital (ID, insurance, CPAP if needed)
   - BOSS vs NEBH surgery day procedures

2. **What To Expect After Surgery** (`app/patient-resources/what-to-expect-after-surgery/page.tsx`)
   - When you arrive at hospital/BOSS
   - Meeting anesthesiologist
   - General anesthesia explanation
   - Nerve block information (advantages, duration 18-24 hours)
   - During surgery (monitoring, "time out" safety protocol)
   - Post Anesthesia Care Unit (PACU) procedures
   - Recovery room expectations (cold, oxygen, circulation aids)
   - X-ray procedures
   - Family communication protocols

3. **Post-Operative Instructions** (`app/patient-resources/post-operative-instructions/page.tsx`)
   - Sling instructions (when to wear, how long, removal for exercises)
   - Pain management (multimodal approach)
   - Post-operative medications:
     * Oxycodone 5-10mg dosing
     * Tylenol 650mg/1000mg protocol
     * Medrol Dose Pack instructions
     * Aspirin protocol
     * Anti-nausea medication (Zofran)
   - Constipation management
   - Activity restrictions (driving, returning to work)
   - Wound care instructions
   - When to call the doctor (warning signs)
   - Ice therapy protocols
   - Sleeping position recommendations

4. **Physical Therapy Protocols** (`app/patient-resources/physical-therapy-protocols/page.tsx`)
   - Importance of PT in recovery
   - When PT starts (varies by procedure)
   - What to expect in PT sessions
   - Home exercise program
   - Phases of rehabilitation
   - Return to activity guidelines

#### Patient Resources - FAQ Enhancement
5. **FAQ Page** (`app/patient-resources/faq/page.tsx`)
   - Currently has 7 generic FAQs
   - Document contains MANY specific FAQs about procedures, recovery, etc.
   - Need to add procedure-specific questions
   - Add insurance/billing questions
   - Add recovery timeline questions

#### Overview Pages
6. **Shoulder Conditions Overview** (`app/shoulder-conditions/overview/page.tsx`)
   - Currently Lorem Ipsum
   - Needs comprehensive overview of all conditions Dr. Kirsch treats
   - Link to individual condition pages

7. **Shoulder Procedures Overview** (`app/shoulder-procedures/overview/page.tsx`)
   - Currently Lorem Ipsum
   - Needs comprehensive overview of all procedures
   - Link to individual procedure pages

---

### Phase 2: Create 20 NEW Individual Pages

#### Shoulder Conditions (10 NEW pages needed)
Document has extensive content for each condition. Create at `app/shoulder-conditions/[condition-name]/page.tsx`:

1. **Rotator Cuff Tear** - EXTENSIVE CONTENT in document
2. **Shoulder Arthritis** - Content in document
3. **Cuff Tear Arthropathy** - Content in document
4. **Shoulder Instability** - Content in document
5. **Biceps Tendonitis/Superior Labral Injury** - Content in document
6. **Shoulder Fractures** - Content in document
7. **AC Joint Injury** - Content in document
8. **Shoulder Bursitis/Impingement** - Content in document
9. **Frozen Shoulder** - Content in document
10. **Calcific Tendinitis** - Content in document

#### Shoulder Procedures (10 NEW pages needed)
Document has content for each procedure. Create at `app/shoulder-procedures/[procedure-name]/page.tsx`:

1. **Rotator Cuff Repair** - Content in document
2. **Anatomic Total Shoulder Replacement** - Content in document
3. **Reverse Shoulder Replacement** - Content in document
4. **Revision Shoulder Replacement** - Content in document
5. **Tendon Transfer** - Content in document
6. **Shoulder Stabilization** - Content in document
7. **Biceps Tenodesis** - Content in document
8. **Fracture Treatment** - Content in document
9. **AC Joint Stabilization** - Content in document
10. **Shoulder Bursitis/Impingement** - Content in document

---

### Phase 3: Update Navigation

**Header Navigation** (`components/layout/Header.tsx`)
- Add dropdown menu items for all 10 Shoulder Conditions (currently only shows "Overview")
- Add dropdown menu items for all 10 Shoulder Procedures (currently only shows "Overview")
- Ensure both desktop NavigationMenu and mobile accordion menu are updated
- Current navigation structure exists, just needs new links added

---

## Content Source

All content is in: `/Users/ashleymaillet/Desktop/00-PROJECTS/KIRSCH/New Website Content.docx`

To access in future session:
```bash
textutil -convert txt -stdout "/Users/ashleymaillet/Desktop/00-PROJECTS/KIRSCH/New Website Content.docx"
```

---

## File Naming Conventions

- Use kebab-case for URLs: `/shoulder-conditions/rotator-cuff-tear`
- Keep consistent with existing pattern in codebase
- Update metadata with proper SEO titles and descriptions

---

## Notes for Next Session

1. **Large instruction pages** (Preparing for Surgery, Post-Op Instructions, What To Expect) have MULTIPLE pages of detailed content - budget significant time
2. **20 individual pages** need to be created from scratch with real medical content from the document
3. The document has **extensive detailed content** - this is not placeholder replacement, it's comprehensive medical information
4. After all pages created, must update Header.tsx navigation dropdowns (both desktop and mobile)
5. Patient Testimonials page currently has Lorem Ipsum placeholders - awaiting real testimonials
6. Patient Education Videos page is placeholder only - awaiting video content

---

## Estimated Scope

- **High complexity:** 3 large instruction pages (extensive medical protocols)
- **Medium complexity:** 20 individual condition/procedure pages (detailed medical content)
- **Low complexity:** 3 overview/FAQ pages (shorter content updates)
- **Navigation update:** Header component (add 20 new dropdown links)

**Total:** 26 page updates + navigation = substantial work session(s)
