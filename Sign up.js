
document.getElementById("signupForm").addEventListener('submit', function (e) {
  e.preventDefault(); 

  
  document.getElementById('first-name-error').textContent = '';
  document.getElementById('last-name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('password-error').textContent = '';
  document.getElementById('signUpMessage').textContent = '';

  
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  let valid = true;

  
  const firstNameRegex = /^[A-Za-z]{3,15}$/;
  if (!firstNameRegex.test(firstName)) {
      document.getElementById('first-name-error').textContent = 'First name must be 3-15 characters and contain no numbers or special characters.';
      valid = false;
  }

  
  const lastNameRegex = /^[A-Za-z]{1,15}$/;
  if (!lastNameRegex.test(lastName)) {
      document.getElementById('last-name-error').textContent = 'Last name must be up to 15 characters and contain no numbers or special characters.';
      valid = false;
  }

  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
      document.getElementById('email-error').textContent = 'Email must include "@" and ".com".';
      valid = false;
  }

  
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(password)) {
      document.getElementById('password-error').textContent = 'Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.';
      valid = false;
  }

  
  if (valid) {
      document.getElementById('signUpMessage').textContent = 'Form submitted successfully!';
      document.getElementById('signUpMessage').style.color = 'green';
      
  } else {
      document.getElementById('signUpMessage').textContent = 'Please fix the errors in the form.';
      document.getElementById('signUpMessage').style.color = 'red';
  }
});
