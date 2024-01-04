var y=-170;
function Geeks() {
    let doc = document.getElementById("btn");
    // Changing the text content
    doc.textContent = "you shouldn't have clicked me";
	 	alerted();
}
function alerted(){
	 alert("We're no strangers to love");
	 alert("you know the rules and so do I");
	 alert("A full commitment's what I'm thinking of");
	 alert("You wouldn't get this from any other guy");
	 alert("I just wanna tell you how I'm feeling");
	 alert("Gotta make you understand");
	 alert("Never gonna give you up");
	 alert("Never gonna let you down");
	 alert("Never gonna run around and desert you");
	 alert("Never gonna make you cry");
	 alert("Never gonna say goodbye"); 
	 alert("Never gonna tell a lie and hurt you");
}
function myClear(){
var x = document.getElementById("fname").value;
  document.getElementById("chatresponse").innerHTML = "";
  document.getElementById("UserPrint").innerHTML = "";
}

function myFunction(event,butn) {
var input=event.key;
var commands=["give me a list of commands","textfield","red","blue","green","purple","yellow","orange","white","web red","web blue","web green","web purple","web yellow","web orange","web white","what is the meaning of life?","rick-roll me","what is the best starting woordle word?","test my writing","untest my writing"];
var responses=["First note that all these commmands must be typed in all lowercase <br> 1.'give me a list of commands ' to get a list of acceptable chatbot commands/questions<br>2. 'textfield' to create a textfield<br>3. to change text color,just type a simple color in lowercase <br>4.' whats the meaning of life?' to find the meaning of life,<br> 5.'rick<span>&#8208;</span>roll me' to get rickrolled<br>6.'what is the best starting woordle word?'-to get the best starting word for woordle<br>7.'test my writing'-to test your writing<br>8.'untest my writing' to stop testing your writing<br>9. say web, plus the color that you want to change the web div element","did you know that java applets were discontinued in chrome browsers?","changed color to red","changed color to blue","changed color to green","changed color to purple", "changed color to yellow","changed color to orange","changed color to white","There are many different perspectives on the topic, here are a few:<br>'According to Frankl, meaning can be found through: Experiencing reality by interacting authentically with the environment and with others. Giving something back to the world through creativity and self-expression, and, Changing our attitude when faced with a situation or circumstance that we cannot change.'-quote found from phychology today<br>'Coherence: how events fit together. This is an understanding that things happen in your life for a reason. That doesn<span>&#39;</span>t necessarily mean you can fit new developments into your narrative the moment they happen, but you usually are able to do so afterward, so you have faith that you eventually will.<br>Purpose: the existence of goals and aims. This is the belief that you are alive in order to do something. Think of purpose as your personal mission statement, such as the purpose of my life is to share the secrets to happiness or I am here to spread love abundantly.<br>Significance: life<span>&#39;</span>s inherent value. This is the sense that your life matters. If you have high levels of significance, you<span>&#39;</span>re confident that the world would be a tiny bit, or perhaps a lot poorer if you didn<span>&#39;</span>t exist.'","hehe","dream","inputs blurred","inputs un-blurred"];
if(input==="Enter" ||butn===1){
	
	for(var i=0;i<20;i++){
		if(document.getElementById("fname").value===commands[i]){
			var x=responses[i];
		}
		if(document.getElementById("fname").value==="red"){
			document.getElementById("chatresponse").style.color="red";
		}
		if(document.getElementById("fname").value==="blue"){
			document.getElementById("chatresponse").style.color="blue";
		}
		if(document.getElementById("fname").value==="green"){
			document.getElementById("chatresponse").style.color="green";
		}
		if(document.getElementById("fname").value==="purple"){
			document.getElementById("chatresponse").style.color="purple";
		}
		if(document.getElementById("fname").value==="yellow"){
			document.getElementById("chatresponse").style.color="yellow";
		}
		if(document.getElementById("fname").value==="orange"){
			document.getElementById("chatresponse").style.color="orange";
		}
		if(document.getElementById("fname").value==="white"){
			document.getElementById("chatresponse").style.color="white";
		}
		if(document.getElementById("fname").value==="rick-roll me"){
			alerted();
		}
		if(document.getElementById("fname").value==="test my writing"){
			document.getElementById("inputs").style.filter="blur(5px)";
		}
		if(document.getElementById("fname").value==="untest my writing"){
			document.getElementById("inputs").style.filter="blur(0px)";
		}
		
		//extra colors for web(manual) styling
		if(document.getElementById("fname").value==="web red"){
			document.getElementById("weborder").style.color="red";
		}
		if(document.getElementById("fname").value==="web blue"){
			document.getElementById("weborder").style.color="blue";
		}
		if(document.getElementById("fname").value==="web green"){
			document.getElementById("weborder").style.color="green";
		}
		if(document.getElementById("fname").value==="web purple"){
			document.getElementById("weborder").style.color="purple";
		}
		if(document.getElementById("fname").value==="web yellow"){
			document.getElementById("weborder").style.color="yellow";
		}
		if(document.getElementById("fname").value==="web orange"){
			document.getElementById("weborder").style.color="orange";
		}
	}
  //var x = document.getElementById("fname").value;
  //user
  document.getElementById("UserPrint").innerHTML =document.getElementById("UserPrint").innerHTML+"<br>"+"<b>"+"User--"+"'"+document.getElementById("fname").value+"'"+"</b>"+"<br>"+"<strong>"+x+"</strong>";
  y=y+100;

  //bot
document.getElementById("chatresponse").innerHTML =document.getElementById("chatresponse").innerHTML+"<br>"+"<b>"+"<br>"+"bot--"+ x+"</b>";
 document.getElementById("fname").value=""; 
 
 //document.getElementById("fname").value=document.getElementById("UserPrint").style.length;
}
}
//drag
// Make the DIV element draggable:
dragElement(document.getElementById("inputs"));
//dragElement(document.getElementById("inputsheader"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}