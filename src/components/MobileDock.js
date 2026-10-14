/**
 * MobileDock Component — Barra Flotante Inferior en Móvil
 * Accesos directos ergonómicos para el pulgar en pantallas pequeñas.
 */
export function MobileDock() {
  return `
    <div class="lg:hidden fixed bottom-4 inset-x-4 z-40 bg-[#151413]/95 backdrop-blur-md text-[#faf8f5] p-2.5 rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.35)] border border-white/10 flex items-center justify-between max-w-md mx-auto">
      <div class="flex items-center gap-2 pl-2">
        <img src="/assets/logo_fusion_escudo_transparent.png" alt="CECB" class="h-7 w-auto object-contain" />
        <span class="font-display font-bold text-xs tracking-tight text-white">CECB 1991</span>
      </div>
      <div class="flex items-center gap-2">
        <a href="#anatomia" class="px-3 py-1.5 rounded-full text-[11px] font-sans font-medium text-[#d4c9b8] hover:text-white transition-colors">
          Estándar
        </a>
        <a href="#afiliacion" class="bg-[#b38338] hover:bg-[#c99543] text-white font-sans font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1 transition-all">
          <span>Hazte Socio</span>
          <span class="material-symbols-outlined text-[13px]">arrow_forward</span>
        </a>
      </div>
    </div>
  `;
}
