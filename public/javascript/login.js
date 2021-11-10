async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
      const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
              username,
              password
          }),
          headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
          document.location.replace('/');
      } else {
          alert(response.statusText);
      }
  }
}

// document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

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
      }).then(res => res.json())
      .then((data) => {
          console.log(data)
      })

    //   if (response.ok) {
    //     //   document.location.replace('/');
    //     console.log(response)
    //   } else {
    //       alert(response.statusText);
    //   }
  }
}

document.querySelector('#login-form').addEventListener('submit', loginFormHandler); 