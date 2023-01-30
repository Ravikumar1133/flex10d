const list_head = document.querySelectorAll(".list_head-flex");

list_head.forEach(list_head =>{
    list_head.addEventListener("click",event=>{
        list_head.classList.toggle("active")
        const iteambody = list_head.nextElementSibling;
        if(list_head.classList.contains("active")){
            iteambody.style.maxHeight =  iteambody.scrollHeight + "px"; 
        }else{
            iteambody.style.maxHeight = 0;
        }
    });
});
/*
const text = document.querySelector(".cnt1_head_p4");
 const textload = ()=>{
    setTimeout(()=>{
         text.textContent = "why work with us?";
    },3000)
 }
 textload();*/