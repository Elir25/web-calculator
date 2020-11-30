
window.onload = function () {

    console.log("Initializing JS")
    document.getElementById("plus").onclick = plus

};

function plus() {
    var number1Raw = document.getElementById("number1").value;
    var number2Raw = document.getElementById("number2").value;

    if (isNaN(number1Raw)) {
        document.getElementById("error").innerHTML = `Value ${number1Raw} is not a number`;
        document.getElementById("result").innerHTML = "Error calculating the result";
        return;
    } else {
        document.getElementById("error").innerHTML = "";
    }
    
    if (isNaN(number2Raw)) {
        document.getElementById("error").innerHTML = `Value ${number2Raw} is not a number`;
        document.getElementById("result").innerHTML = "Error calculating the result";
        return;
    }{
        document.getElementById("error").innerHTML = "";
    }

    var result = Number(number1Raw) + Number(number2Raw);

    document.getElementById("result").innerHTML = result;
}
