function pythagorean(){
    //alert("Button test");
    let a=parseFloat(document.getElementById("leg1").value);
    let b=parseFloat(document.getElementById("leg2").value);
    document.getElementById("result").value=((a*a+b*b))**0.5;
  
}
