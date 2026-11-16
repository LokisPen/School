/* Chemistry Unit 1: atoms, water and concentration. Same format as lessons-math.js. */
'use strict';
LESSONS.push(
{id:'c1',title:'Atoms and ions',sub:'Protons, electrons, charge, and the four ions that run the nervous system.',
 learn:[
  ['h','The idea'],
  ['p','Everything is made of atoms. An atom has a tiny, dense nucleus of protons (positive charge) and neutrons (no charge), surrounded by electrons (negative charge).'],
  ['p','The number of protons, called the atomic number, decides which element the atom is: 1 is hydrogen, 6 carbon, 8 oxygen, 11 sodium, 17 chlorine, 19 potassium, 20 calcium.'],
  ['p','The mass number is protons plus neutrons. Electrons weigh almost nothing.'],
  ['h','Ions'],
  ['p','A neutral atom has equal numbers of protons and electrons. If it gains or loses electrons it becomes an ion, an atom with a net charge.'],
  ['m','charge = protons − electrons'],
  ['p','Electrons sit in shells, and atoms tend to gain or lose a few to end up with a full outer shell. Sodium and potassium each have one loosely held outer electron and lose it, becoming Na⁺ and K⁺. Calcium loses two and becomes Ca²⁺. Chlorine is one short of a full shell, gains one, and becomes Cl⁻.'],
  ['ex','An atom has 11 protons and 10 electrons. What is its charge?',['Charge = protons − electrons.','11 − 10 = +1. This is the sodium ion, Na⁺, from your placement test.']],
  ['ex','Calcium has 20 protons. How many electrons does Ca²⁺ have?',['A charge of +2 means two more protons than electrons.','20 − 2 = 18 electrons.']],
  ['n','Neuro thread: four ions run your nervous system',['Sodium, potassium, calcium and chloride. Every thought, heartbeat and movement is these four crossing cell membranes.','Channels tell them apart with startling precision. A potassium channel passes more than a thousand K⁺ for every Na⁺, even though Na⁺ is the smaller ion. The narrowest part of the channel fits a bare K⁺ exactly. The smaller Na⁺ cannot make good contact with the walls, so it stays wrapped in water and is turned away.']],
  ['o','School diagrams still draw electrons circling the nucleus like planets. Since the 1920s physics has described them as clouds of probability called orbitals: regions where an electron is likely to be found. The shell picture in this lesson is a useful simplification of that.']
 ],
 explain:{q:'Explain why a sodium atom that loses one electron has a charge of +1.',model:'A neutral sodium atom has 11 protons and 11 electrons, so the positive and negative charges cancel. Losing one electron leaves 11 protons and 10 electrons. One positive charge is now unbalanced, so the ion has a charge of +1.',pts:['A neutral sodium atom has 11 protons and 11 electrons','Protons are positive and electrons are negative','With 10 electrons left, one positive charge is unbalanced']},
 gens:[
  function(){ var p=pk([3,8,9,11,12,13,16,17,19,20]), c=pk([-2,-1,1,2,3]); return {q:'An atom has '+p+' protons and '+(p-c)+' electrons. What is its net charge? Use a sign if it is negative.',a:c,sol:['Charge = protons − electrons.',p+' − '+(p-c)+' = '+f(c)+'.']}; },
  function(){ var e=pk([['sodium ion, Na⁺,',11,1],['potassium ion, K⁺,',19,1],['calcium ion, Ca²⁺,',20,2],['chloride ion, Cl⁻,',17,-1],['magnesium ion, Mg²⁺,',12,2],['oxide ion, O²⁻,',8,-2],['fluoride ion, F⁻,',9,-1]]); return {q:'A '+e[0]+' has '+e[1]+' protons. How many electrons does it have?',a:e[1]-e[2],sol:[e[2]>0?'A charge of +'+e[2]+' means '+e[2]+' fewer electron'+(e[2]>1?'s':'')+' than protons.':'A charge of '+f(e[2])+' means '+(-e[2])+' more electron'+(e[2]<-1?'s':'')+' than protons.',e[1]+(e[2]>0?' − '+e[2]:' + '+(-e[2]))+' = '+(e[1]-e[2])+' electrons.']}; },
  function(){ var e=pk([['carbon',6,12],['carbon',6,14],['sodium',11,23],['potassium',19,39],['chlorine',17,35],['oxygen',8,16],['calcium',20,40],['nitrogen',7,14],['chlorine',17,37]]); return {q:'An atom of '+e[0]+' has '+e[1]+' protons and a mass number of '+e[2]+'. How many neutrons does it have?',a:e[2]-e[1],sol:['Mass number = protons + neutrons.',e[2]+' − '+e[1]+' = '+(e[2]-e[1])+' neutrons.']}; }
 ],
 bank:[
  ['What decides which element an atom is?',['Its number of protons','Its number of neutrons','Its number of electrons','Its total mass'],'The atomic number, the proton count, defines the element.'],
  ['Where is nearly all of an atom’s mass?',['In the nucleus','In the electron shells','Spread evenly throughout','In the space between the shells'],'Protons and neutrons are each about 1,800 times heavier than an electron.'],
  ['Potassium has one loosely held outer electron. What ion does it usually form?',['K⁺, by losing that electron','K⁻, by gaining an electron','K²⁺, by losing two electrons','It does not form ions'],'Losing one negative charge leaves a net charge of +1.'],
  ['Chlorine is one electron short of a full outer shell. What does it usually do?',['Gains one electron to become Cl⁻','Loses one electron to become Cl⁺','Loses seven electrons','Stays neutral in solution'],'Gaining one negative charge gives a net charge of −1.'],
  ['Which four ions carry most electrical signaling in the nervous system?',['Sodium, potassium, calcium and chloride','Iron, zinc, copper and iodine','Hydrogen, helium, lithium and carbon','Sodium, sulfur, silicon and selenium'],'Na⁺, K⁺, Ca²⁺ and Cl⁻.']
 ]},

{id:'c2',title:'Bonds and water',sub:'How atoms hold together, why water dissolves salt, and why membranes insulate.',
 learn:[
  ['h','Three kinds of bond'],
  ['p','Ionic bond: one atom hands an electron to another, and the opposite charges that result attract. Table salt is Na⁺ and Cl⁻ held together this way.'],
  ['p','Covalent bond: two atoms share electrons. These bonds are strong and hold molecules together.'],
  ['p','Polar covalent bond: the sharing is unequal. In water, oxygen pulls the shared electrons closer, so the oxygen end is slightly negative and the two hydrogen ends are slightly positive.'],
  ['h','Hydrogen bonds'],
  ['p','The slightly positive hydrogen of one molecule is attracted to a slightly negative atom on another. Each such link is weak, but together they give water its high boiling point, hold the two strands of DNA together and keep proteins folded.'],
  ['h','What dissolves'],
  ['p','Water dissolves anything charged or polar, which is called hydrophilic, or water-loving. Salt falls apart into ions, each surrounded by water molecules. Non-polar substances such as oil and fat are hydrophobic: water has nothing to grip, so it squeezes them together and out. The rule is that like dissolves like.'],
  ['n','Neuro thread: why a neuron can hold a voltage',['A cell membrane is a double layer of lipid molecules, with water-loving heads facing outward and oily tails in the middle. An ion, wrapped in its coat of water, cannot cross that oily core.','That makes the membrane an electrical insulator, so charge can be kept separated across it. The only ways through are protein channels and pumps, and that is what gives the cell control over its own voltage.']],
  ['o','For most of the 1900s, general anesthetics were thought to work by dissolving in the oily membrane and disrupting it. Evidence since the 1980s shows they act mainly by binding specific proteins, especially GABA receptors and certain potassium channels.']
 ],
 explain:{q:'Explain why salt dissolves in water but oil does not.',model:'Water molecules are polar: the oxygen end is slightly negative and the hydrogen ends slightly positive. Salt is made of ions, and the charged ends of water molecules surround each ion and pull the crystal apart. Oil is non-polar, so water has nothing to grip and squeezes it out.',pts:['Water molecules are polar, with slightly charged ends','Salt is made of ions, which the charged ends of water surround and pull apart','Oil is non-polar, so water has nothing to grip and pushes it out']},
 bank:[
  ['In a water molecule, which end carries a slight negative charge?',['The oxygen end, because oxygen pulls the shared electrons closer','The hydrogen ends','Neither; the charge is even','Both ends equally'],'Unequal sharing makes water polar.'],
  ['What holds Na⁺ and Cl⁻ together in a salt crystal?',['Attraction between opposite charges','Shared electrons','Hydrogen bonds','Gravity'],'That attraction is an ionic bond.'],
  ['Which of these is the weakest single link?',['A hydrogen bond between two water molecules','The covalent bond between oxygen and hydrogen inside a water molecule','A covalent bond between two carbon atoms','The bond between the two atoms in nitrogen gas'],'Hydrogen bonds are weak one at a time and strong in large numbers.'],
  ['A molecule is described as hydrophobic. What will it most likely do?',['Dissolve in oil and cross a lipid membrane easily','Dissolve readily in water','Carry a full electric charge','Break apart into ions'],'Non-polar molecules mix with other non-polar substances, including the membrane core.'],
  ['Why can a sodium ion not cross the middle of a cell membrane on its own?',['It is charged and wrapped in water, and the membrane core is oily','It is too large to fit between any molecules','The membrane is positively charged and repels it','Sodium is hydrophobic'],'Charged particles do not dissolve in the non-polar core.'],
  ['Why does the membrane’s insulating core matter to a neuron?',['It lets charge stay separated, so the cell can hold a voltage','It generates ATP','It stores neurotransmitter','It makes the cell rigid'],'Without an insulator, the separated charges would simply flow back together.'],
  ['Like dissolves like. Which pair mixes well?',['Alcohol and water, which are both polar','Oil and water','Wax and water','Butter and salt water'],'Polar mixes with polar.'],
  ['What holds the two strands of DNA together?',['Hydrogen bonds between the bases','Covalent bonds between the bases','Ionic bonds','Peptide bonds'],'Weak individually, so the strands can be unzipped for copying, yet strong in their millions.'],
  ['According to current evidence, how do general anesthetics mainly work?',['By binding specific proteins such as GABA receptors','By dissolving the cell membrane','By blocking oxygen delivery','By cooling the brain'],'The membrane-disruption theory has been replaced by specific protein targets.']
 ]},

{id:'c3',title:'Moles and concentration',sub:'Counting atoms by weighing them, molarity, and why calcium makes such a sharp signal.',
 learn:[
  ['h','The mole'],
  ['p','Atoms are too small to count one at a time, so chemists count them in moles. A mole is a fixed number of particles, about 6.02 × 10²³ (602 followed by 21 zeros), in the same way that a dozen is 12.'],
  ['p','The molar mass of a substance is the mass of one mole of it, in grams. Water is 18 g, table salt (NaCl) 58.5 g, glucose 180 g.'],
  ['m','moles = grams ÷ molar mass'],
  ['h','Concentration'],
  ['p','Concentration says how much is dissolved in a given volume. Molarity, written M, is moles per liter of solution. Biology mostly uses the millimolar, mM: 1 M = 1,000 mM.'],
  ['m','molarity = moles ÷ liters'],
  ['ex','How many moles are in 36 g of water?',['Moles = grams ÷ molar mass.','36 ÷ 18 = 2 moles.']],
  ['ex','How many grams of NaCl make 1 liter of a 0.1 M solution?',['You need 0.1 mole in the liter.','0.1 × 58.5 = 5.85 g. This was on your placement test.']],
  ['ex','0.5 mole is dissolved to make 2 liters. What is the concentration?',['Molarity = moles ÷ liters = 0.5 ÷ 2 = 0.25 M.','In millimolar: 0.25 × 1,000 = 250 mM.']],
  ['n','Neuro thread: calcium, the trigger',['Ion levels around a neuron, in millimolar: potassium is about 140 inside and 4 outside. Sodium is about 12 inside and 145 outside.','Calcium is the extreme case: about 2 mM outside and 0.0001 mM inside, a ratio of 20,000 to 1. Because the level inside is so low, even a tiny inflow is an enormous relative change.','That is why cells use calcium as their main trigger: for releasing neurotransmitter, contracting muscle and switching genes on.']],
  ['o','Until 2019 the mole was defined as the number of atoms in 12 grams of carbon-12, which depended on a physical measurement. It is now defined as exactly 6.02214076 × 10²³ particles, a fixed number.']
 ],
 explain:{q:'Explain what a 0.1 M salt solution is and how you would make one liter of it.',model:'Molarity is moles of dissolved substance per liter of solution, so 0.1 M means 0.1 mole in every liter. One mole of NaCl has a mass of 58.5 g, so 0.1 mole is 5.85 g. Dissolve 5.85 g of salt and add water until the total volume is one liter.',pts:['Molarity is moles of substance per liter of solution','0.1 M means 0.1 mole in each liter','0.1 mole × 58.5 g per mole = 5.85 g of NaCl, made up to one liter']},
 gens:[
  function(){ var s=pk([['water',18],['glucose',180],['table salt (NaCl)',58.5],['carbon dioxide',44],['oxygen gas',32],['potassium chloride',74.5]]), n=pk([0.5,2,3,4,5,10]); return {q:'How many moles are in '+f(n*s[1])+' g of '+s[0]+'? Its molar mass is '+s[1]+' g per mole.',a:n,tol:0.001,sol:['Moles = grams ÷ molar mass.',f(n*s[1])+' ÷ '+s[1]+' = '+f(n)+' mol.']}; },
  function(){ var s=pk([['water',18],['glucose',180],['table salt (NaCl)',58.5],['carbon dioxide',44],['oxygen gas',32]]), n=pk([0.5,2,3,4,5]); return {q:'What is the mass in grams of '+f(n)+' mole'+(n===1?'':'s')+' of '+s[0]+'? Its molar mass is '+s[1]+' g per mole.',a:n*s[1],tol:0.01,sol:['Grams = moles × molar mass.',f(n)+' × '+s[1]+' = '+f(n*s[1])+' g.']}; },
  function(){ var n=pk([0.5,1,2,3,4]), L=pk([0.5,1,2,4]); return {q:f(n)+' mole'+(n===1?' is':'s are')+' dissolved to make '+f(L)+' liter'+(L===1?'':'s')+' of solution. What is the concentration in M?',a:n/L,tol:0.001,sol:['Molarity = moles ÷ liters.',f(n)+' ÷ '+f(L)+' = '+f(n/L)+' M.']}; },
  function(){ var s=pk([['glucose',180],['table salt (NaCl)',58.5],['potassium chloride',74.5]]), M=pk([0.1,0.2,0.5,1,2]), L=pk([0.5,1,2]); return {q:'How many grams of '+s[0]+' ('+s[1]+' g per mole) do you need to make '+f(L)+' liter'+(L===1?'':'s')+' of a '+f(M)+' M solution?',a:M*L*s[1],tol:0.02,sol:['Moles needed = molarity × liters = '+f(M)+' × '+f(L)+' = '+f(M*L)+' mol.','Grams = moles × molar mass = '+f(M*L)+' × '+s[1]+' = '+f(M*L*s[1])+' g.']}; },
  function(){ var m=pk([140,4,145,12,2,500,100,1500,25,250]), up=ri(0,1)===1; return up?{q:'Convert '+f(m/1000)+' M to millimolar (mM).',a:m,tol:0.001,sol:['1 M = 1,000 mM, so multiply by 1,000.',f(m/1000)+' × 1,000 = '+m+' mM.']}:{q:'Convert '+m+' mM to molar (M).',a:m/1000,tol:0.00001,sol:['1,000 mM = 1 M, so divide by 1,000.',m+' ÷ 1,000 = '+f(m/1000)+' M.']}; }
 ],
 bank:[
  ['What is a mole?',['A fixed number of particles, about 6.02 × 10²³','A mass of exactly one gram','A unit of volume','A kind of molecule'],'It is a counting unit, like a dozen, only vastly larger.'],
  ['Compared with a liter of 1 M glucose, a liter of 2 M glucose contains:',['Twice as many glucose molecules','The same number of glucose molecules','Half as many glucose molecules','Twice as much water'],'Molarity counts moles per liter, and moles count molecules.'],
  ['Why does a small inflow of calcium make such a strong signal inside a cell?',['Resting calcium inside is extremely low, so a small inflow is a large relative change','Calcium is the largest ion','Calcium carries no charge','Calcium is the most abundant ion inside cells'],'Starting from 0.0001 mM, even a trickle multiplies the level many times over.']
 ]}
);
