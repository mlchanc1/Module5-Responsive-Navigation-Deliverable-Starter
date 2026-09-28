const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// Mark the page as JavaScript-enhanced so CSS only hides navigation when scripting is available.
document.documentElement.classList.add("js");

// Reveal the menu button because JavaScript is now available to control the navigation.
button.hidden = false;

// Start the enhanced narrow navigation in a collapsed state while keeping the HTML usable without JavaScript.
list.hidden = true;

// Keep the button's accessibility state consistent with the initially collapsed navigation.
button.setAttribute("aria-expanded", "false");

// Update both the visible menu and aria-expanded together so visual and accessibility states never disagree.
function setMenuState(isOpen) {
    list.hidden = !isOpen;
    button.setAttribute("aria-expanded", String(isOpen));
}

// Toggle the navigation from the native button so mouse, touch, Enter, and Space activation all use standard button behavior.
button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
});

// Let keyboard users quickly close an open menu with Escape and return focus to the control that opened it.
document.addEventListener("keydown", (event) => {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isOpen) {
        setMenuState(false);
        button.focus();
    }
});


