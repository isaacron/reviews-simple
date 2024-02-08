//local reviews data
const reviews = [
  {
    id: 1,
    name: 'Susan Smith',
    job: 'Web Developer',
    img: 'img/ueeheb1.jpeg',
    text: 'I am an expert at HTML & CSS. I haven\'t looked at Bootstrap, but I think it is a great next step!',
  },
  {
    id: 2,
    name: 'Anna Dean',
    job: 'Web Designer',
    img: 'img/dbcdnssj.jpeg',
    text: 'I like that I can use a combination of HTML, CSS, and JavaScript to add the same kind of functionality to multiple pages of a website.',
  },
  {
    id: 3,
    name: 'Peter Johnson',
    job: 'Intern',
    img: 'img/ideonsgshs.jpg',
    text: 'I got my start without Bootstrap, but I didn\'t need it. I liked the rounded corners on my image, the borders on my code blocks, and the alerts on the website.',
  },
  {
    id: 4,
    name: 'Brenda Young',
    job: 'Social Designer',
    img: 'img/sarake1.jpg',
    text: 'I am an expert at HTML & CSS. I haven\'t looked at Bootstrap, but I think it is a great next step!',
  },
  {
    id: 5,
    name: 'Susan Smith',
    job: 'Web Developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v158688',
    text: 'I am an expert at HTML & CSS. I haven\'t looked at Bootstrap, but I think it is a great next step!',
  },
];
//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;
// load initial item
window.addEventListener('DOMContentLoaded', function() {
  showPerson(currentItem);
});

//show person based on item

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person

nextBtn.addEventListener('click', function() {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

//show prev person
prevBtn.addEventListener('click', function() {
  currentItem--;
  if (currentItem<0) {
    currentItem = reviews.length - 1; 
  }
  showPerson(currentItem);
});

//show random person
randomBtn.addEventListener('click',function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});