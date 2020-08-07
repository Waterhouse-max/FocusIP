
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
}

function heightFix(){ //used to make the height of a tr without an image the same as the other trs
	
	row= document.getElementsByClassName("no_imagne")[0];
	//imageCells= document.getElementsByClassName("imageCell");
	if (row!=null){
		console.log(row);
		var prevRow=row.nextElementSibling.clientHeight;
		console.log(prevRow);
		row.firstElementChild.style.height=prevRow;	
	}
	

	

}

function imageFix(){ //used to make all cells have the same height. Most of the 'height' comes from padding but the hight values can be used to fix minor differences in height
	imageCells= document.getElementsByClassName("imageCell");
	var foop=document.getElementsByClassName("fuck");
	console.log(foop);
	if(imageCells!=null){
		for (i=0; i<imageCells.length; i++){

			if(imageCells[i].nextElementSibling.getBoundingClientRect().height!=imageCells[i].getBoundingClientRect().height){
				//console.log("happened");
				//console.log("next height",imageCells[i].nextElementSibling.getBoundingClientRect().height, "this height",  imageCells[i].getBoundingClientRect().height)	
				imageCells[i].style.height=0;//imageCells[i].nextElementSibling.getBoundingClientRect().height - imageCells[i].getBoundingClientRect().height;	
				//console.log("new this height", imageCells[i].style.height)			
			}	
			
		}
	} 
}



hideOuts();
heightFix();
//imageFix();

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
	console.log("hi");
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

 

 





















