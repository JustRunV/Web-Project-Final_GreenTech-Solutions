document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Message sent successfully!");
        
        });
    }

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("input", function() {
            const query = this.value.toLowerCase();
            const products = document.querySelectorAll(".product");

            products.forEach(product => {
                const productName = product.querySelector("h3").textContent.toLowerCase();
                if (productName.includes(query)) {
                    product.style.display = "";
                } else {
                    product.style.display = "none";
                }
                
            });
        });
    }

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {   
    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for subscribing to our newsletter!");
    });
}

});
