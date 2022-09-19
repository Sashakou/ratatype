import makeLetters from "./makeLetters";
const refresh = (correct, typos, arr, numberOfLetters) => {
    correct = 0;
    typos = 0;
    let newArr = makeLetters(numberOfLetters).split('');
    arr = [];
    return arr.concat(newArr);
}
export default refresh;