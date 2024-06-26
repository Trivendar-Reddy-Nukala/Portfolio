let menubtn=document.querySelector(".Menubtn");
let slidebar=document.querySelector(".sidebar");
let atags = document.querySelectorAll(".sidebar a");
let btn_value = true;
if(window.innerWidth > 480){
        if(btn_value === true){
            slidebar.classList.add("hide_bar");
        }
}
check = () =>{
    if(btn_value){
        slidebar.classList.remove("hide_bar");
<<<<<<< HEAD
        btn_value = false;
=======
        btn_value = false
>>>>>>> 65bb9ec4b85c467a223b5de4ea3e99d2f3bc208e
    }else{
        slidebar.classList.add("hide_bar");
        btn_value = true;
    }
}
menubtn.addEventListener("click", check)
atags.forEach(tag =>{
    tag.addEventListener("click", check)
});
