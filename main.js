const showNavbar = document.querySelector('.navbar__hamburguer');
const showAnchors = document.querySelector('.navbar__lists');

showNavbar.addEventListener('click', () => {
  showAnchors.classList.toggle('nav-active');
});

const projectsWrapper = document.getElementById('content__wrapper');

const projects = [
  { name: 'NFTCard', link: 'https://github.com/Rampche/NFT-Card-Preview' },
  {
    name: 'tech-survey',
    link: 'https://github.com/Rampche/form-model-html-css',
  },
  { name: 'guess-a-number', link: 'https://github.com/Rampche/guess-a-number' },
  { name: 'pokedex', link: 'https://pokedex-js-grg.netlify.app/' },
  {
    name: 'github-finder',
    link: 'https://rampche.github.io/github-profile-finder/',
  },
];

projects.forEach((element) => {
  const projetcImg = document.createElement('img');
  const imgSrc = `images/${element['name']}.png`;
  const imgAlt = `${element['name']} screenshot`;
  projetcImg.src = imgSrc;
  projetcImg.alt = imgAlt;

  projetcImg.alt = `${projects[element]} screenshot`;
  /*   const Imgtitle = document.createElement('h3');
  Imgtitle.textContent = element.name;
  projectsWrapper.appendChild(Imgtitle); */

  const link = document.createElement('a');
  link.href = element.link;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  link.className = 'portfolio__links';
  projetcImg.className = 'portfolio__images';
  projectsWrapper.appendChild(link);
  link.appendChild(projetcImg);
});
