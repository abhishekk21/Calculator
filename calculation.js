function display(num) {
    document.getElementById("history_value").innerHTML += num;
}

function allClear() {
    document.getElementById("history_value").innerHTML = "";
    document.getElementById("result_value").innerHTML = "";
}

function evaL() {
    document.getElementById("result_value").innerHTML = eval(document.getElementById("history_value").innerHTML)
}

function remLast() {
    let x = document.getElementById("history_value").innerHTML;
    let y= x.substring(0, x.length-1);
    document.getElementById("history_value").innerHTML = y;
}
let count = 1;
function brAckets() {
    
    if ( count % 2 != 0){
        document.getElementById("history_value").innerHTML += "(";
        count++;
    }
    
    else {
        document.getElementById("history_value").innerHTML += ")";
        count++;
    }
    
    
}