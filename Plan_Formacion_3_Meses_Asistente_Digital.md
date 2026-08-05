# Plan de Formación — Asistente de Operaciones Digitales
## 3 Meses · 1 Hora al Día · Autónomo · Julio–Octubre 2026

*Aplica al ecosistema NAOS co & Oscar Marulanda + crecimiento general en desarrollo web.*

---

## Cómo usar este plan

- **1 hora al día, 7 días a la semana.** Si un día no puedes, no acumules — retoma al día siguiente donde quedaste.
- **70% práctica, 30% teoría.** Cada semana tiene lecciones + una tarea aplicada al ecosistema real de NAOS.
- **Documenta todo.** Abre un Google Doc o Notion y anota: qué aprendiste, qué no entendiste, qué hiciste.
- **Usa Claude.** Cuando no entiendas algo, pregúntale a Claude. Formular bien la pregunta es parte del entrenamiento.
- **No saltes semanas.** Cada semana construye sobre la anterior.

---

## Recursos principales (todos gratuitos)

| Recurso | URL | Para qué |
|---|---|---|
| The Odin Project — Foundations | https://www.theodinproject.com/paths/foundations/courses/foundations | HTML, CSS, Git, JS básico |
| freeCodeCamp — Responsive Web Design | https://www.freecodecamp.org/learn/responsive-web-design-v9 | HTML/CSS con certificación |
| javascript.info | https://javascript.info/ | JavaScript moderno — referencia |
| Google Skillshop — GA4 | https://skillshop.withgoogle.com/ | Google Analytics 4 oficial |
| Analytics Mania — GA4 Fundamentals | https://www.analyticsmania.com/courses/free-google-analytics-fundamentals-course/ | GA4 mini-curso con certificado |
| MDN Web Docs | https://developer.mozilla.org/es/ | Referencia técnica HTML/CSS/JS |
| W3Schools | https://www.w3schools.com/ | Referencia rápida + ejercicios |
| Measure School (YouTube) | https://www.youtube.com/@MeasureSchool | GA4 en video — práctico |
| Kevin Powell (YouTube) | https://www.youtube.com/@KevinPowell | CSS moderno — excelente |
| Traversy Media (YouTube) | https://www.youtube.com/@TraversyMedia | Tutoriales web general |

---

## MES 1 — FUNDAMENTOS: HTML, CSS, Herramientas

**Meta del mes:** Poder abrir, leer, editar y probar localmente cualquier archivo HTML/CSS del ecosistema NAOS.

---

### SEMANA 1 — Setup + HTML básico

**Objetivo:** Tener el entorno listo y entender la estructura de un documento HTML.

| Día | Tiempo | Actividad | Recurso |
|---|---|---|---|
| 1 | 60 min | Instalar VS Code. Instalar extensiones: Live Server, Prettier, HTML CSS Support. Crear una carpeta `naos-training/`. Crear un archivo `index.html` vacío y abrirlo con Live Server. | https://code.visualstudio.com/download |
| 2 | 60 min | The Odin Project: "How This Course Will Work" + "Introduction to Web Development" + "Motivation and Mindset" | https://www.theodinproject.com/paths/foundations/courses/foundations |
| 3 | 60 min | The Odin Project: "How Does the Web Work?" + "Installation Overview" (solo leer, ya tienes VS Code) | Mismo link — sección "Installations" |
| 4 | 60 min | freeCodeCamp: empezar módulo "Learn HTML by Building a Cat Photo App" — hacer las primeras 30 lecciones | https://www.freecodecamp.org/learn/responsive-web-design-v9 |
| 5 | 60 min | freeCodeCamp: continuar Cat Photo App — completar las 69 lecciones | Mismo módulo |
| 6 | 60 min | **TAREA NAOS:** Descargar el archivo `naosco.com/corp/index.html` (Oscar te lo envía). Abrirlo en VS Code. Identificar y anotar: dónde están los `<h1>`, `<h2>`, `<p>`, `<a>`, `<img>`, `<form>`. Escribir en tu documento un "mapa" de la página: qué sección tiene qué etiquetas. | Archivo real de NAOS |
| 7 | 60 min | Repasar lo aprendido. Leer MDN: "Introducción a HTML" (versión español) | https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content |

