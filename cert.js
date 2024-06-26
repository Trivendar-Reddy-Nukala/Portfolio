// cert.js

// Check if the current page should handle image clicks or display an image.
if (window.innerWidth > 480) {

    // Main page script
    if (document.querySelector('.Cert_photos')) {
        let imgs = document.getElementsByClassName("Cert_img");
        Array.from(imgs).forEach(img => {
            img.addEventListener("click", () => {
                let img_link = img.src;
                console.log(img_link);
                localStorage.setItem('imgLink', img_link);
                window.location = "show_img.html";
            });
        });
    }

    // Display page script
    if (document.getElementById('show_img')) {
        window.addEventListener('load', () => {
            let img_link = localStorage.getItem('imgLink');
            if (img_link) {
                document.getElementById('show_img').src = img_link;
            }
        });
    }
}
