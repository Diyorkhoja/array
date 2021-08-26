let myArr = []

while (true) {
    let name= prompt()
    let arrName = name.split(' ')
    if (arrName[0] === 'stop'){
        break
    }else if (arrName[0] === 'add'){
        myArr.push(arrName[1])
    }else if (arrName[0] === 'del'){
        if (myArr.findIndex((el) => el == arrName[1]) != -1) {
            myArr.splice(myArr.findIndex((el) => el == arrName[1]), 1);
        }
    }
    console.log(myArr);
}


console.log(' ');

function vowels(str) {
    const vowel = ['a', 'y', 'i', 'e', 'o', 'u'];
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (str[i].toLowerCase() == vowel[j]) {
                res++;
            }
        }
    }
    return res;
};

