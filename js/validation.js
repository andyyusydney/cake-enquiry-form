var form  = document.getElementsByTagName('form')[0];
var sendBtn = document.getElementsByName('send')[0];

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
			if (!e.target.value) {
				e.target.setCustomValidity("This field cannot be left blank");
			} else if (!e.target.validity.valid) {
				switch (e.target.id) {
					case 'email':
						e.target.setCustomValidity("Please enter a valid email address");
						break;
					default:
						break;
				}
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
});

form.addEventListener("submit", function (event) {
	var celebrationTypeValue = document.querySelector('input[name="celebration_type"]:checked').value;
	
	if (celebrationTypeValue === 'other') {
		var other = document.getElementById('other_type');
		var error = document.getElementsByClassName('error');
		if (!other.value) {
			error[0].innerHTML = "Please enter a value for the other celebration type";
			event.preventDefault();
		} else {
			error[0].innerHTML = "";
		}
	}
});