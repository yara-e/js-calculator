var n1 = false;
var n2 = false;
function input1() {
    var myElement = document.getElementById('firstnum');
    if (myElement === document.activeElement) {
        n1 = true;
        n2 = false;
    }
}
function input2() {
    var myElement = document.getElementById('secnum');
    if (myElement === document.activeElement) {
        n1 = false;
        n2 = true;
    }
}
function display(val) {
    if (n1) {
        document.getElementById('firstnum').value += val;
        return val;
    }
    else if (n2) {
        document.getElementById('secnum').value += val;
    }
}
var result = 0;
function sum() {
    var x = document.getElementById('firstnum').value;
    var y = document.getElementById('secnum').value;
    x = parseInt(x);
    y = parseInt(y);
    result = x + y;
}
function diff() {
    var x = document.getElementById('firstnum').value;
    var y = document.getElementById('secnum').value;
    x = parseInt(x);
    y = parseInt(y);
    result = x - y;
}
function mul() {
    var x = document.getElementById('firstnum').value;
    var y = document.getElementById('secnum').value;
    x = parseInt(x);
    y = parseInt(y);
    result = x * y;
}
function div() {
    var x = document.getElementById('firstnum').value;
    var y = document.getElementById('secnum').value;
    x = parseInt(x);
    y = parseInt(y);
    result = x / y;
}
function equal() {
    document.getElementById("res").innerText = result;
}
alert("insert two numbers then choose the operation then click on the equal");