const buttonImg = document.getElementById ("imgButton")
const listButton = document.getElementById("navbarList")

buttonImg.addEventListener('click', (event) => {
    event.preventDefault()
    let list = listButton
    if(list.style.display === 'none' || list.style.display === ''){
        list.style.display = 'block'
    } else {
        list.style.display = 'none'
    }

})