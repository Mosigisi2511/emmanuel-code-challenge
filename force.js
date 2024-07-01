function calculateDemeritPoints(){
    const speedLimit=70;
    let speed=90;
    let demeritPoints=0;
    if (speed<= speedLimit){
        console.log("Ok")}
        else{demeritPoints=Math.floor((speed-speedLimit)/5)
            console.log( `points: ${demeritPoints}` );
         if (demeritPoints >12){
            console.log("licence suspended")}}

}
calculateDemeritPoints()