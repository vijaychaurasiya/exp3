var data11=[];
var data12=[];

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    var x=this.value;
  output.innerHTML = this.value;
  document.getElementById("displacement").value=x;
  
}




function response(){
    const suppfre=document.getElementById("frequency").value;
    
const suppv=document.getElementById("voltage").value

const suppdis =document.getElementById("displacement").value;
data12.push(suppdis);

var roundoffR2=(16.96*suppfre*suppv*(1-((suppdis*suppdis)/800)));
    if(roundoffR2<0){
    roundoffR2= -(roundoffR2)
};
const f=roundoffR2.toFixed(4);
data11.push(f);
document.getElementById("vout").value=f;

var para = document.createElement("h6");
var node = document.createTextNode("Vout.= "+ f + "," );
 para.appendChild(node);

var node = document.createTextNode( "Displacement= "+suppdis );
 para.appendChild(node);

var element = document.getElementById("div2");
 element.appendChild(para);

}


function reset(){
    document.getElementById("myForm").reset();
    document.getElementById("myRange").reset();
    
     
}
