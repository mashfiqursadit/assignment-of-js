// feetToMile
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var cycleSpeed = feetToMile(10560)
console.log(cycleSpeed);
var BikeSpeed = feetToMile(15840);
console.log( BikeSpeed);

// woodCalculator
function woodCalculator(chair, table, bed){
    var chairWood = chair*1
    var tableWood = table*3
    var bedWood   = bed*5

    let totalWood = chairWood + tableWood + bedWood
    return totalWood
}
var result = woodCalculator (10, 15, 25)
console.log('Total Wood need: ', result);

// brickCalculator
function brickCalculator(z){
    var feet = 0;
    
    for (var i=1; i<= z; i++){
        if (i<=10){
        feet += 15;
    }
    
    else if (i<=20){
      
         feet += 12;
    }
    
    else if (i>20){
       
         feet += 10;
    }
    }
    var totalBrick = feet * 1000;
    return totalBrick;
    }
    var result = brickCalculator(21);
    console.log(result);
    // tinyFriend
    function tinyFriend(name){
        var tiny = name[0];
        var tinyLength = name[0].length
        for (var i=0; i<name.length; i++){
            var element = name[i];
            if (element.length< tinyLength){
                tinyLength = element.length
                tiny = element;
            }
        
        }
        return tiny;
    }
    var friend = tinyFriend(['sakib', 'shihab' , 'robin' , 'sad', ])
    console.log("Shortest Name is :" , friend );