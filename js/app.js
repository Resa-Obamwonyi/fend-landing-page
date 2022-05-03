
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
let navContainer = document.getElementById("navbar__list");
let sectionGroup = document.getElementsByTagName("section");

console.log(sectionGroup);
// let sectionOne = document.getElementById("section1");
// let sectionTwo = document.getElementById("section2");
// let sectionThree = document.getElementById("section3");
// let sectionFour = document.getElementById("section4");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
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
}


// Add class 'active' to section when near top of viewport
function addClassActive(){
    // for each section in the section group
    for(let i=0; i<sectionGroup.length; i++){
        
    }
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
navBuilder(); 

// Scroll to section on link click

// Set sections as active

