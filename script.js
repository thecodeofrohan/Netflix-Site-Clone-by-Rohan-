let infoQues1 = document.querySelector("#ques1");
let infoQues2 = document.querySelector("#ques2");
let infoQues3 = document.querySelector("#ques3");
let infoQues4 = document.querySelector("#ques4");
let infoQues5 = document.querySelector("#ques5");
let infoQues6 = document.querySelector("#ques6");


let infoarr = [];
infoarr.push(infoQues1);
infoarr.push(infoQues2);
infoarr.push(infoQues3);
infoarr.push(infoQues4);
infoarr.push(infoQues5);
infoarr.push(infoQues6);

let info1 = document.querySelector(".info1");
let info2 = document.querySelector(".info2");
let info3 = document.querySelector(".info3");
let info4 = document.querySelector(".info4");
let info5 = document.querySelector(".info5");
let info6 = document.querySelector(".info6");

let infoarr2 = [];
infoarr2.push(info1);
infoarr2.push(info2);
infoarr2.push(info3);
infoarr2.push(info4);
infoarr2.push(info5);
infoarr2.push(info6);



infoarr.forEach(() => {
    for(let i=0; i<infoarr.length; i++){
        let display = "none";
        infoarr[i].addEventListener("click", ()=>{
            if(display ==="none"){
                display = "flex";
                infoarr2[i].classList.add("infoflex");
                infoarr2[i].classList.remove("infonone");                
            }else{
                display = "none";
                infoarr2[i].classList.add("infonone");                
                infoarr2[i].classList.remove("infoflex");
            }

        });
    }; 
});