---

### SEMANA 2 — HTML formularios + CSS básico

**Objetivo:** Entender formularios HTML (los que usan todas las landings de NAOS) y empezar con CSS.

| Día | Tiempo | Actividad | Recurso |
|---|---|---|---|
| 1 | 60 min | freeCodeCamp: "Learn Basic CSS by Building a Cafe Menu" — primeras 40 lecciones | https://www.freecodecamp.org/learn/responsive-web-design-v9 |
| 2 | 60 min | freeCodeCamp: completar Cafe Menu (91 lecciones total) | Mismo módulo |
| 3 | 60 min | freeCodeCamp: "Learn HTML Forms by Building a Registration Form" — completar | Mismo currículo, siguiente módulo |
| 4 | 60 min | Kevin Powell YouTube: "CSS for beginners" — ver un video de 20 min, luego practicar cambiando colores y fonts en tu `index.html` local | https://www.youtube.com/@KevinPowell — buscar "Learn CSS in 20 minutes" |
| 5 | 60 min | **TAREA NAOS:** En el `index.html` del corp que descargaste la semana pasada, identificar todos los `<form>` y sus campos (`<input>`, `<select>`, `<textarea>`). Anotar: qué campo captura qué dato, qué `name` tiene cada uno, qué es `required`. | Archivo real de NAOS |
| 6 | 60 min | freeCodeCamp: "Learn Accessibility by Building a Quiz" | Siguiente módulo en el currículo |
| 7 | 60 min | Practicar: crear un formulario HTML simple con 4 campos (nombre, email, ciudad, mensaje) + un botón de enviar. Estilizar con CSS básico usando los colores NAOS: `#0d393b`, `#a6804e`, `#ede8d9`. | Práctica local |

---

### SEMANA 3 — CSS Flexbox + Chrome DevTools

**Objetivo:** Entender layout con Flexbox (así están armadas las landings) y aprender a inspeccionar páginas.

| Día | Tiempo | Actividad | Recurso |
|---|---|---|---|
| 1 | 60 min | freeCodeCamp: "Learn the CSS Box Model by Building a Rothko Painting" | Siguiente módulo |
| 2 | 60 min | freeCodeCamp: "Learn CSS Flexbox by Building a Photo Gallery" | Siguiente módulo |
| 3 | 60 min | The Odin Project: lección "Flexbox" (la sección completa de Foundations) | https://www.theodinproject.com/paths/foundations/courses/foundations — sección Flexbox |
| 4 | 60 min | Chrome DevTools: tutorial práctico. Abrir `naosco.com/corp/` en Chrome → clic derecho → Inspeccionar. Explorar pestaña Elements (cambiar textos y colores en vivo), Console (ver errores), Network (ver qué archivos carga). | Google: "Chrome DevTools overview" → https://developer.chrome.com/docs/devtools/overview |
| 5 | 60 min | **TAREA NAOS:** Usando Chrome DevTools en `naosco.com/corp/`, cambiar visualmente (sin guardar) el color del botón principal a `#186d48`, cambiar un headline, y tomar screenshot. Esto es para practicar inspección — nada se guarda. | DevTools en el sitio live |
| 6 | 60 min | freeCodeCamp: "Learn Typography by Building a Nutrition Label" | Siguiente módulo |
| 7 | 60 min | Repaso semanal. Crear un mini layout con Flexbox: 3 tarjetas en fila con imagen + texto + botón, usando colores NAOS. | Práctica local |

---

### SEMANA 4 — CSS Grid + Responsive + FTP

**Objetivo:** Entender responsive design y hacer tu primer upload por FTP.

