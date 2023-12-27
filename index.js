const sticky = [...document.querySelectorAll('.wrap')]

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < sticky.length; i++){
    transform(sticky[i])
  }
})

function transform(section) {

  const offsetTop = section.parentElement.offsetTop;

  const scroll = section.querySelector('.scroll')

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

  percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;

  scroll.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}