const mobile_nav = document.querySelector(".mobile_icon_btn");
const nav_header = document.querySelector(".active");
function togglenav() {
    nav_header.classList.toggle("active");
}
mobile_nav.addEventListener("click", togglenav);

// downlod cv 
function downloadResume() {
    var fileUrl = './PradeepGupta.pdf';
    var fileName = 'PradeepGupta.pdf';

    var link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
}

