document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded");

    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.for
