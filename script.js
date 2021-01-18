
var elem;
var inView;
var i;
var row;
var imageCells;



var array= document.getElementsByClassName("dropdown");



function isOut(elem) {
	//prevents an issue where the translate property sometimes caused the hiding of the first button
	if(elem==elem.parentElement.firstElementChild){
		//console.log("hi");
		return false;
	}
	// Get element's bounding
	elem.style.display="flex";
	var bounding = elem.getBoundingClientRect();
	// Check if it's out of the viewport on each side
	var out = {};
	out.top = bounding.top < 0;
	out.left = bounding.left < 0;
	out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
	out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
	out.any = out.top || out.left || out.bottom || out.right;
	//console.log(out, bounding);
	return out.any;

};
function hideOuts(){
	
	//console.log("happened");
	for (var i = 0; i < array.length; i++){
		elem=array[i];
		inView=isOut(elem);
		//console.log("inView is", elem, inView);

		if(inView){

			elem.style.display="none";
			}

			else {
				elem.style.display="flex";
			}
		
	};
	if(document.getElementsByClassName("no_image")[0]){
		heightFix();
	}
	if(document.getElementsByClassName("imageCell").length){
		
		imageFix();
	}
}

function heightFix(){ //used to make the height of a tr without an image the same as the other trs
	
	row= document.getElementsByClassName("no_image")[0];
	//imageCells= document.getElementsByClassName("imageCell");
	if (row!=null){
		console.log(row);
		var prevRow=row.nextElementSibling.clientHeight;
		console.log(prevRow);
		row.firstElementChild.style.height=prevRow;	
	}


	

	

}

function imageFix(){ //used to make all cells have the same height. Fixes the corner case in ed_clients where the height of the image cell is 
//less than the height of the country list		
	var wipo=document.getElementById("wipo");
	wipo.style.height=0; //important, the height has to be 0 at the start for the calc to work
	wipo.style.height=wipo.nextElementSibling.offsetHeight-wipo.offsetHeight;

}



hideOuts();
heightFix();


window.onresize = hideOuts;
//window.onresize = heightFix;

function openTab(evt, tabName) { //opens the tabcontent area that corresponds to a tab on pages that have the red tab area
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}



if(document.getElementById("pdf")!=null){ //if they click off a pdf link it will close
	var pdf=document.getElementById("pdf");
	window.addEventListener('click', function(e){ 
		 
		if(pdf.style.display=="block" & e.target.className!="pdfLink"){
	  		pdf.style.display="none"
		}

	});
}


function openPdf(elem){ //Makes the iframe visible when a pdf needs to be loaded
 	var pdf=document.getElementById("pdf");
	pdf.attributes[0].value=elem.id;
	pdf.style.display="block";
		
}

function sendEmail(){
	
	if (document.getElementById("subject").value=="" || document.getElementById("fname").value=="" ||
		document.getElementById("lname").value=="" || document.getElementById("company").value=="")
	{
		alert("One or more fields are not filled out");
		return;
	}
	var email=document.getElementById("email")
	email.attributes[0].value="mailto";
	var subject=document.getElementById("subject").value;
	var company=" at "+document.getElementById("company").value;


	var string="";
	for(var i=0; i<4; i++)
	{
		string+="%0d%0a";
	}
	var name=string+"- "+document.getElementById("fname").value+" "+document.getElementById("lname").value
	var msg=encodeURIComponent(document.getElementById("msg").value);
	//console.log(value);
	//value = value.replace(' ', '%');
	email.attributes[0].value+=":astevens@fipgllc.com?"+"subject="+subject+"&body="+msg+name+company;
	setTimeout(function(){ email.attributes[0].value="#"; }, 500);
	
}

 

 





















