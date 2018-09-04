var elem = document.querySelector("#moving-tracks .moving-track")
var bBox = elem.getBBox();
console.log(bBox)
var loop = anime({
  targets: '#moving-tracks .moving-track',
  translateX: (1 - 0.5) * 215,
  translateY: -190,
  scaleX: 0.63,
  loop: true,
  easing: 'linear',
  elasticity: 0,
  duration: 500
})

var loop2 = anime({
  targets: '#reflection',
  translateX: 270,
  easing: 'easeInOutQuint',
  loop: true,
  elasticity: 0,
  duration: 1500,
  delay: 200
})
