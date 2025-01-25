const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://personal-portfolio-backend-cvxi.onrender.com/login', { // Backend URL
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (data.success) {
            message.style.color = 'green';
            message.textContent = 'Login successful!';
            setTimeout(() => {
                window.location.href = '/dashboard.html'; // Redirect to dashboard or desired page
            }, 2000); // Delay for the success message
        } else {
            message.style.color = 'red';
            message.textContent = 'Invalid credentials!';
        }
    } catch (error) {
        console.error('Error:', error);
        message.style.color = 'red';
        message.textContent = 'An error occurred. Please try again later.';
    }
});
