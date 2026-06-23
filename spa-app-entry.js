;(function () {
  var path = location.pathname
  if (path !== '/app' && path.indexOf('/app/') !== 0) {
    return
  }
  if (path === '/app/index.html') {
    return
  }
  if (path.indexOf('/app/assets/') === 0) {
    return
  }
  var last = path.split('/').pop() || ''
  if (last.indexOf('.') !== -1 && last.slice(-5) !== '.html') {
    return
  }

  sessionStorage.setItem('spa-path', path + location.search + location.hash)
  location.replace('/app/index.html' + location.search + location.hash)
})()
