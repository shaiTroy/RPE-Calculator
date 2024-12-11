RPE = [100.0, 97.8, 95.5, 93.9, 92.2, 90.7, 89.2, 87.8, 86.3, 85.0, 83.7, 82.4, 81.1, 79.9, 78.6, 77.4, 76.2, 75.1, 73.9, 72.3, 70.7, 69.4, 68.0, 66.7, 65.3, 64.0, 62.6, 61.3, 59.9]

function weight(pr, reps, rpe){
    //  calculates a weight based on a percentage of a 1 rep max
    var rir = 10 - rpe;
    console.log('rir is ', rir)
    var index = (reps - 1)*2 + (2 * rir)
    console.log('index is ', index)
    var weight = pr * (RPE[index]/100)
    console.log(weight)
    return  Math.round(weight)
}

function getPR(weight, reps, rpe){
    //  calculates a Pr based on a working set
    var rir = 10 - rpe;
    console.log('rir is ', rir)
    var index1 = (reps - 1)*2 + (2 * rir)
    var index2 = (reps - 1)*2 + (2 * 0) + 1
    console.log('index1 is ', index)
    console.log('index2 is ', index)
    var pr = weight * ((RPE[index1]/RPE[index2])*100)
    return  Math.round(pr)
}

function backdown(weight, initRep, bckRep, rpe, prctDwn){
    // calculates a backdown set based on a the working set and percentage decrease
    var difRep = initRep - bckRep;
    var rir = 10 - rpe + difRep;
    console.log('rir is ', rir)
    var index = (bckRep - 1)*2 + (2 * rir)
    console.log('index is ', index)
    var weight = weight * (RPE[index]/100) * ((100-prctDwn)/100)
    console.log(weight)
    return  Math.round(weight)
}

