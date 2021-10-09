// detecting button press


var totalButton=document.querySelectorAll(".drum").length;

for(var i=0;i<totalButton;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttoInnerHtml=this.innerHTML;
      makeSound(buttoInnerHtml);
      buttonAnimation(buttoInnerHtml);
    });

  }

// detecting keyboard press

document.addEventListener("keypress", function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});



 // here this is used to refer the current element (key) and indicating the object

function makeSound(key)
{
if(key=='w')
{var audi=new Audio("tom-1.mp3");
audi.play()
}
else if(key=='a')
{var audi=new Audio("tom-2.mp3");
audi.play()
}
else if(key=='s')
{var audi=new Audio("tom-3.mp3");
audi.play()
}
else if(key=='d')
{var audi=new Audio("tom-4.mp3");
audi.play()
}
else if(key=='j')
{var audi=new Audio("snare.mp3");
audi.play()
}
else if(key=='k')
{var audi=new Audio("kick-bass.mp3");
audi.play()
}
else if(key=='l')
{var audi=new Audio("crash.mp3");
audi.play()
}
else
{
  console.log(buttoInnerHtml)
}

};


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}




// function check()
// {
//   document.addEventListener("keypress")
// {
//   var k=console.log(this.innerHTML);
//
// }
//
//
// }
//
// document.addEventListener("keypress",function()
// {
// alert("key is pressed");
//
//
// });
//
//
// // var totalButton=document.querySelectorAll(".drum").length;
// // for(var i=0;i<totalButton;i++)
// // {
// //   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
// //
// //     this.style.color="white";
// //   });
// //
// // }



          //
