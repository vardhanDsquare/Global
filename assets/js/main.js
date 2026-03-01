// Simple Mobile Menu Toggle (Future Ready)
document.addEventListener("DOMContentLoaded", function () {
  console.log("Vardhan D Square Enterprise Website Loaded");
});

// Load Google Analytics Script Dynamically
(function() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-7HNWVC2EKD";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-7HNWVC2EKD');
})();