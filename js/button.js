const buttons = document.querySelectorAll('.button');
const highlight = document.querySelector('.buttonSection-light');

// Function to update highlight position, button colors, and background color
function updateHighlight(button) {
    const buttonRect = button.getBoundingClientRect();
    const containerRect = button.parentElement.getBoundingClientRect();

    highlight.style.width = `${buttonRect.width}px`;
    highlight.style.transform = `translateX(${buttonRect.left - containerRect.left}px)`;

    // Reset the highlight background style
    highlight.style.background = ''; // Clear any previous background styles

    // Set the highlight color based on the button ID
    switch (button.id) {
        case 'facebook':
            highlight.style.backgroundColor = '#3b5998'; 
            break;
        case 'instagram':
            highlight.style.background = 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'; 
            break;
        case 'linkedin':
            highlight.style.backgroundColor = '#0077b5'; 
            break;
        case 'behance':
            highlight.style.backgroundColor = '#1769ff'; 
            break;
        case 'youtube':
            highlight.style.backgroundColor = '#ff0000'; 
            break;
        default:
            highlight.style.backgroundColor = '#b31b1b'; // Default color
    }

    // Update button colors
    buttons.forEach(btn => {
        if (btn === button) {
            btn.style.color = '#ffffff'; // White for the active/hovered button
        } else {
            // color based on whether the button is hovered or not
            btn.style.color = btn.matches(':hover') ? '#ffffff' : '#b31b1b'; // Maintain white if hovered
        }
    });
}

// Move the highlight to the hovered button
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        updateHighlight(button);
    });

    button.addEventListener('mouseleave', () => {
        // Update the color only if the button is not active
        if (!button.classList.contains('active')) {
            button.style.color = 'white'; // Revert color when not active
        }
    });

    button.addEventListener('click', () => {
        const activeButton = document.querySelector('.button.active');
        if (activeButton) {
            activeButton.classList.remove('active');
            activeButton.style.color = '#b31b1b'; // Reset color of previously active button
        }
        button.classList.add('active');
        updateHighlight(button); // Ensure highlight moves to the clicked button
    });
});

// Initialize the highlight position on page load
document.addEventListener('DOMContentLoaded', () => {
    const activeButton = document.querySelector('.button.active');
    if (activeButton) {
        updateHighlight(activeButton);
    }
});

function toggleTheme() {
    const root = document.documentElement;
    if (root.classList.contains('dark-theme')) {
        root.classList.remove('dark-theme');
    } else {
        root.classList.add('dark-theme');
    }
}



const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    console.log("CALLLED")
	document.body.classList.toggle('dark');
    toggleTheme()
});
