(function() {

	var dialog = document.getElementById('lightbox');

	// Sin soporte de <dialog>, los enlaces abren la imagen directamente.
		if (!dialog || typeof dialog.showModal !== 'function')
			return;

	var image = dialog.querySelector('img'),
		caption = dialog.querySelector('figcaption'),
		closeButton = dialog.querySelector('.lightbox-close');

	// Abrir al hacer clic en una imagen.
		document.querySelectorAll('#main a.image').forEach(function(link) {

			link.addEventListener('click', function(event) {

				var thumbnail = link.querySelector('img');

				event.preventDefault();

				image.src = link.getAttribute('href');
				image.alt = thumbnail ? thumbnail.alt : '';
				caption.textContent = image.alt;

				dialog.showModal();

			});

		});

	// Cerrar con el botón o haciendo clic fuera de la imagen.
		closeButton.addEventListener('click', function() {
			dialog.close();
		});

		dialog.addEventListener('click', function(event) {
			if (event.target === dialog)
				dialog.close();
		});

		dialog.addEventListener('close', function() {
			image.removeAttribute('src');
		});

})();