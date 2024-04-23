function sevenBoom(arr) {
    let rtn = "there is no 7 in the array";
    let isHavingSeven = false;
	for(let i =0; i < arr.length ; i++) {
        let str = arr[i].toString();

        if(str.length > 1) {
            for (let i = 0; i < str.length; i++) {
                if(str[i] === '7') {
                    isHavingSeven = true;
                    rtn =  "Boom!";
                    return 'Boom!'
                }
            }
            
        }
        else {
            if (str === '7') {
                console.log(str);
                isHavingSeven = true;
                rtn =  "Boom!";
                return 'Boom!';
            }
        }
        
    }

    if(!isHavingSeven) {
        return "there is no 7 in the array";
    }
    return rtn;
}

console.log(sevenBoom([2, 6, 7, 9, 3]));;