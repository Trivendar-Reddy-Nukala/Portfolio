
document.addEventListener('DOMContentLoaded', function() {
    let menubtn = document.querySelector(".Menubtn");
    let slidebar = document.querySelector(".sidebar");
    let atags = document.querySelectorAll(".sidebar a");
    let btn_value = true;

    if (window.innerWidth > 480) {
        if (btn_value === true) {
            slidebar.classList.add("hide_bar");
        }
    }

    const toggleSidebar = () => {
        if (btn_value) {
            slidebar.classList.remove("hide_bar");
            slidebar.classList.add("show");
            btn_value = false;
        } else {
            slidebar.classList.add("hide_bar");
            slidebar.classList.remove("show");
            btn_value = true;
        }
    };

    menubtn.addEventListener("click", toggleSidebar);

    atags.forEach(tag => {
        tag.addEventListener("click", () => {
            slidebar.classList.add("hide_bar");
            slidebar.classList.remove("show");
            btn_value = true;
        });
    });
});
