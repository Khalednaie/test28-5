var btn0 = document.createElement("a");
  document.getElementById("a").appendChild(btn0);
   btn0.innerHTML="profile";
   btn0.setAttribute("id","index");
   btn0.setAttribute("href" , "index.html")

   var btn1 = document.createElement("a");
  document.getElementById("a").appendChild(btn1);
   btn1.innerHTML="sport";
   btn1.setAttribute("id","sport");
   btn1.setAttribute("href" , "sport.html")

   var btn2 = document.createElement("a");
  document.getElementById("a").appendChild(btn2);
   btn2.innerHTML="Weekly total";
   btn2.setAttribute("id","Weekly");
   btn2.setAttribute("href" , "Weekly total.html")

   var btn3= document.createElement("a");
  document.getElementById("a").appendChild(btn3);
   btn3.innerHTML="Workout posts";
   btn3.setAttribute("id","Workout");
   btn3.setAttribute("href" , "Workout posts.html")

   var btn4 = document.createElement("a");
  document.getElementById("a").appendChild(btn4);
   btn4.innerHTML="Friends";
   btn4.setAttribute("id","Friends");
   btn4.setAttribute("href" , "Friends.html")

///////////////// add sport

  { var btn5 = document.createElement("button");
   document.getElementById("a2").appendChild(btn5);
   btn5.innerHTML="Add new sport";
   btn5.setAttribute("id","Add");

   var btn7 = document.createElement("button");
   document.getElementById("a2").appendChild(btn7);
   btn7.innerHTML="Delet new sport";
   btn7.setAttribute("id","Delet");

   var i = document.getElementById("Delet");
   i.onclick=function(){
    var flight = document.getElementById("ul1");
    if (flight.hasChildNodes()){
        flight.removeChild(flight.childNodes[0]);
    }
    var ol=document.getElementById("ul1")
    ol.onclick=function(event){
        event.target.classList.toggle("completed");
        }

   }

      var inb = document.createElement("input");
   document.getElementById("a2").appendChild(inb);
   inb.innerHTML="sport";
   inb.setAttribute("id","inb1");

   var b = document.getElementById("Add");
     b.onclick=function(){
    //console.log("hello");
     	
var sport =inb.value;
     	 if(sport===""){
     	 	alert("plesas add ");
     	 }else{
              var li = document.createElement("li","button");
              li.innerHTML=sport;
              var ul = document.getElementById("ul1");
              ul.appendChild(li);
              inb.value="";
             }
        }
    }
////////////////// add workout 
var btn6 = document.createElement("button");
   document.getElementById("a3").appendChild(btn6);
   btn6.innerHTML="Add new workout";
   btn6.setAttribute("id","workout");

   var btn8 = document.createElement("button");
   document.getElementById("a3").appendChild(btn8);
   btn8.innerHTML="Delet new workout";
   btn8.setAttribute("id","Delet1");

   var j = document.getElementById("Delet1");
   j.onclick=function(){
    var flight = document.getElementById("ul2");
    if (flight.hasChildNodes()){
        flight.removeChild(flight.childNodes[0]);
    }

   }

      var inb1 = document.createElement("input");
   document.getElementById("a3").appendChild(inb1);
   inb1.innerHTML="Time";
   inb1.setAttribute("id","inb1");

   var inb2 = document.createElement("input");
   document.getElementById("a3").appendChild(inb2);
   inb2.innerHTML="distance";
   inb2.setAttribute("id","inb2");

   var inb3 = document.createElement("input");
   document.getElementById("a3").appendChild(inb3);
   inb3.innerHTML="Avg heart reat";
   inb3.setAttribute("id","inb3");

   var inb4 = document.createElement("input");
   document.getElementById("a3").appendChild(inb4);
   inb4.innerHTML="recovery heart reat ";
   inb4.setAttribute("id","inb4");

   var b1 = document.getElementById("workout");
     b1.onclick=function(){
    console.log("helo");
     	
 var t=inb1.value; var d = inb2.value; var a = inb3.value; var r = inb4.value;
     	 if(t==="" && d==="" && a===""  && r===""){
     	 	alert("plesas add ");
     	 }else {
              var li = document.createElement("li");
              li.innerHTML=sport;
              var ul = document.getElementById("ul2");
              ul.appendChild(li);
              inb1.value=""; inb2.value=""; inb3.value=""; inb4.value=""
          }}



//////////////////add  frinds
function kh(){
   // alert("add frind");
   var li = document.createElement("li");
   li.innerHTML=kk;
   var ul = document.getElementById("v");
   ul.appendChild(li);
   

}
// var btn7 = document.createElement("button");
//    document.getElementById("a2").appendChild(btn7);
//    btn7.innerHTML="delet new sport";
//    btn7.setAttribute("id","sport");

// // var flight = document.getElementById("ul1");
// //   if (flight.hasChildNodes()) {
// //     flight.removeChild(flight.childNodes[0]);
// //   }
/////////////////////////////
// //{ <label for="male">Male</label><br></br>

//  var countDownDate = new Date("may 28, 2020 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML =  hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000); */}