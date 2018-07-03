$(document).ready(function(){

    var wins = 0, losses = 0, usrScore = 0;

    //gets random sum between 15 & 65 --> appends getSum to HTML
    var getSum = Math.floor(Math.random() * 50+15);
    
    console.log(getSum + ' sum');
    
    //List of OSRS gems, uses gemSum to find random number
    var ruby, diamond, dragonstone, onyx;
    var gemNum = function(){
        return Math.floor(Math.random() * 10 + 5);
    }
    console.log('Ruby Val: ' + gemNum(ruby) + ' - Diamond Val: ' + gemNum(diamond)
        + ' - DragonStone Val: ' + gemNum(dragonstone) + ' - Onyx Val: ' + gemNum(onyx));

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
        console.log('Ruby Val: ' + gemNum(ruby) + ' - Diamond Val: ' + gemNum(diamond)
        + ' - DragonStone Val: ' + gemNum(dragonstone) + ' - Onyx Val: ' + gemNum(onyx));
        
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
        usrScore += gemNum(ruby);
        console.log('New total: ' + usrScore);
        console.log(gemNum(ruby))
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
        usrScore += gemNum(diamond);
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
        usrScore += gemNum(dragonstone);
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
        usrScore += gemNum(onyx);
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