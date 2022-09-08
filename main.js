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
    datas: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
  },
  {
    image: 'images/snapshot4.png',
    title: 'Multi-Post Stories',
    datas: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    image: 'images/snapshot1.png',
    title: 'Facebook 360',
    datas: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    image: 'images/snapshot2.png',
    title: 'Uber Navigation',
    datas: ['Uber', 'Lead Developer', '2018'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    skills: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
];