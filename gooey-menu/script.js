var gooeyMenuTimeline = anime.timeline()

window.document.addEventListener('DOMContentLoaded', function () {
  var shapeTop = window.document.querySelector('#shape-top')
  gooeyMenuTimeline.add(
    {
      targets: '.shape',
      translateY: 80,
      scaleX: 0.8,
      scaleY: 1.5,
      delay: 200,
      duration: 400,
      easing: 'easeInOutQuad'
    })
  .add(
    {
      targets: '.shape',
      translateY: 80,
      scaleX: 1,
      scaleY: 0.7,
      offset: 600,
      duration: 150,
      easing: 'easeInOutQuad'
    }
  )
  .add(
    {
      targets: '.shape',
      translateY: 80,
      scaleX: 1,
      scaleY: 1,
      offset: 700,
      duration: 100,
      delay: 50,
      easing: 'easeInOutQuad'
    }
  )
  .add(
    {
      targets: '#shape-top',
    })

    var alternate = anime({
      targets: '#shape-top',
      duration: 450,
      easing: 'easeInOutQuad',
      d: shapeTop.getAttribute('pathdata:id'),
      direction: 'alternate'
    })
})
