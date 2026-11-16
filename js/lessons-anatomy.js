/* Anatomy and physiology Unit 1: body, heart and lungs. Same format as lessons-math.js. */
'use strict';
LESSONS.push(
{id:'a1',title:'How the body is organized',sub:'Tissues, organs, feedback, and the thermostat in your head.',
 learn:[
  ['h','Levels'],
  ['p','Cells of one kind working together form a tissue. Tissues combine into organs, and organs into organ systems.'],
  ['p','There are four basic tissue types:'],
  ['u',['Epithelial: linings and coverings, such as skin and the lining of the gut.','Connective: support and transport, such as bone, fat, tendon and blood.','Muscle: movement. Skeletal muscle moves the skeleton, cardiac muscle is the heart, and smooth muscle lines blood vessels and the gut.','Nervous: signaling.']],
  ['h','Homeostasis'],
  ['p','The body holds its internal conditions, such as temperature, blood glucose, acidity and blood pressure, within narrow limits whatever is happening outside. This is homeostasis.'],
  ['p','Its main tool is negative feedback. A sensor detects a change, a control center compares it with a set point, and an effector pushes back. The response opposes the change. Body temperature rises, so you sweat and skin vessels widen, and temperature falls.'],
  ['p','Positive feedback amplifies a change. It is rarer and used when something must finish quickly: blood clotting, or contractions in labor.'],
  ['n','Neuro thread: the thermostat in your head',['The hypothalamus, an almond-sized region at the base of the brain, is the control center for temperature, thirst, hunger and much of the hormone system. Some of its neurons sense the temperature of the blood directly.','A fever is not a failure of that system. During an infection, immune signals tell the hypothalamus to raise the set point. You shiver at a temperature that would normally make you sweat. Fever-reducing drugs work by blocking that signal, not by cooling you.']],
  ['o','Older textbooks state that the body carries ten bacterial cells for every human cell. A recount in 2016 put it close to one to one: roughly 38 trillion bacteria and 30 trillion human cells.']
 ],
 explain:{q:'Explain negative feedback, using body temperature as the example.',model:'A sensor detects that temperature has moved away from its set point. The control center, the hypothalamus, triggers a response such as sweating when hot or shivering when cold. The response opposes the change and brings temperature back toward the set point.',pts:['A sensor detects that temperature has moved from the set point','The control center, the hypothalamus, triggers a response such as sweating or shivering','The response opposes the change and brings temperature back']},
 bank:[
  ['Which order runs from smallest to largest?',['Cell, tissue, organ, organ system','Tissue, cell, organ, organ system','Cell, organ, tissue, organ system','Organ, tissue, cell, organ system'],'Cells form tissues, tissues form organs, organs form systems.'],
  ['Which tissue type lines the gut and covers the body?',['Epithelial','Connective','Muscle','Nervous'],'Epithelial tissue forms linings and coverings.'],
  ['Blood and bone are which tissue type?',['Connective','Epithelial','Muscle','Nervous'],'Connective tissue supports, binds and transports.'],
  ['Blood glucose rises after a meal, insulin is released, and glucose falls. What is this?',['Negative feedback','Positive feedback','A reflex with no feedback','Inflammation'],'The response opposes the change.'],
  ['Which of these is positive feedback?',['Labor contractions that trigger stronger contractions','Sweating when hot','Insulin release after a meal','Shivering when cold'],'The change feeds itself until the job is done.'],
  ['Which brain region is the main control center for body temperature?',['Hypothalamus','Cerebellum','Hippocampus','Visual cortex'],'It also governs thirst, hunger and much of the hormone system.'],
  ['During a fever you shiver even though your temperature is above normal. Why?',['The hypothalamus raised the set point, so the body reads itself as too cold','The muscles are infected','The temperature sensors are broken','Shivering cools the body'],'Against the new, higher set point, the current temperature counts as low.'],
  ['What does homeostasis mean?',['Keeping internal conditions within narrow limits','Staying physically still','Growing at a steady rate','Keeping the outside environment constant'],'The internal state is held steady while the outside changes.'],
  ['What are the three types of muscle?',['Skeletal, cardiac and smooth','Red, white and pink','Fast, slow and medium','Voluntary, nervous and connective'],'Skeletal moves bones, cardiac is the heart, smooth lines vessels and gut.']
 ]},

{id:'a2',title:'The heart and circulation',sub:'Two pumps, one loop, cardiac output, and the brain’s share of the blood.',
 learn:[
  ['h','Two pumps'],
  ['p','The heart is two pumps side by side. The right side sends blood to the lungs to pick up oxygen. The left side sends that oxygen-rich blood to the rest of the body.'],
  ['p','Each side has an upper chamber, the atrium, which receives blood, and a lower chamber, the ventricle, which pumps it out. Valves keep the flow one-way, and the lub-dub you hear is the valves closing.'],
  ['m','body → right atrium → right ventricle → lungs → left atrium → left ventricle → body'],
  ['h','Vessels'],
  ['p','Arteries carry blood away from the heart under high pressure. Veins bring it back. Between them are capillaries, with walls one cell thick, where oxygen and nutrients pass into the tissues.'],
  ['h','Numbers'],
  ['p','Cardiac output is the volume the heart pumps each minute. At 70 beats a minute and 70 mL a beat that is 4,900 mL, about 5 liters: nearly your whole blood volume every minute.'],
  ['m','cardiac output = heart rate × stroke volume'],
  ['p','Blood pressure is written as two numbers, such as 120/80. The first is the peak pressure when the heart contracts. The second is the low point between beats.'],
  ['n','Neuro thread: the brain’s share',['The brain is 2% of body weight and receives about 15% of the cardiac output, roughly 750 mL every minute.','The heart sets its own rhythm from a cluster of pacemaker cells, and the brainstem adjusts it through two sets of nerves. The vagus nerve slows the heart and sympathetic nerves speed it up.','Fainting is a brief drop in blood flow to the brain. Lying flat restores it, which is why a person who faints wakes within moments of reaching the floor.']],
  ['o','Older textbooks state that heart muscle cells are never replaced. Carbon dating of human heart cells showed in 2009 that they renew slowly, about 1% a year at age 25 and less with age. That is far too slow to repair a heart attack, but it is the starting point for research into regenerating the heart.']
 ],
 explain:{q:'Trace a drop of blood from the body, through the heart and lungs, and back out to the body.',model:'Blood returning from the body enters the right atrium and passes to the right ventricle, which pumps it to the lungs to pick up oxygen. It returns to the left atrium, passes to the left ventricle, and is pumped out to the body.',pts:['Right atrium, then right ventricle','Out to the lungs to pick up oxygen','Back to the left atrium, then the left ventricle, which pumps it to the body']},
 gens:[
  function(){ var hr=pk([50,60,70,80,90,100,120]), sv=pk([60,70,80,100]); return {q:'Heart rate is '+hr+' beats per minute and stroke volume is '+sv+' mL. What is the cardiac output in liters per minute?',a:hr*sv/1000,tol:0.011,sol:['Cardiac output = heart rate × stroke volume = '+hr+' × '+sv+' = '+(hr*sv)+' mL per minute.','Divide by 1,000 for liters: '+f(hr*sv/1000)+' L per minute.']}; },
  function(){ var co=pk([4,5,6,8]); return {q:'The brain receives about 15% of cardiac output. If cardiac output is '+co+' liters per minute, how many mL per minute reach the brain?',a:co*150,sol:[co+' liters is '+(co*1000)+' mL.','15% of '+(co*1000)+' = 0.15 × '+(co*1000)+' = '+(co*150)+' mL per minute.']}; },
  function(){ var hr=pk([50,60,70,75,80,90,100]); return {q:'A heart beats '+hr+' times per minute. How many times does it beat in one hour?',a:hr*60,sol:['There are 60 minutes in an hour.',hr+' × 60 = '+(hr*60)+' beats.']}; },
  function(){ var hr=pk([50,60,70,80,100]), sv=pk([60,70,80,90]); return {q:'Cardiac output is '+(hr*sv)+' mL per minute at a heart rate of '+hr+' beats per minute. What is the stroke volume in mL?',a:sv,sol:['Cardiac output = heart rate × stroke volume, so '+(hr*sv)+' = '+hr+' × stroke volume.','Divide both sides by '+hr+': '+sv+' mL.']}; }
 ],
 bank:[
  ['Which chamber pumps blood out to the body?',['Left ventricle','Right ventricle','Left atrium','Right atrium'],'The left ventricle is the most muscular chamber. This was on your placement test.'],
  ['Which chamber pumps blood to the lungs?',['Right ventricle','Left ventricle','Right atrium','Left atrium'],'The right side serves the lungs.'],
  ['What do arteries do?',['Carry blood away from the heart','Carry blood toward the heart','Exchange oxygen with tissues','Make red blood cells'],'Arteries are defined by direction: away from the heart.'],
  ['Where do oxygen and nutrients pass from blood into tissues?',['In the capillaries','In the arteries','In the veins','In the heart valves'],'Capillary walls are one cell thick.'],
  ['In a blood pressure of 120/80, what is the 120?',['The peak pressure when the heart contracts','The pressure between beats','The heart rate','The volume pumped per beat'],'The higher number is the peak during contraction.'],
  ['Which nerve slows the heart?',['The vagus nerve','The optic nerve','The sciatic nerve','The sympathetic nerves'],'The vagus is the brake. Sympathetic nerves are the accelerator.'],
  ['What sets the heart’s basic rhythm?',['Pacemaker cells within the heart itself','A separate signal from the brain for each beat','The lungs','The valves'],'The heart beats on its own. The brain only speeds it up or slows it down.']
 ]},

{id:'a3',title:'Breathing and gas exchange',sub:'How oxygen reaches the blood, and what really creates the urge to breathe.',
 learn:[
  ['h','The path'],
  ['p','Air travels down the trachea, through branching tubes called bronchi, and ends in the alveoli: hundreds of millions of tiny air sacs with walls one cell thick, each wrapped in capillaries.'],
  ['h','Exchange'],
  ['p','Gas exchange is diffusion: molecules spread from where they are concentrated to where they are not. Oxygen is plentiful in the air of the alveoli and scarce in the arriving blood, so it moves into the blood. Carbon dioxide runs the other way. No pump and no energy are needed.'],
  ['p','In the blood, oxygen rides on hemoglobin, the protein that fills red blood cells. Each hemoglobin carries up to four oxygen molecules. Carbon dioxide travels mostly dissolved, in a form that makes the blood more acidic as it builds up.'],
  ['h','Mechanics'],
  ['p','To breathe in, the diaphragm contracts and flattens, the chest expands and air is drawn in. Breathing out at rest is mostly elastic recoil.'],
  ['m','air moved per minute = breaths per minute × volume per breath'],
  ['n','Neuro thread: who is doing the breathing?',['You breathe about 20,000 times a day without deciding to. The rhythm comes from a small cluster of neurons in the brainstem called the pre-Bötzinger complex, identified in 1991.','Nearby sensors monitor carbon dioxide. The urge to breathe comes almost entirely from rising CO₂, not from falling oxygen. Divers who hyperventilate before holding their breath blow off CO₂, so the urge arrives late, and they can black out underwater with no warning.','Opioid overdoses kill by quieting these same brainstem neurons.']],
  ['o','Older textbooks describe healthy lungs as sterile. DNA-based methods since about 2010 show that the lungs carry their own sparse community of microbes, and that it differs in asthma and other lung diseases.']
 ],
 explain:{q:'Explain how oxygen gets from the air in your lungs into your blood.',model:'Air reaches the alveoli, thin-walled sacs wrapped in capillaries. Oxygen is more concentrated in that air than in the blood arriving at the lungs, so it diffuses across the thin wall into the blood, where hemoglobin in the red cells carries it.',pts:['Air reaches the alveoli, thin-walled sacs wrapped in capillaries','Oxygen is more concentrated in the air than in the arriving blood','So it diffuses across the wall into the blood, where hemoglobin carries it']},
 gens:[
  function(){ var r=pk([10,12,15,20,30]), v=pk([400,500,600]); return {q:'A person takes '+r+' breaths per minute, each of '+v+' mL. How many liters of air do they move per minute?',a:r*v/1000,tol:0.011,sol:['Air per minute = breaths × volume = '+r+' × '+v+' = '+(r*v)+' mL.','Divide by 1,000 for liters: '+f(r*v/1000)+' L per minute.']}; },
  function(){ var n=ri(3,60); return {q:'Each hemoglobin molecule can carry up to 4 oxygen molecules. How many can '+n+' hemoglobin molecules carry?',a:4*n,sol:['4 oxygen molecules for each hemoglobin.',n+' × 4 = '+(4*n)+'.']}; }
 ],
 bank:[
  ['Where in the lungs does oxygen pass into the blood?',['In the alveoli','In the bronchi','In the trachea','In the diaphragm'],'Alveoli are the thin-walled air sacs. This was on your placement test.'],
  ['What moves oxygen from the alveoli into the blood?',['Diffusion from high concentration to low','Active pumps in the alveolar wall','Hemoglobin reaching across the wall','Blood pressure'],'It is passive and needs no energy.'],
  ['What carries most of the oxygen in blood?',['Hemoglobin in red blood cells','The liquid plasma','Platelets','White blood cells'],'Very little oxygen dissolves directly in plasma.'],
  ['What is the main muscle of breathing?',['The diaphragm','The heart','The abdominal wall','The tongue'],'When it contracts and flattens, the chest expands.'],
  ['What mainly creates the urge to breathe?',['Rising carbon dioxide','Falling oxygen','A full stomach','Low blood sugar'],'CO₂ is the main signal. Low oxygen plays a minor role in healthy people.'],
  ['Where is the breathing rhythm generated?',['In the brainstem','In the outer layer of the brain','In the lungs','In the heart'],'A cluster of brainstem neurons sets the rhythm.'],
  ['What does a build-up of carbon dioxide do to the blood?',['Makes it more acidic','Makes it more alkaline','Makes it thicker','Nothing'],'Dissolved CO₂ forms acid.'],
  ['Why is hyperventilating before a breath-hold dive dangerous?',['It lowers CO₂, delaying the urge to breathe until oxygen is dangerously low','It fills the lungs with too much oxygen','It raises CO₂','It stops the heart'],'With the alarm delayed, the diver can pass out before feeling any need to surface.'],
  ['How do opioid overdoses usually kill?',['By suppressing the brainstem’s drive to breathe','By stopping the kidneys','By causing blood clots','By causing fever'],'Breathing slows and then stops.']
 ]}
);
