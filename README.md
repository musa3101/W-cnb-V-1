# 🐕 Club Español del Ca de Bou — Web 2.0 (CECB)

[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![RSCE](https://img.shields.io/badge/RSCE-Colaborador_Oficial-E63946)](https://www.rsce.es/)
[![FCI](https://img.shields.io/badge/FCI-Estándar_Nº_249-1D3557)](https://www.fci.be/)
[![Branch](https://img.shields.io/badge/Branch-dev%20%7C%20main-2A9D8F)](https://github.com/musa3101/W-cnb-V-1)

Plataforma oficial moderna, accesible y de alto rendimiento para el **Club Español del Ca de Bou** (Perro Dogo Mallorquín). Diseñada bajo los principios de diseño de **MYNEXT** (Bento Grid, microinteracciones fluidas y tipografía editorial de impacto), preservando el 100% del patrimonio histórico del club sin utilizar imágenes sintéticas de inteligencia artificial.

---

## 🏛️ Estructura del Proyecto y Organización

El repositorio sigue una arquitectura modular y limpia:

```
├── .agents/                 # Reglas y skills de desarrollo para asistentes IA (Antigravity)
│   ├── AGENTS.md            # Reglas maestras de desarrollo y flujo seguro
│   └── skills/              # Habilidades especializadas (gpt-taste, uipro-max, etc.)
├── assets/
│   ├── README.md            # Guía explicativa de gestión de recursos multimedia
│   └── legacy/              # Archivo histórico inmutable de fototeca y documentos originales
├── docs/
│   ├── SESSION_LATEST_ES.md # Resumen en español de la última sesión de desarrollo
│   ├── ROADMAP.md           # Hoja de ruta y estado de tareas (completadas / pendientes)
│   ├── typography.md        # Guía del sistema de tipografías y jerarquía visual MYNEXT
│   └── audit/               # Auditoría técnica de migración y catálogos de activos
├── public/
│   └── assets/              # Activos estáticos en producción servidos por Vite
│       ├── docs/            # Documentos normativos oficiales descargables (.doc)
│       └── media/           # Galería optimizada de campeones históricos y logos
├── src/
│   ├── components/          # Arquitectura modular de interfaz de usuario (UI)
│   │   ├── Header.js        # Cabecera institucional y navegación adaptativa
│   │   ├── Hero.js          # Portada monumental y arquetipo de referencia
│   │   ├── BentoGrid.js     # Crónica histórica Balear (S. XIII) y FCI 249
│   │   ├── Standard.js      # Anatomía morfológica y expedientes oficiales
│   │   ├── Champions.js     # Salón de campeones con filtros de género
│   │   ├── Monographics.js  # Monográficas nacionales con buscador en vivo
│   │   ├── Breeders.js      # Directorio oficial de criadores acreditados
│   │   ├── MembershipForm.js# Formulario oficial de afiliación y credencial
│   │   ├── Footer.js        # Pie de página institucional y sellos oficiales
│   │   ├── MobileDock.js    # Dock inferior de acceso rápido para móviles
│   │   └── index.js         # Exportación centralizada de componentes
│   ├── data/                # Bases de datos reactivas en Javascript
│   │   ├── breeders.js      # Directorio oficial de criadores con afijo
│   │   ├── champions.js     # Salón histórico de campeones (1991 - 2014)
│   │   ├── monographics.js  # Registro cronológico de Exposiciones Monográficas
│   │   └── standard.js      # Estándar oficial FCI Nº 249 y desglose morfológico
│   ├── index.css            # Estilos globales y tokens con Tailwind CSS v4 (@theme)
│   └── main.js              # Orquestador reactivo de estado y renderizado
├── index.html               # Estructura semántica, accesibilidad y metadatos SEO
├── package.json             # Dependencias del proyecto (Vite, Tailwind)
├── setup.sh                 # Script automatizado para inicio de entorno de desarrollo
└── vite.config.js           # Configuración del empaquetador Vite y plugins
```

---

## ⚡ Características Principales

1. **Fototeca Histórica Auténtica:**
   - Preservación íntegra de los campeones de raza (Tito, Armando, Duc, Chimo, Megaton, Anastasia, etc.).
   - Sin imágenes falsas o razas cruzadas generadas por IA.
2. **Estándar Oficial Interactivo (FCI Nº 249):**
   - Comparador morfológico dinámico con proporciones craneofaciales, alzada y peso.
   - Descarga directa de la *Propuesta de Estándar* y el *Estándar Oficial FCI*.
3. **Registro de Monográficas con Búsqueda en Vivo:**
   - Tabla cronológica (1991–2014) con filtrado instantáneo por año, juez o ejemplar BIS.
4. **Directorio Oficial de Criadores:**
   - Clasificación de afijos nacionales e internacionales con enlaces de contacto.
5. **Formulario de Afiliación Digital:**
   - Formulario validado para nuevas altas de socios y ratificación de directiva.
6. **Diseño Premium & Accesibilidad:**
   - Sistema de color canino elegante (`#211A14`, `#8C6843`, `#C89758`, `#FAF7F2`).
   - Jerarquía tipográfica estricta con fuentes editoriales de Google Fonts.
   - Optimizado para SEO con semántica HTML5 y soporte Open Graph.

---

## 🛠️ Instalación y Desarrollo Local

### Requisitos Previos
- **Node.js** v18 o superior.
- **npm** v9 o superior.

### Pasos de Inicio Rápido

```bash
# 1. Clonar el repositorio
git clone https://github.com/musa3101/W-cnb-V-1.git
cd W-cnb-V-1

# 2. Cambiar a la rama de desarrollo
git checkout dev

# 3. Opción A: Usar el script de automatización de MYNEXT
bash setup.sh

# 3. Opción B: Manual
npm install
npm run dev
```

El servidor local estará disponible en: `http://localhost:3000/` (o el puerto configurado por Vite).

---

## 🚀 Compilación para Producción

Para compilar el proyecto optimizado para despliegue (Cloudflare Pages, Vercel, Netlify o servidor Nginx):

```bash
npm run build
```

El resultado se generará en la carpeta `dist/`, completamente optimizado, minificado y comprimido.

---

## 📜 Licencia y Afiliaciones

- **Entidad:** Club Español del Ca de Bou (CECB) — NIF G-07611197.
- **Entidades Rectoras:** Real Sociedad Canina de España (RSCE) y Fédération Cynologique Internationale (FCI).
- **Código y Diseño:** Proyecto Web 2.0 desarrollado bajo estándares de MYNEXT.