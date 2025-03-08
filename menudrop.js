const menuButton1 = document.getElementById('menuButton1');
const menuButton2 = document.getElementById('menuButton2');

const menuBox1 = document.getElementById('menuBox1');
const menuBox2 = document.getElementById('menuBox2');

// Show the menu on mouse hover
menuButton1.addEventListener('mouseover', () => {
    menuBox1.style.display = 'block';
});

// Hide the menu when the mouse leaves the box
menuBox1.addEventListener('mouseleave', () => {
    menuBox1.style.display = 'none';
});

// Optional: Hide the menu if the button is not hovered
menuButton1.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!menuBox1.matches(':hover')) {
            menuBox1.style.display = 'none';
        }
    }, 200);
});



menuButton2.addEventListener('mouseover', () => {
    menuBox2.style.display = 'block';
});

// Hide the menu when the mouse leaves the box
menuBox2.addEventListener('mouseleave', () => {
    menuBox2.style.display = 'none';
});

// Optional: Hide the menu if the button is not hovered
menuButton2.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!menuBox2.matches(':hover')) {
            menuBox2.style.display = 'none';
        }
    }, 200);
});