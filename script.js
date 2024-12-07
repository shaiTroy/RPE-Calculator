RPE = [100.0, 97.8, 95.5, 93.9, 92.2, 90.7, 89.2, 87.8, 86.3, 85.0, 83.7, 82.4, 81.1, 79.9, 78.6, 77.4, 76.2, 75.1, 73.9, 72.3, 70.7, 69.4, 68.0, 66.7, 65.3, 64.0, 62.6, 61.3, 59.9]

function weight(pr, reps, rpe){
        var rir = 10 - rpe;
        console.log('rir is ', rir)
        var index = (reps - 1)*2 + (2 * rir);
        console.log('index is ', index)
        var weight = pr * (RPE[index]/100)
        console.log(weight)
        return  Math.round(weight)
}



document.getElementById("getWorkingWeight").onsubmit = function(event) {
    event.preventDefault(); 

    var prInput = document.getElementById("prInput").value;
    var repsInput = document.getElementById("repsInput").value;
    var rpeInput = document.getElementById("rpeInput").value;

    var calculatedWeight = weight(prInput, repsInput, rpeInput);

    document.getElementById("workingWeightOutput").innerHTML = calculatedWeight;

}

