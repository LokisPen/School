/* Reference material shown under the More tab: the book list and the "Beyond the books" notes. */
'use strict';
var LIB=[
 {n:'Foundations',items:[
  ['Algebra and Trigonometry; Calculus, volumes 1 to 3','OpenStax',1],
  ['Chemistry 2e','OpenStax',1],
  ['Organic Chemistry','John McMurry, OpenStax edition',1],
  ['University Physics, volumes 1 to 3','OpenStax',1],
  ['Biology 2e','OpenStax',1],
  ['Introductory Statistics','OpenStax',1],
  ['Molecular Biology of the Cell','Alberts and others',0]
 ]},
 {n:'Preclinical medicine',items:[
  ['Anatomy and Physiology 2e','OpenStax',1],
  ['Lippincott Illustrated Reviews: Biochemistry','Abali and others',0],
  ['Thompson & Thompson Genetics in Medicine','Nussbaum and others',0],
  ['Clinically Oriented Anatomy','Moore, Dalley, Agur',0],
  ['Atlas of Human Anatomy','Frank Netter',0],
  ['Langman’s Medical Embryology','T. W. Sadler',0],
  ['Junqueira’s Basic Histology','Anthony Mescher',0],
  ['Physiology','Linda Costanzo',0],
  ['Guyton and Hall Textbook of Medical Physiology','John Hall',0],
  ['Basic Immunology','Abbas, Lichtman, Pillai',0],
  ['Medical Microbiology','Murray, Rosenthal, Pfaller',0],
  ['Robbins & Cotran Pathologic Basis of Disease','Kumar, Abbas, Aster',0],
  ['Fundamentals of Pathology (Pathoma)','Husain Sattar',0],
  ['Basic & Clinical Pharmacology','Bertram Katzung',0],
  ['First Aid for the USMLE Step 1','Le and Bhushan',0],
  ['StatPearls','NCBI Bookshelf, online',1]
 ]},
 {n:'Clinical medicine',items:[
  ['Harrison’s Principles of Internal Medicine','Loscalzo and others',0],
  ['Step-Up to Medicine','Agabegi and Agabegi',0],
  ['Symptom to Diagnosis','Stern, Cifu, Altkorn',0],
  ['Bates’ Guide to Physical Examination','Lynn Bickley',0],
  ['Rapid Interpretation of EKG’s','Dale Dubin',0],
  ['Felson’s Principles of Chest Roentgenology','Goodman',0],
  ['Nelson Essentials of Pediatrics','Marcdante and Kliegman',0],
  ['Kaplan & Sadock’s Synopsis of Psychiatry','Boland and Verduin',0],
  ['First Aid for the USMLE Step 2 CK','Le and others',0],
  ['Merck Manual, Professional Edition','online',1]
 ]},
 {n:'Neuroscience',items:[
  ['Neuroscience Online','UTHealth Houston, online',1],
  ['Neuroscience: Exploring the Brain','Bear, Connors, Paradiso',0],
  ['Neuroscience','Dale Purves and others',0],
  ['Principles of Neural Science','Kandel and others',0],
  ['Principles of Neurobiology','Liqun Luo',0],
  ['Neuroanatomy through Clinical Cases','Hal Blumenfeld',0],
  ['Nolte’s The Human Brain','Todd Vanderah',0],
  ['Ion Channels of Excitable Membranes','Bertil Hille',0],
  ['Cognitive Neuroscience: The Biology of the Mind','Gazzaniga, Ivry, Mangun',0],
  ['Theoretical Neuroscience','Dayan and Abbott',0],
  ['Neuronal Dynamics','Gerstner and others, online',1],
  ['Principles of Neural Design','Sterling and Laughlin',0],
  ['Stahl’s Essential Psychopharmacology','Stephen Stahl',0],
  ['Adams and Victor’s Principles of Neurology','Ropper and others',0]
 ]},
 {n:'Practice questions and tools',items:[
  ['USMLE Step 1 and Step 2 CK sample test questions','usmle.org, downloadable PDFs',1],
  ['UWorld question banks','the standard paid question bank',0],
  ['Anki','spaced-repetition flashcards, works offline',0]
 ]}
];
var NOTES=[
 {n:'Where older textbooks are out of date',b:['Neuron count: about 86 billion, with roughly as many glial cells. The old figures of 100 billion neurons and ten glia per neuron came from estimates, and direct counting from 2009 onward replaced them.','Resting voltage: set almost entirely by potassium leaking through channels that stay open at rest. The sodium-potassium pump adds only a few millivolts directly; its job is to maintain the gradients.','Dendrites: active computers that fire their own local spikes. They are not passive wires feeding a simple adder.','Glia: astrocytes and microglia shape signaling, prune synapses and regulate brain states. Calling them support cells undersells them.','One neuron, one transmitter: many neurons release two or more transmitters.','Waste clearance: the brain was long said to have no lymphatic drainage. Lymphatic vessels in its coverings were described in 2015.','Fixed adult brain: adult brains rewire throughout life. Whether adult humans grow meaningful numbers of new neurons is still disputed, so treat confident claims either way with care.','Stomach ulcers: most are caused by the bacterium Helicobacter pylori or by anti-inflammatory painkillers, and are treated with antibiotics. Stress and spicy food were the old explanation.','Popular myths with no support: we use only 10% of the brain; people are left-brained or right-brained; teaching to a personal learning style improves results.']},
 {n:'Astrocytes steer brain states',b:['Textbooks long described astrocytes as support cells. Recent experiments show them adjusting neural activity to set states such as giving up, sleep pressure and hunger.','In one zebrafish experiment, fish whose swimming got them nowhere eventually quit. With the astrocytes disabled they never quit, and switching the astrocytes on made them stop at once.','The consequence: a wiring diagram of neurons alone is missing a layer of control.','Source: Quanta Magazine, January 2026.']},
 {n:'Neurons build proteins at the synapse',b:['The old view was that proteins are made in the cell body and shipped out. Holt, Martin, Schuman and Steward showed neurons also make proteins locally in dendrites and axons, right where a synapse needs them.','This matters for how connections change during learning and during development, and it reshaped research on fragile X syndrome.','Source: 2026 Kavli Prize in Neuroscience.']},
 {n:'Brain-computer interfaces can decode speech and gesture together',b:['A UCSF team decoded speech and upper-body gestures at the same time in three people with paralysis, driving a full-body avatar. Accuracy in conversation was 75% for speech and 85% for gestures.','The brain activity for speaking while gesturing was not simply the two signals added together.','Earlier Stanford work decoded imagined inner speech with up to 74% accuracy.','Sources: Nature Neuroscience, September 2026; Cell, 2025.']},
 {n:'Cell atlases and connectomes',b:['The whole mouse brain has been catalogued: more than 5,300 cell types from about 32 million cells (2023).','The complete wiring of an adult fruit fly brain has been mapped, and so has a cubic millimeter of mouse visual cortex together with its activity.','The human cell atlas is in progress; its consortium made its third public data release in November 2026.','Sources: NIH BRAIN Initiative, Allen Institute.']},
 {n:'What fMRI really measures',b:['fMRI does not record neurons firing. It tracks blood oxygen, and 2026 work argues the signal mixes blood-vessel effects with metabolic ones.','Treat any brain-scan claim as indirect evidence, and ask what the comparison condition was.','Source: Nature Neuroscience, April 2026.']},
 {n:'How to study so it sticks',b:['Retrieve, do not reread. Close the book and write what you remember, then check.','Space it out. Revisit after a day, then a few days, then weeks.','Mix topics within a session. It feels harder and works better.','Explain from first principles, out loud or on paper, as if teaching. Wherever you stall is the gap.','Keep an error log: every missed question, why you missed it, and the rule that fixes it.']},
 {n:'How to read a research paper',b:['Read the abstract, then the figures, before the text. Try to state each figure’s claim in one sentence.','Ask what was measured, what was changed, and what the control was.','Recording shows correlation. Only manipulation, such as a lesion, a drug or optogenetics, shows cause.','Check sample size, whether the analysis was planned in advance, and whether anyone has replicated it.']}
];
