const contactForm =
document.getElementById("contact-form");

if(contactForm){

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name =
        contactForm.querySelector('input[type="text"]').value;

        const email =
        contactForm.querySelector('input[type="email"]').value;

        const phone =
        contactForm.querySelectorAll('input')[2].value;

        const message =
        contactForm.querySelector('textarea').value;

        const subject =
        "Property Inquiry";

        const body =

`Name: ${name}

Email: ${email}

Phone: ${phone}

Message:
${message}`;

        window.location.href =
        `okorochukwuemeka047@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    });

}


const backToTop =
document.getElementById("back-to-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.style.display =
        "block";

    }else{

        backToTop.style.display =
        "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

document.addEventListener("DOMContentLoaded", () => {

    const mainImage =
    document.getElementById("main-image");

    const thumbnails =
    document.querySelectorAll(".thumb");

    thumbnails.forEach(thumb => {

        thumb.addEventListener("click", () => {

            mainImage.src = thumb.src;

            thumbnails.forEach(item => {

                item.classList.remove("active");

            });

            thumb.classList.add("active");

        });

    });

});

document.addEventListener("DOMContentLoaded", () => {

    const searchBtn = document.getElementById("search-btn");
    const propertyType = document.getElementById("property-type");

    if(searchBtn && propertyType){

        searchBtn.addEventListener("click", () => {

            const selectedPage = propertyType.value;

            if(selectedPage !== ""){

                window.location.href = selectedPage;

            }else{

                alert("Please select a property type.");

            }

        });

    }

});