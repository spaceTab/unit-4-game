$(document).ready(function(){

    var wins = 0, losses = 0, usrScore = 0;

    //gets random sum between 19-120? --> appends getSum to HTML
    var getSum = Math.floor(Math.random() * 101)+19;
    
    console.log(getSum + ' sum');
    
    var ruby = Math.floor(Math.random() * 11) + 1;
    var diamond = Math.floor(Math.random() * 11) + 1;
    var dragonstone = Math.floor(Math.random() * 11) + 1;
    var onyx = Math.floor(Math.random() * 11) + 1;



    //List of OSRS gems, uses gemSum to find random number
  /*var ruby, diamond, dragonstone, onyx;
    var gemNum = function(){
        return Math.floor(Math.random() * 10 + 5);
    }*/
    console.log('Ruby Val: ' + ruby + ' - Diamond Val: ' + diamond
        + ' - DragonStone Val: ' + dragonstone + ' - Onyx Val: ' + onyx);

    //appending variables to HTML
    $('#sum').text(getSum);
    $('#wins').text(wins);
    $('#loss').text(losses);

    $('#ruby').text(ruby);
    $('#diamond').text(ruby);
    $('#dragonstone').text(dragonstone);

    $('#total').text(usrScore);

    //Function to reset the game, Getting new Values, and 're-Appending'
    var gameReset = function(){

        usrScore = 0;
       // getSum = Math.floor(Math.random() * 50+15);
        /*gemNum(ruby);
        gemNum(diamond);
        gemNum(dragonstone);
        gemNum(onyx);*/

        console.log('Sum to Acheive: ' + getSum);
        console.log('Ruby Val: ' + ruby + ' - Diamond Val: ' + diamond
        + ' - DragonStone Val: ' + dragonstone + ' - Onyx Val: ' + onyx);
        
        $('#sum').text(getSum);
        $('#total').text(usrScore)
    }
   
    //function for game win
    var gameWin = function(){
        wins++; 
        $('wins').text(wins);
        gameReset();
    }

    //function for game win
    var gameLoss = function(){
        losses++;
        $('#loss').text(losses);
        gameReset();
    }

    //click event for gems -- Win/Loss conditionals
    $('#gemOne').on('click', function(){
        usrScore += ruby;
        console.log('New total: ' + usrScore);
        console.log(ruby);
        $('#total').text(usrScore);

        if (usrScore == getSum){
            alert('win')
            gameWin();
        } else if (usrScore > getSum){
            alert('Loss')
            gameLoss();
        }
    });
    $('#gemTwo').on('click', function(){
        usrScore += diamond;
        console.log('New total: ' + usrScore);
        $('#total').text(usrScore);

        if (usrScore == getSum){
            alert('Win');
            gameWin();
        } else if (usrScore > getSum) {
            alert('loss');
            gameLoss();
        }
    })
    $('gemThree').on('click', function(){
        usrScore += dragonstone;
        console.log('New total: ' + usrScore);
        $('#total').text(usrScore);

        if (usrScore == getSum){
            alert('Win');
            gameWin();
        } else if (usrScore > getSum){
            alert('Loss');
            gameLoss();
        }
    })
    $('gemFour').on('click', function(){
        usrScore += onyx;
        console.log('New total: ' + usrScore);
        $('#total').text(usrScore);

        if (usrScore == getSum){
            alert('win');
            gameWin();
        } else if (usrScore > getSum){
            alert('Loss');
            gameLoss();
        }
    })

});