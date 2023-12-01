//-----------------Nav Bar Dropdown--------------------------
//setting variables
const dropdownBtn = document.querySelector(".menu-icon");
const menuLinks = document.querySelector(".menu");

//add click event listener to dropdownBtn and have it show menu items
dropdownBtn.addEventListener("click", toggleMenuItems);

//function used to toggle menu items when dropdownBtn is clicked
function toggleMenuItems() {
    
    if (menuLinks.style.display === "none") {
        menuLinks.style.display = "block";
    } else{
        menuLinks.style.display = "none";
    }
}


// ---------------Work Experience Buttons--------------------

//Setting variables 
const siemensInfo = document.querySelector(".siemens-details");
const siemensBtn = document.querySelector(".siemens-btn");
const kukaInfo = document.querySelector(".kuka-details");
const kukaBtn = document.querySelector(".kuka-btn");

//add event listeners to company buttons and perform given function
siemensBtn.addEventListener("click", showSiemensBtn);
kukaBtn.addEventListener("click", showKukaBtn);

//functions used in event listeners to toggle between information being shown based on company btn that was clicked
function showSiemensBtn() {
    siemensInfo.classList.remove("hidden");
    kukaInfo.classList.add("hidden");

}

function showKukaBtn() {
    kukaInfo.classList.remove("hidden");
    siemensInfo.classList.add("hidden");
}