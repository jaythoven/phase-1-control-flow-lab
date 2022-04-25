function scuberGreetingForFeet(integer){
  if (integer <= 400) {
    return 'This one is on me!'
  } else if (integer > 400 && integer < 2000) {
    return 'That will be twenty bucks.'
  } else if (integer > 2000 && integer < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
 } 

function ternaryCheckCity(cityName){
  return cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(money){
  switch(money) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.'
  }
}