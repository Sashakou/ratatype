const followWidth = () => {
    let innerTypeBlock = document.querySelector('.innerTypeBlock');
    let typeBlock = document.querySelector('.typeBlock');
    let html = document.getElementsByTagName('html');
   if(typeBlock.clientWidth > innerTypeBlock.clientWidth){
        innerTypeBlock.classList.add('specialWidth');
        html[0].classList.add("overHidden");
    }else{
        innerTypeBlock.classList.remove('specialWidth');
        html[0].classList.remove("overHidden");
    }
}
export default followWidth;