const resumeButton = document.getElementById("resume");
const techArea = document.getElementById("techstack");
const projectArea = document.getElementById("projects")


//download my resume
resumeButton.addEventListener("click", () => {

    const link = document.createElement('a');
    const resumePath = "assests/resumegithub.pdf";
    link.href = resumePath;
    link.download = "resumegithub.pdf"
    link.click();
})


// Function to scroll to the specified element
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
}

// Event listener for the featured work link
document.getElementById("featured").addEventListener('click', () => {
    scrollToElement('featured');
});

document.getElementById("techstack").addEventListener('click', () => {
    scrollToElement('techstack');
});

document.getElementById("contact").addEventListener('click', () => {
    scrollToElement('contact');
});

document.getElementById("info").addEventListener('click', () => {
    scrollToElement('iaboutme');
});

// Event listeners for the links in the navigation bar
const navLinks = document.querySelectorAll('nav .links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const elementId = link.getAttribute('href').slice(1);
        scrollToElement(elementId);
    });
});
