function scuberGreetingForFeet(randomNum){
  // Write your code here!
  
  if  (randomNum <= 400){
    return 'This one is on me!';
}
  else if (randomNum > 400 && randomNum < 2000){
    return 'That will be twenty bucks.';
  }
  else if (randomNum > 2000 && randomNum < 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if (randomNum >= 2500){
    return 'No can do.';
  }


}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC"){
   return "Ok, sounds good."
  }
  else {
    return 'No go.' 
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
if (tip === 'generous'){
  return'Thank you so much.'
} else if (tip === 'not as generous'){
  return 'Thank you.'

}else {
return 'Bye.'
}

}