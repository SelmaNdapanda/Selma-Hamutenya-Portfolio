const menu = document.querySelector('#union');
const navigation = document.querySelector('nav');
menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navigation.classList.toggle('nav-toggle');
});

navigation.addEventListener('click', (event) => {
  const { target } = event;
  if (target.nodeName === 'NAV' || target.nodeName === 'DIV') { navigation.classList.remove('nav-toggle'); }
});
window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navigation.classList.remove('nav-toggle');
});

const cards = [
  {
    image: 'images/snapshot5.png',
    title: 'Tonic',
    datas: {
      author: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'images/snapshot4.png',
    title: 'Multi-Post Stories',
    datas: {
      author: 'FACEBOOK',
      role: 'Full Stack Dev',
      year: '2015',
    },
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    image: 'images/snapshot1.png',
    title: 'Facebook 360',
    datas: {
      author: 'FACEBOOK',
      role: 'Full Stack Dev',
      year: '2015',
    },
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    image: 'images/snapshot2.png',
    title: 'Uber Navigation',
    datas: {
      author: 'Uber',
      role: 'Lead Developer',
      year: '2018',
    },
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
];

const works = document.querySelector('#Portfolio');
function cardsBuilder(card, index) {
  const {
    image, title, datas, description, skills,
  } = card;
  const skillsHtml = skills.map(
    (s) => `<li class = "tag html-tag">${s}</li>`,
  ).join('');
  works.innerHTML += `
  <div class = "card-works card-works-${(index === 0 || index % 2 === 0) ? '1' : '2'}">
    <img src = "${image}" alt="first-project" class="snapshotdesktop1" /></a>
    <div class="card-works-content-${(index === 0 || index % 2 === 0) ? '1' : '2'}">
      <h2 class = "title">${title}</h2>
      <ul class = "frame frame-${(index === 0 || index % 2 === 0) ? '1' : '2'}">
        <li class = "list-item author">${datas.author}</li>
        <li class = "list-item role">${datas.role}</li>
        <li class = "list-item year">${datas.year}</li>
      </ul>
      <p class = "primary-text2">
        ${description}
      </p>
      <ul class = "tags">
        ${skillsHtml}
      </ul>
      <button class = "btn action"> See Project </button>
    </div>
  </div>
  `;
}
cards.forEach((card, index) => {
  cardsBuilder(card, index);
});

const popupCards = [
  {
    title: 'Tonic',
    datas: {
      author: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
    },
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ......",
    skills: ['html', 'css', 'javascript', 'ruby', 'github', 'Bootstraps'],
    image: 'images/snapshot5.png',
    liveLink: 'See live',
    sourceLink: 'See Source',
  },
  {
    title: 'Multi-Post Stories',
    datas: {
      author: 'FACEBOOK',
      role: 'Full Stack Dev',
      year: '2015',
    },
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .......",
    skills: ['html', 'css', 'javascript', 'ruby', 'github', 'Bootstraps'],
    image: 'images/snapshot4.png',
    liveLink: 'See live',
    sourceLink: 'See Source',
  },
  {
    title: 'Facebook 360',
    datas: {
      author: 'FACEBOOK',
      role: 'Full Stack Dev',
      year: '2015',
    },
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .......",
    skills: ['html', 'css', 'javascript', 'ruby', 'github', 'Bootstraps'],
    image: 'images/snapshot1.png',
    liveLink: 'See live',
    sourceLink: 'See Source',
  },
  {
    title: 'Uber Navigation',
    datas: {
      author: 'Uber',
      role: 'Lead Developer',
      year: '2018',
    },
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...........",
    skills: ['html', 'css', 'javascript', 'ruby', 'github', 'Bootstraps'],
    image: 'images/snapshot2.png',
    liveLink: 'See live',
    sourceLink: 'See Source',
  },
];

const btns = document.querySelectorAll('.btn');
const bgModal = document.querySelector('.bg-modal');
function popUp(index) {
  const {
    title, datas, description, skills, image,
  } = popupCards[index];
  const skillsHtml = skills.map((s) => `<li class="tag html-tag">${s}</li>`).join('');
  bgModal.innerHTML = `
  <div class = "modal-content">
        <div class="modal-header">
          <h2 class="title">${title}</h3>
          <span class="close-button">+</span>
        </div>
        <ul class = "frame frame-${(index === 0 || index % 2 === 0) ? '1' : '2'}">
          <li class = "list-item author">${datas.author}</li>
          <li class = "list-item role">${datas.role}</li>
          <li class = "list-item year">${datas.year}</li>
        </ul>
        <img src="${image}" alt="first-project" class="snapshotdesktop1"/>
        <div class = "btm-content">
          <div class = "descr-1">
            <p class="primary-text2">
            ${description}
            </p>
          </div>
          <div>
            <ul class="tags">
              ${skillsHtml}
            </ul>
            <div class="buttons">
              <button type ="button" class="live-btn"> See Live <i class="fas fa-external-link-alt"></i></button>
              <button type ="button" class="live-btn"> See Source <i class="fab fa-github"></i></button>
            </div>
          </div>
        </div>
  </div>
  `;
  bgModal.style.display = 'flex';
  bgModal.addEventListener('click', (event) => {
    const { target: { classList } } = event;
    if (classList.contains('bg-modal')) {
      document.querySelector('.bg-modal').style.display = 'none';
    }
  });
  document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'none';
  });
}
btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    popUp(index);
  });
});

const [form] = document.getElementsByClassName('contact-form');
const error = document.querySelector('.error');
const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
form.addEventListener('submit', (e) => {
  const { email } = form.elements;
  const message = [];
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    message.push('Email field has to be in lower case!!');
  } else if (!validEmail.test(email.value)) {
    e.preventDefault();
    message.push('Email provided should be valid!!');
  }
  if (message.length > 0) { error.innerText = message.join(', '); } else {
    form.submit();
  }
});