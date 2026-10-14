/**
 * Champions Component — Salón de Campeones Históricos
 * Galería con paspartú de museo, fondos blur ambientales, contingencia y filtros de género.
 */
export function Champions({ champions = [], currentFilter = 'all' } = {}) {
  return `
    <section id="campeones" class="py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto border-b border-[#e6e1d8] bg-[#faf8f5]">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6">
        <div>
          <div class="pill-badge pill-badge-gold mb-2 sm:mb-3">Galería de Honor & Títulos Homologados</div>
          <h2 class="font-headline-lg">Salón de Campeones (1991 - 2014)</h2>
        </div>

        <!-- Filtros de Campeones (Scroll horizontal en móviles) -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          <span class="font-label-caps text-xs text-[#7a7064] mr-1 shrink-0">Filtrar:</span>
          <button class="champion-filter-btn shrink-0 min-h-[40px] px-4 py-1.5 rounded-full font-label-caps text-xs transition-all ${currentFilter === 'all' ? 'bg-[#151413] text-white shadow-sm' : 'bg-white border border-[#dcd6cc] text-[#4a443c] hover:border-[#151413]'}" data-filter="all">Todos</button>
          <button class="champion-filter-btn shrink-0 min-h-[40px] px-4 py-1.5 rounded-full font-label-caps text-xs transition-all ${currentFilter === 'Macho' ? 'bg-[#151413] text-white shadow-sm' : 'bg-white border border-[#dcd6cc] text-[#4a443c] hover:border-[#151413]'}" data-filter="Macho">Machos</button>
          <button class="champion-filter-btn shrink-0 min-h-[40px] px-4 py-1.5 rounded-full font-label-caps text-xs transition-all ${currentFilter === 'Hembra' ? 'bg-[#151413] text-white shadow-sm' : 'bg-white border border-[#dcd6cc] text-[#4a443c] hover:border-[#151413]'}" data-filter="Hembra">Hembras</button>
        </div>
      </div>

      <!-- Cuadrícula de Campeones -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        ${champions.map(c => `
          <div class="editorial-card overflow-hidden flex flex-col group">
            <!-- Marco de Fotografía Original del Archivo Histórico (Estilo Paspartú Galería, 100% ÍNTEGRO SIN CORTES) -->
            <div class="relative w-full aspect-[4/3] overflow-hidden bg-[#ede6da] group">
              <!-- Fondo ambiental difuminado generado con la propia fotografía histórica -->
              <img 
                src="${c.image}" 
                alt="" 
                aria-hidden="true" 
                class="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-30 scale-110 pointer-events-none select-none transition-transform duration-700 group-hover:scale-125" 
              />
              
              <!-- Viñeta sutil de archivo histórico -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none"></div>

              <!-- Contenedor absoluto para garantizar contención exacta (max-h-full y max-w-full) en cualquier navegador -->
              <div class="absolute inset-0 p-3 sm:p-4 flex items-center justify-center z-10 pointer-events-none">
                <img 
                  src="${c.image}" 
                  alt="${c.name}" 
                  onerror="this.onerror=null; this.src='/assets/stitch_portrait_dog.png';" 
                  class="max-w-full max-h-full w-auto h-auto object-contain rounded shadow-[0_4px_16px_rgba(20,18,15,0.22)] group-hover:scale-[1.02] transition-transform duration-500 pointer-events-auto" 
                  loading="lazy"
                />
              </div>

              <!-- Año de Exposición / Monográfica -->
              <div class="absolute top-2.5 right-2.5 z-20 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#e2dcd2] text-[#8c6424] font-label-caps text-[10px] shadow-sm">
                ${c.years}
              </div>

              <!-- Sexo del Ejemplar -->
              <div class="absolute bottom-2.5 left-2.5 z-20 px-2.5 py-0.5 rounded-full text-[10px] font-label-caps shadow-sm ${c.gender === 'Macho' ? 'bg-blue-50/95 border border-blue-200 text-blue-900 backdrop-blur-sm' : 'bg-rose-50/95 border border-rose-200 text-rose-900 backdrop-blur-sm'}">
                ${c.gender}
              </div>
            </div>

            <!-- Ficha Genealógica y Laureles -->
            <div class="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-3 sm:space-y-4">
              <div>
                <div class="flex items-center gap-1.5 text-[#8c6424] font-label-caps text-[11px] mb-1">
                  <span class="material-symbols-outlined text-[15px] fill">military_tech</span>
                  <span>${c.titles}</span>
                </div>
                <h3 class="font-display font-bold text-lg sm:text-xl text-[#151413] group-hover:text-[#b38338] transition-colors leading-tight">${c.name}</h3>
                <p class="text-xs text-[#5c554b] leading-relaxed mt-2 font-light">${c.description}</p>
              </div>

              <div class="pt-3 border-t border-[#f0eae0] flex items-center justify-between text-[11px] font-sans text-[#7a7064]">
                <span>Fototeca Oficial CECB</span>
                <span class="text-[#8c6424] font-semibold">Registro Homologado</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

    </section>
  `;
}
