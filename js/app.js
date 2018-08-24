let nav = document.querySelector('.hamburger');
nav.addEventListener('click', function(){
    document.querySelector('.page-header').classList.toggle('nav-opened');
})



function changeStyle(e) {
  const element = e.target;
  if(element.classList.contains('btn')) {
    element.parentElement.parentElement.querySelector('.plate-top').classList.toggle('bg-pink');
  }
}

const cards = document.querySelector('.cards');
cards.addEventListener('mouseover', (e) => { changeStyle(e); });
cards.addEventListener('mouseout', (e) => { changeStyle(e); });