| Día | Tiempo | Actividad | Recurso |
|---|---|---|---|
| 1 | 60 min | freeCodeCamp: "Learn Responsive Web Design by Building a Piano" | Siguiente módulo |
| 2 | 60 min | freeCodeCamp: "Learn CSS Grid by Building a Magazine" — primeras 40 lecciones | Siguiente módulo |
| 3 | 60 min | Completar CSS Grid Magazine | Mismo módulo |
| 4 | 60 min | Instalar FileZilla. Conectarse al servidor de NAOS (Oscar te da credenciales FTP). Navegar la estructura de `public_html/`: identificar carpetas `/corp/`, `/cacao/`, `/signature/`, `/cotizador/`. NO MODIFICAR NADA — solo explorar y anotar. | https://filezilla-project.org/download.php |
| 5 | 60 min | **TAREA NAOS:** Oscar te envía una imagen nueva para una landing. Tu tarea: comprimirla en https://squoosh.app/ (target: <200KB), renombrarla a minúsculas con guiones (ej: `experiencia-cafe.jpg`), subirla por FTP a una carpeta de prueba que Oscar te indique. | https://squoosh.app/ |
| 6 | 60 min | Aprender sobre `.htaccess`: qué es, para qué sirve. Leer artículo básico. Abrir el `.htaccess` de NAOS en VS Code (Oscar te envía copia) y anotar qué reglas tiene y para qué sirve cada una (NO editarlo). | https://www.w3schools.com/howto/howto_website_htaccess.asp |
| 7 | 60 min | **EVALUACIÓN MES 1:** Crear una página HTML responsive con: header con logo, sección hero con headline + subtítulo + botón, 3 tarjetas en grid, formulario de contacto, footer. Usar colores y tipografía NAOS. Probar en mobile con DevTools. | Entregable evaluable |

---

## MES 2 — JSON, JavaScript, Google Analytics, Git

**Meta del mes:** Poder editar datos de cotizadores (JSON), entender el JavaScript de tracking, y navegar GA4.

---

### SEMANA 5 — JSON + estructura de cotizadores

**Objetivo:** Dominar JSON — el formato de datos que alimenta todos los cotizadores NAOS.

| Día | Tiempo | Actividad | Recurso |
|---|---|---|---|
| 1 | 60 min | ¿Qué es JSON? Leer tutorial completo. Practicar creando objetos JSON en VS Code. | https://www.w3schools.com/js/js_json_intro.asp (leer todas las páginas de la sección JSON) |
| 2 | 60 min | Instalar extensión "JSON Viewer" en VS Code. Abrir un archivo JSON de cotizador NAOS (Oscar te envía `tarifas-general.json`). Identificar: estructura de experiencias, precios por escala, condiciones, incluye/no incluye. | Archivo real de NAOS |
| 3 | 60 min | Practicar validación: ir a https://jsonlint.com/, pegar el JSON del cotizador, verificar que sea válido. Luego introducir un error a propósito (quitar una coma, quitar una llave) y ver cómo lo detecta. | https://jsonlint.com/ |
| 4 | 60 min | **TAREA NAOS:** Oscar te pide cambiar el precio de una experiencia en un JSON de cotizador. Editar el archivo, validar en jsonlint, comparar con el original, documentar el cambio. NO subir todavía — enviar a Oscar para aprobación. | Archivo real de NAOS |
| 5 | 60 min | Entender cómo el HTML lee el JSON: abrir un cotizador HTML en VS Code y buscar la línea `fetch('tarifas-...json')`. Anotar: ¿qué función carga el JSON? ¿Cómo se transforman los datos en cards visibles? No necesitas entender todo el JS, solo el flujo general. | Archivos reales de NAOS |
| 6 | 60 min | Practicar: crear tu propio JSON con 3 "experiencias" inventadas (nombre, precio, descripción, incluye). Crear un HTML que lo cargue y lo muestre como lista (usa Claude para ayudarte con el JS si lo necesitas). | Práctica local + Claude |
| 7 | 60 min | Repaso: editar el JSON para agregar una experiencia nueva y verificar que aparece en el HTML. | Práctica local |

---

### SEMANA 6 — JavaScript básico (lectura)

**Objetivo:** Leer y entender JavaScript existente en las landings — NO escribir desde cero todavía.

