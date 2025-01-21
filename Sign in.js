document.getElementById('signForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('signUpMessage').textContent = '';

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let valid = true;

    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === "") {
        document.getElementById('email-error').textContent = 'Email cannot be empty. Please fill in your email.';
        valid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Email must include "@" and ".com".';
        valid = false;
    }

    
    if (password === "") {
        document.getElementById('password-error').textContent = 'Password cannot be empty. Please fill in your password.';
        valid = false;
    } else if (password.length < 8) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters.';
        valid = false;
    }

    
    if (valid) {
        document.getElementById('signUpMessage').textContent = 'Sign in successful!';
        document.getElementById('signUpMessage').style.color = 'green';
        
    } else {
        document.getElementById('signUpMessage').textContent = 'Please fix the errors in the form.';
        document.getElementById('signUpMessage').style.color = 'red';
    }
});
