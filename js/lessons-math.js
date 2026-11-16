/* Math, Algebra Unit 1: algebra from zero.
   learn blocks: h heading, p paragraph, m formula, l numbered list, u bullet list, ex worked example, n neuro thread, o outdated-textbook note.
   gens: functions that make a fresh number problem each time. bank: fixed multiple-choice [question, [right, wrong...], explanation]. */
'use strict';
LESSONS.push(
{id:'m1',title:'Negative numbers',sub:'The number line, signs, and why a neuron rests at −70.',
 learn:[
  ['h','The idea'],
  ['p','Picture a line of numbers with zero in the middle. Positive numbers sit to the right and negative numbers to the left. A negative number is a real amount in the opposite direction: 5 dollars owed, 10 degrees below freezing, 70 millivolts below the outside of a cell.'],
  ['p','Adding means moving right. Subtracting means moving left. Everything else follows from that.'],
  ['p','Adding a negative moves you left, because you are adding a debt.'],
  ['m','3 + (−5) = −2'],
  ['p','Subtracting a negative moves you right, because taking away a debt leaves you richer.'],
  ['m','3 − (−5) = 8'],
  ['h','Multiplying and dividing'],
  ['p','Same signs give a positive answer. Different signs give a negative answer. Here is why: 3 × (−2) is three debts of 2, which is −6. And (−3) × (−2) is removing three debts of 2, which leaves you 6 better off. Division follows the same sign rule.'],
  ['h','Change'],
  ['p','The change in any quantity is always end minus start. Keep the signs and the rule never fails.'],
  ['ex','−7 + 4',['Start at −7.','Adding 4 moves right 4 places.','You land on −3.']],
  ['ex','6 − (−2)',['Subtracting a negative is the same as adding.','6 + 2 = 8.']],
  ['ex','(−4) × (−5)',['4 × 5 = 20.','The signs match, so the answer is positive: 20.']],
  ['ex','A neuron goes from −70 mV to +30 mV. What is the change?',['Change = end − start.','30 − (−70) = 30 + 70.','The voltage rose by 100 mV.']],
  ['n','Neuro thread: a neuron lives below zero',['A resting neuron sits at about −70 millivolts. The number is negative because voltage is always a comparison, and the inside of the cell holds slightly more negative charge than the outside.','When the neuron fires, the voltage jumps to about +30 mV and falls back within about two thousandths of a second. That 100 mV round trip is the action potential, the basic signal of the nervous system.','Two words you will use for years: to depolarize is to move toward zero and beyond, and to hyperpolarize is to become more negative than rest.']],
  ['o','Older books quote −70 mV as if every cell shared it. Measured resting voltages run from about −60 to −90 mV depending on the cell: many cortical neurons sit near −65, while muscle fibers and astrocytes sit closer to −85 or −90.']
 ],
 explain:{q:'Explain why subtracting a negative number gives the same result as adding.',model:'Subtracting means taking away, or moving left on the number line. A negative number is an amount in the opposite direction, like a debt. Taking away a debt leaves you better off by that amount, so the result moves right, exactly as adding would.',pts:['Subtracting means taking away, or moving left','A negative number is an amount in the opposite direction, such as a debt','Taking away a debt moves you right, which is what adding does']},
 gens:[
  function(){ var a=nz(-12,12), b=nz(-12,12); if(a>0&&b>0) b=-b; return {q:f(a)+' + '+pn(b)+' = ?',a:a+b,sol:['Start at '+f(a)+' on the number line.',b<0?'Adding a negative moves left '+(-b)+'.':'Adding a positive moves right '+b+'.','You land on '+f(a+b)+'.']}; },
  function(){ var a=ri(-12,12), b=nz(-12,12); if(a>=0&&b>0&&a>=b) b=-b; return {q:f(a)+' − '+pn(b)+' = ?',a:a-b,sol:[b<0?'Subtracting a negative is the same as adding: '+f(a)+' + '+(-b)+'.':'Subtracting moves left: start at '+f(a)+' and go left '+b+'.','The answer is '+f(a-b)+'.']}; },
  function(){ var a=nz(-9,9), b=nz(-9,9); if(a>0&&b>0) a=-a; return {q:pn(a)+' × '+pn(b)+' = ?',a:a*b,sol:[Math.abs(a)+' × '+Math.abs(b)+' = '+Math.abs(a*b)+'.',(a<0)===(b<0)?'The signs match, so the answer is positive.':'The signs differ, so the answer is negative.','The answer is '+f(a*b)+'.']}; },
  function(){ var b=nz(-9,9), r=nz(-9,9); if(b>0&&r>0) b=-b; var a=b*r; return {q:pn(a)+' ÷ '+pn(b)+' = ?',a:r,sol:[Math.abs(a)+' ÷ '+Math.abs(b)+' = '+Math.abs(r)+'.',(a<0)===(b<0)?'The signs match, so the answer is positive.':'The signs differ, so the answer is negative.','The answer is '+f(r)+'.']}; },
  function(){ var s=pk([-70,-65,-80,-55,-90]), e; do{ e=pk([30,-55,-80,0,40,-60,-75,-90]); }while(e===s); return {q:'A neuron’s voltage goes from '+f(s)+' mV to '+f(e)+' mV. What is the change in mV? Use a negative sign for a fall.',a:e-s,sol:['Change = end − start.',f(e)+' − '+pn(s)+' = '+f(e)+' + '+(-s)+'.','The change is '+f(e-s)+' mV.']}; }
 ]},

{id:'m2',title:'Order of operations',sub:'One agreed order for every calculation, and how a neuron adds up its inputs.',
 learn:[
  ['h','The idea'],
  ['p','2 + 3 × 4 could mean two different things unless everyone agrees on an order. The agreement is the same everywhere in science:'],
  ['l',['Parentheses first: they mark a group to finish before anything else.','Then powers, such as 3², which means 3 × 3.','Then multiplication and division, working left to right.','Then addition and subtraction, working left to right.']],
  ['p','Multiplication goes before addition for a reason. 3 × 4 is a package, a short way of writing 4 + 4 + 4. You have to finish building the package before you can add it to anything.'],
  ['m','2 + 3 × 4 = 2 + 12 = 14'],
  ['p','If you want the addition first, parentheses say so.'],
  ['m','(2 + 3) × 4 = 5 × 4 = 20'],
  ['h','Two traps'],
  ['p','Left to right matters for multiplication and division: 12 ÷ 3 × 2 is 4 × 2 = 8, not 12 ÷ 6.'],
  ['p','A power grabs only what it touches: −3² means −(3 × 3) = −9, while (−3)² means (−3) × (−3) = 9.'],
  ['ex','20 − 2 × 3²',['Power first: 3² = 9.','Then multiply: 2 × 9 = 18.','Then subtract: 20 − 18 = 2.']],
  ['ex','(4 − 9)²',['Parentheses first: 4 − 9 = −5.','Then the power: (−5) × (−5) = 25.']],
  ['n','Neuro thread: a neuron does arithmetic',['A neuron receives thousands of inputs. Each excitatory input nudges its voltage up a little and each inhibitory input nudges it down. If the total reaches a threshold near −55 mV, the neuron fires.','Say a neuron at −70 mV receives 12 excitatory inputs of +2 mV each and 3 inhibitory inputs of −4 mV each.','−70 + 12 × 2 − 3 × 4 = −70 + 24 − 12 = −58 mV. That is 3 mV short of threshold, so it stays silent. One more excitatory pair would tip it.']],
  ['o','Older textbooks stop there and treat the neuron as a simple adding machine. Recordings since then show that dendrites, the input branches, compute on their own: a single branch can fire local spikes. In 2020, dendrites of human cortical neurons were shown to perform an either-one-but-not-both calculation (called XOR) that was long thought to need a whole network of neurons.']
 ],
 explain:{q:'Explain why 2 + 3 × 4 equals 14 and not 20.',model:'Multiplication is done before addition. 3 × 4 is a package standing for 4 + 4 + 4, which is 12, and it has to be finished before it can be added. So the sum is 2 + 12 = 14. Getting 20 would need parentheses around 2 + 3.',pts:['Multiplication is done before addition','3 × 4 is one packaged quantity, 12, because multiplying is repeated adding','So it is 2 + 12 = 14; 20 would need parentheses around 2 + 3']},
 gens:[
  function(){ var a=ri(2,9), b=ri(2,9), c=ri(2,9); return {q:a+' + '+b+' × '+c+' = ?',a:a+b*c,sol:['Multiply first: '+b+' × '+c+' = '+(b*c)+'.','Then add: '+a+' + '+(b*c)+' = '+(a+b*c)+'.']}; },
  function(){ var a=ri(2,9), b=ri(2,9), c=ri(2,9); return {q:'('+a+' + '+b+') × '+c+' = ?',a:(a+b)*c,sol:['Parentheses first: '+a+' + '+b+' = '+(a+b)+'.','Then multiply: '+(a+b)+' × '+c+' = '+((a+b)*c)+'.']}; },
  function(){ var a=ri(10,40), b=ri(2,6), c=ri(2,6); return {q:a+' − '+b+' × '+c+' = ?',a:a-b*c,sol:['Multiply first: '+b+' × '+c+' = '+(b*c)+'.','Then subtract: '+a+' − '+(b*c)+' = '+f(a-b*c)+'.']}; },
  function(){ var a=ri(2,12), b=ri(2,5), c=ri(2,4); return {q:a+' + '+c+' × '+b+'² = ?',a:a+c*b*b,sol:['Power first: '+b+'² = '+(b*b)+'.','Then multiply: '+c+' × '+(b*b)+' = '+(c*b*b)+'.','Then add: '+a+' + '+(c*b*b)+' = '+(a+c*b*b)+'.']}; },
  function(){ var a=ri(2,9), b=ri(2,9), c=ri(2,9), d=ri(2,9); return {q:a+' × '+b+' − '+c+' × '+d+' = ?',a:a*b-c*d,sol:['Do both multiplications first: '+(a*b)+' and '+(c*d)+'.','Then subtract: '+(a*b)+' − '+(c*d)+' = '+f(a*b-c*d)+'.']}; },
  function(){ var a=ri(1,9), b=ri(1,9); if(a===b) b=a+2; return {q:'('+a+' − '+b+')² = ?',a:(a-b)*(a-b),sol:['Parentheses first: '+a+' − '+b+' = '+f(a-b)+'.','Then the power: '+pn(a-b)+' × '+pn(a-b)+' = '+((a-b)*(a-b))+'.']}; },
  function(){ var b=ri(2,6), k=ri(2,6), c=ri(2,6), a=b*k; return {q:a+' ÷ '+b+' × '+c+' = ?',a:k*c,sol:['Division and multiplication go left to right.',a+' ÷ '+b+' = '+k+'.','Then '+k+' × '+c+' = '+(k*c)+'.']}; },
  function(){ var a=ri(2,9), neg=ri(0,1)===1; return neg?{q:'−'+a+'² = ?',a:-a*a,sol:['The power touches only the '+a+': '+a+'² = '+(a*a)+'.','The minus sign is applied afterwards: −'+(a*a)+'.']}:{q:'(−'+a+')² = ?',a:a*a,sol:['The parentheses make the whole −'+a+' the thing being squared.','(−'+a+') × (−'+a+') = '+(a*a)+', since matching signs give a positive.']}; },
  function(){ var n1=ri(4,15), e=pk([1,2]), n2=ri(1,5), i=pk([2,3,4]), v=-70+n1*e-n2*i; return {q:'A neuron rests at −70 mV. It receives '+n1+' excitatory inputs of +'+e+' mV each and '+n2+' inhibitory inputs of −'+i+' mV each. What is its voltage in mV?',a:v,sol:['Multiply first: '+n1+' × '+e+' = '+(n1*e)+' mV up, and '+n2+' × '+i+' = '+(n2*i)+' mV down.','Then work left to right: −70 + '+(n1*e)+' − '+(n2*i)+' = '+f(v)+'.',v>=-55?'That reaches the −55 mV threshold, so the neuron fires.':'That is below the −55 mV threshold, so the neuron stays silent.']}; }
 ]},

{id:'m3',title:'Fractions',sub:'Division you have not carried out yet, and why synapses fail on purpose.',
 learn:[
  ['h','The idea'],
  ['p','A fraction is a division that has not been carried out. 3/4 means 3 ÷ 4: cut something into 4 equal parts and take 3 of them. The bottom number (the denominator) names the size of the parts. The top number (the numerator) counts them.'],
  ['p','Carry out the division and you get the decimal form: 3 ÷ 4 = 0.75.'],
  ['h','Same amount, different names'],
  ['p','Multiplying the top and bottom by the same number does not change the amount, because you are multiplying by 1 in disguise. 1/2 = 2/4 = 50/100. Dividing top and bottom by the same number works the same way and is called simplifying: 12/16 = 3/4.'],
  ['h','Four moves'],
  ['p','A fraction of a number: “of” means multiply. For 3/4 of 20, divide by the bottom and multiply by the top: 20 ÷ 4 = 5, then 5 × 3 = 15.'],
  ['p','Multiplying: tops together, bottoms together. 2/3 × 3/5 = 6/15 = 2/5.'],
  ['p','Adding: you can only count parts that are the same size, so first rename both fractions with a common denominator. 1/2 + 1/3 = 3/6 + 2/6 = 5/6.'],
  ['p','Dividing: 3 ÷ 1/2 asks how many halves fit into 3. Six do. Dividing by a fraction is multiplying by it flipped: 3 × 2/1 = 6.'],
  ['ex','2/5 of 30',['30 ÷ 5 = 6.','6 × 2 = 12.']],
  ['ex','1/4 + 2/3',['The smallest common denominator of 4 and 3 is 12.','1/4 = 3/12 and 2/3 = 8/12.','3/12 + 8/12 = 11/12.']],
  ['ex','3/4 × 2/9',['Tops: 3 × 2 = 6. Bottoms: 4 × 9 = 36.','6/36 simplifies to 1/6.']],
  ['n','Neuro thread: synapses fail on purpose',['When a spike reaches a synapse, the synapse does not always pass the signal on. Each one has a release probability, a fraction such as 1/4, which is the share of arriving spikes that actually release transmitter.','If a synapse releases on 1/4 of spikes and 20 spikes arrive, about 20 ÷ 4 = 5 get through.','This is a feature. The brain raises or lowers that fraction to strengthen or weaken a connection, which is one of the ways it stores what you learn.']],
  ['o','Introductory diagrams show every spike crossing the synapse. Recordings from single synapses in the hippocampus and cortex show that many of them fail more often than they succeed, and that the failure rate is adjustable.']
 ],
 explain:{q:'Explain why you need a common denominator to add fractions but not to multiply them.',model:'The denominator names the size of the parts. Adding is counting parts, and you can only count parts together when they are the same size, so both fractions are renamed first. Multiplying takes a fraction of a fraction, so the tops multiply and the bottoms multiply directly.',pts:['The denominator names the size of the parts','Adding counts parts, so they must be the same size first','Multiplying takes a fraction of a fraction, so tops and bottoms multiply directly']},
 gens:[
  function(){ var d=pk([2,3,4,5,6,8,10]), n=ri(1,d-1), k=ri(2,9), N=d*k; return {q:'What is '+n+'/'+d+' of '+N+'?',a:n*k,sol:['Divide by the bottom: '+N+' ÷ '+d+' = '+k+'.','Multiply by the top: '+k+' × '+n+' = '+(n*k)+'.']}; },
  function(){ var d1=pk([2,3,4,5,6,8]), d2; do{ d2=pk([2,3,4,5,6,8]); }while(d2===d1); var n1=ri(1,d1-1), n2=ri(1,d2-1), L=lcm(d1,d2), N=n1*(L/d1)+n2*(L/d2); return {q:n1+'/'+d1+' + '+n2+'/'+d2+' = ?  Answer as a fraction or a decimal.',a:N/L,tol:0.005,ans:fr(N,L),sol:['The smallest common denominator of '+d1+' and '+d2+' is '+L+'.',n1+'/'+d1+' = '+(n1*(L/d1))+'/'+L+' and '+n2+'/'+d2+' = '+(n2*(L/d2))+'/'+L+'.','Add the tops: '+N+'/'+L+(fr(N,L)!==N+'/'+L?', which simplifies to '+fr(N,L):'')+'.']}; },
  function(){ var d1=pk([2,3,4,5,6,8]), d2; do{ d2=pk([2,3,4,5,6,8]); }while(d2===d1); var n1=ri(1,d1-1), n2=ri(1,d2-1), L=lcm(d1,d2), N=n1*(L/d1)-n2*(L/d2); return {q:n1+'/'+d1+' − '+n2+'/'+d2+' = ?  Answer as a fraction or a decimal.',a:N/L,tol:0.005,ans:fr(N,L),sol:['The smallest common denominator of '+d1+' and '+d2+' is '+L+'.',n1+'/'+d1+' = '+(n1*(L/d1))+'/'+L+' and '+n2+'/'+d2+' = '+(n2*(L/d2))+'/'+L+'.','Subtract the tops: '+f(N)+'/'+L+(fr(N,L)!==f(N)+'/'+L?', which simplifies to '+fr(N,L):'')+'.']}; },
  function(){ var d1=pk([2,3,4,5,6]), d2=pk([2,3,4,5,6]), n1=ri(1,d1-1), n2=ri(1,d2-1), N=n1*n2, D=d1*d2; return {q:n1+'/'+d1+' × '+n2+'/'+d2+' = ?  Answer as a fraction or a decimal.',a:N/D,tol:0.005,ans:fr(N,D),sol:['Tops: '+n1+' × '+n2+' = '+N+'. Bottoms: '+d1+' × '+d2+' = '+D+'.',N+'/'+D+(fr(N,D)!==N+'/'+D?' simplifies to '+fr(N,D):' is already in simplest form')+'.']}; },
  function(){ var p=pk([[1,2],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],[1,8],[3,8],[5,8],[7,8],[1,10],[3,10],[7,20],[9,20]]); return {q:'Write '+p[0]+'/'+p[1]+' as a decimal.',a:p[0]/p[1],tol:0.0005,sol:['A fraction is a division: '+p[0]+' ÷ '+p[1]+'.','That equals '+f(p[0]/p[1])+'.']}; },
  function(){ var whole=ri(0,1)===1; if(whole){ var k=ri(2,9), d=ri(2,6); return {q:k+' ÷ 1/'+d+' = ?',a:k*d,sol:['This asks how many pieces of size 1/'+d+' fit into '+k+'.','Dividing by a fraction is multiplying by it flipped: '+k+' × '+d+' = '+(k*d)+'.']}; }
    var d1=pk([2,3,4,5]), d2=pk([2,3,4,5]), n1=ri(1,d1-1), n2=ri(1,d2-1), N=n1*d2, D=d1*n2; return {q:n1+'/'+d1+' ÷ '+n2+'/'+d2+' = ?  Answer as a fraction or a decimal.',a:N/D,tol:0.005,ans:fr(N,D),sol:['Flip the second fraction and multiply: '+n1+'/'+d1+' × '+d2+'/'+n2+'.','Tops: '+N+'. Bottoms: '+D+'.','The answer is '+fr(N,D)+'.']}; },
  function(){ var d=pk([2,4,5,10]), n=ri(1,d-1), k=ri(2,8), N=d*k; return {q:'A synapse releases transmitter on '+n+'/'+d+' of the spikes that reach it. If '+N+' spikes arrive, about how many cause release?',a:n*k,sol:['“Of” means multiply: '+n+'/'+d+' of '+N+'.',N+' ÷ '+d+' = '+k+', and '+k+' × '+n+' = '+(n*k)+'.']}; }
 ]},

