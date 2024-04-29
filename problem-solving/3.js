// challenge url : 
// https://edabit.com/challenge/jfpfpH6w42tZeRo2T

function trackRobot(...steps) {
	let x = 0;
    let y = 0;

    let facing = 'north';

    for (let i = 0; i < steps.length; i++) {
        if (facing === 'north') {
            y += steps[i];
            facing = 'east';
        }

        else if (facing === 'east') {
            x += steps[i];
            facing = 'south';
        }

        else if(facing === 'south'){
            y -= steps[i];
            facing = 'west';
        }

        else if(facing === 'west'){
            x -= steps[i];
            facing = 'north';
        }
    }


    return [x, y];
}

console.log(trackRobot(-10, 20, 10));;