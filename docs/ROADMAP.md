# Roadmap - WEB Ca Na Bou V-1 (Club Español del Ca de Bou 2.0)

## Tareas Completadas
- [x] **Corrección de Encuadre y Fotografías sin Cortes (Paspartú Museo):**
  - [x] Eliminado el recorte rígido `object-cover` que mutilaba cabezas, trofeos y perros en las tarjetas de campeones.
  - [x] Implementación de contención estricta al 100% (`object-contain`) con fondo ambiental difuminado (*blur*).
  - [x] Reencuadre del Hero con proporción 16:10 y placa identificativa inferior para mostrar el perro de cuerpo entero (pezuñas, pecho y cabeza).
- [x] **Rediseño y Despeje de la Cabecera (Header):**
  - [x] Mayor visibilidad, tamaño y relieve al escudo heráldico oficial del CECB.
  - [x] Eliminación del exceso de información e insignias secundarias en la barra principal.
  - [x] Navegación de lujo, aireada y con tipografía institucional clara.
- [x] **Separadores de Página con la Bandera de Mallorca:**
  - [x] Diseño del listón balear: cantón morado con el Castell de Bellver + 4 barras rojas sobre oro mallorquín.
  - [x] Integración entre todas las secciones de la página y en el borde inferior del header fijo.
- [x] **Identidad Visual Oficial de Marca (CECB):**
  - [x] Creación y elección del Escudo Heráldico Balear Vectorial (`logo_fusion_escudo_transparent.png`).
  - [x] Mockups de prestigio (polo bordado 3D, medalla de oro y carnet áureo).
- [x] **Estética Balear Solar (Piedra de Santanyí):**
  - [x] Fondo marfil cálido `#faf8f5`, tarjetas blancas lino y tipografía lapidaria (*Cinzel* x *Marcellus* x *Manrope*).
  - [x] Preservación de 203 activos históricos y galerías con sistema de contingencia.
- [x] **Optimización Full Responsive y Accesibilidad Móvil:**
  - [x] Menú móvil adaptativo, tarjetas monográficas en teléfonos y dock inferior de acceso rápido.
- [x] Entorno local operativo y retenido con seguridad en la rama `dev`.

## Tareas en Progreso
- [ ] Verificación final del usuario de la visualización completa de todas las fotografías.
- [ ] Espera de confirmación explícita para merge a `main` y subida a GitHub/Cloudflare (`git push`).

## Próximas Mejoras Prioritarias
- [ ] Incorporación de nuevas fotografías contemporáneas que aporte la directiva del club.
- [ ] Internacionalización adaptativa (Català / English) con la skill `i18nstack`.
- [ ] Conexión del formulario de membresía a base de datos persistente (Supabase / InsForge).

