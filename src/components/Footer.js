/**
 * Footer Component — Pie de Página Institucional
 * Sellos oficiales RSCE/FCI, NIF G-07611197 y enlaces caninos institucionales.
 */
export function Footer() {
  return `
    <footer class="bg-[#151413] text-[#f2ede4] py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto text-xs">
      
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8">
        <div class="flex items-center gap-3.5 sm:gap-4">
          <img src="/assets/logo_fusion_escudo_transparent.png" alt="CECB" class="h-12 sm:h-14 w-auto object-contain drop-shadow-md shrink-0" />
          <div>
            <h4 class="font-display font-bold text-base sm:text-lg text-white leading-none">Club Español del Ca de Bou</h4>
            <span class="font-sans text-[10px] sm:text-[11px] text-[#a89f92] mt-1 block">
              Real Sociedad Canina de España · Fédération Cynologique Internationale
            </span>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-2 sm:gap-3">
          <span class="px-3 py-1 rounded-full bg-white/10 text-[#f2ede4] font-label-caps text-[9px] sm:text-[10px] border border-white/15">
            FCI Grupo 2 · Sección 2.1
          </span>
          <span class="px-3 py-1 rounded-full bg-[#b38338]/20 text-[#f2c77d] font-label-caps text-[9px] sm:text-[10px] border border-[#b38338]/40">
            Censo LOE Activo
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 text-[#b8afa3]">
        <div>
          <h5 class="font-label-caps text-white text-[10px] mb-3">Navegación</h5>
          <ul class="space-y-2">
            <li><a href="#inicio" class="hover:text-white transition-colors">Inicio</a></li>
            <li><a href="#historia" class="hover:text-white transition-colors">Historia de la Raza</a></li>
            <li><a href="#anatomia" class="hover:text-white transition-colors">Estándar FCI Nº 249</a></li>
            <li><a href="#campeones" class="hover:text-white transition-colors">Salón de Campeones</a></li>
          </ul>
        </div>
        <div>
          <h5 class="font-label-caps text-white text-[10px] mb-3">Documentación</h5>
          <ul class="space-y-2">
            <li><a href="/assets/docs/ESTANDAR_DE_LA_RAZA_FCI.doc" download class="hover:text-white transition-colors">Estándar FCI Nº 249</a></li>
            <li><a href="/assets/docs/PROPUESTA_DE_ESTANDAR.doc" download class="hover:text-white transition-colors">Propuesta Morfológica</a></li>
            <li><a href="#monograficas" class="hover:text-white transition-colors">Libro de Monográficas</a></li>
            <li><a href="#criadores" class="hover:text-white transition-colors">Directorio de Criadores</a></li>
          </ul>
        </div>
        <div>
          <h5 class="font-label-caps text-white text-[10px] mb-3">Sede Canina Oficial</h5>
          <div class="space-y-1">
            <div>Islas Baleares, España</div>
            <div>NIF: G-07611197</div>
            <div><a href="mailto:cadebouspain@outlook.es" class="hover:text-white transition-colors">cadebouspain@outlook.es</a></div>
            <div>Tel: +34 607 540 595</div>
          </div>
        </div>
        <div>
          <h5 class="font-label-caps text-white text-[10px] mb-3">Reconocimiento</h5>
          <div class="flex items-center gap-3">
            <img src="/assets/rsce_logo.png" alt="RSCE" class="h-8 sm:h-9 w-auto brightness-110" />
            <img src="/assets/fci_logo.png" alt="FCI" class="h-8 sm:h-9 w-auto brightness-110" />
            <img src="/assets/header_banner.png" alt="Govern Balear" class="h-8 sm:h-9 w-auto opacity-80" />
          </div>
        </div>
      </div>

      <div class="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-center sm:text-left font-sans text-[10px] sm:text-[11px] text-[#8a7f71]">
        <p>
          &copy; 1991–2026 Club Español del Ca de Bou. NIF G-07611197. Entidad Colaboradora de la Real Sociedad Canina de España (RSCE) y la FCI.
        </p>
        <div class="flex items-center justify-center gap-2 text-[#f2c77d]">
          <span class="w-1.5 h-1.5 rounded-full bg-[#b38338]"></span>
          <span>Preservando la Raza Autóctona Balear</span>
        </div>
      </div>

    </footer>
  `;
}
