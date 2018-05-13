


var menu='<ul id=menu class=menu>' +

   '<li ><a href="index.html" >בית</a>' +

   '<li ><a href="about.html" >על עצמי</a>' +


  '<li ><a href="firstgame.html" >הראשון ברשת</a>' +


  '<li ><a href="#Dont Tuch This">משחקי נוסטלגיה</a>' +

  	'<ul  class=submenu >' +

 	'<li style="margin-bottom : 5px"><a href="vikings.html">Vikings</a>' +

 	'<li ><a href="warcraft.html">Warcraft</a>' +

   '</ul>' +

'<li  ><a href="#Not A Real Ref" >משחקי רשת</a>' +

  	'<ul  class=submenu >' +

 	'<li style="margin-bottom : 5px"><a href="overwatch.html">OverWatch</a>' +

 	'<li style="margin-bottom : 5px"><a href="hearthstone.html">HearthStone</a>' +

 	'<li style="margin-bottom : 5px"><a href="starcraft2.html">StarCraft 2</a>' +

 	'<li ><a href="diablo.html">Diablo 3</a>' +

   '</ul>' +

'<li  ><a href="gallery.html" >גלריה</a>' +

 '<li style="border-left : none"><a href="contact.html">צור קשר</a>' 


 '</ul>'


 function mark() {

	page=window.location.href ;// page url

	var obj=document.getElementById("menu") ;

	var elements = obj.getElementsByTagName("a")

	for (i=elements.length-1;  i> 0 ; i--) {

	var ch=page.indexOf(elements[i].href) ;

	if (ch >= 0 ) break ; }  //

	elements[i].className = 'current';

	var objli=elements[i].parentNode.parentNode ;

	if  (objli.id=="menu"){elements[i].parentNode.className='current';return }

	document.getElementById("side").innerHTML=objli.innerHTML ;

	objli.parentNode.className = 'current';

}




function openModal() {
  	document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  	document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  	showSlides(slideIndex += n);
}

function currentSlide(n) {
  	showSlides(slideIndex = n);
}

function showSlides(n) {
  	var i;
  	var slides = document.getElementsByClassName("mySlides");
  	var dots = document.getElementsByClassName("demo");
  	var captionText = document.getElementById("caption");
  	if (n > slides.length) {slideIndex = 1}
  	if (n < 1) {slideIndex = slides.length}
  	for (i = 0; i < slides.length; i++) {
      	slides[i].style.display = "none";
  	}
  	for (i = 0; i < dots.length; i++) {
      		dots[i].className = dots[i].className.replace(" active", "");
  	}
  	slides[slideIndex-1].style.display = "block";
  	dots[slideIndex-1].className += " active";
  	captionText.innerHTML = dots[slideIndex-1].alt;
}

function goBack() {
    window.history.go(-1);
}

