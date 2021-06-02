const liens = document.querySelectorAll('.accordion_link')
const arrow = document.querySelectorAll('.arrow')
console.log(liens)
console.log(arrow)


 
liens.forEach(element => {
    element.addEventListener('click',function(){
        const answer = this.parentNode.childNodes[3]
        const arrowParent = this.parentNode.childNodes[1]
        const arrow = arrowParent.firstElementChild
       answer.classList.toggle('open')
       arrow.classList.toggle('reversed')
    })
})