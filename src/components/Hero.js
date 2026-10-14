/**
 * Hero Component — Portada Monumental
 * Atmósfera Solar Balear (Piedra de Santanyí) y fotografía de referencia en marco museo.
 */
export function Hero() {
  return `
    <section id="inicio" class="relative pt-8 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto border-b border-[#e6e1d8] overflow-hidden">
      
      <!-- Atmósfera solar balear -->
      <div class="absolute -top-32 right-1/4 w-[550px] h-[550px] bg-[#f8eedb]/70 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute -bottom-24 left-10 w-96 h-96 bg-[#efe3ce]/60 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
        
        <!-- Columna Izquierda: Mensaje y Titular Monumental -->
        <div class="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
          
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e2dcd2] shadow-sm text-[#7a7064] font-label-caps text-[10px] sm:text-[11px]">
            <span class="w-2 h-2 rounded-full bg-[#b38338]"></span>
            <span>PATRIMONIO CINOLÓGICO BALEAR · 1991</span>
          </div>

          <h1 class="font-display-hero">
            El Legado Vivo del Ca de Bou.
          </h1>

          <p class="font-headline text-lg sm:text-2xl text-[#8c6424] italic">
            Dogo Mallorquín · El noble guardián de las Islas Baleares
          </p>

          <p class="text-[#423d37] text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
            Custodios de la pureza racial, la potencia morfológica y el temperamento equilibrado de la raza autóctona de presa de Mallorca. Fomento de la crianza científica, exposiciones monográficas oficiales y tutela del estándar FCI Nº 249.
          </p>

          <!-- Botones Adaptativos (Full Width en móviles pequeños) -->
          <div class="pt-2 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 items-stretch sm:items-center">
            <a href="#anatomia" class="btn-editorial-dark w-full sm:w-auto text-center">
              <span>Ver Estándar Oficial FCI</span>
              <span class="material-symbols-outlined text-[16px]">menu_book</span>
            </a>
            <a href="#campeones" class="btn-editorial-light w-full sm:w-auto text-center">
              <span>Salón de Campeones</span>
              <span class="material-symbols-outlined text-[16px] text-[#b38338]">military_tech</span>
            </a>
            <a href="#afiliacion" class="py-2.5 text-[#8c6424] hover:text-[#151413] font-label-caps text-xs flex items-center justify-center lg:justify-start gap-1.5 transition-colors">
              <span>Solicitud de Ingreso 2026 &rarr;</span>
            </a>
          </div>

          <!-- Ficha Sintética de Autoridad Institucional -->
          <div class="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-[#e6e1d8] mt-6 max-w-lg mx-auto lg:mx-0 text-center sm:text-left">
            <div>
              <div class="font-display text-[#151413] font-bold text-xl sm:text-2xl">1991</div>
              <div class="font-sans text-[10px] sm:text-xs text-[#7a7064]">Fundación Oficial</div>
            </div>
            <div>
              <div class="font-display text-[#151413] font-bold text-xl sm:text-2xl">Nº 249</div>
              <div class="font-sans text-[10px] sm:text-xs text-[#7a7064]">Estándar FCI</div>
            </div>
            <div>
              <div class="font-display text-[#151413] font-bold text-xl sm:text-2xl">RSCE</div>
              <div class="font-sans text-[10px] sm:text-xs text-[#7a7064]">Real Sociedad Canina</div>
            </div>
          </div>

        </div>

        <!-- Columna Derecha: Lámina Artística en Pase-Partout Museo -->
        <div class="lg:col-span-5 relative mt-4 lg:mt-0">
          <div class="bg-white p-3 sm:p-5 rounded-2xl shadow-[0_20px_50px_-15px_rgba(30,26,20,0.12)] border border-[#e8e2d5]">
            <div class="relative overflow-hidden rounded-xl aspect-[16/10] bg-[#1a1714] group">
              <!-- Fondo ambiental difuminado para rellenar los bordes con la atmósfera del perro -->
              <img src="/assets/stitch_hero_dog.png" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full object-cover filter blur-lg opacity-40 scale-110 pointer-events-none" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

              <!-- Imagen completa del ejemplar sin ningún recorte (orejas a cola y pezuñas) -->
              <div class="absolute inset-0 p-2.5 sm:p-3 flex items-center justify-center z-10 pointer-events-none">
                <img src="/assets/stitch_hero_dog.png" alt="Ejemplar de Referencia Ca de Bou" class="max-w-full max-h-full w-auto h-auto object-contain rounded-lg drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-[1.03] transition-transform duration-700 pointer-events-auto" />
              </div>

              <!-- Insignia Arquetipo Oficial -->
              <div class="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[#e6c687] font-label-caps text-[9px]">
                Arquetipo Canino Oficial
              </div>
            </div>

            <!-- Placa de Identificación de Museo debajo de la imagen (No tapa las patas ni el cuerpo) -->
            <div class="mt-3 sm:mt-4 p-3 sm:p-3.5 rounded-xl bg-[#faf8f5] border border-[#e6e1d8] flex items-center justify-between">
              <div>
                <span class="block font-label-caps text-[8px] sm:text-[9px] text-[#8c6424]">Ejemplar de Referencia Homologado</span>
                <span class="font-display font-bold text-sm sm:text-base text-[#151413]">Ch. 'Yak de Almallutx'</span>
              </div>
              <div class="text-right">
                <span class="block font-sans text-[11px] sm:text-xs font-semibold text-[#151413]">LOE: 2198031</span>
                <span class="font-sans text-[10px] sm:text-[11px] text-[#7a7064]">Atigrado Dorado</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
