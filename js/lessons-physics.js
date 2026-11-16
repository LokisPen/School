/* Physics Unit 1: motion, energy and electricity. Same format as lessons-math.js. */
'use strict';
LESSONS.push(
{id:'p1',title:'Motion and force',sub:'Speed, acceleration, force, and how fast a nerve signal travels.',
 learn:[
  ['h','The idea'],
  ['p','Speed is distance divided by time. Something that covers 10 meters in 2 seconds moves at 5 meters per second, written 5 m/s.'],
  ['m','speed = distance ÷ time'],
  ['p','The same relationship gives you the other two: time = distance ÷ speed, and distance = speed × time.'],
  ['p','Acceleration is how quickly speed changes. A car that goes from 0 to 20 m/s in 4 seconds gains 5 m/s every second.'],
  ['p','A force is a push or a pull, measured in newtons. Newton’s second law ties it to motion: a bigger force gives more acceleration, and a bigger mass gives less.'],
  ['m','force = mass × acceleration'],
  ['ex','A 2 kg object accelerates at 3 m/s each second. What force acts on it?',['Force = mass × acceleration.','2 × 3 = 6 newtons.']],
  ['ex','A nerve signal travels 1 meter at 50 m/s. How long does it take?',['Time = distance ÷ speed.','1 ÷ 50 = 0.02 seconds, which is 20 milliseconds.']],
  ['n','Neuro thread: how fast is a nerve signal?',['Far slower than electricity in a wire. Thin, bare axons carry signals at about 1 m/s, a walking pace. Thick axons wrapped in myelin reach about 100 m/s.','Stub your toe and the signal has about 1.5 meters to travel. On fast touch fibers at 50 m/s that takes 0.03 seconds. On slow pain fibers at 1 m/s it takes 1.5 seconds. That is why you feel the bump first and the ache a moment later.']],
  ['o','Older books treat myelin as insulation laid down in childhood and then fixed. Studies since about 2012 show that adults add and reshape myelin when they learn new skills, and that mice prevented from making new myelin cannot master a new motor task.']
 ],
 explain:{q:'Explain what speed is, and how to find the time a signal takes if you know its distance and speed.',model:'Speed is distance divided by time: how far something goes in each unit of time. Rearranged, time is distance divided by speed. A signal covering 1 meter at 50 m/s takes 1 ÷ 50 = 0.02 seconds.',pts:['Speed is distance divided by time','So time is distance divided by speed','A worked case with matching units, such as meters and meters per second giving seconds']},
 gens:[
  function(){ var v=pk([2,4,5,8,10,12,20]), t=ri(2,9); return {q:'A runner covers '+(v*t)+' meters in '+t+' seconds. What is the speed in m/s?',a:v,sol:['Speed = distance ÷ time.',(v*t)+' ÷ '+t+' = '+v+' m/s.']}; },
  function(){ var v=pk([2,5,10,20,25,50]), t=ri(2,8); return {q:'A signal travels '+(v*t)+' meters at '+v+' m/s. How many seconds does it take?',a:t,sol:['Time = distance ÷ speed.',(v*t)+' ÷ '+v+' = '+t+' s.']}; },
  function(){ var v=ri(3,30), t=ri(2,12); return {q:'A cyclist rides at '+v+' m/s for '+t+' seconds. How many meters does the cyclist cover?',a:v*t,sol:['Distance = speed × time.',v+' × '+t+' = '+(v*t)+' m.']}; },
  function(){ var c=pk([[1,1],[1.5,1],[2,1],[1,2],[1.5,2],[1,5],[2,5],[1,10],[1.5,10],[0.5,25],[2,25],[1,50],[1.5,50],[0.5,100],[1.5,100],[1,100]]), ms=Math.round(c[0]/c[1]*1000); return {q:'An axon conducts at '+c[1]+' m/s. How many milliseconds does a signal take to travel '+c[0]+' m? (1 second = 1,000 ms)',a:ms,tol:0.01,sol:['Time = distance ÷ speed = '+c[0]+' ÷ '+c[1]+' = '+f(c[0]/c[1])+' s.','Multiply by 1,000 for milliseconds: '+ms+' ms.']}; },
  function(){ var m=ri(2,10), a=ri(2,9); return {q:'A '+m+' kg object accelerates at '+a+' m/s each second. What force acts on it, in newtons?',a:m*a,sol:['Force = mass × acceleration.',m+' × '+a+' = '+(m*a)+' N.']}; },
  function(){ var a=ri(2,6), t=ri(2,8); return {q:'A car goes from rest to '+(a*t)+' m/s in '+t+' seconds. How many m/s does it gain each second?',a:a,sol:['Acceleration = change in speed ÷ time.',(a*t)+' ÷ '+t+' = '+a+' m/s each second.']}; }
 ],
 bank:[
  ['Two axons are the same length. One conducts at 2 m/s and the other at 60 m/s. The signal in the faster one arrives:',['In one thirtieth of the time','In one sixtieth of the time','In half the time','At the same moment'],'Time = distance ÷ speed. Thirty times the speed means one thirtieth of the time.'],
  ['The same force pushes a 1 kg cart and a 10 kg cart. Which accelerates more?',['The 1 kg cart, ten times as much','The 10 kg cart, ten times as much','Both the same','Neither moves'],'For a fixed force, acceleration falls as mass rises.'],
  ['What does a speed of 12 m/s mean?',['The object covers 12 meters every second','The object takes 12 seconds to cover one meter','The object gains 12 m/s of speed each second','The object weighs 12 newtons'],'Meters per second: distance covered in each second.'],
  ['Why do you feel a stubbed toe as a quick bump followed later by an ache?',['Touch travels on fast myelinated fibers and the ache on slow bare ones','The brain delays pain on purpose','Pain signals take a longer route through the heart','The ache starts later at the toe'],'Both signals start together. They arrive at different times because the fibers conduct at very different speeds.']
 ]},

{id:'p2',title:'Energy and power',sub:'Work, kinetic energy, watts, and the 20-watt brain.',
 learn:[
  ['h','The idea'],
  ['p','Energy is the capacity to make something happen: to move it, heat it or change it. It is measured in joules (J).'],
  ['p','Work is energy transferred by a force. Push with 10 newtons across 3 meters and you have transferred 30 joules.'],
  ['m','work = force × distance'],
  ['p','A moving object carries kinetic energy. Because speed is squared, doubling the speed gives four times the energy.'],
  ['m','kinetic energy = ½ × mass × speed²'],
  ['p','Energy is never created or destroyed. It only moves or changes form. Chemical energy in food becomes motion, heat and electrical signals. This is the conservation of energy.'],
  ['p','Power is how fast energy is used. One watt is one joule per second.'],
  ['m','power = energy ÷ time'],
  ['ex','What is the kinetic energy of a 2 kg object moving at 3 m/s?',['Square the speed first: 3² = 9.','½ × 2 × 9 = 9 joules.','This was on your placement test.']],
  ['ex','How much energy does a 60 W bulb use in 10 seconds?',['Energy = power × time.','60 × 10 = 600 joules.']],
  ['n','Neuro thread: a 20-watt brain',['Your brain runs on about 20 watts, less than a dim light bulb. Over an hour that is 20 × 3,600 = 72,000 joules.','Supercomputers that attempt comparable tasks draw millions of watts. How the brain computes so cheaply is an open research question and a central goal in the design of AI hardware.']],
  ['o','Older accounts assumed the brain idles at rest and burns far more when you think hard. Measurements show that a demanding mental task raises the brain’s energy use by less than 5%. Most of the 20 watts pays for constant background activity, a finding that led to the description of the brain’s default mode network in 2001.']
 ],
 explain:{q:'Explain the difference between energy and power.',model:'Energy is the capacity to do work or cause change, measured in joules. Power is the rate at which energy is used: energy divided by time. One watt is one joule per second, so a 20-watt brain uses 20 joules every second.',pts:['Energy is the capacity to do work or cause change, in joules','Power is the rate energy is used: energy ÷ time','A watt is one joule per second']},
 gens:[
  function(){ var F=ri(2,20), d=ri(2,12); return {q:'You push with '+F+' newtons across '+d+' meters. How many joules of work do you do?',a:F*d,sol:['Work = force × distance.',F+' × '+d+' = '+(F*d)+' J.']}; },
  function(){ var m=pk([2,4,6,8,10]), v=ri(2,6); return {q:'What is the kinetic energy, in joules, of a '+m+' kg object moving at '+v+' m/s?',a:0.5*m*v*v,sol:['Square the speed: '+v+'² = '+(v*v)+'.','½ × '+m+' × '+(v*v)+' = '+(0.5*m*v*v)+' J.']}; },
  function(){ var P=pk([5,10,20,40,60,100]), t=ri(2,12); return {q:'A device uses '+(P*t)+' joules in '+t+' seconds. What is its power in watts?',a:P,sol:['Power = energy ÷ time.',(P*t)+' ÷ '+t+' = '+P+' W.']}; },
  function(){ var P=pk([5,10,20,40,60,100]), t=ri(2,30); return {q:'A '+P+' W device runs for '+t+' seconds. How many joules does it use?',a:P*t,sol:['Energy = power × time.',P+' × '+t+' = '+(P*t)+' J.']}; },
  function(){ var M=pk([1,2,5,10,30,60]); return {q:'The brain uses about 20 watts. How many joules does it use in '+M+' minute'+(M===1?'':'s')+'?',a:20*60*M,sol:['Convert to seconds: '+M+' × 60 = '+(60*M)+' s.','Energy = power × time = 20 × '+(60*M)+' = '+(1200*M)+' J.']}; }
 ],
 bank:[
  ['An object’s speed doubles. What happens to its kinetic energy?',['It becomes four times as large','It doubles','It stays the same','It halves'],'Kinetic energy depends on speed squared, and 2² = 4.'],
  ['A phone battery stores a fixed amount of energy. If an app doubles the phone’s power use, the battery lasts:',['Half as long','Twice as long','Just as long','A quarter as long'],'Time = energy ÷ power. Double the power, half the time.'],
  ['A ball rolls to a stop on carpet. Where did its kinetic energy go?',['Into heat, through friction','It was destroyed','Back into the ball’s mass','Into gravity'],'Energy is conserved. Friction turns motion into heat.'],
  ['During hard mental arithmetic, what happens to the brain’s total energy use?',['It rises by less than 5%','It roughly doubles','It triples','It falls by half'],'The brain’s background activity dominates its energy budget, whatever you are doing.']
 ]},

{id:'p3',title:'Charge, voltage and current',sub:'The three electrical quantities, Ohm’s law, and the membrane as a battery.',
 learn:[
  ['h','The idea'],
  ['p','Charge comes in two kinds, positive and negative. Like charges repel and opposite charges attract. Charge is measured in coulombs.'],
  ['p','Voltage is the push. Pull positive and negative charge apart and they strain to get back together. Voltage measures how hard, for each unit of charge, in volts. A battery is a device that keeps charge separated.'],
  ['p','Current is the flow: how much charge passes a point each second, in amperes (amps).'],
  ['p','Resistance is how hard it is for charge to get through, in ohms (Ω).'],
  ['p','Ohm’s law links the three. Think of water in a pipe: voltage is the pressure, current is the flow, and resistance is how narrow the pipe is. For a fixed push, more resistance means less flow.'],
  ['m','V = I × R'],
  ['ex','A 12-volt battery drives current through a 4-ohm resistor. What is the current?',['Start from V = I × R: 12 = I × 4.','Divide both sides by 4: I = 3 amps.','This was on your placement test. Rearranging uses the one-step equation skill from Math lesson 6.']],
  ['ex','A current of 2 amps flows through 5 ohms. What is the voltage?',['V = I × R.','2 × 5 = 10 volts.']],
  ['n','Neuro thread: the membrane is a battery',['A neuron’s membrane keeps charge separated, so there is a voltage across it: about 70 thousandths of a volt. In a wire the moving charges are electrons. In the body they are ions moving through water.','Ion channels are the resistors. A single open channel passes a few trillionths of an amp, which is still several million ions every second. Open more channels and the membrane’s resistance falls. That is how a neuron changes its own electrical behavior from moment to moment.']],
  ['o','Older textbooks drew ion channels as hypothetical holes. The first atomic structure of one was solved in 1998. Since about 2013 a method called cryo-electron microscopy has shown channels atom by atom, including the moving parts that sense voltage, and drugs are now designed from those structures.']
 ],
 explain:{q:'Explain what voltage, current and resistance are, and how Ohm’s law connects them.',model:'Voltage is the push on charges that comes from keeping positive and negative charge separated. Current is the rate at which charge flows. Resistance is the opposition to that flow. Ohm’s law says V = I × R, so for a fixed voltage, more resistance means less current.',pts:['Voltage is the push on charges, from separated charge','Current is the rate at which charge flows','Resistance opposes the flow, and V = I × R ties them together']},
 gens:[
  function(){ var i=ri(2,9), r=ri(2,12); return {q:'A current of '+i+' amps flows through a '+r+'-ohm resistor. What is the voltage across it?',a:i*r,sol:['V = I × R.',i+' × '+r+' = '+(i*r)+' volts.']}; },
  function(){ var i=ri(2,9), r=ri(2,12); return {q:'A '+(i*r)+'-volt battery drives current through a '+r+'-ohm resistor. What is the current in amps?',a:i,sol:['V = I × R, so '+(i*r)+' = I × '+r+'.','Divide both sides by '+r+': I = '+i+' amps.']}; },
  function(){ var i=ri(2,9), r=ri(2,12); return {q:'A '+(i*r)+'-volt supply drives '+i+' amps through a wire. What is the wire’s resistance in ohms?',a:r,sol:['V = I × R, so '+(i*r)+' = '+i+' × R.','Divide both sides by '+i+': R = '+r+' ohms.']}; },
  function(){ var i=ri(2,9), t=ri(2,20); return {q:'A current of '+i+' amps flows for '+t+' seconds. How many coulombs of charge pass?',a:i*t,sol:['Current is charge per second, so charge = current × time.',i+' × '+t+' = '+(i*t)+' coulombs.']}; },
  function(){ var v=pk([3,5,6,9,12,120]), i=ri(2,8); return {q:'A device runs on '+v+' volts and draws '+i+' amps. What is its power in watts? (Power = voltage × current)',a:v*i,sol:['Power = voltage × current.',v+' × '+i+' = '+(v*i)+' W.']}; }
 ],
 bank:[
  ['The voltage across a resistor stays the same and its resistance doubles. What happens to the current?',['It halves','It doubles','It stays the same','It drops to zero'],'I = V ÷ R. Double the resistance, half the current.'],
  ['In the body, what carries electric current?',['Ions moving through water','Electrons flowing along nerves like wires','Protons jumping between cells','Light'],'Sodium, potassium, calcium and chloride ions are the body’s charge carriers.'],
  ['A neuron opens many more ion channels. What happens to its membrane resistance?',['It falls, because there are more paths for current','It rises','It is unchanged','It becomes infinite'],'Each open channel is another path. More paths means less resistance.'],
  ['What does a battery do?',['Keeps positive and negative charge separated, which creates a voltage','Creates charge from nothing','Stores current','Removes resistance from a circuit'],'Separated charge is what produces the push.']
 ]}
);
