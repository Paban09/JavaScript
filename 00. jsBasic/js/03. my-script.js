

// Arrray object || Api retuns json data
// var students=[
//     { 'id':'01', 'name':'Masud', 'email':'masud@gmail.com'},
//     { 'id':'02', 'name':'Rana', 'email':'rana@gmail.com'},
//     { 'id':'03', 'name':'Pabon', 'email':'pabon@gmail.com'},
// ];


// for( key in students){
//     document.write(
//         students[key].id+" "+
//         students[key].name+" "+
//         students[key].email+" "+
//         '<br/>');
// }

// document.write('Ayan');






// to create a element
//here div is variable, style is property, using the style poperty we can use the css tags to work
//append means push kora


// function test(x){
//     var div=document.createElement('div');
//     div.style.height='100px';
//     div.style.width="200px";
//     div.style.backgroundColor=x;
//     div.style.marginBottom='10px';
//     // div.style.float='left';
//     document.getElementById('res').append(div);
// }

// test("red");
// test("green");
// test("blue");






function demo(){
    var h1 = document.createElement('h1');
    h1.innerHTML='Hello World';
    document.getElementById("res").append(h1);
}

demo();




var btn=document.getElementById('btn');
btn.onclick=function(){
    var h1=document.getElementById('h1');
    h1.style.backgroundColor='red';
};


var x=0;
var btn2=document.getElementById('btn2');
btn2.onclick=function(){
    var cart=document.getElementById('cart');
    cart.value=(x=x-1);
};
btn3.onclick=function(){
    var cart=document.getElementById('cart');
    cart.value=(x=x+1);
};