{id:'m4',title:'Ratios and percent',sub:'Comparing by division, drug doses, and the brain’s energy bill.',
 learn:[
  ['h','Ratios'],
  ['p','A ratio compares two amounts by division. If a cell has 140 units of potassium inside and 4 outside, the ratio is 140 to 4. Divide both numbers by 4 and it reads 35 to 1: there is 35 times as much inside.'],
  ['h','Percent'],
  ['p','Percent means per hundred. 20% is 20/100, which is 0.20. That one fact gives you three moves.'],
  ['p','A percent of a number: multiply by the decimal. 20% of 150 = 0.20 × 150 = 30.'],
  ['p','What percent one number is of another: divide, then multiply by 100. 18 out of 24 is 18 ÷ 24 = 0.75, which is 75%.'],
  ['p','Percent change: change ÷ start × 100, where change is end minus start. From 50 to 65 is a change of 15, and 15 ÷ 50 = 0.30, a 30% rise. A fall comes out negative.'],
  ['h','Rates: the word “per”'],
  ['p','“Per” means “for each one,” and it tells you to multiply or divide. A dose of 5 mg per kg means 5 mg for each kilogram of body weight. Find the amount for one, then scale up.'],
  ['ex','If 2 tablets contain 500 mg, how much is in 5 tablets?',['One tablet: 500 ÷ 2 = 250 mg.','Five tablets: 250 × 5 = 1,250 mg.']],
  ['ex','A drug is dosed at 5 mg per kg. The patient weighs 154 lb, and 1 kg = 2.2 lb. What is the dose?',['Convert first: 154 ÷ 2.2 = 70 kg.','Then scale: 70 × 5 = 350 mg.','This was on your placement test. The trap is multiplying by the weight in pounds.']],
  ['n','Neuro thread: an expensive organ',['Your brain is about 2% of your body weight and uses about 20% of your resting energy. In a 70 kg person that is a 1.4 kg organ burning around 400 of every 2,000 kcal.','Most of that energy pays for pumps that hold ion ratios in place: roughly 35 to 1 for potassium (more inside) and about 12 to 1 for sodium (more outside). Those two ratios are the battery every signal runs on.']],
  ['o','Older textbooks say the brain has 100 billion neurons and ten times as many glial cells. Direct counts published from 2009 onward found about 86 billion neurons and roughly the same number of glia, close to 1 to 1. About 69 billion of those neurons, 80%, are packed into the cerebellum, which is only a tenth of the brain’s mass.']
 ],
 explain:{q:'Explain what “percent” means and why 20% of a number is found by multiplying by 0.20.',model:'Percent means per hundred, so 20% is the fraction 20/100, which is 0.20 as a decimal. “Of” means multiply, so 20% of a number is 0.20 times that number.',pts:['Percent means per hundred','So 20% is 20/100, which is 0.20','“Of” means multiply, so 20% of a number is 0.20 times it']},
 gens:[
  function(){ var p=pk([5,10,15,20,25,30,40,50,60,75]), N=pk([20,40,60,80,120,200,240,360,400]); return {q:'What is '+p+'% of '+N+'?',a:p*N/100,sol:[p+'% is '+f(p/100)+' as a decimal.',f(p/100)+' × '+N+' = '+f(p*N/100)+'.']}; },
  function(){ var b, p, a; do{ b=pk([20,25,40,50,80,200]); p=pk([10,20,25,30,40,60,75,80]); a=p*b/100; }while(a!==Math.floor(a)); return {q:a+' is what percent of '+b+'?',a:p,sol:['Divide: '+a+' ÷ '+b+' = '+f(a/b)+'.','Multiply by 100: '+p+'%.']}; },
  function(){ var s, p, e; do{ s=pk([20,40,50,80,200]); p=pk([-50,-25,-20,-10,10,20,25,50,75]); e=s*(100+p)/100; }while(e!==Math.floor(e)); return {q:'A value goes from '+s+' to '+e+'. What is the percent change? Use a negative sign for a decrease.',a:p,sol:['Change = end − start = '+e+' − '+s+' = '+f(e-s)+'.','Divide by the start: '+f(e-s)+' ÷ '+s+' = '+f((e-s)/s)+'.','Multiply by 100: '+f(p)+'%.']}; },
  function(){ var c=pk([[140,4],[150,5],[120,4],[135,5],[140,5],[160,4],[144,12],[150,10]]); return {q:'A cell has '+c[0]+' units of an ion on one side of its membrane and '+c[1]+' on the other. That ratio is how many to 1?',a:c[0]/c[1],sol:['Divide both numbers by '+c[1]+'.',c[0]+' ÷ '+c[1]+' = '+(c[0]/c[1])+', so the ratio is '+(c[0]/c[1])+' to 1.']}; },
  function(){ var per=pk([25,50,100,125,250]), n1=ri(2,6), n2=ri(7,12); return {q:'If '+n1+' tablets contain '+(per*n1)+' mg of a drug, how many mg are in '+n2+' tablets?',a:per*n2,sol:['One tablet: '+(per*n1)+' ÷ '+n1+' = '+per+' mg.',n2+' tablets: '+per+' × '+n2+' = '+(per*n2)+' mg.']}; },
  function(){ var kg=pk([50,60,70,80,90]), lb=Math.round(kg*2.2), per=ri(2,10); return {q:'A drug is dosed at '+per+' mg per kg of body weight. The patient weighs '+lb+' lb, and 1 kg = 2.2 lb. What is the dose in mg?',a:kg*per,tol:0.5,sol:['Convert to kg first: '+lb+' ÷ 2.2 = '+kg+' kg.','Then scale: '+kg+' × '+per+' = '+(kg*per)+' mg.']}; },
  function(){ var k=pk([1500,1800,2000,2200,2500,3000]); return {q:'The brain uses about 20% of the body’s resting energy. If someone burns '+k+' kcal a day at rest, how many kcal go to the brain?',a:k/5,sol:['20% is 0.20 as a decimal.','0.20 × '+k+' = '+(k/5)+' kcal.']}; },
  function(){ var c=pk([[69,'the cerebellum',80],[16,'the cerebral cortex',19]]); return {q:'About '+c[0]+' billion of the brain’s 86 billion neurons are in '+c[1]+'. What percent is that, to the nearest whole number?',a:c[2],tol:0.6,sol:['Divide: '+c[0]+' ÷ 86 = '+f(c[0]/86)+'.','Multiply by 100 and round: about '+c[2]+'%.']}; }
 ]},

