function scuberGreetingForFeet(feet){
  // Write your code here!
  let cost;
  if (feet <= 400) {
    cost = 'This one is on me!'
  }
  else if (feet > 2000 && feet <= 2500){
    cost = 'I will gladly take your thirty bucks.'
  }
  else if (feet > 2500) {
    cost = 'No can do.'
  }
  else {
    cost = 'That will be twenty bucks.'
  }
  return cost
}

function ternaryCheckCity(city){
  // Write your code here!
  return city == 'NYC'? 'Ok, sounds good.': 'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'not as generous':
      return 'Thank you.'
      break;
    
    case 'generous':
      return 'Thank you so much.'
      break;
  
    default:
      return 'Bye.'
      break;
  }
}