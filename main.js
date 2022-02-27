let body= $('body')
let btn= $('#btn')

btn.click(function(e){
    e.preventDefault()
    var red= Math.round(Math.random()*255);
    var green= Math.round(Math.random()*255);
    var blue= Math.round(Math.random()*255);  
   body.css('background-color', `rgb(${red}, ${green}, ${blue})`)
})

 