| Día | Tiempo | Actividad | Recurso |
|---|---|---|---|
| 1 | 60 min | javascript.info: Capítulo 2.1 "Hello, world!" + 2.2 "Code structure" + 2.3 "The modern mode, 'use strict'" | https://javascript.info/hello-world |
| 2 | 60 min | javascript.info: 2.4 "Variables" + 2.5 "Data types" + 2.6 "Interaction: alert, prompt, confirm" | https://javascript.info/variables |
| 3 | 60 min | javascript.info: 2.7 "Type Conversions" + 2.8 "Basic operators" + 2.9 "Comparisons" | https://javascript.info/type-conversions |
| 4 | 60 min | javascript.info: 2.10 "Conditional branching: if, '?'" + 2.13 "While and for loops" + 2.15 "Functions" | https://javascript.info/ifelse |
| 5 | 60 min | **TAREA NAOS:** Abrir el HTML del corp landing. Encontrar la función `logToSheets()`. Leer línea por línea y anotar en tu doc: qué hace cada línea, qué variables usa, a dónde envía los datos. Usa Claude si algo no está claro. | Archivo real de NAOS |
| 6 | 60 min | Leer las funciones `sendWA()` y el código del formulario del corp landing. Anotar: ¿qué campos captura? ¿Cómo arma el mensaje de WhatsApp? ¿Qué pasa si el pixel falla (`onerror`)? | Archivo real de NAOS |
| 7 | 60 min | javascript.info: 2.18 "JavaScript specials" (repaso general). Luego: DOM basics → 1.1 "Browser environment, specs" + 1.2 "DOM tree" | https://javascript.info/browser-environment |

---

### SEMANA 7 — Google Analytics 4

**Objetivo:** Navegar GA4, entender eventos, y verificar tracking de NAOS.

| Día | Tiempo | Actividad | Recurso |
|---|---|---|---|
| 1 | 60 min | Analytics Mania: curso gratuito GA4 Fundamentals — Lecciones 1-3 (qué es GA4, interfaz, navegación) | https://www.analyticsmania.com/courses/free-google-analytics-fundamentals-course/ |
| 2 | 60 min | Analytics Mania: Lecciones 4-6 (eventos, parámetros, conversiones) | Mismo curso |
| 3 | 60 min | Analytics Mania: completar el curso + quiz de 30 preguntas | Mismo curso |
| 4 | 60 min | Google Skillshop: crear cuenta en Skillshop, inscribirse en "Google Analytics for Beginners" (GA4). Empezar módulo 1. | https://skillshop.withgoogle.com/ → buscar "Google Analytics" |
| 5 | 60 min | **TAREA NAOS:** Oscar te da acceso Viewer a GA4 (G-RWKVZ92Y5M — Corp/Cacao). Entrar a la propiedad. Encontrar: Informes → Adquisición → cuántos usuarios llegaron esta semana. Ir a Configurar → Eventos → encontrar los eventos `lead_corp`, `lead_cacao`. Anotar todo lo que ves. | GA4 real de NAOS |
| 6 | 60 min | Aprender DebugView: instalar extensión "Google Analytics Debugger" en Chrome. Abrir `naosco.com/corp/` con la extensión activa. Ver los eventos dispararse en tiempo real en GA4 → Admin → DebugView. | Extensión Chrome + GA4 |
| 7 | 60 min | Google Skillshop: completar módulo 2 de "Google Analytics for Beginners" | Mismo curso |

---

### SEMANA 8 — Git básico + Google Sheets de leads

**Objetivo:** Control de versiones local y entender las hojas de datos de NAOS.

