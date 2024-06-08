let userScore=0;
let compScore=0;


const choises=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepera=document.querySelector("#player-score");
const compScorepera=document.querySelector("#comp-score");
const genCompChoice=()=>{
    let options =["Rock", "Paper","Scissors"];
    const randidx=Math.floor(Math.random()*3);  
    return options[randidx];

}

const showwinner=(userwin ,userchoice,CompChoice)=>{
    if(userwin){
        userScore++;
        userScorepera.innerText=userScore;
        msg.innerText=`You Win! Your ${userchoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepera.innerText=compScore;
        msg.innerText=`Computer Win! ${CompChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
    
}


const playgame=(userchoice)=>{
    console.log("user was choice ",userchoice);
    const CompChoice=genCompChoice();
    console.log("computer was choice ",CompChoice);
    let newsrc="";
    let newsrc1="";
    if (userchoice ==="Rock")
    {
        newsrc="rock.png";
    }
    else if (userchoice ==="Paper")
    {
        newsrc="paper.png";
    }
    else{
        newsrc="scissors.png"
    }

    if (CompChoice ==="Rock")
    {
        newsrc1="rock.png";
    }
    else if (CompChoice ==="Paper")
    {
        newsrc1="paper.png";
    }
    else{
        newsrc1="scissors.png"
    }
    let img=document.querySelector("#img1");
    img.src=newsrc;
    let img1=document.querySelector("#img2");
    img1.src=newsrc1;

    if(userchoice === CompChoice)
    {
        msg.innerText="Game was Draw! Play again ";
        msg.style.backgroundColor = "darkslategrey";
    }
    else{
        let userwin=true;
        if(userchoice ==="Rock"){
            userwin =CompChoice === "Paper" ? false : true;
        }
        else if(userchoice === "Paper"){
            userwin = CompChoice === "Scissors" ? false : true;       
        }
        else {
            userwin = CompChoice === "Rock" ? false :true;
        }
        showwinner(userwin,userchoice,CompChoice);
    }

}


choises.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       /* let newimg= document.createElement("img");
        newimg.innerHTML=`<img src="paper.png" />`;
        document.querySelector("body").prepend(newimg);*/
        
        playgame(userchoice);
    });
});
