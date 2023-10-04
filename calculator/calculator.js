var screen=document.getElementById('screen')
function btnclick(value){
    screen.value+=value;
}
function screenclear(){

    screen.value = "";
}
function equalto(){
    var result= eval(screen.value)
    screen.value=result;
}