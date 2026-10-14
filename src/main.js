import './index.css';
import { championsData } from './data/champions.js';
import { monographicsData } from './data/monographics.js';
import { breedersData } from './data/breeders.js';
import { breedStandard } from './data/standard.js';

// Estado interactivo de la aplicación
const state = {
  activeSection: 'inicio',
  championFilter: 'all',
  championSearch: '',
  monographicSearch: '',
  breederFilter: 'all',
  membershipCategory: 'Socio Protector',
  mobileMenuOpen: false,
};

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- ======================================================== -->
    <!-- 1. CABECERA INSTITUCIONAL EDITORIAL (Google Stitch)       -->
    <!-- ======================================================== -->
    <header class="bg-[#111317]/85 backdrop-blur-md sticky top-0 z-50 border-b border-[#4f4538]/30 shadow-2xl transition-all">
      <div class="flex justify-between items-center w-full px-4 sm:px-8 lg:px-12 py-3.5 max-w-[1920px] mx-auto">
        
        <!-- Logo e Identidad del Club -->
        <a href="#inicio" class="flex items-center gap-3.5 group">
          <div class="relative w-11 h-11 rounded border border-[#d4a359]/40 bg-[#1a1c1f] flex items-center justify-center p-1 group-hover:border-[#f2be71] transition-colors shadow-md">
            <img src="/assets/logo_club.png" alt="Escudo Oficial CECB" class="w-full h-full object-contain" />
          </div>
          <div class="flex flex-col">
            <span class="font-headline-sm text-lg sm:text-xl font-semibold tracking-wide text-[#f2be71] leading-tight group-hover:text-white transition-colors">
              Club Español del Ca de Bou
            </span>
            <span class="font-pedigree-meta text-[11px] text-[#9c8f7f] tracking-wider uppercase">
              Patronato Canino Oficial · RSCE & FCI
            </span>
          </div>
        </a>

        <!-- Sellos de Acreditación RSCE / FCI -->
        <div class="hidden xl:flex items-center gap-2 pl-4 border-l border-[#4f4538]/40">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#f2be71]/35 bg-[#f2be71]/10 text-[#f2be71] font-label-caps text-[10px]">
            <span class="material-symbols-outlined text-[13px] fill">verified</span>
            RSCE Colaborador
          </span>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#4f4538]/60 bg-[#1e2023] text-[#d3c4b3] font-label-caps text-[10px]">
            FCI N° 249
          </span>
        </div>

        <!-- Navegación de Escritorio -->
        <nav class="hidden lg:flex items-center gap-1 text-sm font-medium">
          <a href="#inicio" class="px-3.5 py-2 rounded text-[#d3c4b3] hover:text-[#f2be71] hover:bg-white/5 transition-colors">Inicio</a>
          <a href="#historia" class="px-3.5 py-2 rounded text-[#d3c4b3] hover:text-[#f2be71] hover:bg-white/5 transition-colors">Historia</a>
          <a href="#anatomia" class="px-3.5 py-2 rounded text-[#d3c4b3] hover:text-[#f2be71] hover:bg-white/5 transition-colors">Estándar FCI</a>
          <a href="#campeones" class="px-3.5 py-2 rounded text-[#d3c4b3] hover:text-[#f2be71] hover:bg-white/5 transition-colors">Campeones</a>
          <a href="#monograficas" class="px-3.5 py-2 rounded text-[#d3c4b3] hover:text-[#f2be71] hover:bg-white/5 transition-colors">Monográficas</a>
          <a href="#criadores" class="px-3.5 py-2 rounded text-[#d3c4b3] hover:text-[#f2be71] hover:bg-white/5 transition-colors">Criadores</a>
        </nav>

        <!-- CTA Directo Expediente de Ingreso -->
        <div class="hidden sm:flex items-center gap-3">
          <a href="#afiliacion" class="btn-primary-gold px-4 py-2 rounded text-xs font-label-caps tracking-wider flex items-center gap-1.5 shadow-md">
            <span>Hazte Socio</span>
            <span class="material-symbols-outlined text-[15px]">badge</span>
          </a>
        </div>

        <!-- Botón Menú Móvil -->
        <button id="mobile-menu-toggle" class="lg:hidden p-2 text-[#d3c4b3] hover:text-white focus:outline-none" aria-label="Abrir navegación">
          <span class="material-symbols-outlined text-2xl">${state.mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      <!-- Menú Desplegable Móvil -->
      <div id="mobile-menu" class="${state.mobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-[#17191e] border-b border-[#4f4538]/40 px-6 py-6 space-y-3">
        <a href="#inicio" class="mobile-nav-link block text-sm font-semibold text-white py-1">Inicio</a>
        <a href="#historia" class="mobile-nav-link block text-sm font-semibold text-white py-1">Historia y Origen Balear</a>
        <a href="#anatomia" class="mobile-nav-link block text-sm font-semibold text-white py-1">Estándar Morfológico FCI 249</a>
        <a href="#campeones" class="mobile-nav-link block text-sm font-semibold text-white py-1">Salón de Campeones</a>
        <a href="#monograficas" class="mobile-nav-link block text-sm font-semibold text-white py-1">Compendio de Monográficas</a>
        <a href="#criadores" class="mobile-nav-link block text-sm font-semibold text-white py-1">Directorio de Criadores</a>
        <div class="pt-4 border-t border-[#4f4538]/30 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img src="/assets/rsce_logo.png" alt="RSCE" class="h-6 w-auto" />
            <img src="/assets/fci_logo.png" alt="FCI" class="h-6 w-auto" />
          </div>
          <a href="#afiliacion" class="btn-primary-gold px-4 py-2 rounded text-xs font-label-caps">Hazte Socio</a>
        </div>
      </div>
    </header>

    <main class="flex-grow">

      <!-- ======================================================== -->
      <!-- 2. HERO MONUMENTAL: MONOGRAFÍA EDITORIAL (Google Stitch)  -->
      <!-- ======================================================== -->
      <section id="inicio" class="relative pt-12 pb-24 lg:pt-20 lg:pb-32 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto border-b border-[#4f4538]/25 overflow-hidden">
        <!-- Luces ambientales de fondo -->
        <div class="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-[#f2be71]/8 rounded-full blur-[140px] pointer-events-none"></div>
        <div class="absolute -bottom-24 left-10 w-96 h-96 bg-[#5e410e]/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          <!-- Columna Izquierda: Mensaje y Autoridad Institucional -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#f2be71]/10 border border-[#f2be71]/30 text-[#f2be71] font-label-caps text-xs">
              <span class="material-symbols-outlined text-[15px] fill">verified</span>
              <span>PATRIMONIO CINOLÓGICO BALEAR · FUNDACIÓN 1991</span>
            </div>

            <h1 class="font-display-hero text-white tracking-tight">
              El legado vivo del perro de presa mallorquín.
            </h1>

            <p class="font-body-lg text-[#d3c4b3] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              "Custodios del carácter noble, la potencia morfológica y la pureza racial del <strong>Dogo Mallorquín (Ca de Bou)</strong> en las Islas Baleares. Fomento de la selección científica, exposiciones monográficas y censo oficial de criadores."
            </p>

            <div class="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#anatomia" class="btn-primary-gold px-6 py-3.5 rounded text-xs font-label-caps flex items-center gap-2 shadow-lg">
                <span>Ver Estándar Oficial FCI</span>
                <span class="material-symbols-outlined text-[16px]">menu_book</span>
              </a>
              <a href="#campeones" class="px-6 py-3.5 rounded border border-[#4f4538] hover:border-[#f2be71]/50 text-white font-label-caps text-xs bg-[#1a1c1f]/80 backdrop-blur-md flex items-center gap-2 transition-all">
                <span>Explorar Salón de Honor</span>
                <span class="material-symbols-outlined text-[16px] text-[#f2be71]">military_tech</span>
              </a>
              <a href="#afiliacion" class="px-4 py-3.5 text-[#f2be71] hover:underline font-label-caps text-xs flex items-center gap-1">
                <span>Expediente de Ingreso 2026 &rarr;</span>
              </a>
            </div>

            <!-- Tira de Métricas Institucionales -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#4f4538]/30 mt-6 max-w-xl mx-auto lg:mx-0 text-left">
              <div>
                <div class="font-headline-sm text-[#f2be71] font-bold text-2xl">1991</div>
                <div class="font-pedigree-meta text-xs text-[#9c8f7f]">Fundación Oficial</div>
              </div>
              <div>
                <div class="font-headline-sm text-[#f2be71] font-bold text-2xl">Nº 249</div>
                <div class="font-pedigree-meta text-xs text-[#9c8f7f]">Estándar FCI</div>
              </div>
              <div>
                <div class="font-headline-sm text-[#f2be71] font-bold text-2xl">35 Años</div>
                <div class="font-pedigree-meta text-xs text-[#9c8f7f]">Custodia Canina</div>
              </div>
              <div>
                <div class="font-headline-sm text-[#f2be71] font-bold text-2xl">G-07611197</div>
                <div class="font-pedigree-meta text-xs text-[#9c8f7f]">NIF Oficial CECB</div>
              </div>
            </div>

          </div>

          <!-- Columna Derecha: Marco Áureo Editorial con Fotografía Canina HD -->
          <div class="lg:col-span-5 relative">
            <div class="gilded-frame p-2 rounded-lg bg-[#1a1c1f]/80 backdrop-blur-md border border-[#f2be71]/35 shadow-2xl">
              <!-- Corner Brackets (Detalle de Monografía de Lujo) -->
              <div class="gilded-bracket-tl"></div>
              <div class="gilded-bracket-tr"></div>
              <div class="gilded-bracket-bl"></div>
              <div class="gilded-bracket-br"></div>

              <div class="relative overflow-hidden rounded aspect-[4/5] bg-[#0c0e11] group">
                <img src="/assets/stitch_hero_dog.png" alt="Ejemplar de Referencia Ca de Bou" class="w-full h-full object-cover object-center filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700" />
                
                <!-- Degradado de viñeta -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#0c0e11]/95 via-transparent to-transparent"></div>

                <!-- Insignia flotante con datos de referencia -->
                <div class="absolute bottom-4 left-4 right-4 p-3.5 rounded bg-[#111317]/90 backdrop-blur-md border border-[#f2be71]/35 flex items-center justify-between">
                  <div>
                    <span class="block font-label-caps text-[10px] text-[#f2be71]">Ejemplar de Referencia Morfológica</span>
                    <span class="font-serif font-bold text-sm text-white">Ch. 'Yak de Almallutx'</span>
                  </div>
                  <div class="text-right">
                    <span class="block font-pedigree-meta text-[11px] text-[#eac081]">LOE: 2198031</span>
                    <span class="font-pedigree-meta text-[11px] text-[#9c8f7f]">Atigrado Dorado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ======================================================== -->
      <!-- 3. ASYMMETRIC BENTO GRID: HISTORIA & REGISTRO LOE        -->
      <!-- ======================================================== -->
      <section id="historia" class="py-24 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto border-b border-[#4f4538]/25">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span class="font-label-caps text-[#f2be71] tracking-[0.18em] block mb-1">
              Crónica Institucional & Linaje Histórico
            </span>
            <h2 class="font-headline-lg text-white">
              Patrimonio Balear & Registro Canino
            </h2>
          </div>
          <p class="font-body-sm text-sm text-[#9c8f7f] max-w-md">
            Custodiando la pureza racial desde la reconquista aragonesa hasta los registros modernos del Libro de Orígenes Español (LOE).
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          <!-- Bento A: Orígenes Siglo XIII (7 Cols) -->
          <div class="md:col-span-2 lg:col-span-7 luxury-monograph-card p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="px-2.5 py-1 rounded bg-[#5e410e]/40 border border-[#eac081]/30 text-[#eac081] font-label-caps text-[10px]">
                  Archivo Histórico Canino
                </span>
                <span class="font-pedigree-meta text-xs text-[#9c8f7f]">Crónicas 1229 – 1900</span>
              </div>
              <h3 class="font-headline-sm text-2xl text-white mb-3">
                Orígenes del Siglo XIII: De la Armada de Jaume I a los Baluartes Insulares
              </h3>
              <p class="text-sm text-[#d3c4b3] leading-relaxed mb-4">
                Tras el desembarco del Rey Conquistador en Santa Ponça, los caballeros de la Orden de Malta y mesnadas aragonesas introdujeron mastines y alanos ibéricos destinados a la custodia castrense. Con el florecimiento marítimo de Palma en los siglos XVII y XVIII, la selección funcional decantó en un perro molosoide compacto, tenaz y equilibrado: el <span class="italic text-[#f2be71]">Dogo Mallorquín o Ca de Bou</span>, guardián incorruptible de las posesiones y hatos bravos.
              </p>
            </div>
            <div class="pt-6 border-t border-[#4f4538]/30 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div class="flex items-center gap-2 text-[#f2be71] font-pedigree-meta">
                <span class="material-symbols-outlined text-[18px]">menu_book</span>
                <span>Monografía Fundacional del Club Canino (1991)</span>
              </div>
              <span class="font-label-caps text-[#9c8f7f]">Tomo I · Documento Oficial</span>
            </div>
          </div>

          <!-- Bento B: Estándar FCI Nº 249 (5 Cols) -->
          <div class="md:col-span-1 lg:col-span-5 luxury-monograph-card p-6 lg:p-8 flex flex-col justify-between border-[#f2be71]/40">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="px-2.5 py-1 rounded bg-[#f2be71]/15 border border-[#f2be71]/35 text-[#f2be71] font-label-caps text-[10px]">
                  FCI Nomenclatura Oficial
                </span>
                <span class="w-2.5 h-2.5 rounded-full bg-[#f2be71] animate-pulse"></span>
              </div>
              <h3 class="font-headline-sm text-2xl text-white mb-2">FCI Standard Nº 249</h3>
              <p class="text-xs text-[#d3c4b3] mb-4">
                Grupo 2: Molosoides tipo Dogo. Sin prueba de trabajo.<br/>
                Marcado dimorfismo sexual con cabeza voluminosa e imponente.
              </p>
              
              <div class="grid grid-cols-2 gap-3 py-3 border-y border-[#4f4538]/30 text-xs">
                <div>
                  <span class="text-[#9c8f7f] block font-label-caps text-[9px]">Alzada Machos</span>
                  <span class="text-white font-bold text-base font-serif">55 – 58 cm</span>
                  <span class="text-[#9c8f7f] text-[11px] block">Peso: 35 – 38 kg</span>
                </div>
                <div>
                  <span class="text-[#9c8f7f] block font-label-caps text-[9px]">Alzada Hembras</span>
                  <span class="text-white font-bold text-base font-serif">52 – 55 cm</span>
                  <span class="text-[#9c8f7f] text-[11px] block">Peso: 30 – 34 kg</span>
                </div>
              </div>
            </div>

            <div class="pt-4 flex items-center justify-between">
              <span class="text-xs text-[#eac081] font-semibold">Dentición: Prognatismo inferior ≤ 10mm</span>
              <a href="#anatomia" class="text-xs font-label-caps text-[#f2be71] hover:underline">Ver Anatomía &rarr;</a>
            </div>
          </div>

        </div>
      </section>

      <!-- ======================================================== -->
      <!-- 4. ANATOMÍA Y ESTÁNDAR MORFOLÓGICO DETALLADO              -->
      <!-- ======================================================== -->
      <section id="anatomia" class="py-24 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto border-b border-[#4f4538]/25 bg-[#0c0e11]">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span class="font-label-caps text-[#f2be71] tracking-[0.18em] block mb-1">
              Morfología Funcional & Juicio Canino
            </span>
            <h2 class="font-headline-lg text-white">Anatomía del Dogo Mallorquín</h2>
          </div>
          <p class="font-body-sm text-sm text-[#9c8f7f] max-w-md">
            Parámetros morfológicos ineludibles fijados por el estándar para la preservación de la tipicidad histórica.
          </p>
        </div>

        <!-- Fila de Descarga Oficial de Documentos Normativos -->
        <div class="mb-12 p-6 rounded-lg bg-[#1a1c1f] border border-[#4f4538]/40 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded bg-[#f2be71]/10 border border-[#f2be71]/30 flex items-center justify-center text-[#f2be71] shrink-0">
              <span class="material-symbols-outlined text-2xl">description</span>
            </div>
            <div>
              <h4 class="font-serif font-bold text-white text-base">Documentación Técnica Canina Oficial</h4>
              <p class="text-xs text-[#9c8f7f]">Descarga los expedientes originales normativos del estándar y propuesta morfológica.</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-3">
            <a href="/assets/docs/ESTANDAR_DE_LA_RAZA_FCI.doc" download class="px-4 py-2.5 rounded border border-[#4f4538] hover:border-[#f2be71] text-xs font-label-caps text-white flex items-center gap-1.5 transition-colors">
              <span class="material-symbols-outlined text-sm text-[#f2be71]">download</span>
              <span>Estándar FCI Nº 249 (.doc)</span>
            </a>
            <a href="/assets/docs/PROPUESTA_DE_ESTANDAR.doc" download class="px-4 py-2.5 rounded border border-[#4f4538] hover:border-[#f2be71] text-xs font-label-caps text-white flex items-center gap-1.5 transition-colors">
              <span class="material-symbols-outlined text-sm text-[#f2be71]">download</span>
              <span>Propuesta Morfológica (.doc)</span>
            </a>
          </div>
        </div>

        <!-- Grilla de Fichas Anatómicas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Card 1: Cabeza -->
          <div class="luxury-monograph-card p-6">
            <div class="flex items-center gap-2 text-[#f2be71] mb-3">
              <span class="material-symbols-outlined text-lg">psychology</span>
              <span class="font-label-caps text-xs">Cráneo y Stop</span>
            </div>
            <h4 class="font-serif font-bold text-lg text-white mb-2">Cabeza Fuerte y Maciza</h4>
            <p class="text-xs text-[#d3c4b3] leading-relaxed">
              El perímetro craneal en machos es superior a la altura a la cruz. Cráneo ancho y casi cuadrado. Stop (depresión naso-frontal) marcadamente acentuado, con maseteros potentes y bien desarrollados.
            </p>
          </div>

          <!-- Card 2: Mandíbula / Prognatismo -->
          <div class="luxury-monograph-card p-6 border-[#f2be71]/40">
            <div class="flex items-center gap-2 text-[#f2be71] mb-3">
              <span class="material-symbols-outlined text-lg">dentistry</span>
              <span class="font-label-caps text-xs">Dentición de Presa</span>
            </div>
            <h4 class="font-serif font-bold text-lg text-white mb-2">Prognatismo Mandibular Inferior</h4>
            <p class="text-xs text-[#d3c4b3] leading-relaxed">
              Mandíbula potente con incisivos inferiores sobrepasando a los superiores (prognatismo moderado no superior a 10 mm). Dientes fuertes, caninos bien separados y nunca visibles con la boca cerrada.
            </p>
          </div>

          <!-- Card 3: Ojos y Orejas -->
          <div class="luxury-monograph-card p-6">
            <div class="flex items-center gap-2 text-[#f2be71] mb-3">
              <span class="material-symbols-outlined text-lg">visibility</span>
              <span class="font-label-caps text-xs">Expresión y Porte</span>
            </div>
            <h4 class="font-serif font-bold text-lg text-white mb-2">Ojos Oscuros & Oreja en Rosa</h4>
            <p class="text-xs text-[#d3c4b3] leading-relaxed">
              Ojos ovalados, grandes y oscuros de mirada penetrante e inteligente. Orejas pequeñas, de inserción alta y dobladas hacia atrás dejando ver el conducto auditivo (oreja en rosa). Queda prohibida la amputación.
            </p>
          </div>

          <!-- Card 4: Cuerpo y Pecho -->
          <div class="luxury-monograph-card p-6">
            <div class="flex items-center gap-2 text-[#f2be71] mb-3">
              <span class="material-symbols-outlined text-lg">accessibility_new</span>
              <span class="font-label-caps text-xs">Estructura Ósea</span>
            </div>
            <h4 class="font-serif font-bold text-lg text-white mb-2">Pecho Profundo & Grupa Inclinada</h4>
            <p class="text-xs text-[#d3c4b3] leading-relaxed">
              Cilindro torácico amplio descendiendo hasta el codo. Costillas arqueadas. Línea dorso-lumbar recta, grupa redondeada que puede elevarse 1-2 cm sobre la cruz, y osamenta densa con aplomos perfectamente paralelos.
            </p>
          </div>

          <!-- Card 5: Capa y Color -->
          <div class="luxury-monograph-card p-6">
            <div class="flex items-center gap-2 text-[#f2be71] mb-3">
              <span class="material-symbols-outlined text-lg">palette</span>
              <span class="font-label-caps text-xs">Manto y Pigmentación</span>
            </div>
            <h4 class="font-serif font-bold text-lg text-white mb-2">Atigrado, Leonado y Negro</h4>
            <p class="text-xs text-[#d3c4b3] leading-relaxed">
              Pelo corto, tupido y áspero al tacto. Se prefieren tonalidades atigradas oscuras a doradas con máscara negra, y leonados intensos. Se admiten pequeñas manchas blancas en el antepecho y pies delanteros.
            </p>
          </div>

          <!-- Card 6: Faltas Descalificatorias -->
          <div class="luxury-monograph-card p-6 border-red-900/40">
            <div class="flex items-center gap-2 text-rose-400 mb-3">
              <span class="material-symbols-outlined text-lg">warning</span>
              <span class="font-label-caps text-xs">Faltas Eliminatorias</span>
            </div>
            <h4 class="font-serif font-bold text-lg text-white mb-2">Desviaciones Tipológicas</h4>
            <p class="text-xs text-rose-200/80 leading-relaxed">
              Mordida en tijera o pinza estricta en adultos, prognatismo superior a 10 mm, ojos amarillos o claros, orejas caídas planas o erguidas, manchas blancas que superen el 30% del cuerpo y temperamento tímido o agresivo.
            </p>
          </div>

        </div>
      </section>

      <!-- ======================================================== -->
      <!-- 5. SALÓN DE CAMPEONES HISTÓRICOS (1991 - 2014)           -->
      <!-- ======================================================== -->
      <section id="campeones" class="py-24 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto border-b border-[#4f4538]/25">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span class="font-label-caps text-[#f2be71] tracking-[0.2em] block mb-1">
              Galería de Honor & Títulos Homologados
            </span>
            <h2 class="font-headline-lg text-white">Salón de Campeones (1991 - 2014)</h2>
          </div>

          <!-- Filtros de Campeones -->
          <div class="flex items-center gap-2">
            <span class="font-label-caps text-xs text-[#9c8f7f] uppercase mr-2">Filtrar:</span>
            <button class="champion-filter-btn px-3.5 py-1.5 rounded font-label-caps text-xs transition-colors ${state.championFilter === 'all' ? 'bg-[#f2be71] text-[#111317]' : 'border border-[#4f4538] text-white hover:border-[#f2be71]'}" data-filter="all">Todos</button>
            <button class="champion-filter-btn px-3.5 py-1.5 rounded font-label-caps text-xs transition-colors ${state.championFilter === 'Macho' ? 'bg-[#f2be71] text-[#111317]' : 'border border-[#4f4538] text-white hover:border-[#f2be71]'}" data-filter="Macho">Machos</button>
            <button class="champion-filter-btn px-3.5 py-1.5 rounded font-label-caps text-xs transition-colors ${state.championFilter === 'Hembra' ? 'bg-[#f2be71] text-[#111317]' : 'border border-[#4f4538] text-white hover:border-[#f2be71]'}" data-filter="Hembra">Hembras</button>
          </div>
        </div>

        <!-- Cuadrícula de Campeones de Lujo -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${getFilteredChampions().map(c => `
            <div class="luxury-monograph-card overflow-hidden flex flex-col group">
              <!-- Marco de Fotografía Original del Archivo -->
              <div class="relative h-64 overflow-hidden bg-[#0c0e11]">
                <img src="${c.image}" alt="${c.name}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute top-3 right-3 px-3 py-1 rounded bg-[#111317]/90 border border-[#f2be71]/40 text-[#f2be71] font-label-caps text-[10px]">
                  ${c.years}
                </div>
                <div class="absolute bottom-3 left-3 px-2 py-0.5 rounded text-[10px] font-label-caps ${c.gender === 'Macho' ? 'bg-blue-950/80 border border-blue-700/60 text-blue-200' : 'bg-rose-950/80 border border-rose-700/60 text-rose-200'}">
                  ${c.gender}
                </div>
              </div>

              <!-- Ficha Genealógica y Laureles -->
              <div class="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <div class="flex items-center gap-1.5 text-[#f2be71] font-label-caps text-[11px] mb-1">
                    <span class="material-symbols-outlined text-[14px] fill">military_tech</span>
                    <span>${c.titles}</span>
                  </div>
                  <h3 class="font-headline-sm text-2xl text-white group-hover:text-[#f2be71] transition-colors">${c.name}</h3>
                  <p class="text-xs text-[#d3c4b3] leading-relaxed mt-2">${c.description}</p>
                </div>

                <div class="pt-3 border-t border-[#4f4538]/30 flex items-center justify-between text-[11px] font-pedigree-meta text-[#9c8f7f]">
                  <span>Fototeca Oficial CECB</span>
                  <span class="text-[#eac081] font-semibold">Registro Homologado</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

      </section>

      <!-- ======================================================== -->
      <!-- 6. EXPOSICIONES MONOGRÁFICAS (1991 - 2014)                -->
      <!-- ======================================================== -->
      <section id="monograficas" class="py-24 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto border-b border-[#4f4538]/25 bg-[#0c0e11]">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span class="font-label-caps text-[#f2be71] tracking-[0.18em] block mb-1">
              Libro de Actas y Resultados CAC
            </span>
            <h2 class="font-headline-lg text-white">Exposiciones Monográficas CECB</h2>
          </div>

          <!-- Buscador en Vivo -->
          <div class="w-full md:w-80">
            <div class="relative">
              <span class="material-symbols-outlined absolute left-3 top-2.5 text-[#9c8f7f] text-lg">search</span>
              <input type="text" id="monographic-search" value="${state.monographicSearch}" placeholder="Buscar por juez, ejemplar o año..." class="w-full pl-10 pr-4 py-2.5 rounded bg-[#1a1c1f] border border-[#4f4538] text-white text-xs placeholder:text-[#9c8f7f] focus:outline-none focus:border-[#f2be71]" />
            </div>
          </div>
        </div>

        <div class="overflow-x-auto rounded-lg border border-[#4f4538]/40 bg-[#111317]">
          <table class="w-full text-left text-xs">
            <thead class="bg-[#1a1c1f] text-[#f2be71] font-label-caps border-b border-[#4f4538]/40">
              <tr>
                <th class="py-4 px-6">Edición / Fecha</th>
                <th class="py-4 px-6">Juez Actuante</th>
                <th class="py-4 px-6">Mejor Macho (CAC)</th>
                <th class="py-4 px-6">Mejor Hembra (CAC)</th>
                <th class="py-4 px-6">Sede</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#4f4538]/25 text-[#d3c4b3]">
              ${getFilteredMonographics().map(m => `
                <tr class="hover:bg-white/5 transition-colors">
                  <td class="py-4 px-6">
                    <span class="font-bold text-white block text-sm font-serif">${m.edition}</span>
                    <span class="text-[#9c8f7f] font-pedigree-meta">${m.date}</span>
                  </td>
                  <td class="py-4 px-6 text-gray-200">${m.judge}</td>
                  <td class="py-4 px-6 font-semibold text-[#f2be71]">${m.male}</td>
                  <td class="py-4 px-6 font-semibold text-rose-300">${m.female}</td>
                  <td class="py-4 px-6 text-[#9c8f7f]">${m.location}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

      </section>

      <!-- ======================================================== -->
      <!-- 7. DIRECTORIO DE CRIADORES OFICIALES                     -->
      <!-- ======================================================== -->
      <section id="criadores" class="py-24 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto border-b border-[#4f4538]/25">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span class="font-label-caps text-[#f2be71] tracking-[0.18em] block mb-1">
              Acreditación y Crianza Ética
            </span>
            <h2 class="font-headline-lg text-white">Criadores Oficiales Socios</h2>
          </div>

          <!-- Filtros de Criadores -->
          <div class="flex items-center gap-2">
            <button class="breeder-filter-btn px-3.5 py-1.5 rounded font-label-caps text-xs transition-colors ${state.breederFilter === 'all' ? 'bg-[#f2be71] text-[#111317]' : 'border border-[#4f4538] text-white hover:border-[#f2be71]'}" data-bfilter="all">Todos</button>
            <button class="breeder-filter-btn px-3.5 py-1.5 rounded font-label-caps text-xs transition-colors ${state.breederFilter === 'Nacional con Afijo' ? 'bg-[#f2be71] text-[#111317]' : 'border border-[#4f4538] text-white hover:border-[#f2be71]'}" data-bfilter="Nacional con Afijo">Nacionales con Afijo</button>
            <button class="breeder-filter-btn px-3.5 py-1.5 rounded font-label-caps text-xs transition-colors ${state.breederFilter === 'Internacional' ? 'bg-[#f2be71] text-[#111317]' : 'border border-[#4f4538] text-white hover:border-[#f2be71]'}" data-bfilter="Internacional">Internacionales</button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${getFilteredBreeders().map(b => `
            <div class="luxury-monograph-card p-6 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="px-2.5 py-0.5 rounded font-label-caps text-[10px] ${b.type === 'Internacional' ? 'bg-purple-950/60 text-purple-200 border border-purple-800/40' : 'bg-[#f2be71]/15 text-[#f2be71] border border-[#f2be71]/30'}">
                    ${b.type}
                  </span>
                  <span class="font-pedigree-meta text-[11px] text-[#9c8f7f]">${b.status}</span>
                </div>
                
                <h3 class="font-headline-sm text-2xl text-white mb-1">${b.name}</h3>
                <div class="font-pedigree-meta text-xs text-[#eac081] mb-3">${b.holders}</div>
                
                <div class="text-xs text-[#9c8f7f] mb-4 flex items-start gap-1.5">
                  <span class="material-symbols-outlined text-sm shrink-0 mt-0.5">location_on</span>
                  <span>${b.location}</span>
                </div>

                <p class="text-xs text-[#d3c4b3] leading-relaxed mb-4">${b.description}</p>
              </div>

              <div class="pt-4 border-t border-[#4f4538]/30 flex items-center justify-between text-xs font-pedigree-meta">
                <a href="tel:${b.phone}" class="text-white hover:text-[#f2be71] flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">call</span>
                  <span>${b.phone}</span>
                </a>
                ${b.website ? `<a href="${b.website}" target="_blank" rel="noopener" class="text-[#f2be71] hover:underline flex items-center gap-1">Web <span class="material-symbols-outlined text-xs">open_in_new</span></a>` : ''}
              </div>
            </div>
          `).join('')}
        </div>

      </section>

      <!-- ======================================================== -->
      <!-- 8. EXPEDIENTE DE AFILIACIÓN (Hazte Socio)                -->
      <!-- ======================================================== -->
      <section id="afiliacion" class="py-24 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto border-b border-[#4f4538]/25 bg-[#0c0e11]">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Columna Izquierda: Información Institucional -->
          <div class="lg:col-span-5 space-y-6">
            <span class="font-label-caps text-[#f2be71] tracking-[0.18em] block">
              Membresía & Tutela Canina
            </span>
            <h2 class="font-headline-lg text-white">Solicitud de Afiliación & Socios Protectores</h2>
            
            <p class="font-body-md text-[#d3c4b3] leading-relaxed">
              Forma parte de la entidad oficial reconocida por la RSCE y la FCI. Apoya la cría ética, la conservación del estándar morfológico original y participa con derechos plenos en las exposiciones monográficas de la raza.
            </p>

            <div class="p-6 rounded-lg bg-[#1a1c1f] border border-[#4f4538]/40 space-y-3 font-pedigree-meta text-xs">
              <h4 class="font-serif font-bold text-white text-sm mb-2 text-[#f2be71]">Privilegios del Socio Acreditado:</h4>
              <div class="flex items-center gap-2 text-[#d3c4b3]">
                <span class="material-symbols-outlined text-[#f2be71] text-base fill">check_circle</span>
                <span>Inscripción preferente y bonificada en Exposiciones Monográficas CAC.</span>
              </div>
              <div class="flex items-center gap-2 text-[#d3c4b3]">
                <span class="material-symbols-outlined text-[#f2be71] text-base fill">check_circle</span>
                <span>Acreditación de Afijo en el Directorio Oficial de Criadores del Club.</span>
              </div>
              <div class="flex items-center gap-2 text-[#d3c4b3]">
                <span class="material-symbols-outlined text-[#f2be71] text-base fill">check_circle</span>
                <span>Voz y voto en la Asamblea General y comisiones de morfología.</span>
              </div>
            </div>

            <div class="p-4 rounded border border-amber-900/40 bg-amber-950/20 text-xs text-amber-200/90 leading-relaxed font-pedigree-meta">
              <strong>Nota estatutaria:</strong> Conforme al acuerdo de Junta Directiva, la cuota anual se mantiene bonificada. Tras enviar el expediente, la secretaría facilitará los datos de ingreso para formalizar la credencial de socio.
            </div>
          </div>

          <!-- Columna Derecha: Formulario Expediente de Ingreso -->
          <div class="lg:col-span-7">
            <div class="gilded-frame p-6 lg:p-8 rounded-lg bg-[#1a1c1f]/90 backdrop-blur-md border border-[#f2be71]/35 shadow-2xl">
              <div class="gilded-bracket-tl"></div>
              <div class="gilded-bracket-tr"></div>
              <div class="gilded-bracket-bl"></div>
              <div class="gilded-bracket-br"></div>

              <h3 class="font-serif font-bold text-xl text-white mb-6 border-b border-[#4f4538]/40 pb-3 flex items-center justify-between">
                <span>Expediente de Ingreso Canino 2026</span>
                <span class="font-label-caps text-[10px] text-[#f2be71]">Formulario Oficial</span>
              </h3>

              <form id="membership-form" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block font-label-caps text-[10px] text-[#9c8f7f] mb-1">Nombre Completo y Apellidos *</label>
                    <input type="text" required placeholder="Ej. Guillermo de Sant Martí" class="w-full px-4 py-2.5 rounded bg-[#111317] border border-[#4f4538] text-white text-xs focus:outline-none focus:border-[#f2be71]" />
                  </div>
                  <div>
                    <label class="block font-label-caps text-[10px] text-[#9c8f7f] mb-1">DNI / NIE / Pasaporte *</label>
                    <input type="text" required placeholder="12345678Z" class="w-full px-4 py-2.5 rounded bg-[#111317] border border-[#4f4538] text-white text-xs focus:outline-none focus:border-[#f2be71]" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block font-label-caps text-[10px] text-[#9c8f7f] mb-1">Correo Electrónico *</label>
                    <input type="email" required placeholder="usuario@entidad.es" class="w-full px-4 py-2.5 rounded bg-[#111317] border border-[#4f4538] text-white text-xs focus:outline-none focus:border-[#f2be71]" />
                  </div>
                  <div>
                    <label class="block font-label-caps text-[10px] text-[#9c8f7f] mb-1">Teléfono de Contacto *</label>
                    <input type="tel" required placeholder="+34 600 000 000" class="w-full px-4 py-2.5 rounded bg-[#111317] border border-[#4f4538] text-white text-xs focus:outline-none focus:border-[#f2be71]" />
                  </div>
                </div>

                <div>
                  <label class="block font-label-caps text-[10px] text-[#9c8f7f] mb-1">Categoría de Membresía *</label>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label class="flex items-center gap-2 p-3 rounded bg-[#111317] border border-[#4f4538] cursor-pointer hover:border-[#f2be71]/50 text-xs">
                      <input type="radio" name="categoria" value="Socio Protector" checked class="text-[#f2be71]" />
                      <span>Socio Protector</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 rounded bg-[#111317] border border-[#4f4538] cursor-pointer hover:border-[#f2be71]/50 text-xs">
                      <input type="radio" name="categoria" value="Criador Oficial" class="text-[#f2be71]" />
                      <span>Criador Oficial</span>
                    </label>
                    <label class="flex items-center gap-2 p-3 rounded bg-[#111317] border border-[#4f4538] cursor-pointer hover:border-[#f2be71]/50 text-xs">
                      <input type="radio" name="categoria" value="Aficionado" class="text-[#f2be71]" />
                      <span>Aficionado / Guía</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label class="block font-label-caps text-[10px] text-[#9c8f7f] mb-1">Nombre de Afijo o Ejemplar Poseído (Opcional)</label>
                  <input type="text" placeholder="Ej. Dels Alans de Tramuntana (LOE: ...)" class="w-full px-4 py-2.5 rounded bg-[#111317] border border-[#4f4538] text-white text-xs focus:outline-none focus:border-[#f2be71]" />
                </div>

                <div class="pt-2">
                  <label class="flex items-start gap-2.5 cursor-pointer text-[11px] text-[#9c8f7f]">
                    <input type="checkbox" required checked class="mt-0.5 rounded text-[#f2be71] focus:ring-0" />
                    <span>Declaro acatar los Estatutos Fundacionales de 1991, el Código Ético de Cría Responsable y el Estándar Morfológico Oficial FCI N° 249 del Ca de Bou.</span>
                  </label>
                </div>

                <button type="submit" class="btn-primary-gold w-full py-3.5 rounded font-label-caps text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg mt-4">
                  <span>Enviar Expediente a la Secretaría General</span>
                  <span class="material-symbols-outlined text-[16px]">send</span>
                </button>
              </form>

              <div id="form-feedback" class="hidden mt-4 p-4 rounded bg-emerald-950/40 border border-emerald-700/50 text-xs text-emerald-200">
                &check; ¡Expediente recibido con éxito! La Secretaría General se pondrá en contacto para formalizar tu credencial de socio.
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>

    <!-- ======================================================== -->
    <!-- 9. PIE DE PÁGINA INSTITUCIONAL (Google Stitch)            -->
    <!-- ======================================================== -->
    <footer class="bg-[#0c0e11] border-t border-[#4f4538]/30 py-16 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto text-xs text-[#9c8f7f]">
      
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#4f4538]/25 mb-8">
        <div class="flex items-center gap-3">
          <img src="/assets/logo_club.png" alt="CECB" class="h-10 w-auto object-contain" />
          <div>
            <h4 class="font-serif font-bold text-lg text-white leading-none">Club Español del Ca de Bou</h4>
            <span class="font-pedigree-meta text-[11px] text-[#9c8f7f]">
              Real Sociedad Canina de España · Fédération Cynologique Internationale
            </span>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <span class="px-3 py-1 rounded bg-[#1a1c1f] text-[#eac081] font-label-caps text-[10px] border border-[#4f4538]/40">
            FCI Grupo 2 · Sección 2.1
          </span>
          <span class="px-3 py-1 rounded bg-[#1a1c1f] text-[#f2be71] font-label-caps text-[10px] border border-[#f2be71]/30">
            Censo LOE Activo
          </span>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h5 class="font-label-caps text-[#f2be71] text-[10px] mb-3">Navegación</h5>
          <ul class="space-y-2">
            <li><a href="#inicio" class="hover:text-white">Inicio</a></li>
            <li><a href="#historia" class="hover:text-white">Historia de la Raza</a></li>
            <li><a href="#anatomia" class="hover:text-white">Estándar Anatómico</a></li>
            <li><a href="#campeones" class="hover:text-white">Salón de Campeones</a></li>
          </ul>
        </div>
        <div>
          <h5 class="font-label-caps text-[#f2be71] text-[10px] mb-3">Documentación</h5>
          <ul class="space-y-2">
            <li><a href="/assets/docs/ESTANDAR_DE_LA_RAZA_FCI.doc" download class="hover:text-white">Estándar FCI Nº 249</a></li>
            <li><a href="/assets/docs/PROPUESTA_DE_ESTANDAR.doc" download class="hover:text-white">Propuesta Morfológica</a></li>
            <li><a href="#monograficas" class="hover:text-white">Libro de Monográficas</a></li>
            <li><a href="#criadores" class="hover:text-white">Directorio de Criadores</a></li>
          </ul>
        </div>
        <div>
          <h5 class="font-label-caps text-[#f2be71] text-[10px] mb-3">Sede Canina Oficial</h5>
          <div class="space-y-1 text-[#d3c4b3]">
            <div>Islas Baleares, España</div>
            <div>NIF: G-07611197</div>
            <div><a href="mailto:cadebouspain@outlook.es" class="hover:text-white">cadebouspain@outlook.es</a></div>
            <div>Tel: +34 607 540 595</div>
          </div>
        </div>
        <div>
          <h5 class="font-label-caps text-[#f2be71] text-[10px] mb-3">Reconocimiento</h5>
          <div class="flex items-center gap-3">
            <img src="/assets/rsce_logo.png" alt="RSCE" class="h-9 w-auto" />
            <img src="/assets/fci_logo.png" alt="FCI" class="h-9 w-auto" />
            <img src="/assets/header_banner.png" alt="Govern Balear" class="h-9 w-auto opacity-70" />
          </div>
        </div>
      </div>

      <div class="pt-6 border-t border-[#4f4538]/20 flex flex-col md:flex-row items-center justify-between gap-4 font-pedigree-meta text-[11px]">
        <p>
          &copy; 1991–2026 Club Español del Ca de Bou. NIF G-07611197. Entidad Colaboradora de la Real Sociedad Canina de España (RSCE) y la FCI.
        </p>
        <div class="flex items-center gap-2 text-[#f2be71]">
          <span class="w-1.5 h-1.5 rounded-full bg-[#f2be71]"></span>
          <span>Preservando la Raza Autóctona Balear</span>
        </div>
      </div>

    </footer>
  `;

  attachEventListeners();
}

function getFilteredChampions() {
  return championsData.filter(c => {
    const matchesFilter = state.championFilter === 'all' || c.gender === state.championFilter;
    const matchesSearch = !state.championSearch || 
      c.name.toLowerCase().includes(state.championSearch.toLowerCase()) ||
      c.years.includes(state.championSearch);
    return matchesFilter && matchesSearch;
  });
}

function getFilteredMonographics() {
  if (!state.monographicSearch) return monographicsData;
  const q = state.monographicSearch.toLowerCase();
  return monographicsData.filter(m => 
    m.edition.toLowerCase().includes(q) ||
    m.judge.toLowerCase().includes(q) ||
    m.male.toLowerCase().includes(q) ||
    m.female.toLowerCase().includes(q) ||
    m.date.includes(q)
  );
}

function getFilteredBreeders() {
  if (state.breederFilter === 'all') return breedersData;
  return breedersData.filter(b => b.type === state.breederFilter);
}

function attachEventListeners() {
  // Toggle Menú Móvil
  const menuToggle = document.getElementById('mobile-menu-toggle');
  if (menuToggle) {
    menuToggle.onclick = () => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
      renderApp();
    };
  }

  // Cerrar menú móvil al hacer click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.onclick = () => {
      state.mobileMenuOpen = false;
      renderApp();
    };
  });

  // Filtros de Campeones
  document.querySelectorAll('.champion-filter-btn').forEach(btn => {
    btn.onclick = (e) => {
      state.championFilter = e.currentTarget.getAttribute('data-filter');
      renderApp();
    };
  });

  // Búsqueda en Monográficas
  const monoSearch = document.getElementById('monographic-search');
  if (monoSearch) {
    monoSearch.oninput = (e) => {
      state.monographicSearch = e.target.value;
      const tbody = document.querySelector('tbody');
      if (tbody) {
        tbody.innerHTML = getFilteredMonographics().map(m => `
          <tr class="hover:bg-white/5 transition-colors">
            <td class="py-4 px-6">
              <span class="font-bold text-white block text-sm font-serif">${m.edition}</span>
              <span class="text-[#9c8f7f] font-pedigree-meta">${m.date}</span>
            </td>
            <td class="py-4 px-6 text-gray-200">${m.judge}</td>
            <td class="py-4 px-6 font-semibold text-[#f2be71]">${m.male}</td>
            <td class="py-4 px-6 font-semibold text-rose-300">${m.female}</td>
            <td class="py-4 px-6 text-[#9c8f7f]">${m.location}</td>
          </tr>
        `).join('');
      }
    };
  }

  // Filtros de Criadores
  document.querySelectorAll('.breeder-filter-btn').forEach(btn => {
    btn.onclick = (e) => {
      state.breederFilter = e.currentTarget.getAttribute('data-bfilter');
      renderApp();
    };
  });

  // Formulario Expediente de Ingreso
  const form = document.getElementById('membership-form');
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const feedback = document.getElementById('form-feedback');
      if (feedback) {
        feedback.classList.remove('hidden');
        form.reset();
      }
    };
  }
}

// Inicialización
document.addEventListener('DOMContentLoaded', renderApp);
renderApp();
