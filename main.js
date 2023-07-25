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

const mainDiv = document.querySelector(".main");
const pageDiv = document.querySelector(".pages");

// hero main div
const heroMainDiv = document.querySelector(".hero-main")

// portfolio section js 

const portfolioMainDiv = document.querySelector(".portfolio-main");
// home portfolio section button 
const webButton = document.getElementById("webButton");
const animetionButton = document.getElementById("animetionButton");
const wordpressButton = document.getElementById("wordpressButton");
const gotoPortfolio = document.querySelector(".goto-portfolio");

//  portfolio page button
const pWebButton = document.getElementById("p-webButton");
const pAnimetionButton = document.getElementById("p-animetionButton");
const pReactButton = document.getElementById("p-reactButton");
const pWordpressButton = document.getElementById("p-wordpressButton");

//  portfolio page div
const webdiv = document.querySelector(".web-div");
const animetiondiv = document.querySelector(".animetion-div");
const reactDiv = document.querySelector(".react-div");
const wordpressDiv = document.querySelector(".Wordpress-div");


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
    webdiv.classList.remove("d-non")
    animetiondiv.classList.add("d-non");
    reactDiv.classList.add("d-non");
    wordpressDiv.classList.add("d-non");
})
pAnimetionButton.addEventListener("click", function () {
    animetiondiv.classList.remove("d-non")
    webdiv.classList.add("d-non");
    reactDiv.classList.add("d-non");
    wordpressDiv.classList.add("d-non");
})
pReactButton.addEventListener("click", function () {
    reactDiv.classList.remove("d-non")
    webdiv.classList.add("d-non");
    animetiondiv.classList.add("d-non");
    wordpressDiv.classList.add("d-non");
})
pWordpressButton.addEventListener("click", function () {
    wordpressDiv.classList.remove("d-non")
    webdiv.classList.add("d-non");
    animetiondiv.classList.add("d-non");
    reactDiv.classList.add("d-non");
})

// About section js 
const aboutMainDiv = document.querySelector(".about-main")
const gotoAbout = document.getElementById("goto-about")

gotoAbout.addEventListener("click", function () {
    mainDiv.classList.add("d-non");
    pageDiv.classList.remove("d-non");
    aboutMainDiv.classList.remove("d-non");
})

// services section js 
const servicesMainDiv = document.querySelector(".Service-main")
const gotoServices = document.getElementById("goto-services")
gotoServices.addEventListener("click", function () {
    mainDiv.classList.add("d-non");
    pageDiv.classList.remove("d-non");
    servicesMainDiv.classList.remove("d-non");
})

// Contact section js 
const contactMainDiv = document.querySelector(".contact-main")
const gotoContact = document.getElementById("goto-Contact")
gotoContact.addEventListener("click", function () {
    mainDiv.classList.add("d-non")
    pageDiv.classList.remove("d-non")
    contactMainDiv.classList.remove("d-non")

})


// pages

// go to home 
const gotoHome = document.getElementById("goto-home")
gotoHome.addEventListener("click", function () {
    pageDiv.classList.add("d-non");
    mainDiv.classList.remove("d-non");
    heroMainDiv.classList.add("d-non");
    portfolioMainDiv.classList.add("d-non");
    aboutMainDiv.classList.add("d-non");
    servicesMainDiv.classList.add("d-non");
    contactMainDiv.classList.add("d-non");

})