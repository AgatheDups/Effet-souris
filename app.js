// Recupere le canvas dans le dom
const canvas= document.getElementById('canvas');

// Recupere le contexte du canvas
let ctx = canvas.getContext('2d');

// responsif

canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

window.addEventListener('resize',()=>{
    canvas.width= window.innerWidth;
    canvas.height= window.innerHeight;
    init();

})


var x =200;
var y=200;


function init(){
    requestAnimationFrame(init)
    ctx.clearRect(0,0,innerWidth,innerHeight);

    ctx.beginPath();
    ctx.arc(x,y,60,0,Math.PI*2);
    ctx.strokeStyle = 'cyan';
    ctx.stroke();


    canvas.addEventListener('mousemove', (e)=> {
        x=e.clientX;
        y=e.clientY;
    })
}

init();