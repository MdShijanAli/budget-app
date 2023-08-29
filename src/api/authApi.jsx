export const setAuthToken = user => {
  const currentUser = {
      email: user.email,
  }


  // save user database and get token
  fetch(`https://budget-app-server.vercel.app/user/${user?.email}`, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(currentUser)
  })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          localStorage.setItem('budgetAppToken', data.token)
      })
}