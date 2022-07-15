const maindiv = document.querySelector("main")
const title = document.createElement('h1')
title.innerText = 'What is PTSD?';
maindiv.appendChild(title)

const sub1 = document.createElement('h2')
sub1.innerText = 'What is PTSD?';
maindiv.appendChild(sub1)

const p1 = document.createElement('p')
p1.innerHTML = 'PTSD stands for <strong>Post Traumatic Stress Disorder</strong>, which is a psychiatric disorder. It can occur in people who have witnessed a traumatic event, such as a natural disaster, a terrorist attack, or war. Most people going through these traumatic events may have some difficulties coping, but they usually get better with the help of their doctor, and family. If some of the symptoms get worse, you may have PTSD.';
maindiv.appendChild(p1)

const sub2 = document.createElement('h2')
sub2.innerText = 'Effects of PTSD';
maindiv.appendChild(sub2)

const p2 = document.createElement('p')
p2.innerHTML = 'Some symptoms of PTSD include flashbacks, nightmares, insomnia, and self-harming or destructive behavior. Some people have constant negative thoughts about their horrible event. Some people try to push memories of the event out of their thoughts, while others try to cope with their feelings by trying not to feel anything at all. This is known as emotional numbing. This can lead the person to becoming isolated.';
maindiv.appendChild(p2)

const sub3 = document.createElement('h2')
sub3.innerText = 'Symptoms of PTSD';
maindiv.appendChild(sub3)

const p3 = document.createElement('p')
p3.innerHTML = 'Someone with PTSD may also be very anxious and find it difficult to relax, and may be easily startled. This is known as <strong>hyperarousal</strong>. Hyperarousal side effects include irritability, angry outbursts, and difficulty concentrating. PTSD can also affect children that have witnessed a traumatic event. Children with PTSD can have similar symptoms to those of adults. Some symptoms that you may notice in children include difficult behavior, panic attacks, or avoidance of things related to the traumatic event.';
maindiv.appendChild(p3)

const img = document.createElement('img')
img.src = 'https://sccdaag.files.wordpress.com/2015/10/ptsd.jpg';
maindiv.appendChild(img)