| Día | Tiempo | Actividad | Recurso |
|---|---|---|---|
| 1 | 60 min | The Odin Project: sección "Git Basics" — "Introduction to Git" + "Git Basics" | https://www.theodinproject.com/paths/foundations/courses/foundations — sección Git |
| 2 | 60 min | Practicar: crear un repositorio Git local en tu carpeta `naos-training/`. Hacer 3 commits con cambios en tu HTML de práctica. Entender `git add`, `git commit`, `git log`, `git diff`. | Terminal / Git Bash |
| 3 | 60 min | Crear cuenta en GitHub. Subir tu repositorio local. Entender la diferencia entre local y remoto. | https://github.com/ |
| 4 | 60 min | **TAREA NAOS:** Oscar te da acceso a las Google Sheets de leads. Abrir la hoja de Corp. Entender cada columna: Timestamp, Nombre, Email, Empresa, Teléfono, Canal, PR_code, etc. Crear una tabla resumen: cuántos leads por semana, cuántos por canal. | Google Sheets real |
| 5 | 60 min | Abrir la hoja de Cotizadores. Comparar estructura con la de Corp. Anotar diferencias: campos extra (agente, comisión, tipo de solicitud). | Google Sheets real |
| 6 | 60 min | Aprender Google Sheets: fórmulas básicas para reportes. `COUNTIF`, `COUNTIFS`, `UNIQUE`, filtros. Practicar con los datos reales. | https://www.w3schools.com/googlesheets/ |
| 7 | 60 min | **EVALUACIÓN MES 2:** Entregar: (1) Un JSON de cotizador editado correctamente + validado. (2) Un documento explicando línea por línea qué hace `logToSheets()`. (3) Un reporte de leads de la última semana desde Google Sheets. (4) Screenshot de DebugView mostrando un evento de NAOS. | Entregables evaluables |

---

## MES 3 — JavaScript aplicado, Apps Script, WordPress, Primer build

**Meta del mes:** Poder replicar un cotizador de aliado, operar WordPress, y construir un componente nuevo.

---

### SEMANA 9 — JavaScript DOM + eventos

**Objetivo:** Entender cómo JavaScript manipula la página (esto es lo que hacen todas las landings de NAOS).

| Día | Tiempo | Actividad | Recurso |
|---|---|---|---|
| 1 | 60 min | The Odin Project: "DOM Manipulation and Events" — primera parte (qué es el DOM, seleccionar elementos) | https://www.theodinproject.com/paths/foundations/courses/foundations — sección JavaScript |
| 2 | 60 min | javascript.info: 1.3 "Searching: getElement*, querySelector*" + 1.6 "Attributes and properties" | https://javascript.info/searching-elements-dom |
| 3 | 60 min | javascript.info: 1.7 "Modifying the document" + 2.1 "Introduction to browser events" | https://javascript.info/modifying-document |
| 4 | 60 min | Práctica: crear un formulario HTML que al hacer submit capture los valores de los campos, los muestre en consola, y cambie un texto en la página con los datos ingresados. | Práctica local |
| 5 | 60 min | **TAREA NAOS:** En un cotizador HTML de NAOS, encontrar dónde el JS lee el JSON y genera las cards de experiencias dinámicamente. Trazar el flujo: `fetch JSON` → `parse` → `forEach` experiencia → `createElement` card → `appendChild`. Documentar. | Archivo real de NAOS |
| 6 | 60 min | Entender `new Image()` como pixel de tracking: por qué funciona, qué pasa con la URL, cómo captura datos sin CORS. Leer la explicación en tu documento de onboarding (Perfil del Rol). | Documentación interna + MDN |
| 7 | 60 min | Práctica: crear un mini formulario que al enviarse dispare un pixel `new Image()` a una URL de prueba (puede ser cualquier imagen), y muestre un mensaje de confirmación. | Práctica local |

---

### SEMANA 10 — Google Apps Script + replicar cotizador

**Objetivo:** Entender Apps Script y replicar un cotizador de aliado completo.

