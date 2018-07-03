$(document).ready(function(){

    var wins = 0, losses = 0;

    //gets random sum between 15 & 65 --> appends getSum to HTML
    var getSum = Math.floor(Math.random() * 50+15);
    
    console.log(getSum + ' sum');
    
    //List of OSRS gems, uses gemSum to find random number
    var ruby, diamond, dragonstone;
    var gemNum = function(){
        return Math.floor(Math.random() * 10 + 5);
    }
    console.log('Ruby Val: ' + gemNum(ruby) + ' - Diamond Val: ' + gemNum(diamond)
        + ' - DragonStone Val: ' + gemNum(dragonstone));

    //appending variables to HTML
    $('#Sum').text(getSum);
    $('wins').text(wins);
    $('loss').text(losses);

    $('ruby').text(ruby);
    $('diamond').text(ruby);
    $('dragonstone').text(dragonstone);

    gameReset = function(){
        getSum;
        console.log('Sum to Acheive: ' + getSum);
        
        console.log('Ruby Val: ' + gemNum(ruby) + ' - Diamond Val: ' + gemNum(diamond)
        + ' - DragonStone Val: ' + gemNum(dragonstone));
        
    }
    gameReset();
});