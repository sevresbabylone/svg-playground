var gooeyMenuTimeline = anime.timeline()

window.document.addEventListener('DOMContentLoaded', function () {
  var shapeTop = window.document.querySelector('#shape-top')
  var shape = document.querySelector('.shape')
  var openLines = document.querySelectorAll('.open .line')
  var closeLines = document.querySelectorAll('.close .line')
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

  shape.addEventListener('click', function () {
    if (shape.classList.contains('is-opened')) {
      shape.classList.remove('is-opened')
      Array.prototype.forEach.call(closeLines, function (line, index) {
        if (index === 1) {
          window.setTimeout(function () {
            line.classList.remove('close-in-2')
            line.classList.add('close-out-2')
          }, 200)
        } else {
          line.classList.remove('close-in')
          line.classList.add('close-out')
        }
      })
      Array.prototype.forEach.call(openLines, function (line, index) {
        line.classList.remove('open-out')
        line.classList.remove('open-out-2')
        line.classList.add('open-in')
      })
    } else {
      shape.classList.add('is-opened')
      Array.prototype.forEach.call(openLines, function (line, index) {
        line.classList.remove('open-in')

        if (index === 1) {
          line.classList.add('open-out-2')
        } else {
          line.classList.add('open-out')
        }
      })
      Array.prototype.forEach.call(closeLines, function (line, index) {
        if (index === 1) {
          line.classList.remove('close-out-2')
          line.classList.add('close-in-2')
        } else {
          line.classList.remove('close-out')
          line.classList.add('close-in')
        }
      })
    }
  })

  var alternate = anime({
    targets: '#shape-top',
    duration: 450,
    easing: 'easeInOutQuad',
    d: shapeTop.getAttribute('pathdata:id'),
    direction: 'alternate'
  })
})
