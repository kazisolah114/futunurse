import { INCLEXQuestion } from "@/types/NCLEX"

export const nclexQuestions: INCLEXQuestion[] = [
    // Safe and Effective Care Environment
    {
        id: "q001",
        question: "A patient has shortness of breath after surgery. What is the priority nursing action?",
        options: [
            "Administer prescribed pain medication",
            "Call the physician immediately",
            "Check oxygen saturation and respiratory rate",
            "Encourage the patient to ambulate",
        ],
        correctAnswer: 2,
        explanation:
            "Following the ABC priority framework (Airway, Breathing, Circulation), checking oxygen saturation and respiratory rate is the priority to assess breathing status before taking other actions.",
        category: "Safe and Effective Care Environment",
        subcategory: "Management of Care",
        difficulty: "medium",
        rationale:
            "The ABC priority framework guides nursing actions. Breathing assessment comes before comfort measures or physician notification.",
        tags: ["ABC priority", "respiratory assessment", "post-operative care"],
    },
    {
        id: "q002",
        question: "Which action by the nurse demonstrates proper hand hygiene technique?",
        options: [
            "Washing hands for 10 seconds with soap and water",
            "Using alcohol-based hand sanitizer for 15 seconds until dry",
            "Washing hands for 20 seconds, covering all surfaces",
            "Rinsing hands with water only between patient contacts",
        ],
        correctAnswer: 2,
        explanation:
            "Proper hand hygiene requires washing with soap and water for at least 20 seconds, covering all hand surfaces including between fingers, under nails, and wrists.",
        category: "Safe and Effective Care Environment",
        subcategory: "Safety and Infection Control",
        difficulty: "easy",
        rationale:
            "CDC guidelines recommend 20 seconds of handwashing to effectively remove pathogens and prevent healthcare-associated infections.",
        tags: ["infection control", "hand hygiene", "patient safety"],
    },
    {
        id: "q003",
        question: "A nurse is caring for a patient with a chest tube. Which observation requires immediate intervention?",
        options: [
            "Gentle bubbling in the water seal chamber",
            "Fluctuation of fluid level with respirations",
            "Continuous vigorous bubbling in the suction chamber",
            "Absence of drainage for 2 hours",
        ],
        correctAnswer: 2,
        explanation:
            "Continuous vigorous bubbling in the suction chamber indicates an air leak in the system, which requires immediate attention to maintain proper chest tube function.",
        category: "Safe and Effective Care Environment",
        subcategory: "Management of Care",
        difficulty: "hard",
        rationale:
            "Air leaks compromise the chest tube system's ability to re-expand the lung and can lead to complications.",
        tags: ["chest tube", "respiratory care", "emergency intervention"],
    },
    {
        id: "q004",
        question: "Which patient should the nurse see first after receiving report?",
        options: [
            "A patient with diabetes requesting a snack",
            "A patient with chest pain rated 8/10",
            "A patient asking for pain medication",
            "A patient needing assistance to the bathroom",
        ],
        correctAnswer: 1,
        explanation:
            "Chest pain rated 8/10 indicates a potential cardiac emergency requiring immediate assessment and intervention.",
        category: "Safe and Effective Care Environment",
        subcategory: "Management of Care",
        difficulty: "medium",
        rationale:
            "High-intensity chest pain suggests possible myocardial infarction or other cardiac emergencies requiring priority attention.",
        tags: ["prioritization", "chest pain", "cardiac emergency"],
    },
    {
        id: "q005",
        question: "A nurse witnesses a patient fall. What is the first action the nurse should take?",
        options: [
            "Help the patient get up immediately",
            "Call for assistance from other staff",
            "Assess the patient for injuries while they remain on the floor",
            "Document the incident in the medical record",
        ],
        correctAnswer: 2,
        explanation:
            "The nurse should first assess for injuries before moving the patient, as movement could worsen potential spinal or other injuries.",
        category: "Safe and Effective Care Environment",
        subcategory: "Safety and Infection Control",
        difficulty: "medium",
        rationale: "Assessment before movement prevents further injury, especially potential spinal cord damage.",
        tags: ["patient safety", "fall protocol", "injury assessment"],
    },

    // Health Promotion and Maintenance
    {
        id: "q006",
        question: "A pregnant woman at 28 weeks gestation asks about fetal movement. What should the nurse teach her?",
        options: [
            "Fetal movements should be felt at least 10 times in 2 hours",
            "Decreased movement is normal in the third trimester",
            "Fetal movements are not important to monitor",
            "Movement should be constant throughout the day",
        ],
        correctAnswer: 0,
        explanation:
            "Pregnant women should feel at least 10 fetal movements in a 2-hour period. Decreased fetal movement can indicate fetal distress and requires evaluation.",
        category: "Health Promotion and Maintenance",
        subcategory: "Ante/Intra/Postpartum Care",
        difficulty: "medium",
        rationale:
            "Fetal movement counting (kick counts) is an important method of fetal surveillance to assess fetal well-being.",
        tags: ["pregnancy", "fetal assessment", "patient education"],
    },
    {
        id: "q007",
        question: "Which immunization is contraindicated for a 6-month-old infant with a severe egg allergy?",
        options: [
            "DTaP (Diphtheria, Tetanus, Pertussis)",
            "Hib (Haemophilus influenzae type b)",
            "Influenza vaccine",
            "Pneumococcal vaccine",
        ],
        correctAnswer: 2,
        explanation:
            "Traditional influenza vaccines are grown in eggs and are contraindicated for patients with severe egg allergies. Egg-free alternatives are available.",
        category: "Health Promotion and Maintenance",
        subcategory: "Health Screening",
        difficulty: "medium",
        rationale: "Severe allergic reactions can occur when egg-allergic patients receive egg-based vaccines.",
        tags: ["immunizations", "allergies", "pediatric care"],
    },
    {
        id: "q008",
        question: "A 65-year-old patient asks about recommended health screenings. Which screening should be prioritized?",
        options: [
            "Mammogram every 5 years",
            "Colonoscopy every 10 years",
            "Blood pressure check annually",
            "Cholesterol screening every 10 years",
        ],
        correctAnswer: 2,
        explanation:
            "Annual blood pressure screening is recommended for adults, especially those over 40, as hypertension is a major risk factor for cardiovascular disease.",
        category: "Health Promotion and Maintenance",
        subcategory: "Health Screening",
        difficulty: "easy",
        rationale:
            "Regular blood pressure monitoring helps detect and manage hypertension early, preventing cardiovascular complications.",
        tags: ["health screening", "hypertension", "cardiovascular health"],
    },
    {
        id: "q009",
        question: "A mother asks when her toddler should transition from a crib to a bed. What should the nurse recommend?",
        options: [
            "When the child reaches 18 months old",
            "When the child can climb out of the crib",
            "When the child asks for a big bed",
            "When the child is potty trained",
        ],
        correctAnswer: 1,
        explanation:
            "The transition should occur when the child can climb out of the crib, as this poses a safety risk for falls and injuries.",
        category: "Health Promotion and Maintenance",
        subcategory: "Growth and Development",
        difficulty: "easy",
        rationale: "Safety is the primary concern; climbing out of cribs increases fall risk and potential serious injury.",
        tags: ["toddler safety", "growth and development", "injury prevention"],
    },
    {
        id: "q010",
        question: "Which dietary teaching is most important for a patient with osteoporosis?",
        options: [
            "Increase protein intake to 2g/kg body weight",
            "Limit sodium to less than 1000mg daily",
            "Ensure adequate calcium and vitamin D intake",
            "Avoid all dairy products",
        ],
        correctAnswer: 2,
        explanation:
            "Calcium and vitamin D are essential for bone health and can help slow the progression of osteoporosis.",
        category: "Health Promotion and Maintenance",
        subcategory: "Health Promotion/Disease Prevention",
        difficulty: "easy",
        rationale:
            "Calcium provides bone structure while vitamin D enhances calcium absorption, both crucial for bone density.",
        tags: ["osteoporosis", "nutrition", "bone health"],
    },

    // Psychosocial Integrity
    {
        id: "q011",
        question:
            "A patient diagnosed with depression states, 'I feel like ending it all.' What is the nurse's priority response?",
        options: [
            "Tell the patient that suicide is not the answer",
            "Ask the patient directly about suicidal thoughts and plans",
            "Reassure the patient that things will get better",
            "Change the subject to something more positive",
        ],
        correctAnswer: 1,
        explanation:
            "Direct assessment of suicidal ideation and plans is essential for patient safety. The nurse must determine the level of risk to implement appropriate interventions.",
        category: "Psychosocial Integrity",
        subcategory: "Mental Health Concepts",
        difficulty: "hard",
        rationale:
            "Suicide risk assessment requires direct questioning to determine immediate safety needs and level of intervention required.",
        tags: ["suicide assessment", "mental health", "therapeutic communication"],
    },
    {
        id: "q012",
        question: "Which therapeutic communication technique is most appropriate when a patient is crying?",
        options: [
            "Offering tissues and sitting quietly with the patient",
            "Telling the patient not to cry because it won't help",
            "Asking why the patient is crying",
            "Leaving the room to give the patient privacy",
        ],
        correctAnswer: 0,
        explanation:
            "Offering comfort measures and providing supportive presence demonstrates empathy and allows the patient to express emotions in a safe environment.",
        category: "Psychosocial Integrity",
        subcategory: "Therapeutic Communication",
        difficulty: "easy",
        rationale:
            "Therapeutic presence and non-verbal support help patients feel heard and supported during emotional distress.",
        tags: ["therapeutic communication", "emotional support", "nursing presence"],
    },
    {
        id: "q013",
        question: "A patient with anxiety disorder is hyperventilating. What should the nurse do first?",
        options: [
            "Administer prescribed anti-anxiety medication",
            "Encourage slow, deep breathing into cupped hands",
            "Leave the patient alone to calm down",
            "Call the physician immediately",
        ],
        correctAnswer: 1,
        explanation:
            "Encouraging slow, controlled breathing helps correct respiratory alkalosis caused by hyperventilation and reduces anxiety symptoms.",
        category: "Psychosocial Integrity",
        subcategory: "Coping and Adaptation",
        difficulty: "medium",
        rationale:
            "Controlled breathing techniques help restore normal CO2 levels and activate the parasympathetic nervous system.",
        tags: ["anxiety", "hyperventilation", "breathing techniques"],
    },
    {
        id: "q014",
        question: "A patient refuses to take prescribed medication. What is the nurse's best response?",
        options: [
            "Tell the patient they must take the medication",
            "Hide the medication in food",
            "Explore the patient's concerns about the medication",
            "Document refusal and move on to the next patient",
        ],
        correctAnswer: 2,
        explanation:
            "Exploring the patient's concerns respects autonomy and may reveal issues that can be addressed through education or alternative approaches.",
        category: "Psychosocial Integrity",
        subcategory: "Therapeutic Communication",
        difficulty: "medium",
        rationale:
            "Understanding patient concerns allows for informed decision-making and may improve medication compliance.",
        tags: ["medication refusal", "patient autonomy", "therapeutic communication"],
    },
    {
        id: "q015",
        question:
            "A family member of a dying patient asks, 'How much longer do they have?' What is the nurse's best response?",
        options: [
            "I can't predict exactly, but let's talk about your concerns",
            "You should ask the doctor that question",
            "Don't worry about that right now",
            "Probably not much longer",
        ],
        correctAnswer: 0,
        explanation:
            "This response acknowledges the uncertainty while opening communication about the family's concerns and needs during this difficult time.",
        category: "Psychosocial Integrity",
        subcategory: "End-of-Life Care",
        difficulty: "hard",
        rationale: "Honest communication combined with emotional support helps families cope with end-of-life situations.",
        tags: ["end-of-life care", "family support", "therapeutic communication"],
    },

    // Physiological Integrity
    {
        id: "q016",
        question: "A patient receiving digoxin has a heart rate of 58 bpm. What should the nurse do first?",
        options: [
            "Administer the digoxin as scheduled",
            "Hold the digoxin and notify the physician",
            "Give half the prescribed dose",
            "Check the patient's blood pressure",
        ],
        correctAnswer: 1,
        explanation:
            "Digoxin should be held if the heart rate is below 60 bpm due to risk of further bradycardia and cardiac complications. The physician should be notified.",
        category: "Physiological Integrity",
        subcategory: "Pharmacological Therapies",
        difficulty: "medium",
        rationale:
            "Digoxin toxicity can cause dangerous bradycardia. Holding the medication prevents further cardiac depression.",
        tags: ["digoxin", "bradycardia", "medication safety"],
    },
    {
        id: "q017",
        question: "Which laboratory value indicates a patient may be experiencing diabetic ketoacidosis (DKA)?",
        options: [
            "Blood glucose 180 mg/dL",
            "pH 7.28 with positive ketones",
            "Hemoglobin A1C 8.5%",
            "Creatinine 1.2 mg/dL",
        ],
        correctAnswer: 1,
        explanation:
            "DKA is characterized by acidosis (pH < 7.30) and presence of ketones. This represents a medical emergency requiring immediate intervention.",
        category: "Physiological Integrity",
        subcategory: "Reduction of Risk Potential",
        difficulty: "hard",
        rationale:
            "The combination of acidosis and ketones indicates the body is breaking down fat for energy due to insulin deficiency.",
        tags: ["diabetes", "DKA", "acid-base balance"],
    },
    {
        id: "q018",
        question:
            "A patient with pneumonia has thick, tenacious secretions. Which intervention will help mobilize secretions?",
        options: [
            "Restricting fluid intake to reduce secretions",
            "Encouraging fluid intake of 2-3 liters per day",
            "Administering cough suppressants",
            "Keeping the patient in supine position",
        ],
        correctAnswer: 1,
        explanation:
            "Adequate hydration (2-3 L/day unless contraindicated) helps thin secretions, making them easier to expectorate and clear from airways.",
        category: "Physiological Integrity",
        subcategory: "Basic Care and Comfort",
        difficulty: "easy",
        rationale:
            "Hydration helps liquefy thick secretions, improving airway clearance and reducing risk of complications.",
        tags: ["respiratory care", "secretion management", "hydration"],
    },
    {
        id: "q019",
        question: "A patient is receiving warfarin therapy. Which laboratory value should the nurse monitor?",
        options: ["Platelet count", "International Normalized Ratio (INR)", "Hemoglobin level", "White blood cell count"],
        correctAnswer: 1,
        explanation:
            "INR measures the effectiveness of warfarin therapy and helps determine appropriate dosing to prevent bleeding or clotting complications.",
        category: "Physiological Integrity",
        subcategory: "Pharmacological Therapies",
        difficulty: "medium",
        rationale:
            "INR monitoring ensures warfarin maintains therapeutic anticoagulation levels while preventing bleeding complications.",
        tags: ["warfarin", "anticoagulation", "INR monitoring"],
    },
    {
        id: "q020",
        question: "Which assessment finding in a newborn requires immediate intervention?",
        options: [
            "Heart rate of 140 bpm",
            "Respiratory rate of 35 breaths/min",
            "Central cyanosis of face and trunk",
            "Acrocyanosis of hands and feet",
        ],
        correctAnswer: 2,
        explanation:
            "Central cyanosis indicates inadequate oxygenation and requires immediate intervention. Acrocyanosis is normal in newborns.",
        category: "Physiological Integrity",
        subcategory: "Physiological Adaptation",
        difficulty: "medium",
        rationale: "Central cyanosis suggests serious respiratory or cardiac compromise requiring emergency intervention.",
        tags: ["newborn assessment", "cyanosis", "respiratory distress"],
    },
    {
        id: "q021",
        question:
            "A patient with chronic kidney disease has a potassium level of 6.2 mEq/L. Which intervention is priority?",
        options: [
            "Encourage foods high in potassium",
            "Administer sodium polystyrene sulfonate (Kayexalate)",
            "Increase fluid intake",
            "Restrict protein intake",
        ],
        correctAnswer: 1,
        explanation:
            "Hyperkalemia (K+ > 5.0) is dangerous and can cause cardiac arrhythmias. Kayexalate helps remove excess potassium from the body.",
        category: "Physiological Integrity",
        subcategory: "Pharmacological Therapies",
        difficulty: "hard",
        rationale:
            "Severe hyperkalemia can cause life-threatening cardiac arrhythmias requiring immediate potassium reduction.",
        tags: ["hyperkalemia", "chronic kidney disease", "cardiac safety"],
    },
    {
        id: "q022",
        question:
            "A patient with heart failure is prescribed furosemide. Which assessment is most important before administration?",
        options: [
            "Blood pressure and pulse",
            "Respiratory rate and oxygen saturation",
            "Potassium level and kidney function",
            "Blood glucose level",
        ],
        correctAnswer: 2,
        explanation:
            "Furosemide can cause hypokalemia and kidney dysfunction. Monitoring potassium and kidney function prevents serious complications.",
        category: "Physiological Integrity",
        subcategory: "Pharmacological Therapies",
        difficulty: "medium",
        rationale:
            "Loop diuretics like furosemide can cause electrolyte imbalances and nephrotoxicity requiring careful monitoring.",
        tags: ["furosemide", "heart failure", "electrolyte monitoring"],
    },
    {
        id: "q023",
        question: "Which medication requires the nurse to monitor for ototoxicity?",
        options: ["Penicillin", "Gentamicin", "Acetaminophen", "Insulin"],
        correctAnswer: 1,
        explanation:
            "Gentamicin is an aminoglycoside antibiotic that can cause ototoxicity (hearing loss) and nephrotoxicity. Regular monitoring is essential.",
        category: "Physiological Integrity",
        subcategory: "Pharmacological Therapies",
        difficulty: "medium",
        rationale: "Aminoglycosides accumulate in inner ear tissues and can cause permanent hearing damage.",
        tags: ["aminoglycosides", "ototoxicity", "medication monitoring"],
    },
    {
        id: "q024",
        question: "A patient is scheduled for surgery and asks about advance directives. What should the nurse explain?",
        options: [
            "Advance directives are only for terminally ill patients",
            "They allow patients to specify treatment preferences if unable to communicate",
            "Only family members can make these decisions",
            "Advance directives cannot be changed once signed",
        ],
        correctAnswer: 1,
        explanation:
            "Advance directives allow competent adults to document their healthcare preferences for situations when they cannot communicate their wishes.",
        category: "Safe and Effective Care Environment",
        subcategory: "Management of Care",
        difficulty: "easy",
        rationale:
            "Advance directives ensure patient autonomy and help guide healthcare decisions according to patient values.",
        tags: ["advance directives", "patient rights", "healthcare decisions"],
    },
    {
        id: "q025",
        question: "Which finding indicates effective treatment for a patient with heart failure?",
        options: [
            "Weight gain of 3 pounds in 2 days",
            "Decreased urine output",
            "Clear lung sounds on auscultation",
            "Increased shortness of breath",
        ],
        correctAnswer: 2,
        explanation:
            "Clear lung sounds indicate reduced pulmonary congestion, showing effective heart failure treatment. Other options suggest worsening condition.",
        category: "Physiological Integrity",
        subcategory: "Reduction of Risk Potential",
        difficulty: "medium",
        rationale:
            "Heart failure treatment aims to reduce fluid overload; clear lungs indicate successful fluid management.",
        tags: ["heart failure", "treatment evaluation", "pulmonary assessment"],
    },

    // Additional Advanced Questions
    {
        id: "q026",
        question:
            "A patient with Alzheimer's disease becomes agitated during evening care. What is the best nursing intervention?",
        options: [
            "Restrain the patient for safety",
            "Speak loudly to get the patient's attention",
            "Use calm, simple instructions and redirect attention",
            "Leave the patient alone until they calm down",
        ],
        correctAnswer: 2,
        explanation:
            "Patients with dementia respond best to calm, simple communication and redirection techniques rather than confrontation or restraints.",
        category: "Psychosocial Integrity",
        subcategory: "Mental Health Concepts",
        difficulty: "medium",
        rationale:
            "Therapeutic communication and environmental modification are most effective for managing behavioral symptoms in dementia.",
        tags: ["dementia care", "behavioral management", "therapeutic communication"],
    },
    {
        id: "q027",
        question: "A patient with type 1 diabetes is NPO for surgery. How should the nurse manage insulin administration?",
        options: [
            "Hold all insulin until the patient can eat",
            "Give the usual dose of long-acting insulin only",
            "Administer half the usual insulin dose",
            "Start an insulin drip per protocol",
        ],
        correctAnswer: 3,
        explanation:
            "NPO diabetic patients require continuous glucose monitoring and insulin management, often through IV insulin protocols to prevent hyperglycemia.",
        category: "Physiological Integrity",
        subcategory: "Pharmacological Therapies",
        difficulty: "hard",
        rationale: "Type 1 diabetics always need insulin; IV protocols allow precise glucose control during NPO periods.",
        tags: ["diabetes management", "NPO status", "perioperative care"],
    },
    {
        id: "q028",
        question: "Which intervention is most important for preventing pressure ulcers in bedridden patients?",
        options: [
            "Apply lotion to dry skin areas",
            "Reposition the patient every 2 hours",
            "Use only cotton sheets",
            "Massage bony prominences",
        ],
        correctAnswer: 1,
        explanation:
            "Regular repositioning every 2 hours relieves pressure on bony prominences, which is the primary cause of pressure ulcer development.",
        category: "Physiological Integrity",
        subcategory: "Basic Care and Comfort",
        difficulty: "easy",
        rationale:
            "Pressure relief through repositioning prevents tissue ischemia and necrosis that leads to pressure ulcers.",
        tags: ["pressure ulcer prevention", "positioning", "skin integrity"],
    },
    {
        id: "q029",
        question:
            "A patient receiving chemotherapy develops a fever of 100.8°F (38.2°C). What is the nurse's priority action?",
        options: [
            "Administer acetaminophen for fever",
            "Obtain blood cultures and notify the physician",
            "Encourage increased fluid intake",
            "Apply cooling measures",
        ],
        correctAnswer: 1,
        explanation:
            "Fever in immunocompromised chemotherapy patients may indicate serious infection requiring immediate evaluation and treatment.",
        category: "Physiological Integrity",
        subcategory: "Reduction of Risk Potential",
        difficulty: "hard",
        rationale:
            "Neutropenia from chemotherapy increases infection risk; fever may be the only sign of life-threatening sepsis.",
        tags: ["chemotherapy", "neutropenia", "infection control"],
    },
    {
        id: "q030",
        question: "Which assessment finding suggests compartment syndrome in a patient with a leg cast?",
        options: [
            "Mild swelling around the cast edges",
            "Pain that is relieved by elevation",
            "Severe pain unrelieved by analgesics",
            "Slight numbness in the toes",
        ],
        correctAnswer: 2,
        explanation:
            "Severe, unrelenting pain that doesn't respond to pain medication is a classic early sign of compartment syndrome, a surgical emergency.",
        category: "Physiological Integrity",
        subcategory: "Reduction of Risk Potential",
        difficulty: "hard",
        rationale:
            "Compartment syndrome causes tissue ischemia and severe pain; early recognition prevents permanent damage.",
        tags: ["compartment syndrome", "orthopedic care", "pain assessment"],
    },
    {
        id: "q031",
        question:
            "A patient with COPD is receiving oxygen at 6 L/min via nasal cannula. Which assessment finding is most concerning?",
        options: [
            "Respiratory rate of 16 breaths/min",
            "Oxygen saturation of 88%",
            "Patient appears drowsy and confused",
            "Slight shortness of breath with activity",
        ],
        correctAnswer: 2,
        explanation:
            "Drowsiness and confusion in COPD patients on high-flow oxygen may indicate CO2 retention and respiratory depression.",
        category: "Physiological Integrity",
        subcategory: "Reduction of Risk Potential",
        difficulty: "hard",
        rationale: "COPD patients rely on hypoxic drive; excessive oxygen can suppress breathing and cause CO2 narcosis.",
        tags: ["COPD", "oxygen therapy", "respiratory depression"],
    },
    {
        id: "q032",
        question: "Which action should the nurse take when a patient's IV infiltrates?",
        options: [
            "Apply heat to the infiltrated area",
            "Massage the infiltrated area to disperse fluid",
            "Stop the infusion and remove the IV catheter",
            "Slow the IV rate and monitor closely",
        ],
        correctAnswer: 2,
        explanation:
            "When IV infiltration occurs, the infusion must be stopped immediately and the catheter removed to prevent further tissue damage.",
        category: "Physiological Integrity",
        subcategory: "Reduction of Risk Potential",
        difficulty: "easy",
        rationale: "Continued infusion into infiltrated tissue causes progressive tissue damage and complications.",
        tags: ["IV therapy", "infiltration", "patient safety"],
    },
    {
        id: "q033",
        question: "A patient with a nasogastric tube reports nausea. What should the nurse check first?",
        options: [
            "The patient's electrolyte levels",
            "Tube placement and patency",
            "The patient's vital signs",
            "When the patient last received antiemetics",
        ],
        correctAnswer: 1,
        explanation:
            "Nausea with an NG tube often indicates the tube is not functioning properly, either due to displacement or blockage.",
        category: "Physiological Integrity",
        subcategory: "Basic Care and Comfort",
        difficulty: "medium",
        rationale:
            "A non-functioning NG tube allows gastric contents to accumulate, causing nausea and potential aspiration risk.",
        tags: ["nasogastric tube", "nausea", "tube management"],
    },
    {
        id: "q034",
        question: "Which laboratory result requires immediate intervention for a patient taking lithium?",
        options: [
            "Lithium level 0.8 mEq/L",
            "Lithium level 1.5 mEq/L",
            "Sodium level 140 mEq/L",
            "Potassium level 4.0 mEq/L",
        ],
        correctAnswer: 1,
        explanation:
            "A lithium level of 1.5 mEq/L is above the therapeutic range (0.6-1.2 mEq/L) and indicates potential toxicity requiring immediate intervention.",
        category: "Physiological Integrity",
        subcategory: "Pharmacological Therapies",
        difficulty: "medium",
        rationale:
            "Lithium toxicity can cause serious neurological and cardiac complications; levels above 1.2 mEq/L require intervention.",
        tags: ["lithium toxicity", "therapeutic levels", "medication monitoring"],
    },
    {
        id: "q035",
        question:
            "A patient with a spinal cord injury at T6 suddenly develops severe headache and hypertension. What should the nurse suspect?",
        options: ["Meningitis", "Autonomic dysreflexia", "Increased intracranial pressure", "Medication reaction"],
        correctAnswer: 1,
        explanation:
            "Autonomic dysreflexia is a life-threatening condition in spinal cord injuries above T6, characterized by severe hypertension and headache.",
        category: "Physiological Integrity",
        subcategory: "Physiological Adaptation",
        difficulty: "hard",
        rationale:
            "Autonomic dysreflexia occurs when noxious stimuli below the injury level trigger massive sympathetic response.",
        tags: ["spinal cord injury", "autonomic dysreflexia", "neurological emergency"],
    },
    {
        id: "q036",
        question: "Which intervention is most important for a patient with acute pancreatitis?",
        options: ["Encourage oral fluids", "Maintain NPO status", "Provide high-fat diet", "Administer pancreatic enzymes"],
        correctAnswer: 1,
        explanation:
            "NPO status allows the pancreas to rest and reduces stimulation of pancreatic enzyme secretion, which helps reduce inflammation and pain.",
        category: "Physiological Integrity",
        subcategory: "Basic Care and Comfort",
        difficulty: "medium",
        rationale: "Pancreatic rest through NPO status is essential to prevent further inflammation and allow healing.",
        tags: ["pancreatitis", "NPO status", "pancreatic rest"],
    },
    {
        id: "q037",
        question:
            "A patient with cirrhosis develops confusion and asterixis. Which laboratory value should the nurse expect to be elevated?",
        options: ["Bilirubin", "Ammonia", "Albumin", "Hemoglobin"],
        correctAnswer: 1,
        explanation:
            "Elevated ammonia levels cause hepatic encephalopathy, presenting with confusion, asterixis (flapping tremor), and altered mental status.",
        category: "Physiological Integrity",
        subcategory: "Reduction of Risk Potential",
        difficulty: "hard",
        rationale:
            "The liver normally converts ammonia to urea; liver dysfunction allows ammonia to accumulate and affect brain function.",
        tags: ["hepatic encephalopathy", "cirrhosis", "ammonia toxicity"],
    },
    {
        id: "q038",
        question: "Which assessment finding indicates successful treatment of dehydration?",
        options: ["Decreased urine output", "Dry mucous membranes", "Improved skin turgor", "Increased heart rate"],
        correctAnswer: 2,
        explanation:
            "Improved skin turgor indicates adequate hydration and successful treatment of dehydration. Other options suggest continued dehydration.",
        category: "Physiological Integrity",
        subcategory: "Basic Care and Comfort",
        difficulty: "easy",
        rationale:
            "Skin turgor reflects tissue hydration status; improvement indicates successful fluid replacement therapy.",
        tags: ["dehydration", "fluid balance", "hydration assessment"],
    },
    {
        id: "q039",
        question:
            "A patient with atrial fibrillation is prescribed warfarin. Which food should the nurse teach the patient to consume consistently?",
        options: ["Citrus fruits", "Dairy products", "Green leafy vegetables", "Red meat"],
        correctAnswer: 2,
        explanation:
            "Green leafy vegetables contain vitamin K, which affects warfarin effectiveness. Consistent intake allows for stable dosing rather than avoidance.",
        category: "Physiological Integrity",
        subcategory: "Pharmacological Therapies",
        difficulty: "medium",
        rationale:
            "Vitamin K is warfarin's antidote; consistent dietary intake allows for predictable anticoagulation management.",
        tags: ["warfarin", "vitamin K", "dietary teaching"],
    },
    {
        id: "q040",
        question: "Which intervention is priority for a patient experiencing anaphylaxis?",
        options: [
            "Administer diphenhydramine (Benadryl)",
            "Give epinephrine intramuscularly",
            "Start IV corticosteroids",
            "Apply oxygen via nasal cannula",
        ],
        correctAnswer: 1,
        explanation:
            "Epinephrine is the first-line treatment for anaphylaxis, rapidly reversing bronchospasm, vasodilation, and cardiovascular collapse.",
        category: "Physiological Integrity",
        subcategory: "Pharmacological Therapies",
        difficulty: "medium",
        rationale:
            "Epinephrine counteracts the massive histamine release in anaphylaxis and can be life-saving when given promptly.",
        tags: ["anaphylaxis", "epinephrine", "emergency treatment"],
    },
    {
        id: "q041",
        question:
            "A patient with myasthenia gravis is experiencing a cholinergic crisis. Which assessment finding supports this diagnosis?",
        options: [
            "Muscle weakness that improves with rest",
            "Excessive salivation and small pupils",
            "Dry mouth and dilated pupils",
            "Muscle weakness that worsens with activity",
        ],
        correctAnswer: 1,
        explanation:
            "Cholinergic crisis from excessive anticholinesterase medication causes increased cholinergic activity: salivation, miosis, muscle fasciculations.",
        category: "Physiological Integrity",
        subcategory: "Pharmacological Therapies",
        difficulty: "hard",
        rationale:
            "Excessive cholinesterase inhibition leads to overstimulation of cholinergic receptors causing characteristic symptoms.",
        tags: ["myasthenia gravis", "cholinergic crisis", "medication toxicity"],
    },
    {
        id: "q042",
        question: "Which nursing intervention is most important for preventing falls in elderly patients?",
        options: [
            "Keep the bed in the highest position",
            "Ensure adequate lighting and clear pathways",
            "Encourage bed rest to prevent injury",
            "Use restraints for confused patients",
        ],
        correctAnswer: 1,
        explanation:
            "Environmental modifications like adequate lighting and clear pathways are key fall prevention strategies that maintain patient mobility and independence.",
        category: "Safe and Effective Care Environment",
        subcategory: "Safety and Infection Control",
        difficulty: "easy",
        rationale:
            "Environmental hazards are major contributors to falls; removing obstacles and improving visibility reduces fall risk.",
        tags: ["fall prevention", "elderly care", "environmental safety"],
    },
    {
        id: "q043",
        question:
            "A patient with pneumonia has an oxygen saturation of 89% on room air. What is the nurse's priority action?",
        options: [
            "Encourage deep breathing exercises",
            "Apply supplemental oxygen",
            "Position the patient upright",
            "Administer bronchodilators",
        ],
        correctAnswer: 1,
        explanation:
            "Oxygen saturation below 90% indicates hypoxemia requiring immediate supplemental oxygen to prevent tissue hypoxia and complications.",
        category: "Physiological Integrity",
        subcategory: "Reduction of Risk Potential",
        difficulty: "medium",
        rationale:
            "Hypoxemia can lead to organ dysfunction; supplemental oxygen is the immediate priority to improve oxygenation.",
        tags: ["hypoxemia", "oxygen therapy", "respiratory care"],
    },
    {
        id: "q044",
        question:
            "Which assessment finding indicates a positive response to treatment in a patient with congestive heart failure?",
        options: [
            "Weight loss of 2 pounds overnight",
            "Increased peripheral edema",
            "Decreased urine output",
            "New onset of shortness of breath",
        ],
        correctAnswer: 0,
        explanation:
            "Weight loss indicates successful diuresis and reduction of fluid overload, which is a primary goal in heart failure treatment.",
        category: "Physiological Integrity",
        subcategory: "Reduction of Risk Potential",
        difficulty: "medium",
        rationale:
            "Daily weight monitoring reflects fluid status; weight loss indicates effective fluid removal and improved cardiac function.",
        tags: ["heart failure", "fluid management", "treatment evaluation"],
    },
    {
        id: "q045",
        question:
            "A patient with diabetes mellitus has a blood glucose of 45 mg/dL. Which intervention should the nurse implement first?",
        options: [
            "Administer glucagon intramuscularly",
            "Give 15 grams of simple carbohydrates",
            "Start an IV and give D50W",
            "Recheck blood glucose in 15 minutes",
        ],
        correctAnswer: 1,
        explanation:
            "For conscious patients with hypoglycemia, oral simple carbohydrates (15g) are the first-line treatment following the 15-15 rule.",
        category: "Physiological Integrity",
        subcategory: "Pharmacological Therapies",
        difficulty: "medium",
        rationale:
            "The 15-15 rule: give 15g simple carbs, wait 15 minutes, recheck glucose. Oral route is preferred if patient is conscious.",
        tags: ["hypoglycemia", "diabetes management", "glucose treatment"],
    },
    {
        id: "q046",
        question: "Which medication should be available at the bedside of a patient receiving magnesium sulfate?",
        options: ["Naloxone (Narcan)", "Calcium gluconate", "Flumazenil (Romazicon)", "Protamine sulfate"],
        correctAnswer: 1,
        explanation:
            "Calcium gluconate is the antidote for magnesium sulfate toxicity, which can cause respiratory depression and cardiac arrest.",
        category: "Physiological Integrity",
        subcategory: "Pharmacological Therapies",
        difficulty: "medium",
        rationale:
            "Calcium gluconate counteracts magnesium's effects on neuromuscular and cardiac function in case of toxicity.",
        tags: ["magnesium sulfate", "antidotes", "medication safety"],
    },
    {
        id: "q047",
        question: "A patient with a tracheostomy is unable to speak. Which intervention should the nurse try first?",
        options: [
            "Deflate the tracheostomy cuff",
            "Suction the tracheostomy",
            "Change the tracheostomy tube",
            "Increase oxygen flow rate",
        ],
        correctAnswer: 0,
        explanation:
            "Deflating the cuff allows air to pass through the vocal cords, enabling speech. This is the least invasive intervention to try first.",
        category: "Physiological Integrity",
        subcategory: "Basic Care and Comfort",
        difficulty: "medium",
        rationale:
            "An inflated cuff prevents air from reaching the vocal cords; deflation allows normal speech mechanisms to function.",
        tags: ["tracheostomy care", "communication", "airway management"],
    },
    {
        id: "q048",
        question: "Which assessment finding in a patient with acute kidney injury requires immediate intervention?",
        options: [
            "Urine output of 20 mL/hour",
            "Serum creatinine of 2.5 mg/dL",
            "Potassium level of 6.8 mEq/L",
            "BUN of 45 mg/dL",
        ],
        correctAnswer: 2,
        explanation:
            "Severe hyperkalemia (K+ > 6.5 mEq/L) can cause life-threatening cardiac arrhythmias and requires immediate treatment.",
        category: "Physiological Integrity",
        subcategory: "Reduction of Risk Potential",
        difficulty: "hard",
        rationale: "Hyperkalemia affects cardiac conduction and can cause ventricular fibrillation or cardiac arrest.",
        tags: ["acute kidney injury", "hyperkalemia", "cardiac emergency"],
    },
    {
        id: "q049",
        question:
            "A patient with bipolar disorder is taking lithium. Which instruction is most important for the nurse to provide?",
        options: [
            "Avoid foods high in tyramine",
            "Maintain consistent sodium intake",
            "Take the medication on an empty stomach",
            "Avoid exposure to sunlight",
        ],
        correctAnswer: 1,
        explanation:
            "Sodium levels affect lithium excretion. Low sodium increases lithium retention and toxicity risk, while high sodium increases excretion.",
        category: "Physiological Integrity",
        subcategory: "Pharmacological Therapies",
        difficulty: "medium",
        rationale:
            "Lithium and sodium compete for renal excretion; sodium changes can dramatically affect lithium levels and toxicity risk.",
        tags: ["lithium therapy", "sodium balance", "medication teaching"],
    },
    {
        id: "q050",
        question: "Which intervention is most effective for preventing ventilator-associated pneumonia (VAP)?",
        options: [
            "Change ventilator circuits every 24 hours",
            "Maintain head of bed elevation at 30-45 degrees",
            "Suction the patient every 2 hours",
            "Administer prophylactic antibiotics",
        ],
        correctAnswer: 1,
        explanation:
            "Head of bed elevation prevents aspiration of gastric contents and oral secretions, which are primary causes of VAP.",
        category: "Safe and Effective Care Environment",
        subcategory: "Safety and Infection Control",
        difficulty: "medium",
        rationale:
            "Gravity helps prevent reflux and aspiration when the head is elevated, reducing bacterial seeding of the lungs.",
        tags: ["ventilator care", "pneumonia prevention", "aspiration prevention"],
    },
]