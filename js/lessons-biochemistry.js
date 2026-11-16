/* Biochemistry Unit 1: molecules, enzymes and energy. Same format as lessons-math.js. */
'use strict';
LESSONS.push(
{id:'b1',title:'The four molecules of life',sub:'Carbohydrates, lipids, proteins and nucleic acids, and a brain built of fat.',
 learn:[
  ['h','The idea'],
  ['p','Living things are built mostly from four families of large molecules. Three of them are chains of small repeating units.'],
  ['u',['Carbohydrates: sugars and chains of sugars, such as starch and glycogen. They are quick fuel and short-term energy storage. The unit is a simple sugar such as glucose.','Lipids: fats, oils, cholesterol and the phospholipids that form membranes. They store fuel long term and do not dissolve in water. They are not built as chains of repeating units.','Proteins: chains of amino acids, of which there are 20 kinds, folded into working shapes. They do most of the cell’s work as enzymes, channels, receptors and scaffolding.','Nucleic acids: DNA and RNA, which are chains of nucleotides. They store and carry information.']],
  ['h','Shape is function'],
  ['p','The order of amino acids in a protein decides how it folds, and its folded shape decides what it does. Heat or the wrong acidity can unfold a protein so that it stops working. That is why egg white turns solid when cooked, and part of why a very high fever is dangerous.'],
  ['n','Neuro thread: a brain built of fat',['Leaving out water, the brain is about 60% lipid, which makes it the fattiest organ in the body. Much of that is myelin, the wrapping around axons.','The brain also holds roughly a fifth of the body’s cholesterol and makes all of its own, because cholesterol in the blood cannot cross the blood-brain barrier.']],
  ['o','Older textbooks state that a protein must fold into one fixed shape to work. About a third of human proteins have long regions with no fixed shape, and they use that flexibility to do their jobs. Separately, since 2020 the AI system AlphaFold has predicted protein shapes from their sequences with accuracy close to experiment, work that shared the 2024 Nobel Prize in Chemistry.']
 ],
 explain:{q:'Name the four families of biological molecules and the main job of each.',model:'Carbohydrates are quick fuel and short-term energy storage. Lipids form membranes and store fuel long term. Proteins do most of the cell’s work, as enzymes, channels and receptors. Nucleic acids, DNA and RNA, store and carry information.',pts:['Carbohydrates: fuel and energy storage','Lipids: membranes and long-term fuel storage','Proteins: most of the cell’s work, such as enzymes and channels','Nucleic acids: storing and carrying information']},
 bank:[
  ['Proteins are chains of which building blocks?',['Amino acids','Nucleotides','Fatty acids','Simple sugars'],'Twenty kinds of amino acid, joined in a chain.'],
  ['Which family of molecules stores genetic information?',['Nucleic acids','Proteins','Lipids','Carbohydrates'],'DNA and RNA are nucleic acids.'],
  ['What is the main component of cell membranes?',['Phospholipids','Starch','DNA','Glucose'],'A double layer of phospholipids forms the membrane.'],
  ['Starch and glycogen are chains of what?',['Glucose','Amino acids','Nucleotides','Fatty acids'],'Both are ways of storing glucose.'],
  ['What most directly determines what a protein does?',['Its folded shape, which is set by its amino acid sequence','Its color','The number of carbon atoms it contains','The organ it was eaten in'],'Sequence sets the fold, and the fold sets the function.'],
  ['Why can a very high fever be dangerous at the level of molecules?',['Heat can unfold proteins so that they stop working','Heat turns lipids into sugar','Heat directly erases DNA bases','Heat freezes membranes'],'Proteins depend on their shape, and heat disrupts it.'],
  ['Why must the brain make its own cholesterol?',['Cholesterol in the blood cannot cross the blood-brain barrier','The brain does not use cholesterol','The liver cannot make cholesterol','Cholesterol is toxic in the blood'],'The barrier keeps blood cholesterol out, so brain cells make their own.'],
  ['Which of the four families is NOT built as a chain of repeating units?',['Lipids','Proteins','Nucleic acids','Carbohydrates such as starch'],'Fats and cholesterol are not polymers.'],
  ['How many different amino acids build human proteins?',['20','4','64','100'],'Twenty amino acids, specified by 64 possible codons.']
 ]},

{id:'b2',title:'Enzymes',sub:'How cells speed up chemistry, and the enzyme that clears a synapse in a millisecond.',
 learn:[
  ['h','The idea'],
  ['p','Most reactions in a cell would take years on their own. Enzymes are proteins that speed them up, often a millionfold or more, without being used up.'],
  ['p','Every reaction has an energy hill to climb before it can go, called the activation energy. An enzyme lowers that hill. It does not change where the reaction starts or ends, and it does not supply energy. It only makes the path easier.'],
  ['p','The molecule being changed, the substrate, fits into a pocket on the enzyme called the active site. The fit is specific: each enzyme handles one reaction or a small family of them.'],
  ['p','Because enzymes are proteins, they depend on their shape. Each works best at a particular temperature and acidity. Too far from those and it slows down, and enough heat destroys the shape altogether.'],
  ['h','Inhibitors'],
  ['p','An inhibitor is a molecule that blocks an enzyme. Many drugs are enzyme inhibitors. A competitive inhibitor sits in the active site and competes with the substrate for it.'],
  ['n','Neuro thread: clearing a synapse in a millisecond',['Where a nerve meets a muscle, the transmitter acetylcholine has to be removed almost instantly so the muscle can relax and be ready for the next signal. The enzyme acetylcholinesterase does it. Each enzyme molecule destroys several thousand acetylcholine molecules every second, close to the limit set by how fast molecules can collide.','Nerve agents such as sarin, and some insecticides, kill by jamming this enzyme. Gentler inhibitors of the same enzyme, such as donepezil, are used to ease the symptoms of Alzheimer’s disease.']],
  ['o','Older books describe a rigid lock and key. Enzymes are flexible: binding the substrate reshapes the active site around it, and the enzyme’s own motion is part of how it works.']
 ],
 explain:{q:'Explain how an enzyme speeds up a reaction, and what it does not change.',model:'An enzyme binds its substrate at the active site and lowers the activation energy, the hill the reaction must climb, so the reaction goes much faster. The enzyme is not used up, and it does not change the reaction’s overall energy or where it ends up.',pts:['It lowers the activation energy','The substrate binds specifically at the active site','It is not used up and does not change the reaction’s overall energy or end point']},
 bank:[
  ['How does an enzyme speed up a reaction?',['It lowers the activation energy','It raises the temperature of the cell','It makes the products more stable','It is used up to supply energy'],'It lowers the energy hill. You met this on the placement test.'],
  ['After catalyzing a reaction, what state is an enzyme in?',['Unchanged and ready to work again','Used up','Turned into product','Permanently stuck to the product'],'Enzymes are reused many thousands of times.'],
  ['What is the active site?',['The pocket where the substrate binds','The gene that codes for the enzyme','The energy released by the reaction','The membrane the enzyme sits in'],'Its shape is what makes the enzyme specific.'],
  ['An enzyme is heated far above body temperature and stops working. Why?',['Heat unfolded it and destroyed the shape of the active site','Heat used up the substrate','Enzymes are consumed by heat','The activation energy fell to zero'],'An unfolded protein has lost its working shape.'],
  ['How does a competitive inhibitor work?',['It occupies the active site so the substrate cannot bind','It destroys the substrate','It raises the temperature','It supplies extra energy'],'It competes with the substrate for the same pocket.'],
  ['Does an enzyme change the total energy released by a reaction?',['No, only its speed','Yes, it increases it','Yes, it decreases it','Yes, it makes it zero'],'Start and end points are untouched. Only the path changes.'],
  ['Sarin blocks acetylcholinesterase. What happens where nerve meets muscle?',['Acetylcholine builds up and the muscle is stimulated without pause','Acetylcholine vanishes and the muscle goes limp at once','No acetylcholine is released','The muscle makes its own replacement enzyme'],'With the clearing enzyme jammed, the transmitter keeps acting.'],
  ['Which statement about drugs is accurate?',['Many drugs work by inhibiting enzymes','Drugs never act on enzymes','All drugs are vitamins','Drugs work only by killing cells'],'Blocking a specific enzyme is one of the most common ways drugs act.'],
  ['Most enzymes are which kind of molecule?',['Proteins','Lipids','Carbohydrates','Fats'],'Nearly all enzymes are proteins.']
 ]},

{id:'b3',title:'ATP and energy',sub:'How cells turn glucose into usable energy, and why the brain has no reserves.',
 learn:[
  ['h','The currency'],
  ['p','Cells spend energy in one currency, ATP. Breaking off its end phosphate releases energy that drives pumps, muscle and the building of new molecules. The spent molecule, ADP, is recharged using energy from food.'],
  ['h','Three stages'],
  ['l',['Glycolysis, in the cell’s fluid: glucose is split in two for a net gain of 2 ATP. It needs no oxygen.','The citric acid cycle, inside the mitochondria: the pieces are stripped of high-energy electrons and their carbon is released as carbon dioxide. This is the CO₂ you breathe out.','Oxidative phosphorylation, on the inner mitochondrial membrane: the electrons pass down a chain of proteins to oxygen. The energy pumps protons across the membrane, and the protons flowing back through a turbine-like enzyme make most of the ATP. This is why you need to breathe in oxygen.']],
  ['p','With oxygen, one glucose yields about 30 ATP. Without it, only the 2 from glycolysis.'],
  ['n','Neuro thread: no reserves',['The brain burns about 120 grams of glucose a day and stores almost none. Most of its ATP goes to the sodium-potassium pumps that reset ion gradients after every signal.','If blood flow to the brain stops, consciousness is lost in about 10 seconds and neurons begin to die within about 5 minutes. That is the whole logic of stroke treatment and of CPR: restore flow before the ATP runs out.']],
  ['o','Older textbooks give 36 or 38 ATP per glucose. Direct measurements of how many protons the machinery uses put the real yield at about 30 to 32.']
 ],
 explain:{q:'Explain why a cell makes far more ATP with oxygen than without it.',model:'Without oxygen only glycolysis runs, giving 2 ATP per glucose. With oxygen, the mitochondria strip electrons from the fuel and pass them down a chain of proteins to oxygen. That flow drives the enzyme that makes most of the roughly 30 ATP.',pts:['Without oxygen only glycolysis runs, giving 2 ATP','With oxygen, mitochondria pass electrons down a chain to oxygen','That drives the enzyme that makes most of the roughly 30 ATP']},
 gens:[
  function(){ var n=ri(2,12); return {q:'A cell with oxygen makes about 30 ATP per glucose. Without oxygen it makes 2. How many glucose molecules must it burn without oxygen to match '+n+' burned with oxygen?',a:15*n,sol:['With oxygen: '+n+' × 30 = '+(30*n)+' ATP.','Without oxygen each glucose gives 2: '+(30*n)+' ÷ 2 = '+(15*n)+' glucose.']}; },
  function(){ var n=ri(3,40); return {q:'Glycolysis nets 2 ATP per glucose. How many ATP does it net from '+n+' glucose molecules?',a:2*n,sol:['2 ATP for each glucose.',n+' × 2 = '+(2*n)+' ATP.']}; }
 ],
 bank:[
  ['What is the cell’s energy currency?',['ATP','DNA','Glucose','Oxygen'],'Glucose is the fuel. ATP is the form in which energy is spent.'],
  ['What is the net ATP gain from glycolysis for one glucose?',['2','4','30','36'],'It spends 2 and makes 4.'],
  ['Where does glycolysis take place?',['In the cell’s fluid, outside the mitochondria','Inside the nucleus','On the inner mitochondrial membrane','In the lysosomes'],'It is the only stage that happens outside the mitochondria.'],
  ['Where is the electron transport chain?',['On the inner mitochondrial membrane','On the outer cell membrane','In the nucleus','In the cell’s fluid'],'The chain sits in the inner membrane and pumps protons across it.'],
  ['What is oxygen’s role in making ATP?',['It accepts the electrons at the end of the chain','It is split to make glucose','It carries carbon dioxide out of the cell','It is converted directly into ATP'],'Without oxygen to take the electrons, the chain backs up and stops.'],
  ['Where does the carbon dioxide you breathe out come from?',['Carbon atoms stripped from fuel inside the mitochondria','The oxygen you breathed in','Water in the blood','Nitrogen in the air'],'The carbon of glucose leaves the body as CO₂.'],
  ['Why does the brain fail within seconds without blood flow?',['It has almost no energy stores and a constant ATP demand','Neurons stop making proteins','Pressure inside the skull drops','Blood carries the electrical signals'],'With no reserve, ATP runs out almost at once.'],
  ['What is most of the brain’s ATP spent on?',['Pumping ions to maintain gradients','Copying DNA','Moving neurons around','Digesting glucose'],'Resetting sodium and potassium gradients is the brain’s largest energy cost.'],
  ['What is the current best estimate of ATP made per glucose with oxygen?',['About 30 to 32','2','38','100'],'Older books say 36 or 38. Measurement puts it near 30.']
 ]}
);
