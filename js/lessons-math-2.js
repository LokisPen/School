/* Math Unit 2: powers, units and logarithms. Same format as lessons-math.js, with unit:2 on every lesson. */
'use strict';
LESSONS.push(
{id:'m8',unit:2,title:'Powers and roots',sub:'Repeated multiplication, the rules for combining powers, and why the squid grew a giant axon.',
 learn:[
  ['h','The idea'],
  ['p','A power is repeated multiplication. 2⁵ means five copies of 2 multiplied together: 2 × 2 × 2 × 2 × 2 = 32. The 2 is the base and the 5 is the exponent.'],
  ['h','Three rules'],
  ['p','Multiplying powers of the same base adds the exponents, because you are simply lining up more copies.'],
  ['m','2³ × 2² = (2 × 2 × 2) × (2 × 2) = 2⁵'],
  ['p','Dividing subtracts the exponents, because copies cancel.'],
  ['m','2⁵ ÷ 2² = 2³'],
  ['p','A power raised to a power multiplies the exponents.'],
  ['m','(2³)² = 2³ × 2³ = 2⁶'],
  ['h','Zero and negative exponents'],
  ['p','Walk down the powers of 2: 2³ = 8, 2² = 4, 2¹ = 2. Each step down divides by 2. Keep going and the pattern gives 2⁰ = 1, then 2⁻¹ = 1/2, then 2⁻² = 1/4.'],
  ['p','So anything to the power 0 is 1, and a negative exponent means divide by the base that many times. 10⁻³ is 1 ÷ 1,000 = 0.001.'],
  ['h','Roots'],
  ['p','A root undoes a power. The square root of 49, written √49, is 7 because 7 × 7 = 49. The cube root of 8 is 2 because 2 × 2 × 2 = 8.'],
  ['ex','10⁴ × 10²',['Same base, so add the exponents: 4 + 2 = 6.','10⁶ = 1,000,000.']],
  ['ex','5⁻²',['A negative exponent means divide: 1 ÷ 5².','1 ÷ 25 = 1/25, which is 0.04.']],
  ['ex','A cell’s radius triples. How much does its volume grow?',['Volume grows with the cube of the radius.','3³ = 27 times.']],
  ['n','Neuro thread: why the squid grew a giant axon',['A signal travels faster along a wide axon, because current flows more easily down a wider core. The area of that core grows with the square of the diameter: double the width and there is four times the room for current.','The squid uses this for its escape reflex. Its giant axon is about half a millimeter across, wide enough to see without a microscope, and conducts at roughly 20 meters per second with no myelin at all.','That axon was big enough to thread a wire inside. In 1952 Hodgkin and Huxley used it to work out how the action potential is produced, the basis of everything in the Neuroscience unit.','Vertebrates solved the speed problem differently. Myelin gives the same speed in an axon a small fraction of the width, which is how a billion fast fibers fit inside your spinal cord.']],
  ['o','Older texts treated all mammal brains as scaled copies of one design, so that brain size alone would tell you the number of neurons. Direct cell counts from 2005 onward show different scaling rules in different groups. Primates pack neurons more densely than rodents, so a primate brain holds far more neurons than a rodent brain of the same size would.']
 ],
 explain:{q:'Explain why 2⁰ equals 1 and why 2⁻¹ equals 1/2.',model:'Each step down in the exponent divides by the base: 2³ = 8, 2² = 4, 2¹ = 2. Continuing the pattern, 2⁰ is 2 ÷ 2 = 1, and 2⁻¹ is 1 ÷ 2 = 1/2. So a negative exponent means dividing by the base that many times.',pts:['Each step down in the exponent divides by the base','Continuing from 2¹ = 2 gives 2⁰ = 1','One more step gives 2⁻¹ = 1/2, so a negative exponent means divide']},
 gens:[
  function(){ var b=pk([2,3,4,5,10]), e=b===2?ri(2,6):(b===10?ri(2,5):ri(2,3)), parts=[], k; for(k=0;k<e;k++) parts.push(b); return {q:'What is '+b+sup(e)+'?',a:Math.pow(b,e),sol:[b+sup(e)+' means '+e+' copies of '+b+' multiplied together.',parts.join(' × ')+' = '+commas(Math.pow(b,e))+'.']}; },
  function(){ var b=pk([2,3,5,10]), m=ri(2,6), n=ri(2,6); return {q:b+sup(m)+' × '+b+sup(n)+' = '+b+' to what power?',a:m+n,sol:['Multiplying powers of the same base adds the exponents.',m+' + '+n+' = '+(m+n)+', so the answer is '+b+sup(m+n)+'.']}; },
  function(){ var b=pk([2,3,5,10]), m=ri(2,9), n; do{ n=ri(2,9); }while(n===m); return {q:b+sup(m)+' ÷ '+b+sup(n)+' = '+b+' to what power? Use a negative sign if needed.',a:m-n,sol:['Dividing powers of the same base subtracts the exponents.',m+' − '+n+' = '+f(m-n)+', so the answer is '+b+sup(m-n)+'.']}; },
  function(){ var b=pk([2,3,5,10]), m=ri(2,5), n=ri(2,4); return {q:'('+b+sup(m)+')'+sup(n)+' = '+b+' to what power?',a:m*n,sol:['A power raised to a power multiplies the exponents.',m+' × '+n+' = '+(m*n)+', so the answer is '+b+sup(m*n)+'.']}; },
  function(){ var c=pk([[2,1],[2,2],[2,3],[2,4],[4,1],[4,2],[5,1],[5,2],[10,1],[10,2],[10,3]]), d=Math.pow(c[0],c[1]); return {q:'Write '+c[0]+sup(-c[1])+' as a fraction or a decimal.',a:1/d,tol:1e-7,ans:'1/'+d,sol:['A negative exponent means divide by the base that many times.',c[0]+sup(-c[1])+' = 1 ÷ '+c[0]+sup(c[1])+' = 1/'+d+'.']}; },
  function(){ var k; if(ri(0,3)===0){ k=pk([2,3,4,5,10]); return {q:'What is the cube root of '+commas(k*k*k)+'?',a:k,sol:['The cube root asks which number, used three times in a multiplication, gives '+commas(k*k*k)+'.',k+' × '+k+' × '+k+' = '+commas(k*k*k)+', so the answer is '+k+'.']}; } k=ri(2,15); return {q:'What is √'+(k*k)+'?',a:k,sol:['The square root asks which number, multiplied by itself, gives '+(k*k)+'.',k+' × '+k+' = '+(k*k)+', so the answer is '+k+'.']}; },
  function(){ var k=ri(2,5), vol=ri(0,1)===1; return {q:'A round cell grows until its radius is '+k+' times as large. Its surface area grows with the square of the radius and its volume with the cube. By what factor does its '+(vol?'volume':'surface area')+' grow?',a:vol?k*k*k:k*k,sol:[vol?'Volume grows with the cube: '+k+'³.':'Surface area grows with the square: '+k+'².',vol?k+' × '+k+' × '+k+' = '+(k*k*k)+'.':k+' × '+k+' = '+(k*k)+'.']}; }
 ],
 bank:[
  ['What does 5⁰ equal?',['1','0','5','It is undefined'],'Each step down in the exponent divides by the base, and 5¹ ÷ 5 = 1.'],
  ['Which is the same as 10⁻²?',['1/100','−100','−20','1/20'],'A negative exponent means divide: 1 ÷ 10² = 1/100.'],
  ['When you multiply two powers of the same base, what happens to the exponents?',['They add','They multiply','They subtract','Nothing; only the base changes'],'You are lining up more copies of the base, so the counts add.'],
  ['The core of an axon has an area that grows with the square of its diameter. Doubling the diameter does what to that area?',['Makes it four times as large','Doubles it','Makes it eight times as large','Leaves it unchanged'],'2² = 4.'],
  ['How do vertebrates get fast conduction without giant axons?',['They wrap axons in myelin','They use copper in their axons','They use larger ions','They have shorter nerves'],'Myelin gives high speed in a thin axon, which saves a great deal of space.']
 ]},

{id:'m9',unit:2,title:'Scientific notation and prefixes',sub:'Writing very large and very small numbers, and the scale of the brain.',
 learn:[
  ['h','The idea'],
  ['p','Science deals with numbers too large and too small to write out comfortably. Scientific notation writes any number as a number between 1 and 10, times a power of ten.'],
  ['m','86,000,000,000 = 8.6 × 10¹⁰'],
  ['p','The exponent counts how many places the decimal point moved. Moving it left, for a large number, gives a positive exponent. Moving it right, for a small number, gives a negative one.'],
  ['m','0.00007 = 7 × 10⁻⁵'],
  ['h','Multiplying'],
  ['p','Multiply the front numbers and add the exponents. This is the product rule from the last lesson.'],
  ['m','(2 × 10³) × (4 × 10⁵) = 8 × 10⁸'],
  ['h','Prefixes'],
  ['p','Units come with prefixes that stand for powers of ten. These are the ones you will meet constantly:'],
  ['u',['giga (G): 10⁹, a billion','mega (M): 10⁶, a million','kilo (k): 10³, a thousand','milli (m): 10⁻³, a thousandth','micro (µ): 10⁻⁶, a millionth','nano (n): 10⁻⁹, a billionth','pico (p): 10⁻¹², a trillionth']],
  ['p','Each step in that list is a factor of 1,000. So 1 millimeter is 1,000 micrometers, and 1 micrometer is 1,000 nanometers.'],
  ['ex','Write 70 mV in volts.',['Milli means 10⁻³, so divide by 1,000.','70 ÷ 1,000 = 0.07 V.']],
  ['ex','Why do nanoamps times megaohms give millivolts?',['Nano is 10⁻⁹ and mega is 10⁶.','10⁻⁹ × 10⁶ = 10⁻³, and 10⁻³ is milli.','So 5 nA × 2 MΩ = 10 mV. This is the shortcut used in the algebra unit.']],
  ['n','Neuro thread: the scale of the brain',['A typical neuron’s cell body is 10 to 20 micrometers across, about 10⁻⁵ meters. The gap at a synapse is about 20 nanometers, or 2 × 10⁻⁸ meters. The currents through a single ion channel are measured in picoamps.','At the other end of the scale, the brain holds about 8.6 × 10¹⁰ neurons joined by something on the order of 10¹⁴ synapses. Divide one by the other and each neuron has, on average, more than a thousand connections. Some receive many thousands.','Being able to move between these scales without losing a factor of a thousand is one of the most practical skills in the subject.']],
  ['o','Older tables of prefixes stop at yotta, 10²⁴. In 2022 four more were added to the international system: ronna and quetta for 10²⁷ and 10³⁰, and ronto and quecto for the same powers on the small side, largely because the amount of data in the world had outgrown the old names.']
 ],
 explain:{q:'Explain how to write 0.00007 in scientific notation and what the negative exponent means.',model:'Move the decimal point to the right until one digit sits in front of it: that takes 5 places and leaves 7. So the number is 7 × 10⁻⁵. The negative exponent means the number is small: it is 7 divided by 10 five times.',pts:['Move the decimal point until one digit is in front of it, leaving 7','It moved 5 places to the right, so the exponent is −5','A negative exponent means a small number: 7 divided by 10 five times']},
 gens:[
  function(){ var m=ri(11,99), k=ri(2,6), a; if(m%10===0) m+=1; a=m*Math.pow(10,k-1); return {q:'Write '+f(m/10)+' × 10'+sup(k)+' as an ordinary number.',a:a,ans:commas(a),sol:['The exponent '+k+' moves the decimal point '+k+' places to the right.',f(m/10)+' × 10'+sup(k)+' = '+commas(a)+'.']}; },
  function(){ var d=ri(1,9), k=ri(1,5); return {q:'Write '+d+' × 10'+sup(-k)+' as a decimal.',a:d/Math.pow(10,k),tol:Math.pow(10,-k)/1000,ans:dec(d,k),sol:['The exponent −'+k+' moves the decimal point '+k+' places to the left.',d+' × 10'+sup(-k)+' = '+dec(d,k)+'.']}; },
  function(){ var m=ri(11,99), k=ri(2,7), small=ri(0,1)===1; if(m%10===0) m+=1; return small?{q:dec(m,k)+' = '+f(m/10)+' × 10 to what power? Use a negative sign if needed.',a:-k,sol:['Move the decimal point right until one digit sits in front of it: '+k+' places.','Moving right means the number was small, so the exponent is negative: −'+k+'.']}:{q:commas(m*Math.pow(10,k-1))+' = '+f(m/10)+' × 10 to what power? Use a negative sign if needed.',a:k,sol:['Move the decimal point left until one digit sits in front of it: '+k+' places.','Moving left means the number was large, so the exponent is positive: '+k+'.']}; },
  function(){ var c=pk([[2,3],[2,4],[3,3],[2,2],[4,2],[3,2],[1.5,4],[2.5,2],[1.2,5]]), m=nz(-9,9), n=nz(-9,9); return {q:'('+c[0]+' × 10'+sup(m)+') × ('+c[1]+' × 10'+sup(n)+') = '+f(c[0]*c[1])+' × 10 to what power? Use a negative sign if needed.',a:m+n,sol:['Multiply the front numbers: '+c[0]+' × '+c[1]+' = '+f(c[0]*c[1])+'.','Add the exponents: '+f(m)+' + '+pn(n)+' = '+f(m+n)+'.']}; },
  function(){ var c=pk([['mV','V',0],['ms','s',0],['µm','mm',0],['nA','µA',0],['mg','g',0],['mm','m',0],['kg','g',1],['s','ms',1],['mm','µm',1],['V','mV',1],['g','mg',1],['µA','nA',1]]), v=pk([2,5,20,70,250,400,1500]), a=c[2]?v*1000:v/1000, out=c[2]?commas(a):String(a); return {q:'Convert '+commas(v)+' '+c[0]+' to '+c[1]+'.',a:a,tol:a*1e-6,ans:out,sol:[c[2]?'There are 1,000 '+c[1]+' in 1 '+c[0]+', so multiply by 1,000.':'There are 1,000 '+c[0]+' in 1 '+c[1]+', so divide by 1,000.',commas(v)+(c[2]?' × ':' ÷ ')+'1,000 = '+out+' '+c[1]+'.']}; }
 ],
 bank:[
  ['Which prefix means one millionth (10⁻⁶)?',['Micro (µ)','Milli (m)','Nano (n)','Mega (M)'],'Milli is a thousandth, micro a millionth, nano a billionth.'],
  ['Which of these lengths is the largest?',['1 millimeter','1 micrometer','1 nanometer','1 picometer'],'Each step down the list is a thousand times smaller.'],
  ['A synaptic cleft is about 20 nanometers wide. In meters that is:',['2 × 10⁻⁸ m','2 × 10⁻⁶ m','2 × 10⁻⁹ m','20 × 10⁻⁶ m'],'20 × 10⁻⁹ m, and moving the decimal point one place gives 2 × 10⁻⁸ m.'],
  ['Multiplying nanoamps (10⁻⁹) by megaohms (10⁶) gives which unit of voltage?',['Millivolts (10⁻³)','Microvolts (10⁻⁶)','Volts','Kilovolts (10³)'],'Add the exponents: −9 + 6 = −3, which is milli.'],
  ['In scientific notation, the number in front is always:',['At least 1 and less than 10','A whole number','Less than 1','A multiple of 10'],'One non-zero digit sits in front of the decimal point.'],
  ['The brain has about 8.6 × 10¹⁰ neurons and on the order of 10¹⁴ synapses. Roughly how many synapses is that per neuron?',['About a thousand','About ten','About a million','About four'],'10¹⁴ ÷ 10¹⁰ is 10⁴, and dividing by 8.6 brings it to a little over a thousand.']
 ]},

{id:'m10',unit:2,title:'Units and conversion',sub:'Carrying units through a calculation, and the dosing errors they prevent.',
 learn:[
  ['h','The idea'],
  ['p','A measurement is a number times a unit, and units behave like numbers in a calculation: they multiply, divide and cancel. Carry them along and they will tell you whether you set the problem up correctly.'],
  ['h','Conversion factors'],
  ['p','Since 60 seconds and 1 minute are the same amount of time, the fraction 60 s ÷ 1 min equals 1. Multiplying by 1 never changes a quantity, only how it is written. Choose the fraction that makes the unwanted unit cancel.'],
  ['m','3 min × (60 s ÷ 1 min) = 180 s'],
  ['p','To convert a rate, convert each unit in turn.'],
  ['ex','Convert 90 km/h to meters per second.',['Kilometers to meters: 90 × 1,000 = 90,000 m per hour.','Hours to seconds: there are 3,600 s in an hour, so divide by 3,600.','90,000 ÷ 3,600 = 25 m/s.']],
  ['ex','A solution holds 2 mg of drug per mL. How much drug is in 5 mL?',['mg/mL × mL: the mL cancels and leaves mg.','2 × 5 = 10 mg.']],
  ['ex','A patient needs 30 mg. The vial holds 20 mg per mL. How many mL?',['mg ÷ mg/mL: the mg cancels and leaves mL.','30 ÷ 20 = 1.5 mL.']],
  ['h','The check'],
  ['p','If the units of your answer are wrong, the calculation is wrong, however reasonable the number looks. An answer in mL per mg when you wanted mg means a step was set up upside down.'],
  ['n','Neuro thread: rates in the nervous system',['A firing rate is spikes per second. A neuron that fires 8 spikes in 200 milliseconds is firing at 8 ÷ 0.2 = 40 spikes per second, which is also written 40 hertz.','Conduction speed is meters per second. The fastest axons in your body conduct at about 100 m/s, which is 360 km/h, the speed of a racing car. The slowest manage about 0.5 m/s, or 1.8 km/h, slower than a walk.']],
  ['o','Older prescriptions used the handwritten symbol µg for micrograms and the letter U for units. Both were misread often enough, µg as mg (a thousandfold overdose) and U as a zero (a tenfold one), that medication safety bodies since the early 2000s tell prescribers to write “mcg” and “units” in full.']
 ],
 explain:{q:'Explain how to convert 90 km/h into meters per second, and why multiplying by a conversion factor does not change the quantity.',model:'A conversion factor is a fraction whose top and bottom are the same amount, such as 1,000 m over 1 km, so it equals 1 and multiplying by it changes only the units. Multiply 90 km/h by 1,000 to get 90,000 meters per hour, then divide by the 3,600 seconds in an hour to get 25 m/s.',pts:['A conversion factor has equal amounts on top and bottom, so it equals 1','Multiply by 1,000 to turn kilometers into meters','Divide by 3,600 to turn per hour into per second, giving 25 m/s']},
 gens:[
  function(){ var k=ri(1,10); return {q:'Convert '+(18*k)+' km/h to meters per second.',a:5*k,sol:['1 km is 1,000 m and 1 hour is 3,600 s.',(18*k)+' × 1,000 ÷ 3,600 = '+(5*k)+' m/s.']}; },
  function(){ var k=ri(1,10); return {q:'Convert '+(5*k)+' m/s to kilometers per hour.',a:18*k,sol:['There are 3,600 seconds in an hour and 1,000 meters in a kilometer.',(5*k)+' × 3,600 ÷ 1,000 = '+(18*k)+' km/h.']}; },
  function(){ var r=pk([25,50,75,100,125,150,250]), h=pk([2,4,6,8,12]); return {q:'An infusion delivers '+commas(r*h)+' mL over '+h+' hours. What is the rate in mL per hour?',a:r,sol:['Rate = volume ÷ time.',commas(r*h)+' mL ÷ '+h+' h = '+r+' mL per hour.']}; },
  function(){ var c=pk([2,4,5,10,20,25,50]), v=ri(2,12); return {q:'A solution contains '+c+' mg of drug per mL. How many mg are in '+v+' mL?',a:c*v,sol:['Multiply so that mL cancels: mg/mL × mL = mg.',c+' × '+v+' = '+(c*v)+' mg.']}; },
  function(){ var c=pk([2,4,10,20,50]), v=pk([0.5,1.5,2,2.5,3,4,5]); return {q:'A patient needs '+f(c*v)+' mg of a drug. The vial holds '+c+' mg per mL. How many mL should be drawn up?',a:v,tol:0.001,sol:['Divide so that mg cancels: mg ÷ mg/mL = mL.',f(c*v)+' ÷ '+c+' = '+f(v)+' mL.']}; },
  function(){ var T=pk([100,200,250,500]), r=pk([20,40,60,80,100,120]), N=Math.round(r*T/1000); return {q:'A neuron fires '+N+' spikes in '+T+' milliseconds. What is its firing rate in spikes per second?',a:r,sol:[T+' ms is '+f(T/1000)+' s.','Rate = spikes ÷ time = '+N+' ÷ '+f(T/1000)+' = '+r+' spikes per second.']}; },
  function(){ var c=pk([[0.05,50],[0.1,100],[0.25,250],[0.5,500],[1.5,1500],[2,2000]]); return ri(0,1)===1?{q:'Convert '+c[0]+' mg to micrograms (mcg).',a:c[1],ans:commas(c[1]),sol:['1 mg = 1,000 mcg, so multiply by 1,000.',c[0]+' × 1,000 = '+commas(c[1])+' mcg.']}:{q:'Convert '+commas(c[1])+' mcg to milligrams (mg).',a:c[0],tol:1e-6,ans:String(c[0]),sol:['1,000 mcg = 1 mg, so divide by 1,000.',commas(c[1])+' ÷ 1,000 = '+c[0]+' mg.']}; }
 ],
 bank:[
  ['You multiply a speed in meters per second by a time in seconds. What unit does the answer have?',['Meters','Seconds','Meters per second squared','No unit'],'The seconds cancel: m/s × s = m.'],
  ['Why is it safe to multiply a quantity by 60 s ÷ 1 min?',['The top and bottom are the same amount, so the fraction equals 1','It makes the number bigger','It removes the units','It is a close approximation'],'Multiplying by 1 changes how a quantity is written, never its size.'],
  ['A dose was meant to be 100 micrograms but was given as 100 milligrams. How large is the error?',['A thousandfold overdose','A tenfold overdose','A hundredfold overdose','A thousandfold underdose'],'A milligram is 1,000 micrograms.'],
  ['A dose calculation ends in units of mL per mg when you wanted mg. What does that tell you?',['A step was set up upside down, so the number cannot be trusted','Nothing; only the number matters','The answer just needs rounding','The units will sort themselves out'],'Wrong units mean a wrong calculation.'],
  ['What does a firing rate of 40 hertz mean?',['40 spikes every second','40 seconds between spikes','40 millivolts per spike','40 neurons firing together'],'Hertz means per second.']
 ]},

{id:'m11',unit:2,title:'Exponential change',sub:'Doubling, half-life, and how a neuron forgets its inputs.',
 learn:[
  ['h','The idea'],
  ['p','Some things change by adding the same amount in each step: 10, 20, 30, 40. That is linear change. Others change by multiplying by the same factor in each step: 10, 20, 40, 80. That is exponential change, and it describes bacteria, drug levels and voltages.'],
  ['h','Growth'],
  ['p','Something that doubles in each step is multiplied by 2ⁿ after n steps. Ten doublings is 2¹⁰ = 1,024, roughly a thousandfold.'],
  ['h','Decay and half-life'],
  ['p','The half-life is the time it takes for an amount to fall by half. After n half-lives the fraction left is (1/2)ⁿ: one half, then a quarter, then an eighth.'],
  ['p','Notice that the amount lost shrinks each time. Half of what remains is always still there, so in principle the amount never quite reaches zero.'],
  ['ex','Bacteria double every 20 minutes. How much does a colony grow in 2 hours?',['2 hours is 120 minutes, which is 6 doublings.','2⁶ = 64 times as many.']],
  ['ex','A drug has a half-life of 4 hours. What fraction remains after 12 hours?',['12 hours is 3 half-lives.','1/2 × 1/2 × 1/2 = 1/8, or 12.5%. This was on your placement test.']],
  ['h','Time constants'],
  ['p','Scientists often describe decay with a time constant in place of a half-life. After one time constant about 37% remains. The two describe the same curve: the half-life is about 0.69 times the time constant.'],
  ['n','Neuro thread: how a neuron forgets',['When an input nudges a neuron’s voltage upward, the bump does not last. It leaks away exponentially, with a time constant of roughly 10 to 30 milliseconds in many neurons of the cortex.','This sets the neuron’s memory for its own inputs. Two inputs arriving 5 milliseconds apart pile on top of each other and may reach threshold. Arriving 100 milliseconds apart, the first has vanished before the second comes, and nothing adds up. Adding inputs across time like this is called temporal summation.']],
  ['o','Older textbooks give the time constant as a fixed property of each neuron. Recordings from living, active brains show that it changes from moment to moment. When a neuron is being bombarded with inputs its membrane becomes leakier and its time constant can shorten several-fold, which makes it respond to more precise timing.']
 ],
 explain:{q:'Explain why a drug with a half-life of 4 hours is not completely gone after 8 hours.',model:'A half-life removes half of whatever is present, not a fixed amount. After 4 hours half remains. After another 4 hours half of that half is removed, leaving a quarter. Each half-life halves what is left, so the amount keeps shrinking without reaching zero.',pts:['A half-life removes half of what is present, not a fixed amount','After 4 hours half remains, and after 8 hours half of that, a quarter','So the amount keeps shrinking and is not gone after two half-lives']},
 gens:[
  function(){ var N0=pk([1,5,10,50,100]), D=pk([10,20,30]), n=ri(1,6), a=N0*Math.pow(2,n); return {q:'A colony of bacteria doubles every '+D+' minutes. It starts with '+N0+(N0===1?' cell':' cells')+'. How many are there after '+(D*n)+' minutes?',a:a,ans:commas(a),sol:[(D*n)+' minutes is '+n+' doubling'+(n===1?'':'s')+'.','Multiply by 2 that many times: '+N0+' × '+Math.pow(2,n)+' = '+commas(a)+'.']}; },
  function(){ var h=pk([2,3,4,6,8,12]), n=ri(1,4); return {q:'A drug has a half-life of '+h+' hours. What percent of a dose remains after '+(h*n)+' hours?',a:100/Math.pow(2,n),tol:0.01,sol:[(h*n)+' hours is '+n+' half-li'+(n===1?'fe':'ves')+'.','Halve 100% '+n+' time'+(n===1?'':'s')+': '+f(100/Math.pow(2,n))+'%.']}; },
  function(){ var d=pk([80,160,200,400,800]), h=pk([2,4,6,8]), n=ri(1,3); return {q:'A patient has '+d+' mg of a drug in the body. Its half-life is '+h+' hours. How many mg remain after '+(h*n)+' hours?',a:d/Math.pow(2,n),tol:0.01,sol:[(h*n)+' hours is '+n+' half-li'+(n===1?'fe':'ves')+'.','Halve '+d+' mg '+n+' time'+(n===1?'':'s')+': '+f(d/Math.pow(2,n))+' mg.']}; },
  function(){ var d=pk([80,160,400,800]), h=pk([3,4,5,6,8]), n=ri(2,4); return {q:'A drug has a half-life of '+h+' hours. How many hours does it take for '+d+' mg to fall to '+f(d/Math.pow(2,n))+' mg?',a:h*n,sol:['Count the halvings from '+d+' to '+f(d/Math.pow(2,n))+': '+n+'.',n+' half-lives × '+h+' hours = '+(h*n)+' hours.']}; },
  function(){ var n=ri(1,6), d=Math.pow(2,n); return {q:'After how many half-lives is 1/'+d+' of a drug left?',a:n,sol:['Each half-life multiplies what is left by 1/2.','(1/2)'+sup(n)+' = 1/'+d+', so it takes '+n+' half-li'+(n===1?'fe':'ves')+'.']}; },
  function(){ var b=pk([3,10]), n=b===3?ri(2,4):ri(2,5); return {q:'An amount is multiplied by '+b+' every hour. By what factor has it grown after '+n+' hours?',a:Math.pow(b,n),ans:commas(Math.pow(b,n)),sol:['Multiply by '+b+' once for each hour: '+b+sup(n)+'.',b+sup(n)+' = '+commas(Math.pow(b,n))+'.']}; },
  function(){ var v=pk([4,8,16]), h=pk([5,10,20]), n=ri(1,3); return {q:'An input raises a neuron’s voltage by '+v+' mV. The bump fades with a half-life of '+h+' ms. How many mV of it are left after '+(h*n)+' ms?',a:v/Math.pow(2,n),tol:0.001,sol:[(h*n)+' ms is '+n+' half-li'+(n===1?'fe':'ves')+'.','Halve '+v+' mV '+n+' time'+(n===1?'':'s')+': '+f(v/Math.pow(2,n))+' mV.']}; }
 ],
 bank:[
  ['Which describes exponential growth?',['Multiplying by the same factor in each equal time step','Adding the same amount in each equal time step','Growing quickly at first and then stopping','Growing by a random amount in each step'],'Same factor each step is exponential. Same amount each step is linear.'],
  ['A drug has a half-life of 6 hours. How much of the original dose is left after 12 hours?',['One quarter','None','One half','One third'],'Half after 6 hours, then half of that after 12.'],
  ['After one time constant, about how much of a decaying voltage remains?',['About 37%','Exactly 50%','About 10%','None'],'The 50% point is the half-life, which comes a little sooner.'],
  ['Two small inputs reach a neuron 5 ms apart and add up. A second pair arrives 100 ms apart and does not. Why?',['The first bump has leaked away before the second arrives','The neuron is refractory for 100 ms','The second input is always smaller','Inputs can never add up'],'With a time constant of tens of milliseconds, almost nothing is left after 100 ms.'],
  ['In exponential decay, when does the amount reach exactly zero?',['In principle never; it keeps halving','After two half-lives','After ten half-lives','After one time constant'],'Half of what remains is always still there.']
 ]},

{id:'m12',unit:2,title:'Logarithms',sub:'Counting powers of ten, the pH scale, and the equation that sets a neuron’s voltage.',
 learn:[
  ['h','The idea'],
  ['p','A logarithm answers one question: what exponent? The logarithm base 10 of 1,000, written log₁₀(1,000), is 3, because 10³ = 1,000.'],
  ['u',['log₁₀(100) = 2, because 10² = 100','log₁₀(10) = 1','log₁₀(1) = 0, because 10⁰ = 1','log₁₀(0.01) = −2, because 10⁻² = 0.01']],
  ['p','So the logarithm of a number bigger than 1 is positive, and the logarithm of a number between 0 and 1 is negative.'],
  ['h','Why they are useful'],
  ['p','Logarithms turn multiplying into adding, because exponents add when powers multiply. Every time a number gets ten times bigger, its logarithm goes up by 1.'],
  ['m','log₁₀(a × b) = log₁₀(a) + log₁₀(b)'],
  ['p','That makes them the natural way to handle quantities that range over many powers of ten.'],
  ['h','pH'],
  ['p','The concentration of hydrogen ions in a solution decides how acidic it is, and it ranges from about 1 mol/L down to 10⁻¹⁴. The pH scale squeezes that range into small numbers.'],
  ['m','pH = −log₁₀ (hydrogen ion concentration)'],
  ['p','A concentration of 10⁻⁷ mol/L gives pH 7. The minus sign means that more acid gives a lower pH, and each step of 1 is a factor of 10. A solution at pH 5 has 100 times the hydrogen ions of one at pH 7.'],
  ['ex','What is log₁₀(100,000)?',['Ask: 10 to what power gives 100,000?','10⁵ = 100,000, so the answer is 5.']],
  ['ex','A solution has a hydrogen ion concentration of 1 × 10⁻³ mol/L. What is its pH?',['log₁₀(10⁻³) = −3.','The minus sign in front makes it 3. This was on your placement test.']],
  ['n','Neuro thread: the Nernst equation',['The voltage at which an ion is content to stay put, its equilibrium potential, is set by a logarithm. For an ion with one positive charge at body temperature:','E = 61.5 mV × log₁₀(concentration outside ÷ concentration inside)','Potassium is about 4 mM outside and 140 mM inside. The ratio 4 ÷ 140 is less than 1, so its logarithm is negative, about −1.54, and E comes out near −95 mV. That is why a resting neuron, which is leaky mainly to potassium, sits at a negative voltage.','Every tenfold change in the ratio moves E by 61.5 mV. If blood potassium doubles from 4 to 8 mM, E shifts by about 18 mV toward zero. That is the arithmetic behind the danger of high potassium.']],
  ['o','Many books state flatly that pH 7 is neutral. That holds only at 25 °C. At body temperature water breaks apart a little more, and neutral is about pH 6.8. Blood, held between 7.35 and 7.45, is therefore further on the alkaline side than the simple rule suggests.']
 ],
 explain:{q:'Explain what log₁₀(1,000) = 3 means, and why a solution of pH 3 has more hydrogen ions than one of pH 5.',model:'A logarithm is an exponent: log₁₀(1,000) = 3 because 10³ = 1,000. pH is the negative of the logarithm of the hydrogen ion concentration, so a lower pH means a higher concentration. pH 3 is 10⁻³ and pH 5 is 10⁻⁵, so pH 3 has 100 times as many hydrogen ions.',pts:['A logarithm is an exponent: 10³ = 1,000, so the log is 3','pH is the negative log of hydrogen ion concentration, so lower pH means more hydrogen ions','Each pH step is a factor of 10, so pH 3 has 100 times the hydrogen ions of pH 5']},
 gens:[
  function(){ var k=ri(-4,6), N=k>=0?commas(Math.pow(10,k)):dec(1,-k); return {q:'What is log₁₀('+N+')? Use a negative sign if needed.',a:k,sol:['Ask: 10 to what power gives '+N+'?','10'+sup(k)+' = '+N+', so the answer is '+f(k)+'.']}; },
  function(){ var k=ri(1,13); return {q:'A solution has a hydrogen ion concentration of 1 × 10'+sup(-k)+' mol/L. What is its pH?',a:k,sol:['pH = −log₁₀ of the hydrogen ion concentration.','log₁₀(10'+sup(-k)+') = −'+k+', and the minus sign in front makes the pH '+k+'.']}; },
  function(){ var lo=ri(1,8), d=ri(1,4), a=Math.pow(10,d); return {q:'How many times more hydrogen ions does a solution of pH '+lo+' have than one of pH '+(lo+d)+'?',a:a,ans:commas(a),sol:['Each step of 1 on the pH scale is a factor of 10.',d+' step'+(d===1?'':'s')+': 10'+sup(d)+' = '+commas(a)+' times.']}; },
  function(){ var k=nz(-3,5), N=k>=0?commas(Math.pow(10,k)):dec(1,-k); return {q:'log₁₀(x) = '+f(k)+'. What is x?',a:Math.pow(10,k),tol:Math.pow(10,k)*1e-6,ans:N,sol:['A logarithm is an exponent, so x = 10'+sup(k)+'.','10'+sup(k)+' = '+N+'.']}; },
  function(){ var m=ri(1,6), n=ri(1,6); return {q:'log₁₀(a) = '+m+' and log₁₀(b) = '+n+'. What is log₁₀(a × b)?',a:m+n,sol:['The log of a product is the sum of the logs.',m+' + '+n+' = '+(m+n)+'.']}; },
  function(){ var c=pk([[1,10,-1],[10,100,-1],[15,150,-1],[1,100,-2],[4,400,-2],[10,1,1],[150,15,1],[100,1,2],[120,120,0]]), E=61.5*c[2]; return {q:'For an ion with one positive charge at body temperature, E = 61.5 mV × log₁₀(outside ÷ inside). Its concentration is '+c[0]+' mM outside and '+c[1]+' mM inside. What is E in mV? Use a negative sign if needed.',a:E,tol:0.6,sol:['Outside ÷ inside = '+c[0]+' ÷ '+c[1]+' = '+f(c[0]/c[1])+'.','log₁₀('+f(c[0]/c[1])+') = '+f(c[2])+'.','61.5 × '+pn(c[2])+' = '+f(E)+' mV.']}; }
 ],
 bank:[
  ['What question does log₁₀(x) answer?',['What power of 10 gives x?','What is x divided by 10?','What is 10 times x?','What is the square root of x?'],'A logarithm is an exponent.'],
  ['Solution A has pH 4 and solution B has pH 6. Which statement is right?',['A has 100 times the hydrogen ion concentration of B','B has 100 times the hydrogen ion concentration of A','A has twice the hydrogen ion concentration of B','A has 2 more hydrogen ions than B'],'Lower pH means more hydrogen ions, and two steps is 10 × 10.'],
  ['What is log₁₀(1)?',['0','1','10','It is undefined'],'10⁰ = 1.'],
  ['In the Nernst equation, the ratio outside ÷ inside grows tenfold. What happens to the equilibrium potential of an ion with one positive charge?',['It shifts by about 61.5 mV','It doubles','It shifts by about 10 mV','It does not change'],'A tenfold change adds 1 to the logarithm, and 61.5 × 1 = 61.5 mV.'],
  ['Potassium is far more concentrated inside a cell than outside, so outside ÷ inside is less than 1. What sign does its equilibrium potential have?',['Negative','Positive','Zero','It cannot be known'],'The logarithm of a number between 0 and 1 is negative.'],
  ['Why is a logarithmic scale used for hydrogen ion concentration?',['The values span many powers of ten, and a log scale turns them into small, easy numbers','Because hydrogen is the lightest element','Because pH must be a whole number','Because logarithms make acids safer'],'pH 1 to pH 14 covers a range of ten trillion to one.']
 ]}
);
