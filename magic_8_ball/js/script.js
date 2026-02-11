alert('wasup')
function magic8ball() {
    var fortune = getafortune();
    showfortune(fortune);
}

function getafortune(){
    var fortunes = ["yuh", "no", "maybe", "try again buddy"]
    var random = rando(fortunes.length)
    return fortunes[random];
}

function rando(max){
    return Math.floor(Math.random() * max)
}

function showfortune(fortune){
    //alert(fortune);
    document.getElementById("answer").innerHTML = fortune
}