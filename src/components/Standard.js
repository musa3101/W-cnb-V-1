/**
 * Standard Component — Anatomía y Estándar Morfológico
 * Desglose funcional, fichas anatómicas y enlaces de descarga a documentos oficiales.
 */
export function Standard() {
  return `
    <section id="anatomia" class="py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto border-b border-[#e6e1d8] bg-[#f4f0e6]">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6">
        <div>
          <div class="pill-badge pill-badge-gold mb-2 sm:mb-3">Morfología Funcional & Juicio Canino</div>
          <h2 class="font-headline-lg">Anatomía del Dogo Mallorquín</h2>
        </div>
        <p class="text-xs sm:text-sm text-[#5c554b] max-w-md leading-relaxed">
          Parámetros morfológicos ineludibles fijados por el estándar para la preservación de la tipicidad histórica.
        </p>
      </div>

      <!-- Fila de Descarga Oficial de Documentos Normativos -->
      <div class="mb-8 sm:mb-12 p-5 sm:p-8 rounded-2xl bg-white border border-[#e2dcd2] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6 shadow-[0_10px_30px_-10px_rgba(20,18,15,0.06)]">
        <div class="flex items-center gap-3.5 sm:gap-4">
          <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#faf8f5] border border-[#e2dcd2] flex items-center justify-center text-[#8c6424] shrink-0">
            <span class="material-symbols-outlined text-2xl">description</span>
          </div>
          <div>
            <h4 class="font-display font-bold text-[#151413] text-sm sm:text-base">Documentación Técnica Oficial</h4>
            <p class="text-[11px] sm:text-xs text-[#7a7064]">Expedientes originales normativos del estándar y propuesta morfológica.</p>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
          <a href="/assets/docs/ESTANDAR_DE_LA_RAZA_FCI.doc" download class="btn-editorial-light text-center text-xs py-2.5 px-4 w-full sm:w-auto">
            <span class="material-symbols-outlined text-sm text-[#8c6424]">download</span>
            <span>Estándar FCI Nº 249 (.doc)</span>
          </a>
          <a href="/assets/docs/PROPUESTA_DE_ESTANDAR.doc" download class="btn-editorial-light text-center text-xs py-2.5 px-4 w-full sm:w-auto">
            <span class="material-symbols-outlined text-sm text-[#8c6424]">download</span>
            <span>Propuesta Morfológica (.doc)</span>
          </a>
        </div>
      </div>

      <!-- Grilla de Fichas Anatómicas -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        
        <!-- Card 1: Cabeza -->
        <div class="editorial-card p-6 sm:p-8">
          <div class="flex items-center gap-2 text-[#8c6424] mb-2 sm:mb-3">
            <span class="material-symbols-outlined text-lg">psychology</span>
            <span class="font-label-caps text-xs">Cráneo y Stop</span>
          </div>
          <h4 class="font-display font-bold text-base sm:text-lg text-[#151413] mb-2 sm:mb-3">Cabeza Fuerte y Maciza</h4>
          <p class="text-xs text-[#423d37] leading-relaxed font-light">
            El perímetro craneal en machos es superior a la altura a la cruz. Cráneo ancho y casi cuadrado. Stop marcadamente acentuado, con maseteros potentes y bien desarrollados.
          </p>
        </div>

        <!-- Card 2: Mandíbula / Prognatismo -->
        <div class="editorial-card p-6 sm:p-8 border-[#d4c9b8]">
          <div class="flex items-center gap-2 text-[#8c6424] mb-2 sm:mb-3">
            <span class="material-symbols-outlined text-lg">dentistry</span>
            <span class="font-label-caps text-xs">Dentición de Presa</span>
          </div>
          <h4 class="font-display font-bold text-base sm:text-lg text-[#151413] mb-2 sm:mb-3">Prognatismo Mandibular Inferior</h4>
          <p class="text-xs text-[#423d37] leading-relaxed font-light">
            Mandíbula potente con incisivos inferiores sobrepasando a los superiores (prognatismo moderado no superior a 10 mm). Dientes fuertes, caninos bien separados y nunca visibles con la boca cerrada.
          </p>
        </div>

        <!-- Card 3: Ojos y Orejas -->
        <div class="editorial-card p-6 sm:p-8">
          <div class="flex items-center gap-2 text-[#8c6424] mb-2 sm:mb-3">
            <span class="material-symbols-outlined text-lg">visibility</span>
            <span class="font-label-caps text-xs">Expresión y Porte</span>
          </div>
          <h4 class="font-display font-bold text-base sm:text-lg text-[#151413] mb-2 sm:mb-3">Ojos Oscuros & Oreja en Rosa</h4>
          <p class="text-xs text-[#423d37] leading-relaxed font-light">
            Ojos ovalados, grandes y oscuros de mirada penetrante e inteligente. Orejas pequeñas, de inserción alta y dobladas hacia atrás dejando ver el conducto auditivo (oreja en rosa). Prohibida la amputación.
          </p>
        </div>

        <!-- Card 4: Cuerpo y Pecho -->
        <div class="editorial-card p-6 sm:p-8">
          <div class="flex items-center gap-2 text-[#8c6424] mb-2 sm:mb-3">
            <span class="material-symbols-outlined text-lg">accessibility_new</span>
            <span class="font-label-caps text-xs">Estructura Ósea</span>
          </div>
          <h4 class="font-display font-bold text-base sm:text-lg text-[#151413] mb-2 sm:mb-3">Pecho Profundo & Grupa Inclinada</h4>
          <p class="text-xs text-[#423d37] leading-relaxed font-light">
            Cilindro torácico amplio descendiendo hasta el codo. Costillas arqueadas. Línea dorso-lumbar recta, grupa redondeada que puede elevarse 1-2 cm sobre la cruz, y aplomos paralelos.
          </p>
        </div>

        <!-- Card 5: Capa y Color -->
        <div class="editorial-card p-6 sm:p-8">
          <div class="flex items-center gap-2 text-[#8c6424] mb-2 sm:mb-3">
            <span class="material-symbols-outlined text-lg">palette</span>
            <span class="font-label-caps text-xs">Manto y Pigmentación</span>
          </div>
          <h4 class="font-display font-bold text-base sm:text-lg text-[#151413] mb-2 sm:mb-3">Atigrado, Leonado y Negro</h4>
          <p class="text-xs text-[#423d37] leading-relaxed font-light">
            Pelo corto, tupido y áspero al tacto. Se prefieren tonalidades atigradas oscuras a doradas con máscara negra, y leonados intensos. Se admiten pequeñas manchas blancas en el antepecho.
          </p>
        </div>

        <!-- Card 6: Faltas Descalificatorias -->
        <div class="editorial-card p-6 sm:p-8 border-rose-200 bg-rose-50/30">
          <div class="flex items-center gap-2 text-rose-700 mb-2 sm:mb-3">
            <span class="material-symbols-outlined text-lg">warning</span>
            <span class="font-label-caps text-xs">Faltas Eliminatorias</span>
          </div>
          <h4 class="font-display font-bold text-base sm:text-lg text-rose-900 mb-2 sm:mb-3">Desviaciones Tipológicas</h4>
          <p class="text-xs text-rose-800 leading-relaxed font-light">
            Mordida en tijera o pinza estricta en adultos, prognatismo superior a 10 mm, ojos amarillos o claros, orejas caídas planas o erguidas, manchas blancas >30% y temperamento tímido o agresivo.
          </p>
        </div>

      </div>
    </section>
  `;
}
