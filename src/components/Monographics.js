/**
 * Monographics Component — Compendio de Exposiciones Monográficas
 * Buscador en tiempo real y doble vista adaptativa (tarjetas en móvil y tabla en escritorio).
 */
export function Monographics({ monographics = [], searchQuery = '' } = {}) {
  return `
    <section id="monograficas" class="py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto border-b border-[#e6e1d8] bg-white">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6">
        <div>
          <div class="pill-badge pill-badge-gold mb-2 sm:mb-3">Libro de Actas y Resultados CAC</div>
          <h2 class="font-headline-lg">Exposiciones Monográficas CECB</h2>
        </div>

        <!-- Buscador en Vivo -->
        <div class="w-full md:w-80">
          <div class="relative">
            <span class="material-symbols-outlined absolute left-3.5 top-3 text-[#7a7064] text-lg">search</span>
            <input 
              type="text" 
              id="monographic-search" 
              value="${searchQuery}" 
              placeholder="Buscar por juez, ejemplar o año..." 
              class="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#faf8f5] border border-[#dcd6cc] text-[#151413] text-base sm:text-xs placeholder:text-[#9c9388] focus:outline-none focus:border-[#151413] transition-colors" 
            />
          </div>
        </div>
      </div>

      <!-- Vista Móvil: Tarjetas Adaptativas (No Scroll Horizontal) -->
      <div class="block md:hidden space-y-4" id="monographics-mobile-list">
        ${monographics.map(m => `
          <div class="editorial-card p-5 space-y-3">
            <div class="flex items-center justify-between border-b border-[#f0eae0] pb-2.5">
              <span class="font-display font-bold text-sm text-[#151413]">${m.edition}</span>
              <span class="pill-badge text-[10px]">${m.date}</span>
            </div>
            <div class="text-xs space-y-1.5 text-[#423d37]">
              <div class="flex items-center justify-between">
                <span class="text-[#7a7064]">Juez Actuante:</span>
                <span class="font-medium text-[#151413] text-right">${m.judge}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-[#7a7064]">Mejor Macho (CAC):</span>
                <span class="font-semibold text-[#8c6424] text-right">${m.male}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-[#7a7064]">Mejor Hembra (CAC):</span>
                <span class="font-semibold text-rose-800 text-right">${m.female}</span>
              </div>
              <div class="flex items-center justify-between pt-1 border-t border-[#f0eae0]/60">
                <span class="text-[#7a7064]">Sede:</span>
                <span class="text-[#7a7064] text-right">${m.location}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Vista Escritorio: Tabla Estructurada -->
      <div class="hidden md:block overflow-x-auto rounded-xl border border-[#e6e1d8] bg-white shadow-sm">
        <table class="w-full text-left text-xs">
          <thead class="bg-[#f4f0e6] text-[#151413] font-label-caps border-b border-[#e6e1d8]">
            <tr>
              <th class="py-4 px-6">Edición / Fecha</th>
              <th class="py-4 px-6">Juez Actuante</th>
              <th class="py-4 px-6">Mejor Macho (CAC)</th>
              <th class="py-4 px-6">Mejor Hembra (CAC)</th>
              <th class="py-4 px-6">Sede</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#ece7de] text-[#423d37]" id="monographics-desktop-tbody">
            ${monographics.map(m => `
              <tr class="hover:bg-[#faf8f5] transition-colors">
                <td class="py-4 px-6">
                  <span class="font-bold text-[#151413] block text-sm font-display">${m.edition}</span>
                  <span class="text-[#7a7064] text-[11px]">${m.date}</span>
                </td>
                <td class="py-4 px-6 text-[#2c2824] font-medium">${m.judge}</td>
                <td class="py-4 px-6 font-semibold text-[#8c6424]">${m.male}</td>
                <td class="py-4 px-6 font-semibold text-rose-800">${m.female}</td>
                <td class="py-4 px-6 text-[#7a7064]">${m.location}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

    </section>
  `;
}
