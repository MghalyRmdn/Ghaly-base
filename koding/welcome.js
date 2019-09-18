// var n = prompt("Masukan nama anda:");
// var c = confirm("Hallo"+n+"!Apakah Saya Tampan?");
// if (c == true) {
// 	alert("Sekian,Terima Kasih!");
// }else{
// 	alert("Oke,I'm Fine");
// }
var $form = document.queryselector ('.form');
var $error = document.queryselector('.error');
var $inputfields = document.queryselectorAll('.input-field');
var $email = document.getElementbyId('email');
var $password = document.getElementbyId('password');

	function addError(message){
		$error.innerHTML = message;
		$error.style.display = 'block';
	}

	function removeError(){
		$error.innerHTML = message;
		$error.style.display = 'hidden';
	}
	 function validate(event){
	 	// event.preventDefault() untuk tidak menjalankan fungsi form
	 	event.preventDefault();
	 	$eror.style.display = 'none';
	 }

	  if ($email.value !== 'mochammadghaly@gmail.com' || $password.value !== 'password') {
	  	 addError('Email or Password isnt correct');
	  } else{
	  	removeError();
	  	alert('Your a succes');
	  }

	 $form.addeventListener('submit', validate);