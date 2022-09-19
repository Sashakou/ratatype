import makeLetters from "./makeLetters";

// const refresh = (correct, typos, arr, numberOfLetters, letters) => {
//     correct = 0;
//     typos = 0;
//     console.log(arr);
//     let newArr = makeLetters(numberOfLetters).split('');
//     console.log(newArr);
//     arr = [];
//     for (let i = 0; i < newArr.length; i++){
//         arr.push(newArr[i]);
//     }
//     console.log(arr);
//     letters.innerHTML = arr.join('');
//     followWidth();
// }
const refresh = (correct, typos, arr, numberOfLetters) => {
    correct = 0;
    typos = 0;
    let newArr = makeLetters(numberOfLetters).split('');
    arr = [];
    return arr.concat(newArr);
}

export default refresh;