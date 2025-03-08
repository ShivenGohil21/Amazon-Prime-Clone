document.getElementById('switchToSignup').addEventListener('click', () => {
    document.querySelector('.login-container').classList.add('hidden');
    document.querySelector('.signup-container').classList.remove('hidden');
});

document.getElementById('switchToLogin').addEventListener('click', () => {
    document.querySelector('.signup-container').classList.add('hidden');
    document.querySelector('.login-container').classList.remove('hidden');
});

// Show/hide password functionality
document.getElementById('loginShowPassword').addEventListener('change', (event) => {
    document.getElementById('loginPassword').type = event.target.checked ? 'text' : 'password';
});

document.getElementById('signupShowPassword').addEventListener('change', (event) => {
    document.getElementById('signupPassword').type = event.target.checked ? 'text' : 'password';
});

// Validation and Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Validation using regex patterns
    if (/^[a-zA-Z0-9]{5,}$/.test(username) && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
        alert('Login successful'); // Show alert
        // Redirect to main page after alert is acknowledged
        setTimeout(() => {
            window.location.href = "/full_new_Project/Project/Main-Page.html"; // Use relative URL
        }, 100); // Small delay to ensure alert is acknowledged
    } else {
        alert('Invalid username or password format');
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (/^[a-zA-Z0-9]{5,}$/.test(username) && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
        alert('Signup successful');
    } else {
        alert('Invalid input in signup form');
    }
}); 