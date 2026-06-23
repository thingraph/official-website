;(function () {
  var redirect = sessionStorage.getItem('spa-path')
  if (!redirect) {
    return
  }
  sessionStorage.removeItem('spa-path')
  var current = location.pathname + location.search + location.hash
  if (redirect === current) {
    return
  }
  history.replaceState(null, '', redirect)
})()
