var gameOver = false;
var currentPlayer = 'X';
var totalMove = 0;

function placeMarker(spotId){
    if (!gameOver){
    var spot = document.getElementsByClassName(spotId);
    var turn = document.getElementsByClassName('player');
   if(totalMove == 1 || totalMove == 3 || totalMove == 5 || totalMove == 7 || totalMove == 9 ){
       if(spot[0].innerHTML == ''){
        spot[0].innerHTML = "O";
        totalMove++;
        turn[0].innerHTML = "Player X's turn"
       }
   }
   else if(totalMove == 0 || totalMove == 2 || totalMove == 4 || totalMove == 6 || totalMove == 8 ){
       if(spot[0].innerHTML == ''){
        spot[0].innerHTML = "X";
        totalMove++;
        turn[0].innerHTML = "Player O's turn"
       } 
  }
}
}
// For Reset button
function buttonreset(){
    var buttonreset = document.getElementById('reset');
    var player = document.getElementsByClassName('player');
    var s1 = document.getElementsByClassName('area1');
    var s2 = document.getElementsByClassName('area2');
    var s3 = document.getElementsByClassName('area3');
    var s4 = document.getElementsByClassName('area4');
    var s5 = document.getElementsByClassName('area5');
    var s6 = document.getElementsByClassName('area6');
    var s7 = document.getElementsByClassName('area7');
    var s8 = document.getElementsByClassName('area8');
    var s9 = document.getElementsByClassName('area9');

    s1[0].innerHTML = '';
    s2[0].innerHTML = '';
    s3[0].innerHTML = '';
    s4[0].innerHTML = '';
    s5[0].innerHTML = '';
    s6[0].innerHTML = '';
    s7[0].innerHTML = '';
    s8[0].innerHTML = '';
    s9[0].innerHTML = '';
    player[0].innerHTML = "Player X's turn";
    totalMove = 0;
    gameOver = false;
    buttonreset.style.visibility = "hidden";
}
// For start button
function buttonclick(){
    var buttonstart = document.getElementById('button');
    var player = document.getElementsByClassName('player');
    var s1 = document.getElementsByClassName('area1');
    var s2 = document.getElementsByClassName('area2');
    var s3 = document.getElementsByClassName('area3');
    var s4 = document.getElementsByClassName('area4');
    var s5 = document.getElementsByClassName('area5');
    var s6 = document.getElementsByClassName('area6');
    var s7 = document.getElementsByClassName('area7');
    var s8 = document.getElementsByClassName('area8');
    var s9 = document.getElementsByClassName('area9');

    s1[0].innerHTML = '';
    s2[0].innerHTML = '';
    s3[0].innerHTML = '';
    s4[0].innerHTML = '';
    s5[0].innerHTML = '';
    s6[0].innerHTML = '';
    s7[0].innerHTML = '';
    s8[0].innerHTML = '';
    s9[0].innerHTML = '';
    player[0].innerHTML = "Player X's turn";
    totalMove = 0;
    gameOver = false;
    buttonstart.style.visibility = "hidden";

}

 function currentPlayerWon(){
    var winner = document.getElementsByClassName('player');
    var buttonreset = document.getElementById('reset');
    var s1 = document.getElementsByClassName('area1');
    var s2 = document.getElementsByClassName('area2');
    var s3 = document.getElementsByClassName('area3');
    var s4 = document.getElementsByClassName('area4');
    var s5 = document.getElementsByClassName('area5');
    var s6 = document.getElementsByClassName('area6');
    var s7 = document.getElementsByClassName('area7');
    var s8 = document.getElementsByClassName('area8');
    var s9 = document.getElementsByClassName('area9');

    if (s1[0].innerHTML == 'X' && s2[0].innerHTML == 'X' && s3[0].innerHTML == 'X'){
            gameOver = true;
            winner[0].innerHTML = "Congratulations Player X has Won!!!!";
        }
    else if(s4[0].innerHTML == 'X' && s5[0].innerHTML == 'X' && s6[0].innerHTML == 'X'){
        gameOver = true;
        winner[0].innerHTML = "Congratulations Player X has Won!!!!";
    }
    else if(s7[0].innerHTML == 'X' && s8[0].innerHTML == 'X' && s9[0].innerHTML == 'X'){
        gameOver = true;
        winner[0].innerHTML = "Congratulations Player X has Won!!!!";
    }
    else if(s1[0].innerHTML == 'X' && s4[0].innerHTML == 'X' && s7[0].innerHTML == 'X'){
        gameOver = true;
        winner[0].innerHTML = "Congratulations Player X has Won!!!!";
    }
    else if(s2[0].innerHTML == 'X' && s5[0].innerHTML == 'X' && s8[0].innerHTML == 'X'){
        gameOver = true;
        winner[0].innerHTML = "Congratulations Player X has Won!!!!";
    }
    else if(s3[0].innerHTML == 'X' && s6[0].innerHTML == 'X' && s9[0].innerHTML == 'X'){
        gameOver = true;
        winner[0].innerHTML = "Congratulations Player X has Won!!!!";
    }
    else if(s1[0].innerHTML == 'X' && s5[0].innerHTML == 'X' && s9[0].innerHTML == 'X'){
        gameOver = true;
        winner[0].innerHTML = "Congratulations Player X has Won!!!!";
    }
    else if(s3[0].innerHTML == 'X' && s5[0].innerHTML == 'X' && s7[0].innerHTML == 'X'){
        gameOver = true;
        winner[0].innerHTML = "Congratulations Player X has Won!!!!";
    }
    if (s1[0].innerHTML == 'X' && s2[0].innerHTML == 'X' && s3[0].innerHTML == 'X'){
        gameOver = true;
        winner[0].innerHTML = "Congratulations Player X has Won!!!!";
    }
    else if(s1[0].innerHTML == 'O' && s2[0].innerHTML == 'O' && s3[0].innerHTML == 'O'){
        gameOver = true;
        winner[0].innerHTML = "Congratulations Player O has Won!!!!";
    }
    else if(s4[0].innerHTML == 'O' && s5[0].innerHTML == 'O' && s6[0].innerHTML == 'O'){
    gameOver = true;
    winner[0].innerHTML = "Congratulations Player O has Won!!!!";
    }
    else if(s7[0].innerHTML == 'O' && s8[0].innerHTML == 'O' && s9[0].innerHTML == 'O'){
    gameOver = true;
    winner[0].innerHTML = "Congratulations Player O has Won!!!!";
    }
    else if(s1[0].innerHTML == 'O' && s4[0].innerHTML == 'O' && s7[0].innerHTML == 'O'){
    gameOver = true;
    winner[0].innerHTML = "Congratulations Player O has Won!!!!";
    }
    else if(s2[0].innerHTML == 'O' && s5[0].innerHTML == 'O' && s8[0].innerHTML == 'O'){
    gameOver = true;
    winner[0].innerHTML = "Congratulations Player O has Won!!!!";
    }
    else if(s3[0].innerHTML == 'O' && s6[0].innerHTML == 'O' && s9[0].innerHTML == 'O'){
    gameOver = true;
    winner[0].innerHTML = "Congratulations Player O has Won!!!!";
    }
    else if(s1[0].innerHTML == 'O' && s5[0].innerHTML == 'O' && s9[0].innerHTML == 'O'){
    gameOver = true;
    winner[0].innerHTML = "Congratulations Player O has Won!!!!";
    }
    else if(s3[0].innerHTML == 'O' && s5[0].innerHTML == 'O' && s7[0].innerHTML == 'O'){
    gameOver = true;
    winner[0].innerHTML = "Congratulations Player O has Won!!!!";
    }
    
    if(gameOver)
    {
        buttonreset.style.visibility = "visible";

    }
    
    if(!gameOver){
        if(totalMove > 7){
            gameOver = true;
            winner[0].innerHTML = "No Winner: TIE!!!!!";
        }
    }
 

}