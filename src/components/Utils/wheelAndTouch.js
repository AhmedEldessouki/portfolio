import React from 'react'

function disableScroll() {
  const scrollTop = window.pageYOffset
  const scrollLeft = window.pageXOffset

  // if any scroll is attempted, set this to the current value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop)
  }
}

function enableScroll() {
  window.onscroll = function () {}
}

function touch() {
  return <div>asd</div>
}

export {enableScroll, disableScroll, touch}
