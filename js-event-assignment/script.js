// Button click event to change text
const changeTextButton = document.getElementById('changeTextButton');
changeTextButton.addEventListener('click', () => {
    changeTextButton.textContent = "Text has been changed!";
});

// Hover effect on images
const galleryImages = document.querySelectorAll('.gallery-image');
galleryImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Keypress detection
document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        alert('You pressed the Enter key!');
    }
});

// Tab functionality
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        const target = event.target.dataset.target;
        const content = document.getElementById(target);
        
        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
        });
        
        content.classList.add('active');
    });
});

// Form validation
const userForm = document.getElementById('userForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

emailInput.addEventListener('input', () => {
    if (!emailInput.validity.valid) {
        emailFeedback.textContent = "Please enter a valid email.";
    } else {
        emailFeedback.textContent = "";
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
        passwordFeedback.textContent = "Password must be at least 8 characters.";
    } else {
        passwordFeedback.textContent = "";
    }
});

// Secret action for double-click or long press
changeTextButton.addEventListener('dblclick', () => {
    alert("You double-clicked the button!");
});

let pressTimer;
changeTextButton.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        alert("Long press detected!");
    }, 1500);
});
changeTextButton.addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
});
