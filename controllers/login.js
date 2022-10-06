async function basiclogin (email, password) {
    const response = await zlFetch.post(loginEndpoint, {
      auth: {
        username: email,
        password: password
      },
      body: { /*...*/ }
    })
  }

  async function basiclogin (email, password) {
    const response = await zlFetch.post(/*...*/)
    const { token } = response.body
    
    localStorage.setItem('token', token)
  }

  async function isLoggedIn () {
    const token = store.get('token')
    if (!token) return false
  }

  async function autoRedirect () {
    const validLogin = await isLoggedIn()
    if (!validLogin && location.pathname !== '/login/') redirect('/login')
    if (validLogin && location.pathname === '/login/') redirect('/')
  }

  async function isLoggedIn () {
    // ...
    // Checks validity of token
    const response = await zlFetch.post(loginEndpoint, {
      auth: token,
      body: { course: 'learn-javascript' }
    })
  }

  async function isLoggedIn () {
    // ...
    // Saves token into localStorage again
    const { token } = response.body
    localStorage.setItem('token', token)
  
    return true
  }

// Code Source
//https://zellwk.com/blog/frontend-login-system/