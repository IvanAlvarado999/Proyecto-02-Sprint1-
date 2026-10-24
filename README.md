# Landing Page Comunitaria: Juegos de antes y de ahora

Landing page del proyecto comunitario **"Tradiciones y Niñez en la Comunidad"**, que compara los juegos tradicionales con el entretenimiento de las nuevas generaciones en el sector **Gallegos Lara** (Guayaquil), a partir de entrevistas realizadas durante el evento deportivo del feriado del 9 de Octubre.

- **Sitio publicado:** https://ivanalvarado999.github.io/Proyecto-02-Sprint1-/
- **Documentación completa:** [`Docs/Reporte_Sprint01_Proy02.pdf`](Docs/Reporte_Sprint01_Proy02.pdf) (también en [Word](Docs/Reporte_Sprint01_Proy02.docx))

## 📌 Descripción del proyecto

Se entrevistó a residentes de distintas edades (niños, adultos y adultos mayores) en la calle principal de la Gallegos Lara durante el evento comunitario del 9 de Octubre. Las entrevistas analizan cómo ha cambiado el juego, el impacto de la tecnología y la percepción de seguridad en los espacios públicos. Los resultados se presentan en un sitio web de una sola página, con fotografías y videos del evento.

## 🗂️ Análisis del contenido

A partir de las entrevistas, el contenido del sitio se organizó en estas secciones:

| Sección | Propósito | Contenido |
|---|---|---|
| Cabecera | Captar la atención y presentar el tema | Título, ubicación y fotografía del público del torneo nocturno |
| Contexto | Explicar la actividad y su relevancia | Descripción del levantamiento de información y foto del partido bajo la lluvia |
| Voces de la Comunidad | Mostrar las perspectivas recogidas | Testimonios de adultos mayores y de niños y jóvenes |
| Juegos de Antes vs. de Ahora | Comparar las dinámicas de juego | Trompo, bolichas, rayuela y ensacados frente a celulares y videojuegos |
| Iniciativas Vecinales | Destacar las propuestas de los moradores | Festivales familiares, cierres de calle seguros, juegos de mesa y torneos |
| Galería del Evento | Respaldar visualmente el trabajo de campo | Videos y fotografías de las entrevistas y del torneo, con visor ampliado |
| Pie de página | Recoger propuestas e identificar al equipo | Formulario, institución, materia, integrantes y enlace al repositorio |

## 🧩 Comparación de plantillas (HTML5 UP)

| Criterio | Massively | Spectral | Alpha |
|---|---|---|---|
| Estructura | Orientada a artículos, con entrada destacada y rejilla de tarjetas | Bloques verticales a pantalla completa | Contenedores y tarjetas simétricas |
| Navegación | Menú superior limpio | Menú lateral oculto (*slide-out*) | Barra superior fija con submenús |
| Diseño | Gran fotografía de cabecera y tipografía elegante | Fondos oscuros y degradados | Sobrio y corporativo |
| Adaptabilidad | Reorganiza imágenes y tarjetas con fluidez en móviles | Fluida, pero con fondos pesados | Ligera y adaptable |
| Personalización | Fácil para integrar galerías y bloques de texto | Requiere ajustes de CSS minuciosos | Sencilla, pero visualmente rígida |

**Decisión:** se eligió **Massively** porque está pensada para contar una historia con fotografías, lo que encaja con el relato del evento y las entrevistas. Además, su estructura HTML es sencilla de modificar sin romper el diseño original.

## ✨ Personalización realizada

- Contenido real del evento en lugar de los textos de demostración de la plantilla.
- Fotografías y videos del evento en cada sección, con texto alternativo descriptivo.
- Galería con un video principal, una cuadrícula de seis fotografías y tres videos complementarios.
- Visor de imágenes: al hacer clic en una foto se abre una vista ampliada que se cierra con el botón, con la tecla Esc o haciendo clic fuera de la imagen.
- Corrección de la etiqueta de fecha, que quedaba tapada por las líneas decorativas.
- Se retiraron los botones de Facebook e Instagram y los botones de GitHub enlazan a este repositorio.

## 🛠️ Tecnologías

- **HTML5 semántico** para la estructura del contenido.
- **CSS3** (Flexbox y la rejilla de la plantilla), con los fuentes Sass en `assets/sass/`.
- **JavaScript**: scripts de la plantilla y un visor de imágenes basado en el elemento nativo `<dialog>`.
- **GitHub Pages** para el despliegue.

## 📁 Estructura del repositorio

```
├── index.html              Página principal (landing page)
├── generic.html            Página de ejemplo de la plantilla
├── elements.html           Catálogo de componentes de la plantilla
├── assets/
│   ├── css/                main.css, noscript.css y lightbox.css (visor de imágenes)
│   ├── js/                 Scripts de la plantilla y lightbox.js (visor de imágenes)
│   ├── sass/               Fuentes Sass de los estilos
│   └── webfonts/           Íconos de Font Awesome
├── images/
│   ├── pics/               Fotografías del evento y de las entrevistas
│   └── videos/             Videos del evento y sus imágenes de portada
└── Docs/                   Reporte del proyecto (Word y PDF)
```

## 🚀 Ejecución local

No requiere instalación. Basta con abrir `index.html` en el navegador o servir la carpeta con cualquier servidor estático, por ejemplo:

```bash
python3 -m http.server
```

y abrir http://localhost:8000.

## 👥 Autores

- Mathias Giler
- Iván Alvarado

Escuela Superior Politécnica del Litoral (ESPOL) · Facultad de Ingeniería en Electricidad y Computación (FIEC)
Desarrollo de Aplicaciones Web y Móviles (SOFG1006) · Proyecto 02

## 📄 Créditos y licencia

Plantilla **Massively** de [HTML5 UP](https://html5up.net/massively), distribuida bajo la licencia [Creative Commons Attribution 3.0](https://html5up.net/license) (ver `LICENSE.txt`).
