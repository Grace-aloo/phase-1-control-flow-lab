function scuberGreetingForFeet(value){
  // Write your code here!
  if (value <= 400){
    return "This one is on me!";
  }
  else if (value > 2000 && value < 2500){
    return "I will gladly take your thirty bucks."
  }
  else if ( value > 2500 ){
    return "No can do."
  }
  
}

function ternaryCheckCity(destination){
  // Write your code here!
  
  return  destination ===  "NYC" ? "Ok, sounds good." : "No go.";
}
  const  tip = 'generous';
function switchOnCharmFromTip(tip){
  switch (tip){
    case "generous":
       return "Thank you so much.";
       break;
    case 'not as generous':
       return "Thank you.";
       break;
    default :
       return "Bye.";
  }
}