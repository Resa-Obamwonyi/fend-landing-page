/**
 * Define Global Variables
 *
*/
let navContainer = document.getElementById("navbar__list");
let sectionGroup = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// build the nav
function navBuilder() {
    // for each section in the section group
    for (let i = 0; i < sectionGroup.length; i++) {
        // Create a list element
        let listItem = document.createElement("li");
        // add the menu__link class
        listItem.classList.add("menu__link");
        // Append text specific to each section to the list element
        listItem.innerHTML = sectionGroup[i].dataset.nav;
        // Append list element to ul 
        navContainer.appendChild(listItem);
    }

    // Add Event listener that scrolls to section to Ul container
    navContainer.addEventListener("click", (e) => scrollToClick(e));
}


// check if element is in viewport
function isElementInViewPort(element) {
    // get bounding client
    let boundingClient = element.getBoundingClientRect();
    if (boundingClient.top <= 100 && boundingClient.bottom >= 10) { return true; }
    else { return false; }
}

// Add class active if element is in viewport, else remove the class
function addClassActive(e) {
    e.preventDefault();
    // loop through each section in the section group
    for (let section of sectionGroup) {
        // if section is in view port
        if (isElementInViewPort(section)) {
            // add "active" to section class list
            section.classList.add("active");
            // get li attached to section
            liElement = getNavInView(section);
            // modify css of li to fit active state
            liElement.style.cssText = "background: #333; color: #fff; transition: ease 0.3s all;"
        } else {
            section.classList.remove("active");
            liElement = getNavInView(section);
            // modify css of li to fit inactive state
            liElement.style.cssText = "background: #fff; color: #000; transition: ease 0.3s all;"
        }
    }
}

// Event listener for li
function scrollToClick(e) {
    e.preventDefault();
    for (let section of sectionGroup) {
        // add event listener to section that matches LI textcontent, set scroll behavior to smooth
        if (e.target.textContent === section.dataset.nav) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
}

// Get LI element in view
function getNavInView(element) {
    // loop through the nav list
    for (let elementListItem of navContainer.children) {
        // get a match based on the list and section in view
        if (elementListItem.innerHTML === element.dataset.nav) {
            // return list element in view
            return elementListItem;
        }
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// Call Nav Builder
navBuilder();

// Event listener to set sections as active
window.addEventListener("scroll", (e) => {
    addClassActive(e);
});
