/**
 * BentoGrid Component — Historia y Crónica Balear
 * Linaje desde el Siglo XIII, Armada de Jaume I y Nomenclatura FCI Nº 249.
 */
export function BentoGrid() {
  return `
    <section id="historia" class="py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto border-b border-[#e6e1d8] bg-white">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6">
        <div>
          <div class="pill-badge mb-2 sm:mb-3">Linaje & Archivo Histórico</div>
          <h2 class="font-headline-lg">
            Patrimonio Balear & Memoria Canina
          </h2>
        </div>
        <p class="text-xs sm:text-sm text-[#5c554b] max-w-md leading-relaxed">
          Ocho siglos custodiando la pureza racial desde la llegada del Rey Jaume I hasta los registros del Libro de Orígenes Español (LOE).
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 sm:gap-8">
        
        <!-- Bento A: Orígenes Siglo XIII (7 Cols) -->
        <div class="md:col-span-2 lg:col-span-7 editorial-card p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <span class="pill-badge pill-badge-gold">
                Archivo Canino Balear
              </span>
              <span class="font-sans text-xs text-[#7a7064]">Crónicas 1229 – 1900</span>
            </div>
            <h3 class="font-headline text-xl sm:text-2xl text-[#151413] mb-3 sm:mb-4">
              Orígenes del Siglo XIII: De la Armada de Jaume I a los Baluartes Insulares
            </h3>
            <p class="text-xs sm:text-sm text-[#423d37] leading-relaxed mb-6 font-light">
              Tras el desembarco del Rey Conquistador en Santa Ponça, los caballeros de la Orden de Malta y mesnadas aragonesas introdujeron mastines y alanos ibéricos destinados a la custodia castrense. Con el florecimiento marítimo de Palma en los siglos XVII y XVIII, la selección funcional decantó en un perro molosoide compacto, tenaz y equilibrado: el <strong class="text-[#151413] font-semibold">Dogo Mallorquín o Ca de Bou</strong>, guardián incorruptible de las posesiones y hatos bravos.
            </p>
          </div>
          <div class="pt-5 border-t border-[#f0eae0] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center gap-2 text-[#8c6424] font-semibold">
              <span class="material-symbols-outlined text-[18px]">menu_book</span>
              <span>Monografía Fundacional (1991)</span>
            </div>
            <span class="font-label-caps text-[#8a7f71]">Tomo I · Oficial</span>
          </div>
        </div>

        <!-- Bento B: Estándar FCI Nº 249 (5 Cols) -->
        <div class="md:col-span-1 lg:col-span-5 editorial-card p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-[#e2dcd2] bg-[#fbf9f5]">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="pill-badge">
                FCI Nomenclatura Oficial
              </span>
              <span class="w-2.5 h-2.5 rounded-full bg-[#b38338]"></span>
            </div>
            <h3 class="font-headline text-xl sm:text-2xl text-[#151413] mb-2 sm:mb-3">FCI Standard Nº 249</h3>
            <p class="text-xs text-[#5c554b] leading-relaxed mb-5">
              Grupo 2: Molosoides tipo Dogo. Sin prueba de trabajo.<br/>
              Marcado dimorfismo sexual con cabeza voluminosa e imponente.
            </p>
            
            <div class="grid grid-cols-2 gap-3 sm:gap-4 py-4 border-y border-[#e6e1d8] text-xs">
              <div>
                <span class="text-[#7a7064] block font-label-caps text-[9px] mb-1">Alzada Machos</span>
                <span class="text-[#151413] font-bold text-base sm:text-lg font-display">55 – 58 cm</span>
                <span class="text-[#7a7064] text-[10px] sm:text-[11px] block mt-0.5">Peso: 35 – 38 kg</span>
              </div>
              <div>
                <span class="text-[#7a7064] block font-label-caps text-[9px] mb-1">Alzada Hembras</span>
                <span class="text-[#151413] font-bold text-base sm:text-lg font-display">52 – 55 cm</span>
                <span class="text-[#7a7064] text-[10px] sm:text-[11px] block mt-0.5">Peso: 30 – 34 kg</span>
              </div>
            </div>
          </div>

          <div class="pt-4 flex items-center justify-between">
            <span class="text-xs text-[#8c6424] font-semibold">Prognatismo ≤ 10mm</span>
            <a href="#anatomia" class="text-xs font-label-caps text-[#151413] hover:text-[#b38338] transition-colors">Ver Anatomía &rarr;</a>
          </div>
        </div>

      </div>
    </section>
  `;
}
