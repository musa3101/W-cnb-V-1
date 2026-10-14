/**
 * Breeders Component — Directorio Oficial de Criadores
 * Tarjetas de afijos nacionales e internacionales acreditados por el club.
 */
export function Breeders({ breeders = [], currentFilter = 'all' } = {}) {
  return `
    <section id="criadores" class="py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto border-b border-[#e6e1d8] bg-[#faf8f5]">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6">
        <div>
          <div class="pill-badge pill-badge-gold mb-2 sm:mb-3">Acreditación y Crianza Ética</div>
          <h2 class="font-headline-lg">Criadores Oficiales Socios</h2>
        </div>

        <!-- Filtros de Criadores con Scroll Horizontal en móvil -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          <button class="breeder-filter-btn shrink-0 min-h-[40px] px-4 py-1.5 rounded-full font-label-caps text-xs transition-all ${currentFilter === 'all' ? 'bg-[#151413] text-white shadow-sm' : 'bg-white border border-[#dcd6cc] text-[#4a443c] hover:border-[#151413]'}" data-bfilter="all">Todos</button>
          <button class="breeder-filter-btn shrink-0 min-h-[40px] px-4 py-1.5 rounded-full font-label-caps text-xs transition-all ${currentFilter === 'Nacional con Afijo' ? 'bg-[#151413] text-white shadow-sm' : 'bg-white border border-[#dcd6cc] text-[#4a443c] hover:border-[#151413]'}" data-bfilter="Nacional con Afijo">Nacionales</button>
          <button class="breeder-filter-btn shrink-0 min-h-[40px] px-4 py-1.5 rounded-full font-label-caps text-xs transition-all ${currentFilter === 'Internacional' ? 'bg-[#151413] text-white shadow-sm' : 'bg-white border border-[#dcd6cc] text-[#4a443c] hover:border-[#151413]'}" data-bfilter="Internacional">Internacionales</button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        ${breeders.map(b => `
          <div class="editorial-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="pill-badge ${b.type === 'Internacional' ? 'bg-purple-50 text-purple-900 border-purple-200' : 'pill-badge-gold'}">
                  ${b.type}
                </span>
                <span class="text-xs text-[#7a7064] font-medium">${b.status}</span>
              </div>
              
              <h3 class="font-display font-bold text-lg sm:text-xl text-[#151413] mb-1">${b.name}</h3>
              <div class="text-xs text-[#8c6424] font-semibold mb-3">${b.holders}</div>
              
              <div class="text-xs text-[#5c554b] mb-3 flex items-start gap-1.5">
                <span class="material-symbols-outlined text-sm shrink-0 mt-0.5 text-[#8c6424]">location_on</span>
                <span>${b.location}</span>
              </div>

              <p class="text-xs text-[#5c554b] leading-relaxed mb-5 font-light">${b.description}</p>
            </div>

            <div class="pt-4 border-t border-[#f0eae0] flex items-center justify-between text-xs font-sans">
              <a href="tel:${b.phone}" class="min-h-[44px] text-[#151413] font-semibold hover:text-[#b38338] flex items-center gap-1.5 transition-colors">
                <span class="material-symbols-outlined text-sm">call</span>
                <span>${b.phone}</span>
              </a>
              ${b.website ? `<a href="${b.website}" target="_blank" rel="noopener" class="min-h-[44px] text-[#8c6424] font-semibold hover:underline flex items-center gap-1">Web <span class="material-symbols-outlined text-xs">open_in_new</span></a>` : ''}
            </div>
          </div>
        `).join('')}
      </div>

    </section>
  `;
}
