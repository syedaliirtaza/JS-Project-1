function Display(val){
    document.getElementById("text-val").value += val;
}

function evaluating(){
    let x = document.getElementById("text-val").value;
    let y = eval(x);
    document.getElementById("text-val").value = y;
}
