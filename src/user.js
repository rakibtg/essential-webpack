const fetchUser = name => new Promise((res, rej) => {
  setTimeout(() => {
    res()
  }, 5000)
})

module.exports = fetchUser