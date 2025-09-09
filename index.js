let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const para=document.querySelector("#msg");
const userparascore=document.querySelector("#user-score");
const compparascore=document.querySelector("#comp-score");

const genratecomp=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const drawgame=()=>{
    para.innerText="Game is Draw,Play again";
    para.style.background="linear-gradient(135deg, #20002c, #6f0000)";
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userparascore.innerText=userscore;
        para.innerText="You Win!"+"   "+"Your"+" "+userchoice+" "+"beats"+" "+compchoice;
        para.style.background=" linear-gradient(135deg, #11998e, #38ef7d)";
    }
    else{
        compscore++;
        compparascore.innerText=compscore;
        para.innerText= "You lose!"+"   "+compchoice+" "+"beats"+" "+"your"+" "+userchoice;
        para.style.background="linear-gradient(135deg, #93291e, #ed213a)";
    }
    
}

const palygame=(userchoice)=>{
    console.log("user choice is ="+userchoice);
    const compchoice=genratecomp();
    console.log("comp choice is ="+compchoice);

    if(userchoice===compchoice)
    {
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
                  userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        palygame(userchoice);
    })

})