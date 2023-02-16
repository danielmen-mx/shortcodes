let previousTitle = document.title

window.addEventListener('blur', () => {
  previousTitle = document.title
  document.title = 'Come back please'
})

window.addEventListener('focus', () => {
  document.title = previousTitle
})