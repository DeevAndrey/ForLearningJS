let Main = document.querySelector(".MainContent")
let div = document.createElement('div')
let flag = true
div.style.display = 'grid'
div.style.backgroundColor = 'green'
div.style.gridTemplateRows = "1fr 1fr 1fr"
div.style.gridTemplateColumns = "1fr 1fr 1fr"
div.style.height = "99%"
div.style.marginTop = "10px"

Main.appendChild(div)
for(let i =1 ;i<10;i++)
{
let button = document.createElement('button')
button.id = i
button.onclick = function()
{
    if (flag == true && button.textContent == "")
    {
        flag = false
        button.textContent = 'X'
    }
    else if (flag == false && button.textContent == "")
    {
        flag = true
        button.textContent = 'O'
    }
    if (checkWinner() != null)
    {
        document.getElementById('my-modal').classList.add('open')
    }
    
}
div.appendChild(button)
}
document.getElementById("restart").onclick = function(){

    document.getElementById('my-modal').classList.remove('open')
    for (let i=1;i<10;i++)
    {
        document.getElementById(i).textContent=""
    }
}
function checkWinner()
{
    var one = document.getElementById(1);
    var two = document.getElementById(2);
    var three = document.getElementById(3);
    var four = document.getElementById(4);
    var five = document.getElementById(5);
    var six = document.getElementById(6);
    var seven = document.getElementById(7);
    var eight = document.getElementById(8);
    var nine = document.getElementById(9);
    if (one.textContent == two.textContent && one.textContent == three.textContent && (one.textContent == 'X' || one.textContent == 'O'))
    {
        return one.textContent
    }
    if (four.textContent == five.textContent && four.textContent == six.textContent && (four.textContent == 'X' || four.textContent == 'O'))
    {
        return + four.textContent 
    }
    if (seven.textContent == eight.textContent && seven.textContent == nine.textContent && (seven.textContent == 'X' || seven.textContent == 'O'))
    {
        return seven.textContent 
    }
    if (one.textContent == four.textContent && one.textContent == seven.textContent && (one.textContent == 'X' || one.textContent == 'O'))
    {
        return one.textContent 
    }
    if (two.textContent == five.textContent && two.textContent == eight.textContent && (two.textContent == 'X' || two.textContent == 'O'))
    {
        return two.textContent 
    }
    if (three.textContent == six.textContent && three.textContent == nine.textContent && (three.textContent == 'X' || three.textContent == 'O'))
    {
        return three.textContent 
    }
    if (one.textContent == five.textContent && one.textContent == nine.textContent && (one.textContent == 'X' || one.textContent == 'O'))
    {
        return one.textContent 
    }
    if (three.textContent == five.textContent && three.textContent == seven.textContent && (three.textContent == 'X' || three.textContent == 'O'))
    {
        return three.textContent 
    }
    return null
}

clear 