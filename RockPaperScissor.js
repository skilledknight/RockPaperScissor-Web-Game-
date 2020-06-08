const score=document.querySelector(".score");
const message=document.querySelector(".message");
const buttons=document.querySelectorAll("button");

let winner = [0,0];
for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",playGame);
}

function playGame(e){
    
    let playerSelection =e.target.innerText;
    let computerSelection=Math.random();
    
    if(computerSelection < 0.34){
        computerSelection = "Rock";
    
    } else if(computerSelection <= 0.67){
        
        computerSelection = "Paper";
    } else {
        
        computerSelection = "Scissor";
    }
    
    let result = checkWinner(playerSelection,computerSelection);
     
     if(result=="Player") {
         
         result+= " Wins!";
         winner[0]++;
         
     } else if(result=="Computer"){
         
         result+= " Wins!"
         winner[1]++;
         
     }  else if(result=="Draw"){
         
         result+= ", so it's a tie "
     }
    
       function checkWinner(pl,co){
           
           if(pl==co){
               
               return "Draw";
           
           } if(pl==="Rock"){
               if(co==="Paper"){
                 
                   return "Computer";
               } 
           }      else {
                  return "Player";
           }  if(pl==="Paper"){
               if(co==="Scissor"){
                   
                   return "Computer";
                   
               } 
            }  else {
                return "Player";
            }  if(pl==="Scissor"){
                if(co==="Rock") {
                    return "Computer";
                }
            } else {
                 return "Player";
            }
       }
    score.innerHTML= "<b>" + "Player" + "[" + winner[0] + "]" + " " + "Computer" + "[" + winner[1] + "]" + "</b>" + "<br>" + "<br>";
    
    message.innerHTML="Player Selected" + " " + playerSelection + "<br>" + "Computer Selected" + " " + computerSelection+ "<br>"+ "<br>";
    
    message.innerHTML+="<b>" + playerSelection + " " + "Vs" + " " + computerSelection + "</b>" + "<br>" + "<br>" + "<b>" + result + "</b>"; 
    
}