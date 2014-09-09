window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

var bubble1 = document.getElementById('bubble1')
var bubble2 = document.getElementById('bubble2')
var bubble3 = document.getElementById('bubble3')
var bubble4 = document.getElementById('bubble4')
var bubble5 = document.getElementById('bubble5')
var bubble6 = document.getElementById('bubble6')

var rand1 = .9;
var rand2 = .5;
var rand3 = .1;
var rand4 = .6;
var rand5 = .3;
var rand6 = .3;


function parallaxbubbles(){
  var scrolltop = window.pageYOffset 
  bubble1.style.top = -scrolltop*rand1 + 'px' 
  bubble2.style.top = -scrolltop*rand2 + 'px' 
  bubble3.style.top = -scrolltop*rand3 + 'px' 
  bubble4.style.top = -scrolltop*rand4 + 'px' 
  bubble5.style.top = -scrolltop*rand5 + 'px' 
  bubble6.style.top = -scrolltop*rand6 + 'px' 

}
 
window.addEventListener('scroll', function(){
  requestAnimationFrame(parallaxbubbles) 
}, false)
 
