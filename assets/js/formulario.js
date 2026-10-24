/*
	Formulario de propuestas: valida que todos los campos estén llenos y
	muestra una confirmación. Todavía no hay un servidor que reciba los datos,
	así que el envío se simula.
*/

(function() {

	var form = document.getElementById('form-propuesta'),
		mensaje = document.getElementById('form-mensaje');

	if (!form || !mensaje)
		return;

	var campos = form.querySelectorAll('input[required], textarea[required]');

	// Un campo con solo espacios cuenta como vacío.
		campos.forEach(function(campo) {
			campo.addEventListener('input', function() {
				campo.setCustomValidity('');
				mensaje.hidden = true;
			});
		});

	form.addEventListener('submit', function(event) {

		event.preventDefault();

		var valido = true;

		campos.forEach(function(campo) {
			if (campo.value.trim() === '') {
				campo.setCustomValidity('Completa este campo.');
				valido = false;
			}
		});

		if (!valido || !form.checkValidity()) {
			form.reportValidity();
			return;
		}

		form.reset();
		mensaje.textContent = '¡Gracias! Tu propuesta fue enviada correctamente.';
		mensaje.hidden = false;

	});

})();