// // gsap 

// page nav 
gsap.to(".nav-circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2
})

// for download cv 
document.getElementById("downloadLink").addEventListener("click", function () {
    // Create an anchor element (a) to initiate the download
    var link = document.createElement("a");
    link.href = "./PradeepGupta.pdf"; // Replace with the actual path to the PDF file
    link.download = "pradeepGupta.pdf"; // Set the downloaded file name
    link.click(); // Programmatically trigger the click event on the anchor element
});
// asing veriabele for avery page and div 
//home page  
const mainDiv = document.querySelector(".main");
// all mini page section 
const pageDiv = document.querySelector(".pages");
// nav bar in side page 
const navLogo = document.querySelector(".nav-logo")
const navBar = document.querySelector(".panel")
// portfolio
const portfolioMainDiv = document.querySelector(".portfolio-main");
//  portfolio page div
const webdiv = document.querySelector(".web-div");
const animetiondiv = document.querySelector(".animetion-div");
const reactDiv = document.querySelector(".react-div");
const gameDiv = document.querySelector(".game-div");
const wordpressDiv = document.querySelector(".Wordpress-div");
// about 
const aboutMainDiv = document.querySelector(".about-main");
// services  
const servicesMainDiv = document.querySelector(".Service-main");
// contact
const contactMainDiv = document.querySelector(".contact-main");


// nav bar in side page js 
const navLogoButton = document.getElementById("nav-logo-btn")
const navCloseButton = document.getElementById("close-nav")
const gotoAboutButton = document.querySelector(".about-button");
const gotoPortfolioButton = document.querySelector(".portfolio-button");
const gotoServiceButton = document.querySelector(".service-button");
const gotoContactButton = document.querySelector(".contact-button");

// open nav bar 
navLogoButton.addEventListener("click", function () {
    navLogo.classList.add("d-non");
    navBar.classList.remove("d-non");
})
// close nav bar 
navCloseButton.addEventListener("click", function () {
    navLogo.classList.remove("d-non");
    navBar.classList.add("d-non");
})

//go to about page 
gotoAboutButton.addEventListener("click", function () {
    closePgeDiv()
    pageDiv.classList.remove("d-non");
    aboutMainDiv.classList.remove("d-non");
})
//go to portfolio page 
gotoPortfolioButton.addEventListener("click", function () {
    closePgeDiv()
    pageDiv.classList.remove("d-non");
    portfolioMainDiv.classList.remove("d-non");
})
//go to service page 
gotoServiceButton.addEventListener("click", function () {
    closePgeDiv()
    pageDiv.classList.remove("d-non");
    servicesMainDiv.classList.remove("d-non");
})
//go to contact page 
gotoContactButton.addEventListener("click", function () {
    closePgeDiv()
    pageDiv.classList.remove("d-non");
    contactMainDiv.classList.remove("d-non");
})




// portfolio section js 
// home page button go to portfolio 
const gotoPortfolio = document.getElementById("goto-portfolio");
// home portfolio section button 
const webButton = document.getElementById("webButton");
const animetionButton = document.getElementById("animetionButton");
const wordpressButton = document.getElementById("wordpressButton");


//  portfolio page button
const pWebButton = document.getElementById("p-webButton");
const pAnimetionButton = document.getElementById("p-animetionButton");
const pReactButton = document.getElementById("p-reactButton");
const pGameButton = document.getElementById("p-gameButton");
const pWordpressButton = document.getElementById("p-wordpressButton");




// home portfolio section js 
webButton.addEventListener("click", function () {
    mainDiv.classList.add("d-non");
    pageDiv.classList.remove("d-non");
    portfolioMainDiv.classList.remove("d-non");
    animetiondiv.classList.remove("d-non")

});
animetionButton.addEventListener("click", function () {
    mainDiv.classList.add("d-non");
    pageDiv.classList.remove("d-non");
    portfolioMainDiv.classList.remove("d-non");
    reactDiv.classList.remove("d-non")

});
wordpressButton.addEventListener("click", function () {
    mainDiv.classList.add("d-non");
    pageDiv.classList.remove("d-non");
    portfolioMainDiv.classList.remove("d-non");
    wordpressDiv.classList.remove("d-non")

});
gotoPortfolio.addEventListener("click", function () {
    mainDiv.classList.add("d-non");
    pageDiv.classList.remove("d-non");
    portfolioMainDiv.classList.remove("d-non");
    animetiondiv.classList.remove("d-non")

});