| Día | Tiempo | Actividad | Recurso |
|---|---|---|---|
| 1 | 60 min | ¿Qué es Google Apps Script? Leer intro oficial. Abrir una Google Sheet, ir a Extensiones → Apps Script. Escribir una función `doGet()` básica que devuelva "Hola mundo". | https://developers.google.com/apps-script/overview |
| 2 | 60 min | Oscar te da acceso al Apps Script de NAOS (modo lectura). Leer la función `doGet()` completa: cómo recibe parámetros, cómo escribe en la Sheet, cómo envía email. Anotar línea por línea. | Apps Script real de NAOS |
| 3 | 60 min | Entender el flujo completo de un lead: formulario HTML → pixel GET → Apps Script `doGet()` → Sheet nueva fila → email a `corp@naosco.com`. Dibujar un diagrama de este flujo en papel o digital. | Comprensión integradora |
| 4 | 60 min | **TAREA NAOS — Parte 1:** Oscar te asigna crear un cotizador para un nuevo aliado. Paso 1: copiar `two-travel.html` y renombrarlo. Cambiar variables: nombre del aliado, comisión, tracking identifier. | Archivo real de NAOS |
| 5 | 60 min | **TAREA NAOS — Parte 2:** Crear el JSON de tarifas del nuevo aliado (copiar estructura de otro aliado, actualizar experiencias, precios, condiciones). Validar en jsonlint. | jsonlint.com |
| 6 | 60 min | **TAREA NAOS — Parte 3:** Probar el cotizador localmente con Live Server. Verificar: las cards se renderizan, el formulario envía WhatsApp con datos correctos, los eventos GA4 disparan con el nombre correcto del aliado en DevTools Console. | Local testing |
| 7 | 60 min | Enviar ambos archivos a Oscar para revisión. Documentar: qué cambiaste, qué verificaste, qué falta (deploy). | Entregable para revisión |

---

### SEMANA 11 — WordPress + SEO básico

**Objetivo:** Operar WordPress con Kadence para oscarmarulanda.com.

| Día | Tiempo | Actividad | Recurso |
|---|---|---|---|
| 1 | 60 min | WordPress basics: qué es WordPress, cómo funciona, diferencia entre WordPress.com y WordPress.org (self-hosted). Tutorial introductorio. | https://www.w3schools.com/whatis/whatis_wordpress.asp + https://wordpress.org/documentation/article/wordpress-overview/ |
| 2 | 60 min | Oscar te da acceso Editor a WordPress en oscarmarulanda.com. Navegar el dashboard: Páginas, Entradas, Medios, Plugins, Apariencia. Anotar qué plugins están instalados, qué tema está activo. | WordPress real |
| 3 | 60 min | Kadence Theme: explorar el personalizador (Apariencia → Personalizar). Entender: colores globales, tipografía, header, footer. Cambiar un color de prueba, ver el preview, revertir. | WordPress real |
| 4 | 60 min | Kadence Blocks: crear una página de prueba (borrador, no publicar). Agregar bloques: Row Layout, Advanced Heading, Advanced Button, Info Box. Armar una sección hero con colores NAOS. | WordPress real |
| 5 | 60 min | SEO básico: ¿qué es SEO? ¿Qué es un meta title, meta description, schema markup? Leer artículo introductorio. | https://developers.google.com/search/docs/fundamentals/seo-starter-guide |
| 6 | 60 min | RankMath: abrir el plugin en WordPress. Configurar meta title y description para la página de inicio. Entender el semáforo de SEO (rojo/amarillo/verde). | WordPress real + https://rankmath.com/kb/score-100-in-tests/ |
| 7 | 60 min | **TAREA NAOS:** Crear una página completa en WordPress (borrador) con: hero, sección de servicios (3 cards), testimonios placeholder, CTA con botón a TidyCal, footer. Enviar screenshot a Oscar para revisión. | Entregable evaluable |

---

### SEMANA 12 — Integración completa + evaluación final

**Objetivo:** Conectar todo lo aprendido en un proyecto integrador.

