// form.js

// function validateForm {
//	if };
	
// To use ECMA-262 5.1, uncomment the below line:
"use strict"; 	

var contactName = getElementById("contactName");
var contactEmail = getElementById("contactEmail");
var message = getElementbyId("message");

function onclick(event)
		send() {
	if 	contactName != '' &
		contactEmail !='' &
		message !='' &
		message !=''
		
			{alert("You are on the right track.")}
	
	else {
		alert("All fields are required to send your message.")
		}
	}	

/*
function onclick(sendButton) {
	if 	document.forms["contactForm"]["contactName"] != '' &
		document.forms["contactForm"]["contactEmail"] !='' &
		doucument.forms["contactForm"]["subject"] !='' &
		document.forms["contactForm"]["message"] !=''
		
			{alert("You are on the right track."}
	
	else {
		alert("All fields are required to send your message.")
		}
	}	
*/		
	
	
	
/*

	<script type="text/javascript">
		"use strict"; 	

		var contactName = getElementById("contactName").value;
		var contactEmail = getElementById("contactEmail").value;
		var message = getElementbyId("message").value;

		function validateForm() {
			if 	contactName='' || contactName=null &
				contactEmail !='' &
				message !='' &
				message !=''
				
					{alert("You are on the right track.")}
			
			else {
				alert("All fields are required to send your message.")
				}
			}	
	</script>
	
*/


/*

<script type="text/javascript">
		"use strict"; 	

		var contactName = getElementById("contactName").value;
		var contactEmail = getElementById("contactEmail").value;
		var message = getElementbyId("message").value;

		function validateForm() {
			if 	(contactName='' || contactName=null)
					{
					alert("All fields are required to send your message.");
					return false;
					}
			
			else {
				alert("All fields are required to send your message.")
				}
			}	
	</script>
	
*/