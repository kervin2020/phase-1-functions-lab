// Code your solution in this file!

function distanceFromHqInBlocks(value){
    //returns the number of blocks given a value
    if(value < 42) return 42 - value
    else return value - 42
}
distanceFromHqInBlocks()

function distanceFromHqInFeet(value){
    
    //call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function, 
    //passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

    //return value of distanceFromHqInBlocks can then be used to calculate feet
   return distanceFromHqInBlocks(value) * 264;
    
}
distanceFromHqInFeet()

function distanceTravelledInFeet(start,destination){
    //returns the number of feet traveled
    const blocks = Math.abs(destination - start)
  return blocks * 264
}
distanceTravelledInFeet()

function calculatesFarePrice(start,destination){
   const distance = distanceTravelledInFeet(start,destination);


   if(distance <= 400){ 
    return 0
}else if(distance > 400 && distance <= 2000){
    return (distance - 400) * 0.02;
}else if(distance > 2000 && distance < 2500){
        return 25;
     }else {
        return 'cannot travel that far'
    }
    //returns the fare for the customer
}
calculatesFarePrice()