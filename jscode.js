let header = document.querySelector(".header") ;
let squars = document.querySelectorAll(".chois") ;
let turn = "X" ;
let px = localStorage.getItem("x")
let po = localStorage.getItem("o")
px =parseInt(px)
po =parseInt(po)
let againPtn = document.querySelector(".again")
let resetPtn = document.querySelector(".reset")
let pxText = document.querySelector(".px")
let poText = document.querySelector(".po")
pxText.innerHTML += localStorage.getItem("x") ;
poText.innerHTML += localStorage.getItem("o") ;
// local storge seaction 

// reset Ptn 
resetPtn.onclick = function() {
    localStorage.clear() ;
    px =0 ; 
    po =0 ;
    px =parseInt(px)
    po =parseInt(po)
        localStorage.setItem("x" , px); 
    localStorage.setItem("o" , po);
    window.location.reload()
}
// again ptn 
againPtn.onclick = function() {
    window.location.reload()
    px = localStorage.getItem("x")
    po = localStorage.getItem("o")
    px =parseInt(px)
    po =parseInt(po)
    pxText.innerHTML = `player X : ${px}`
    poText.innerHTML = `player o : ${po}`
}
/////////////////////////
for(let i=0 ; i<squars.length ; i++){
    squars[i].addEventListener('click' , function(eve){
        let text = eve.target;
        if(text.innerHTML == "" && turn=="X"){
        text.innerHTML = "X" ;
        turn="O" ;
        header.innerHTML="O"
        cheek()
        }
        else if(text.innerHTML == "" && turn=="O"){
        text.innerHTML = "O" ;
        turn="X" ;
        header.innerHTML="X"
        cheek()
        }
    } )
}

function cheek () {
    
    // horizontal 
    
    if(squars[0].innerHTML == squars[1].innerHTML && squars[1].innerHTML == squars[2].innerHTML && squars[2].innerHTML != ""){
        squars[0].classList.add("winner")
        squars[1].classList.add("winner")
        squars[2].classList.add("winner")
        if(squars[0].innerHTML =="X"){
            px+=1 ;
            localStorage.setItem("x" , px);
            pxText.innerHTML = `player X : ${localStorage.getItem("x")}`
            }
        else if (squars[0].innerHTML =="O"){
            po+=1 ;
            localStorage.setItem("o" , po);
            poText.innerHTML = `player O : ${localStorage.getItem("o")}`
        }
    }
    else if(squars[3].innerHTML == squars[4].innerHTML && squars[4].innerHTML == squars[5].innerHTML && squars[3].innerHTML != ""){
        squars[3].classList.add("winner")
        squars[4].classList.add("winner")
        squars[5].classList.add("winner")
        if(squars[3].innerHTML =="X"){
            px+=1 ;
            localStorage.setItem("x" , px);
            pxText.innerHTML = `player X : ${localStorage.getItem("x")}`
        }
        else if (squars[3].innerHTML =="O"){
            po+=1 ;
            localStorage.setItem("o" , po);
            poText.innerHTML = `player O : ${localStorage.getItem("o")}`
        }
    }
    else if(squars[6].innerHTML == squars[7].innerHTML && squars[7].innerHTML == squars[8].innerHTML && squars[8].innerHTML != ""){
        squars[6].classList.add("winner")
        squars[7].classList.add("winner")
        squars[8].classList.add("winner")
        if(squars[6].innerHTML =="X"){
            px+=1 ;
            localStorage.setItem("x" , px);
            pxText.innerHTML = `player X : ${localStorage.getItem("x")}`
        }
        else if (squars[6].innerHTML =="O"){
            po+=1 ;
            localStorage.setItem("o" , po);
            poText.innerHTML = `player O : ${localStorage.getItem("o")}`
        }
    }

    // virtical 

    else if(squars[0].innerHTML == squars[3].innerHTML && squars[3].innerHTML == squars[6].innerHTML && squars[6].innerHTML != ""){
        squars[0].classList.add("winner")
        squars[3].classList.add("winner")
        squars[6].classList.add("winner")
        if(squars[0].innerHTML =="X"){
            px+=1 ;
            localStorage.setItem("x" , px);
            pxText.innerHTML = `player X : ${localStorage.getItem("x")}`
        }
        else if (squars[0].innerHTML =="O"){
            po+=1 ;
            localStorage.setItem("o" , po);
            poText.innerHTML = `player O : ${localStorage.getItem("o")}`
        }
    }
    else if(squars[1].innerHTML == squars[4].innerHTML && squars[4].innerHTML == squars[7].innerHTML && squars[7].innerHTML != ""){
        squars[1].classList.add("winner")
        squars[4].classList.add("winner")
        squars[7].classList.add("winner")
        if(squars[1].innerHTML =="X"){
            px+=1 ;
            localStorage.setItem("x" , px);
            pxText.innerHTML = `player X : ${localStorage.getItem("x")}`
        }
        else if (squars[1].innerHTML =="O"){
            po+=1 ;
            localStorage.setItem("o" , po);
            poText.innerHTML = `player O : ${localStorage.getItem("o")}`
        }
    }
    else if(squars[2].innerHTML == squars[5].innerHTML && squars[5].innerHTML == squars[8].innerHTML && squars[8].innerHTML != ""){
        squars[2].classList.add("winner")
        squars[5].classList.add("winner")
        squars[8].classList.add("winner")
        if(squars[2].innerHTML =="X"){
            px+=1 ;
            localStorage.setItem("x" , px);
            pxText.innerHTML = `player X : ${localStorage.getItem("x")}`
        }
        else if (squars[2].innerHTML =="O"){
            po+=1 ;
            localStorage.setItem("o" , po);
            poText.innerHTML = `player O : ${localStorage.getItem("o")}`
        }
    }
    
    //cross 
    
    else if(squars[0].innerHTML == squars[4].innerHTML && squars[4].innerHTML == squars[8].innerHTML && squars[8].innerHTML != ""){
        squars[0].classList.add("winner")
        squars[4].classList.add("winner")
        squars[8].classList.add("winner")
        if(squars[0].innerHTML =="X"){
            px+=1 ;
            localStorage.setItem("x" , px);
            pxText.innerHTML = `player X : ${localStorage.getItem("x")}`
        }
        else if (squars[0].innerHTML =="O"){
            po+=1 ;
            localStorage.setItem("o" , po);
            poText.innerHTML = `player O : ${localStorage.getItem("o")}`
        }
    }
    else if(squars[2].innerHTML == squars[4].innerHTML && squars[4].innerHTML == squars[6].innerHTML && squars[6].innerHTML != ""){
        squars[2].classList.add("winner")
        squars[4].classList.add("winner")
        squars[6].classList.add("winner")
        if(squars[2].innerHTML =="X"){
            px+=1 ;
            localStorage.setItem("x" , px);
            pxText.innerHTML = `player X : ${localStorage.getItem("x")}`
        }
        else if (squars[2].innerHTML =="O"){
            po+=1 ;
            localStorage.setItem("o" , po);
            poText.innerHTML = `player O : ${localStorage.getItem("o")}`
        }
    }
}