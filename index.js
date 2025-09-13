document.addEventListener("DOMContentLoaded", ()=>{

let string="";

let buttons=document.getElementsByClassName("number_button");



Array.from(buttons).forEach((btn)=>{

    btn.addEventListener('click', (e)=>{

        if(e.target.innerHTML=='='){
            string=eval(string);
            document.getElementById("showAnswer").value=string;
        }
 else if (e.target.innerHTML=="AC") {
            
    string=" "
            document.getElementById("showAnswer").value=string;

        } 
else if(e.target.innerHTML=="X²"){

    const squar=claculatesquare(string);
    string=squar;
 document.getElementById("showAnswer").value=squar;

}    
else if(e.target.innerHTML=="X³"){

     const cube=claculateCube(string);
    string=cube;
 document.getElementById("showAnswer").value=cube;

}
        else{
console.log(e.target);
        string= string+ e.target.innerHTML;
        document.getElementById("showAnswer").value=string;

        }


        function claculatesquare(string){
return string*string;

        }
           function claculateCube(string){
return string*string*string;

        }
        
    })
}
)




})