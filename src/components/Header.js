/**
 * Header Component — Cabecera Institucional
 * Full responsive con soporte adaptativo para móvil y escritorio.
 */
export function Header({ mobileMenuOpen = false } = {}) {
  return `
    <header class="bg-[#faf8f5]/95 backdrop-blur-md sticky top-0 z-50 border-b border-[#e6e1d8] transition-all">
      <div class="flex justify-between items-center w-full px-4 sm:px-8 lg:px-12 py-2.5 sm:py-3.5 max-w-[1920px] mx-auto">
        
        <!-- Logo e Identidad del Club (Adaptive Mobile/Desktop) -->
        <a href="#inicio" class="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
          <div class="relative h-11 sm:h-14 w-auto flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 duration-300">
            <img src="/assets/logo_fusion_escudo_transparent.png" alt="Escudo Oficial CECB" class="h-10 sm:h-14 w-auto object-contain drop-shadow-[0_4px_12px_rgba(20,18,15,0.12)]" />
          </div>
          <div class="flex flex-col min-w-0">
            <span class="font-display text-sm sm:text-xl font-bold tracking-tight text-[#151413] leading-tight group-hover:text-[#b38338] transition-colors truncate">
              Club Español del Ca de Bou
            </span>
            <span class="font-label-caps text-[9px] sm:text-[10px] text-[#7a7064] tracking-wider truncate">
              Patronato Canino Oficial · RSCE & FCI · 1991
            </span>
          </div>
        </a>

        <!-- Sellos de Acreditación RSCE / FCI -->
        <div class="hidden xl:flex items-center gap-2 pl-4 border-l border-[#e2dcd2]">
          <span class="pill-badge pill-badge-gold">
            <span class="material-symbols-outlined text-[13px] fill">verified</span>
            RSCE Colaborador
          </span>
          <span class="pill-badge">
            FCI N° 249
          </span>
        </div>

        <!-- Navegación de Escritorio -->
        <nav class="hidden lg:flex items-center gap-1 text-xs font-semibold tracking-wider uppercase font-sans">
          <a href="#inicio" class="px-3 py-2 rounded-full text-[#4a443c] hover:text-[#151413] hover:bg-[#efe9dc] transition-all">Inicio</a>
          <a href="#historia" class="px-3 py-2 rounded-full text-[#4a443c] hover:text-[#151413] hover:bg-[#efe9dc] transition-all">Historia</a>
          <a href="#anatomia" class="px-3 py-2 rounded-full text-[#4a443c] hover:text-[#151413] hover:bg-[#efe9dc] transition-all">Estándar FCI</a>
          <a href="#campeones" class="px-3 py-2 rounded-full text-[#4a443c] hover:text-[#151413] hover:bg-[#efe9dc] transition-all">Campeones</a>
          <a href="#monograficas" class="px-3 py-2 rounded-full text-[#4a443c] hover:text-[#151413] hover:bg-[#efe9dc] transition-all">Monográficas</a>
          <a href="#criadores" class="px-3 py-2 rounded-full text-[#4a443c] hover:text-[#151413] hover:bg-[#efe9dc] transition-all">Criadores</a>
        </nav>

        <!-- CTA Directo Escritorio -->
        <div class="hidden sm:flex items-center gap-3">
          <a href="#afiliacion" class="btn-editorial-dark py-2.5 px-5">
            <span>Hazte Socio</span>
            <span class="material-symbols-outlined text-[15px]">badge</span>
          </a>
        </div>

        <!-- Botón Menú Móvil con área táctil 48px -->
        <button id="mobile-menu-toggle" class="lg:hidden w-11 h-11 flex items-center justify-center rounded-full text-[#2c2824] hover:bg-[#efe9dc] focus:outline-none transition-colors" aria-label="Abrir navegación">
          <span class="material-symbols-outlined text-2xl">${mobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      <!-- Menú Desplegable Móvil -->
      <div id="mobile-menu" class="${mobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-[#ffffff] border-b border-[#e2dcd2] px-5 py-5 space-y-2 shadow-xl">
        <a href="#inicio" class="mobile-nav-link block text-sm font-semibold text-[#151413] py-2.5 px-3 rounded-lg hover:bg-[#faf8f5]">Inicio</a>
        <a href="#historia" class="mobile-nav-link block text-sm font-semibold text-[#151413] py-2.5 px-3 rounded-lg hover:bg-[#faf8f5]">Historia y Origen Balear</a>
        <a href="#anatomia" class="mobile-nav-link block text-sm font-semibold text-[#151413] py-2.5 px-3 rounded-lg hover:bg-[#faf8f5]">Estándar Morfológico FCI 249</a>
        <a href="#campeones" class="mobile-nav-link block text-sm font-semibold text-[#151413] py-2.5 px-3 rounded-lg hover:bg-[#faf8f5]">Salón de Campeones</a>
        <a href="#monograficas" class="mobile-nav-link block text-sm font-semibold text-[#151413] py-2.5 px-3 rounded-lg hover:bg-[#faf8f5]">Compendio de Monográficas</a>
        <a href="#criadores" class="mobile-nav-link block text-sm font-semibold text-[#151413] py-2.5 px-3 rounded-lg hover:bg-[#faf8f5]">Directorio de Criadores</a>
        <div class="pt-4 border-t border-[#e2dcd2] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img src="/assets/rsce_logo.png" alt="RSCE" class="h-6 w-auto" />
            <img src="/assets/fci_logo.png" alt="FCI" class="h-6 w-auto" />
          </div>
          <a href="#afiliacion" class="mobile-nav-link btn-editorial-dark text-[11px] py-2 px-4">Hazte Socio</a>
        </div>
      </div>
    </header>
  `;
}
