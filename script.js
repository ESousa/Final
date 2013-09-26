var document1;		
	var document2; 		
		$(document).ready(function ()  
	{
		$("#submitAgreement").attr("disabled", true);  
		scrollCheck();			
		continueButton();		

		$("#agreeLink1").click(function(e) {	
			document1 = true; 					

			console.log("document 1 clicked"); 	
		});

		$("#agreeLink2").click(function(e){		
			document2 = true; 					

			console.log("document 2 clicked2"); 	
		});
		
		// function call of scroll event
			scrollCheck();				
	});

	var objDiv = document.getElementById("agreeScroll");		
	function scrollCheck() {									
		if(document1 == true && document2 == true){				
		if (objDiv.scrollTop == (objDiv.scrollHeight-objDiv.offsetHeight)) { 	
			console.log("scrolled through agreement"); 							
			$("#agree").attr("disabled", false); 								
			$("#notagree").attr("disabled", false); 
		}
	}else{
		objDiv.scrollTop = 0;				
	}
}
	objDiv.addEventListener("scroll", scrollCheck);		


	var agreeRadio = document.getElementById("agree");		
	var notagreeRadio = document.getElementById("notagree");	

	function continueButton()		
	{
		if (agreeRadio.checked)		
		{
		
		// Agreement radio button
			alert("Thank you for agreement\n\n\n Press OK to Continue");		
			$("#submitAgreement").attr("disabled", false);		
			console.log("agree selected"); 						
		}
		// Non agreement radio button
		else if(notagreeRadio.checked)				
		{
		// Message box display
			alert("NON Agreement\n\n\n Press OK then Continue");  
			$("#submitAgreement").attr("disabled", false); 											
			console.log("not agree selected"); 																
		}
			 document.getElementById('submitAgreement').onclick = function() 						
			{
				var ContButton = document.getElementById("submitAgreement");			
					if(ContButton.click)												
				{
					var confirmation = document.getElementById('confirmation');					
					confirmation.style.display = "block";
					var section_1 = document.getElementById('section1');				
					section_1.style.display = "none";	
					var section_2 = document.getElementById('section2');
					section_2.style.display = "none";	
				}
			}

	}

	// radio button click
	agreeRadio.addEventListener("click", continueButton);			
	notagreeRadio.addEventListener("click", continueButton);
