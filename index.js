var boxes=document.querySelectorAll('.box')
var fridge=document.querySelector('.fridge')
var clear=document.querySelector('button')

for(i=0;i<boxes.length;i++){
    boxes[i].onclick=function()
    {
        var yeniDiv=document.createElement('div')
        yeniDiv.setAttribute('class','qutu')
        yeniDiv.innerText=this.dataset.name;
        fridge.append(yeniDiv)
    }
    clear.onclick=function(){
        alert('Silindi')
        var qutular=document.querySelectorAll('.qutu');
        for(var i=0;i<qutular.length;i++){
            qutular[i].style.display='none'
        }
    }
}