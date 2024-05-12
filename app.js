let menubtn=document.querySelector(".Menubtn");
let slidebar=document.querySelector(".sidebar");
let atags = document.querySelectorAll(".sidebar a");
let btn_value = true;
if(window.innerWidth > 450){
        if(btn_value === true){
            slidebar.classList.add("hide_bar");
        }
}
check = () =>{
    if(btn_value){
        slidebar.classList.remove("hide_bar");
        btn_value = false
    }else{
        slidebar.classList.add("hide_bar");
        btn_value = true;
    }
}
menubtn.addEventListener("click", check)
atags.forEach(
    atags.addEventListener("click", check)
)
