import Big from "big.js";

export default function Operation(number1,number2,operation) {
  const one = Big(number1 || "0");
  const two = Big(number2 || (operation === "+" || operation==="x" ||operation==="%" ? "1" : "0"))
  if(operation === "+"){
    return one.plus(two).toString();
  }
  else if(operation === "-"){
    return one.minus(two).toString();
  }
  else if(operation === "x"){
    return one.times(two).toString();
  }
  if(operation === "%"){
    if(two === "0"){
      alert("Divide by zero error");
      return "0";
    }else{
      return one.div(two).toString();
    }
  }  
  throw Error(`Invalid Operation`);
}


