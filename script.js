let player = "O";
function restart() {
    window.location = "index.html"
}
let winner = document.getElementById('winner')
let game=true;


function cell0(e) {
    let d = document.getElementById('cell0')
        if(game==true){
            if(d.innerHTML==""){
            if (player == "O") {
                d.innerHTML = "O";
                CheckWin()
                player = "X"
    
            } else {
                d.innerHTML = "X";
                CheckWin()
                player = "O"
    
            }
        }
    
    }
}
function cell1(e) {
    let d = document.getElementById('cell1')
    if(game==true){
        if(d.innerHTML==""){

        if (player == "O") {
            d.innerHTML = "O";
            CheckWin()
            player = "X"

        } else {
            d.innerHTML = "X";
            CheckWin()
            player = "O"

        }
    }
    
    }
}
function cell2() {
    let d = document.getElementById('cell2')
    if(game==true){
        if(d.innerHTML==""){

        if (player == "O") {
            d.innerHTML = "O";
            CheckWin()
            player = "X"
        } else {
            d.innerHTML = "X";
            CheckWin()
            player = "O"
        }
    }
}

}
function cell3() {
    let d = document.getElementById('cell3')
  if(game==true){
    if(d.innerHTML==""){

    if (player == "O") {
        d.innerHTML = "O";
        CheckWin()
        player = "X"
    } else {
        d.innerHTML = "X";
        CheckWin()
        player = "O"
    }
  }
}
}
function cell4() {
    let d = document.getElementById('cell4')
    if(game==true){
        if(d.innerHTML==""){

        if (player == "O") {
            d.innerHTML = "O";
            CheckWin()
            player = "X"
        } else {
            d.innerHTML = "X";
            CheckWin()
            player = "O"
        }
    }
}

}
function cell5() {
    let d = document.getElementById('cell5')
   if(game==true){
    if(d.innerHTML==""){

    if (player == "O") {
        d.innerHTML = "O";
        CheckWin()
        player = "X"
    } else {
        d.innerHTML = "X";
        CheckWin()
        player = "O"
    }
}
   }

}
function cell6() {
    let d = document.getElementById('cell6')
  if(game==true){
    if(d.innerHTML==""){

    if (player == "O") {
        d.innerHTML = "O";
        CheckWin()
        player = "X"
    } else {
        d.innerHTML = "X";
        CheckWin()
        player = "O"
    }
  }
}

}
function cell7() {
    let d = document.getElementById('cell7')
   if(game==true){
    if(d.innerHTML==""){

    if (player == "O") {
        d.innerHTML = "O";
        CheckWin()
        player = "X"
    } else {
        d.innerHTML = "X";
        CheckWin()
        player = "O"
    }
   }
   }
}
function cell8() {
    let d = document.getElementById('cell8')
   if(game==true){
    if(d.innerHTML==""){

    if (player == "O") {
        d.innerHTML = "O";
        CheckWin()
        player = "X"
    } else {
        d.innerHTML = "X";
        CheckWin()
        player = "O"
    }
}
   }

}

function CheckWin() {
    let c0 = document.getElementById('cell0').innerHTML
    let c1 = document.getElementById('cell1').innerHTML
    let c2 = document.getElementById('cell2').innerHTML
    let c3 = document.getElementById('cell3').innerHTML
    let c4 = document.getElementById('cell4').innerHTML
    let c5 = document.getElementById('cell5').innerHTML
    let c6 = document.getElementById('cell6').innerHTML
    let c7 = document.getElementById('cell7').innerHTML
    let c8 = document.getElementById('cell8').innerHTML

    if (c0 == player && c1 == player && c2 == player ||
        c3 == player && c4 == player && c5 == player ||
        c6 == player && c7 == player && c8 == player ||
        c0 == player && c3 == player && c6 == player ||
        c1 == player && c4 == player && c7 == player ||
        c2 == player && c5 == player && c8 == player ||
        c0 == player && c4 == player && c8 == player ||
        c2 == player && c4 == player && c6 == player) 
        {
       winner.innerHTML= player + " " + "is The Winner"
       game=false
    
    }
    if(c0!=""&&c1!=""&&c2!=""&&c3!=""&&c4!=""&&c5!=""&&c6!=""&&c7!=""&&c8!=""){
        winner.innerHTML="Match Drow"
    }
}