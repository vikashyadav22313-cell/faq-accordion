const accordion = [
  {
    id: 1,
    question: 'What is Frontend Mentor, and how will it help me?',
    ans: `Frontend Mentor offers realistic coding challenges to help developers improve their 
    frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
    all levels and ideal for portfolio building.`,
  },
  {
    id: 2,
    question: 'Is Frontend Mentor free?',
    ans: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
    option providing access to a range of projects suitable for all skill levels.`,
  },
  {
    id: 3,
    question: 'Can I use Frontend Mentor projects in my portfolio?',
    ans: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
    way to showcase your skills to potential employers!`,
  },
  {
    id: 4,
    question: `How can I get help if I'm stuck on a Frontend Mentor challenge?`,
    ans: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
    channel where you can ask questions and seek support from other community members.`,
  },
];

const Questions = document.querySelector('.main');

// We’ll store all question elements to manipulate them easily
const allAnswers = [];
const allImages = [];
const allParas = [];

accordion.forEach((curItem, index) => {
  const div = document.createElement('div');
  const newDiv = document.createElement('div');
  const ansPara = document.createElement('p');
  const para = document.createElement('p');
  const span = document.createElement('span');
  const Image = document.createElement('img');

  para.innerHTML = curItem.question;
  para.classList.add('ind-question');

  Image.src = './assets/images/icon-plus.svg';
  Image.alt = 'plus';
  span.appendChild(Image);

  div.appendChild(para);
  div.appendChild(span);
  div.classList.add('question-area');

  ansPara.innerHTML = curItem.ans;
  ansPara.classList.add('ind-answer');

  newDiv.classList.add('cover');
  newDiv.appendChild(ansPara);

  Questions.appendChild(div);
  Questions.appendChild(newDiv);

  // Store references
  allAnswers.push(newDiv);
  allImages.push(Image);
  allParas.push(para);

  // Toggle logic
  para.addEventListener('click', () => {
    allAnswers.forEach((ans, i) => {
      if (i === index) {
        const isHidden = ans.classList.contains('cover');
        // First close all
        allAnswers[i].classList.add('cover');
        allImages[i].src = './assets/images/icon-plus.svg';
        allParas[i].style.fontWeight = '400';
        allParas[i].style.color = 'black';

        if (isHidden) {
          // Then open only clicked one
          ans.classList.remove('cover');
          Image.src = './assets/images/icon-minus.svg';
          para.style.fontWeight = '600';
          para.style.color = 'hsl(292, 42%, 14%)';
        }
      } else {
        // Close others
        allAnswers[i].classList.add('cover');
        allImages[i].src = './assets/images/icon-plus.svg';
        allParas[i].style.fontWeight = '400';
        allParas[i].style.color = 'black';
      }
    });
  });
});
