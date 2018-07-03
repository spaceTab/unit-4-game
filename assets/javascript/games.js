$(document).ready(function(){

    var wins = 0, losses = 0, usrTotal = 0;

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


    ruby = ruby[gemNum()]
    //appending variables to HTML
    $('#sum').text(getSum);
    $('#wins').text(wins);
    $('#loss').text(losses);

    $('#ruby').text(ruby);
    $('#diamond').text(ruby);
    $('#dragonstone').text(dragonstone);

    $('#total').text(usrTotal);


    //Function to reset the game, Getting new Values, and 're-Appending'
    gameReset = function(){

        usrTotal = 0;
        getSum = Math.floor(Math.random() * 50+15);
        /*gemNum(ruby);
        gemNum(diamond);
        gemNum(dragonstone);
        gemNum(onyx);*/

        console.log('Sum to Acheive: ' + getSum);
        console.log('Ruby Val: ' + gemNum(ruby) + ' - Diamond Val: ' + gemNum(diamond)
        + ' - DragonStone Val: ' + gemNum(dragonstone) + ' - Onyx Val: ' + gemNum(onyx));
        
        $('#sum').text(getSum);
        $('#total').text(usrTotal)
    }
   // gameReset();

    //sets up the on click event for gem 'buttons'

    $('#gemOne').on('click', function(){
        usrTotal += gemNum(ruby);
        console.log('New total: ' + usrTotal);
        console.log(gemNum(ruby))
    });
    $('#gemTwo').on('click', function(){
        usrTotal += gemNum(diamond);
        console.log('New total: ' + usrTotal);
    })
    $('gemThree').on('click', function(){
        usrTotal += gemNum(dragonstone);
        console.log('New total: ' + usrTotal);
    })
    $('gemFour').on('click', function(){
        usrTotal += gemNum(onyx);
        console.log('New total: ' + usrTotal);
    })

});