{id:'m5',title:'Expressions and substitution',sub:'Letters that stand for numbers, and why sodium rushes into a neuron.',
 learn:[
  ['h','The idea'],
  ['p','A variable is a letter standing for a number you have not pinned down yet. An expression is a recipe written with it. 3x + 2 says: take a number, multiply it by 3, then add 2.'],
  ['p','A number written against a letter means multiply. 3x is 3 × x. A number against parentheses means the same: 2(x − 5) is 2 × (x − 5).'],
  ['h','Substitution'],
  ['p','To evaluate an expression, replace the letter with its number, wrapped in parentheses, then follow the order of operations. The parentheses protect negative numbers from sign mistakes.'],
  ['m','x = −4:   3x + 2 = 3(−4) + 2 = −12 + 2 = −10'],
  ['p','A formula is an expression with a meaning attached. Ohm’s law, V = I × R, says the voltage across something equals the current through it times its resistance. Put numbers in for I and R and it hands you V.'],
  ['ex','Evaluate 2(x − 5) when x = 3',['Substitute: 2(3 − 5).','Parentheses first: 3 − 5 = −2.','Multiply: 2 × (−2) = −4.']],
  ['ex','Evaluate x² − 1 when x = −3',['Substitute: (−3)² − 1.','Power first: (−3) × (−3) = 9.','Subtract: 9 − 1 = 8.']],
  ['n','Neuro thread: why sodium rushes in',['Every ion has a voltage at which it is content to stay put, called its equilibrium potential, E. For potassium E is about −95 mV. For sodium it is about +60 mV.','The push on an ion is the driving force, V − E: how far the membrane voltage is from where that ion wants it. The current is I = g × (V − E), where g, the conductance, measures how many channels are open.','At rest V = −70. For potassium the driving force is −70 − (−95) = +25 mV, a gentle outward push. For sodium it is −70 − 60 = −130 mV, a huge inward push; the minus sign means positive charge flows in.','So the moment sodium channels open, sodium floods in and the voltage shoots upward. That inrush is the rising phase of the action potential.']],
  ['o','Many older and simplified books say the sodium-potassium pump creates the −70 mV directly. Its direct contribution is only a few millivolts. The resting voltage comes almost entirely from potassium leaking out through channels that stay open at rest; the pump’s job is to maintain the ion ratios that the leak depends on. The leak channels themselves, the two-pore potassium family, were not identified until the 1990s.']
 ],
 explain:{q:'Explain what the expression 3x + 2 means and how to evaluate it when x = −4.',model:'3x + 2 is a recipe: multiply a number by 3, then add 2. To evaluate it, replace x with (−4). Multiply first: 3 × (−4) = −12. Then add 2 to get −10.',pts:['3x means 3 times x, and the expression is a recipe for any number','Replace x with (−4) and multiply first: 3 × (−4) = −12','Then add 2 to get −10']},
 gens:[
  function(){ var a=nz(-6,6), b=ri(-9,9), x=nz(-6,6); return {q:'Evaluate '+cx(a)+plus(b)+' when x = '+f(x)+'.',a:a*x+b,sol:['Substitute: '+f(a)+'('+f(x)+')'+plus(b)+'.','Multiply first: '+f(a)+' × '+pn(x)+' = '+f(a*x)+'.',b===0?'There is nothing to add, so the answer is '+f(a*x)+'.':'Then '+f(a*x)+plus(b)+' = '+f(a*x+b)+'.']}; },
  function(){ var a=ri(2,6), b=ri(1,9), x=ri(-5,12); return {q:'Evaluate '+a+'(x − '+b+') when x = '+f(x)+'.',a:a*(x-b),sol:['Substitute: '+a+'('+f(x)+' − '+b+').','Parentheses first: '+f(x)+' − '+b+' = '+f(x-b)+'.','Multiply: '+a+' × '+pn(x-b)+' = '+f(a*(x-b))+'.']}; },
  function(){ var x=nz(-7,7), c=nz(-9,9); return {q:'Evaluate x²'+plus(c)+' when x = '+f(x)+'.',a:x*x+c,sol:['Substitute: ('+f(x)+')²'+plus(c)+'.','Power first: '+pn(x)+' × '+pn(x)+' = '+(x*x)+'.','Then '+(x*x)+plus(c)+' = '+f(x*x+c)+'.']}; },
  function(){ var i=ri(2,9), r=ri(2,12); return {q:'Ohm’s law: V = I × R. If I = '+i+' nA and R = '+r+' MΩ, what is V in mV?',a:i*r,sol:['Substitute: V = '+i+' × '+r+'.','V = '+(i*r)+' mV. (Nanoamps times megaohms gives millivolts.)']}; },
  function(){ var v=pk([-70,-65,-55,-80,0,20]), ion=pk([['potassium',-95],['sodium',60],['chloride',-75]]); return {q:'Driving force = V − E. The membrane is at '+f(v)+' mV and E for '+ion[0]+' is '+f(ion[1])+' mV. What is the driving force in mV?',a:v-ion[1],sol:['Substitute: '+f(v)+' − '+pn(ion[1])+'.',ion[1]<0?'Subtracting a negative is adding: '+f(v)+' + '+(-ion[1])+' = '+f(v-ion[1])+'.':'Move left '+ion[1]+' from '+f(v)+': '+f(v-ion[1])+'.']}; },
  function(){ var g=ri(2,5), v=pk([-70,-65,-55,-80]), ion=pk([['potassium',-95],['sodium',60]]); return {q:'I = g × (V − E). With g = '+g+' nS, V = '+f(v)+' mV and E = '+f(ion[1])+' mV for '+ion[0]+', what is I in pA?',a:g*(v-ion[1]),sol:['Parentheses first: '+f(v)+' − '+pn(ion[1])+' = '+f(v-ion[1])+'.','Multiply: '+g+' × '+pn(v-ion[1])+' = '+f(g*(v-ion[1]))+' pA.',g*(v-ion[1])<0?'Negative means positive charge is flowing into the cell.':'Positive means positive charge is flowing out of the cell.']}; }
 ]},