//  portfolio page js 
pWebButton.addEventListener("click", function () {
    // pWebButton.style.backgroundColor = "#8a8a8a";
    webdiv.classList.remove("d-non")
    animetiondiv.classList.add("d-non");
    reactDiv.classList.add("d-non");
    gameDiv.classList.add("d-non");
    wordpressDiv.classList.add("d-non");
})
pAnimetionButton.addEventListener("click", function () {
    // pAnimetionButton.style.backgroundColor = "#8a8a8a";
    animetiondiv.classList.remove("d-non")
    webdiv.classList.add("d-non");
    reactDiv.classList.add("d-non");
    gameDiv.classList.add("d-non");
    wordpressDiv.classList.add("d-non");
})
pReactButton.addEventListener("click", function () {
    // pReactButton.style.backgroundColor = "#8a8a8a";
    reactDiv.classList.remove("d-non")
    webdiv.classList.add("d-non");
    animetiondiv.classList.add("d-non");
    wordpressDiv.classList.add("d-non");
    gameDiv.classList.add("d-non");
})
pGameButton.addEventListener("click", function () {
    // pGameButton.style.backgroundColor = "#8a8a8a";
    gameDiv.classList.remove("d-non")
    reactDiv.classList.add("d-non")
    webdiv.classList.add("d-non");
    animetiondiv.classList.add("d-non");
    wordpressDiv.classList.add("d-non");
})
pWordpressButton.addEventListener("click", function () {
    // pWordpressButton.style.backgroundColor = "#8a8a8a";
    wordpressDiv.classList.remove("d-non")
    webdiv.classList.add("d-non");
    animetiondiv.classList.add("d-non");
    reactDiv.classList.add("d-non");
    gameDiv.classList.add("d-non");
})

// About section js 
const gotoAbout = document.getElementById("goto-about")

gotoAbout.addEventListener("click", function () {
    mainDiv.classList.add("d-non");
    pageDiv.classList.remove("d-non");
    aboutMainDiv.classList.remove("d-non");
})

const corcesLink = document.getElementById("about-Corces");
const educationLink = document.getElementById("about-education");
const corcesDiv = document.querySelector(".corces");
const educationDiv = document.querySelector(".education");

corcesLink.addEventListener("click", function () {
    corcesLink.classList.add("about-btn-bg")
    educationLink.classList.remove("about-btn-bg")
    corcesDiv.classList.remove("d-non");
    educationDiv.classList.add("d-non");
});

educationLink.addEventListener("click", function () {
    corcesLink.classList.remove("about-btn-bg")
    educationLink.classList.add("about-btn-bg")
    corcesDiv.classList.add("d-non");
    educationDiv.classList.remove("d-non");
});



// services section js 
const gotoServices = document.getElementById("goto-services")
gotoServices.addEventListener("click", function () {
    mainDiv.classList.add("d-non");
    pageDiv.classList.remove("d-non");
    servicesMainDiv.classList.remove("d-non");
})

const serviceSkillsButton = document.getElementById("service-skills");
const serviceDetailButton = document.getElementById("service-detail");
const serviceSkillsDiv = document.querySelector(".services-and-skills")
const serviceDetailDiv = document.querySelector(".service-detail-div")

serviceSkillsButton.addEventListener("click", function () {
    serviceSkillsButton.classList.add("about-btn-bg")
    serviceDetailButton.classList.remove("about-btn-bg")
    serviceSkillsDiv.classList.remove("d-non");
    serviceDetailDiv.classList.add("d-non");
})
serviceDetailButton.addEventListener("click", function () {
    serviceDetailButton.classList.add("about-btn-bg")
    serviceSkillsButton.classList.remove("about-btn-bg")
    serviceDetailDiv.classList.remove("d-non");
    serviceSkillsDiv.classList.add("d-non");
})


// Contact section js 

const gotoContact = document.getElementById("goto-Contact")
gotoContact.addEventListener("click", function () {
    mainDiv.classList.add("d-non");
    pageDiv.classList.remove("d-non");
    contactMainDiv.classList.remove("d-non");

})


// pages

// go to home
const homeButtons = document.querySelectorAll(".home-button");
function goToHomePage() {
    mainDiv.classList.remove("d-non");
    closePgeDiv()
    mainDiv.classList.remove("d-non");

}

homeButtons.forEach(button => {
    button.addEventListener("click", goToHomePage);
});


// close page div 
function closePgeDiv() {
    pageDiv.classList.add("d-non");
    navLogo.classList.remove("d-non");
    navBar.classList.add("d-non");
    portfolioMainDiv.classList.add("d-non");
    aboutMainDiv.classList.add("d-non");
    servicesMainDiv.classList.add("d-non");
    contactMainDiv.classList.add("d-non");
}

// dom editing 
// writing text 
let title = document.querySelector('.raning-text');
let name = "See betutifull and responsive projects "
let index = 1;

const typeWriter = () => {
    let new_title = name.slice(0, index);
    title.innerText = new_title;

    index > name.length ? index = 1 : index++;
    // index++;

    setTimeout(() => typeWriter(), 100)
}

typeWriter();

// pages to contact page 
const pageContactToContactPage = document.querySelectorAll(".pages-to-Contact");
pageContactToContactPage.forEach(button => {
    button.addEventListener("click", function () {
        closePgeDiv();
        pageDiv.classList.remove("d-non");
        contactMainDiv.classList.remove("d-non");
    });
});


