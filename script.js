// Predefined credentials (for you and your girlfriend)
const validCredentials = {
    username: "airuu",  // Replace with your username
    password: "bosskosimarc12345"   // Replace with your password
};

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if entered credentials match
    if (username === validCredentials.username && password === validCredentials.password) {
        // Set a flag in localStorage to indicate the user is logged in
        localStorage.setItem('isLoggedIn', 'true');

        // Play the background music (if not already playing)
        const music = document.getElementById("background-music");
        music.play(); // Start the music

        // Redirect after successful login (with a delay)
        setTimeout(function() {
            window.location.href = "index.html";  // Redirect to homepage after a short delay
        }, 2000);  // 2 seconds delay to allow music to play for a bit
    } else {
        document.getElementById("error-message").innerText = "Invalid! Try again pookie xD";
    }
});

// Ensure music is playing when the user navigates to the homepage or other pages
window.addEventListener('load', function() {
    const music = document.getElementById("background-music");

    // Check if the user is logged in using localStorage
    if (localStorage.getItem('isLoggedIn') === 'true') {
        music.play();
    } else {
        music.pause();
    }
});

// Function to play sound when the button is clicked
function playSound() {
    const buttonSound = new Audio('assets/sounds/buttoneffect.mp3');
    buttonSound.play();
}

// Add click sound effect to all arcade buttons
document.querySelectorAll('.arcade-button').forEach(button => {
    button.addEventListener('click', playSound);
});