{id:'m6',title:'One-step equations',sub:'The balance rule, and how scientists measure a single neuron.',
 learn:[
  ['h','The idea'],
  ['p','An equation says that two expressions are the same number. Picture a balance scale with equal weights on both sides. Whatever you do to one side you must do to the other, or it tips.'],
  ['p','Solving means getting the letter alone. To do that, undo whatever was done to it, using the opposite operation. Adding and subtracting undo each other. Multiplying and dividing undo each other.'],
  ['m','x + 7 = 12   →   subtract 7 from both sides   →   x = 5'],
  ['p','Always check by substituting your answer back: 5 + 7 = 12. A solution that fails its check is not a solution.'],
  ['ex','x − 4 = −9',['4 was subtracted from x, so add 4 to both sides.','x = −9 + 4 = −5.','Check: −5 − 4 = −9.']],
  ['ex','3x = 21',['x was multiplied by 3, so divide both sides by 3.','x = 21 ÷ 3 = 7.','Check: 3 × 7 = 21.']],
  ['ex','x/5 = 6',['x was divided by 5, so multiply both sides by 5.','x = 6 × 5 = 30.','Check: 30 ÷ 5 = 6.']],
  ['n','Neuro thread: measuring one neuron',['Electrophysiologists use this exact move every day. They push a known current I into a neuron, measure how far its voltage moves, and solve V = I × R for R, the cell’s input resistance.','Inject 5 nA into a large motor neuron and its voltage rises by 10 mV. Then 10 = 5 × R, so R = 10 ÷ 5 = 2 MΩ.','Resistance tells you how leaky the cell is. A low number means many channels are open, so a drug or a disease that opens or closes channels shows up as a change in R.']],
  ['o','The method above, recording from one cell with a fine glass electrode, earned a Nobel Prize in 1991 and fills the older textbooks. Since 2017, silicon probes called Neuropixels have recorded hundreds of neurons at once along a single hair-thin shank. That shifted the field’s central question from what one neuron does to what a population does together.']
 ],
 explain:{q:'Explain why you are allowed to subtract the same number from both sides of an equation.',model:'An equation says the two sides are the same amount. If you do the same thing to two equal amounts, they stay equal, like taking the same weight off both pans of a balance. Subtracting is chosen because it undoes an addition and leaves the variable alone.',pts:['An equation says the two sides are equal amounts','Doing the same thing to both sides keeps them equal','Subtracting undoes the addition, which leaves the variable alone']},
 gens:[
  function(){ var x=ri(-12,15), a=ri(1,12); return {q:'Solve for x:   x + '+a+' = '+f(x+a),a:x,sol:[a+' was added to x, so subtract '+a+' from both sides.','x = '+f(x+a)+' − '+a+' = '+f(x)+'.','Check: '+f(x)+' + '+a+' = '+f(x+a)+'.']}; },
  function(){ var x=ri(-12,15), a=ri(1,12); return {q:'Solve for x:   x − '+a+' = '+f(x-a),a:x,sol:[a+' was subtracted from x, so add '+a+' to both sides.','x = '+f(x-a)+' + '+a+' = '+f(x)+'.','Check: '+f(x)+' − '+a+' = '+f(x-a)+'.']}; },
  function(){ var a, x=nz(-9,9); do{ a=nz(-9,9); }while(Math.abs(a)===1); return {q:'Solve for x:   '+cx(a)+' = '+f(a*x),a:x,sol:['x was multiplied by '+f(a)+', so divide both sides by '+f(a)+'.','x = '+f(a*x)+' ÷ '+pn(a)+' = '+f(x)+'.','Check: '+f(a)+' × '+pn(x)+' = '+f(a*x)+'.']}; },
  function(){ var a=ri(2,9), b=nz(-9,9); return {q:'Solve for x:   x/'+a+' = '+f(b),a:a*b,sol:['x was divided by '+a+', so multiply both sides by '+a+'.','x = '+f(b)+' × '+a+' = '+f(a*b)+'.','Check: '+f(a*b)+' ÷ '+a+' = '+f(b)+'.']}; },
  function(){ var r=ri(2,10), i=ri(2,9); return {q:'V = I × R. A neuron’s voltage changes by '+(i*r)+' mV when current flows through a resistance of '+r+' MΩ. What is the current I in nA?',a:i,sol:['Write it out: '+(i*r)+' = I × '+r+'.','I was multiplied by '+r+', so divide both sides by '+r+'.','I = '+(i*r)+' ÷ '+r+' = '+i+' nA.']}; },
  function(){ var r=ri(2,10), i=ri(2,9); return {q:'V = I × R. Injecting '+i+' nA into a neuron changes its voltage by '+(i*r)+' mV. What is its resistance R in MΩ?',a:r,sol:['Write it out: '+(i*r)+' = '+i+' × R.','R was multiplied by '+i+', so divide both sides by '+i+'.','R = '+(i*r)+' ÷ '+i+' = '+r+' MΩ.']}; }
 ]},

