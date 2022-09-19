function makeLetters(length) {
    let result           = '';
    //let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let characters       = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    let num = 5;
    let through = 5;
    for ( let i = 0; i < length; i++ ) {
        if(i === num){
            console.log(num);
            result += " ";
            num = num + through;
        }
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default makeLetters;