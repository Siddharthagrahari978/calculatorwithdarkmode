var reference_point=0;
function getHistory() {
  return document.getElementById("history-value").innerText;
}
function printHistroy(num) {
  document.getElementById("history-value").innerText = num;
}

function getOutput() {
  return document.getElementById("output-value").innerText;
}
function printOutput(num) {
  if(num==""){
    document.getElementById("output-value").innerText=num;
  }else{
    document.getElementById("output-value").innerText=getFormattedNumber(num);
  }
}



//for formatting text...................................
function getFormattedNumber(num){
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num){
  return Number(num.replace(/,/g,''));
}


//OPERATORS............................................

$('.operator').click(function () {
  if(this.id=='clear'){printOutput('');printHistroy(''); reference_point=0;}
  
  else if(this.id=='backspace'){
    var output = reverseNumberFormat(getOutput()).toString();
    if(reference_point==1){
      reference_point=0;
    }
    
    else{
      output=output.slice(0,output.length-1);
      //output = Math.floor(output/10);
    }
    printOutput(output);
  }
  
  else{
    var output = getOutput();
    var history= getHistory();
    if(output!=''){
      output = reverseNumberFormat(getOutput());
      history=history+output;
      if(this.id=='equal'){
        var result= eval(history);
        printOutput(result);
        printHistroy("");
      }
      else{
        history=history+this.innerHTML;
        printHistroy(history);
        printOutput("");
      }
    }
  }
  
})

//NUMBERS..............................................


$('.number').click(function (){
  var output = reverseNumberFormat(getOutput());
  
  if(output != NaN && this.id != 'point'){
    output = output.toString();
    output=output+this.innerHTML;
    if(reference_point==1){output/=10; reference_point=0;}
    printOutput(output);
  }
  
  if(this.id=='point'){
    reference_point=1;
    output=output+'.';
    document.getElementById("output-value").innerText=output;
  }
  
})



