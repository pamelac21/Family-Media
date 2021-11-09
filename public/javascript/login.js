async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
     await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((response) => {
        return response.json()
      })
      .then(data => {
        console.log(data)

        
        // if (response.ok) {
        //   console.log(response)
        //   // document.location.replace('/dashboard');
        // } else {
        //   alert(response.statusText);
        // }
      })
  
     
    }
  }
  

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);