{id:'m7',title:'Two-step equations',sub:'Undoing in reverse order, and the function shared by neurons and modern AI.',
 learn:[
  ['h','The idea'],
  ['p','Take 3x − 7 = 11. Two things were done to x: it was multiplied by 3, and then 7 was subtracted. To get x alone, undo them in reverse order, the way you take off shoes before socks.'],
  ['l',['Undo the subtraction: add 7 to both sides. Now 3x = 18.','Undo the multiplication: divide both sides by 3. Now x = 6.','Check: 3 × 6 − 7 = 18 − 7 = 11.']],
  ['p','The order of operations builds an expression from the inside out. Solving unwinds it from the outside in. That is why the last thing done to x is the first thing you undo.'],
  ['p','This was the first question on your placement test. After this lesson it should feel routine.'],
  ['ex','5 − 2x = 13',['Undo the 5: subtract 5 from both sides. −2x = 8.','Undo the multiplication: divide both sides by −2. x = −4.','Check: 5 − 2(−4) = 5 + 8 = 13.']],
  ['ex','x/4 + 2 = 5',['Subtract 2 from both sides: x/4 = 3.','Multiply both sides by 4: x = 12.','Check: 12 ÷ 4 + 2 = 5.']],
  ['ex','2(x + 3) = 14',['The whole group was multiplied by 2, so divide both sides by 2: x + 3 = 7.','Subtract 3 from both sides: x = 4.','Check: 2(4 + 3) = 14.']],
  ['n','Neuro thread: from input to firing rate',['Below a threshold current a neuron is silent. Above it, many neurons fire faster in near-direct proportion to how much current they receive. A simple model: r = 40 × I − 20, with r in spikes per second and I in nanoamps.','What current makes this neuron fire at 60 spikes per second? 60 = 40I − 20. Add 20: 80 = 40I. Divide by 40: I = 2 nA.','Set r to zero and solve, and you find the threshold itself: 0 = 40I − 20 gives I = 0.5 nA. Below that the rate would be negative, which is impossible, so the neuron simply does nothing.']],
  ['o','That shape, flat at zero and then a straight line, is called a rectified linear unit. Older AI textbooks built artificial neurons from smooth S-shaped curves. Around 2012 the field switched to this simpler neuron-like rule, and it is one of the changes that made today’s large AI systems trainable.']
 ],
 explain:{q:'Explain, step by step, how to solve 3x − 7 = 11 and why the steps go in that order.',model:'x was multiplied by 3 and then 7 was subtracted. Solving undoes those in reverse order. Add 7 to both sides to get 3x = 18, then divide both sides by 3 to get x = 6. Checking: 3 × 6 − 7 = 11.',pts:['x was multiplied by 3 first, then 7 was subtracted','Undo in reverse order: add 7 to both sides to get 3x = 18','Then divide both sides by 3 to get x = 6, and check it']},
 gens:[
  function(){ var a, x=nz(-9,9), b=ri(1,12); do{ a=nz(-9,9); }while(Math.abs(a)===1); var c=a*x+b; return {q:'Solve for x:   '+cx(a)+' + '+b+' = '+f(c),a:x,sol:['Subtract '+b+' from both sides: '+cx(a)+' = '+f(c-b)+'.','Divide both sides by '+f(a)+': x = '+f(x)+'.','Check: '+f(a)+' × '+pn(x)+' + '+b+' = '+f(c)+'.']}; },
  function(){ var a=ri(2,9), x=nz(-9,9), b=ri(1,12), c=a*x-b; return {q:'Solve for x:   '+a+'x − '+b+' = '+f(c),a:x,sol:['Add '+b+' to both sides: '+a+'x = '+f(c+b)+'.','Divide both sides by '+a+': x = '+f(x)+'.','Check: '+a+' × '+pn(x)+' − '+b+' = '+f(c)+'.']}; },
  function(){ var a=ri(2,9), x=nz(-9,9), b=ri(1,12), c=b-a*x; return {q:'Solve for x:   '+b+' − '+a+'x = '+f(c),a:x,sol:['Subtract '+b+' from both sides: −'+a+'x = '+f(c-b)+'.','Divide both sides by −'+a+': x = '+f(x)+'.','Check: '+b+' − '+a+' × '+pn(x)+' = '+f(c)+'.']}; },
  function(){ var a=ri(2,9), k=nz(-9,9), b=ri(1,12), c=k+b; return {q:'Solve for x:   x/'+a+' + '+b+' = '+f(c),a:a*k,sol:['Subtract '+b+' from both sides: x/'+a+' = '+f(k)+'.','Multiply both sides by '+a+': x = '+f(a*k)+'.','Check: '+f(a*k)+' ÷ '+a+' + '+b+' = '+f(c)+'.']}; },
  function(){ var a=ri(2,6), b=nz(-6,6), x=nz(-9,9), c=a*(x+b); return {q:'Solve for x:   '+a+'(x'+plus(b)+') = '+f(c),a:x,sol:['Divide both sides by '+a+': x'+plus(b)+' = '+f(x+b)+'.',(b>0?'Subtract '+b+' from':'Add '+(-b)+' to')+' both sides: x = '+f(x)+'.','Check: '+a+' × '+pn(x+b)+' = '+f(c)+'.']}; },
  function(){ var g=pk([10,20,25,40,50]), k=g*pk([1,2]), i=ri(3,8), r=g*i-k; return {q:'A neuron’s firing rate follows r = '+g+' × I − '+k+', with r in spikes per second and I in nA. What current I gives '+r+' spikes per second?',a:i,sol:['Write it out: '+r+' = '+g+'I − '+k+'.','Add '+k+' to both sides: '+(r+k)+' = '+g+'I.','Divide both sides by '+g+': I = '+i+' nA.']}; }
 ]}
);