| Día | Tiempo | Actividad | Recurso |
|---|---|---|---|
| 1 | 60 min | Google Search Console: Oscar te da acceso. Navegar la interfaz. Entender: rendimiento (clicks, impresiones, CTR), cobertura (páginas indexadas), sitemaps. | https://search.google.com/search-console/ |
| 2 | 60 min | Crear un `sitemap.xml` manual para las páginas estáticas de naosco.com. Entender el formato XML del sitemap. Enviar el sitemap en Search Console. | https://www.sitemaps.org/protocol.html |
| 3 | 60 min | **PROYECTO FINAL — Parte 1:** Oscar te da un brief para una landing page nueva (marca, objetivo, público, CTA). Proponer la estructura: mapa de secciones, qué va en cada una, flujo del usuario. Enviar propuesta para aprobación. | Brief de Oscar |
| 4 | 60 min | **PROYECTO FINAL — Parte 2:** Construir el HTML — hero + secciones de contenido. Aplicar CSS responsive con Flexbox/Grid. Colores y tipografía de la marca correspondiente. | Build |
| 5 | 60 min | **PROYECTO FINAL — Parte 3:** Agregar formulario con `logToSheets()` (copiar patrón existente, ajustar campos y URL). Agregar tracking GA4 (`gtag('event', ...)` con parámetros custom). Probar todo localmente. | Build |
| 6 | 60 min | **PROYECTO FINAL — Parte 4:** Testing completo. Checklist: ¿funciona en mobile? ¿El formulario envía datos? ¿GA4 recibe el evento en DebugView? ¿Imágenes comprimidas y en minúsculas? ¿Links de WhatsApp correctos? Documentar todo. | Testing + documentación |
| 7 | 60 min | **EVALUACIÓN MES 3:** Entregar: (1) Landing page completa con tracking. (2) Cotizador de aliado funcional. (3) Página WordPress en borrador. (4) Reporte de Google Search Console. (5) Documento con todo lo aprendido y las dudas pendientes. | Entregables finales |

---

## Checklist de cierre — ¿Qué debe saber hacer al terminar?

| # | Competencia | ¿Lo puede hacer solo? |
|---|---|---|
| 1 | Abrir, leer y editar HTML/CSS en VS Code | ☐ |
| 2 | Editar un JSON de cotizador y validarlo en jsonlint | ☐ |
| 3 | Comprimir y renombrar imágenes para web | ☐ |
| 4 | Subir archivos por FTP a HostGator sin errores | ☐ |
| 5 | Inspeccionar una página con Chrome DevTools | ☐ |
| 6 | Leer y explicar qué hace `logToSheets()` | ☐ |
| 7 | Navegar GA4: encontrar eventos, usar DebugView, ver custom dimensions | ☐ |
| 8 | Crear un reporte de leads desde Google Sheets | ☐ |
| 9 | Replicar un cotizador de aliado completo (HTML + JSON) | ☐ |
| 10 | Crear y editar páginas en WordPress con Kadence | ☐ |
| 11 | Configurar meta title/description con RankMath | ☐ |
| 12 | Crear y enviar un sitemap en Search Console | ☐ |
| 13 | Usar Git para tracking de cambios local | ☐ |
| 14 | Usar Claude para resolver dudas técnicas y generar código | ☐ |
| 15 | Documentar cambios en un log compartido | ☐ |

---

## Después del mes 3 — Ruta de crecimiento

Al completar este plan, la persona tiene base sólida para:

**Mes 4–5:** JavaScript intermedio (funciones async, fetch API, manejo de errores) → construir herramientas interactivas como el SGC-EX y el cotizador interno.

**Mes 5–6:** Google Skillshop GA4 Certification (examen gratis, ~75 min). MailerLite setup y secuencias de email. Integraciones formulario → Sheet → email automático.

**Mes 7–8:** React básico (si se orienta hacia proyectos tipo app/guía gastronómica). O WordPress avanzado (custom post types, WooCommerce) si el camino es CMS.

**Recursos para después:**
- The Odin Project Full Stack JavaScript Path: https://www.theodinproject.com/paths/full-stack-javascript
- freeCodeCamp JavaScript Algorithms: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8
- Google Skillshop GA4 Certification: https://skillshop.withgoogle.com/
- Measure School YouTube (GA4 avanzado): https://www.youtube.com/@MeasureSchool

---

*Plan creado Julio 2026 · Ecosistema NAOS co & Oscar Marulanda*
*Revisión sugerida: al final de cada mes, Oscar evalúa progreso y ajusta intensidad.*
