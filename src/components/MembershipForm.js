/**
 * MembershipForm Component — Solicitud de Afiliación & Socios Protectores
 * Formulario oficial con inputs optimizados para evitar auto-zoom en iOS.
 */
export function MembershipForm() {
  return `
    <section id="afiliacion" class="py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-[1920px] mx-auto border-b border-[#e6e1d8] bg-white">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <!-- Columna Izquierda: Información Institucional -->
        <div class="lg:col-span-5 space-y-4 sm:space-y-6">
          <div class="pill-badge pill-badge-gold">Membresía & Tutela Canina</div>
          <h2 class="font-headline-lg">Solicitud de Afiliación & Socios Protectores</h2>
          
          <p class="text-[#423d37] leading-relaxed font-light text-sm sm:text-base">
            Forma parte de la entidad oficial reconocida por la RSCE y la FCI. Apoya la cría ética, la conservación del estándar morfológico original y participa con derechos plenos en las exposiciones monográficas de la raza.
          </p>

          <div class="p-5 sm:p-6 rounded-2xl bg-[#faf8f5] border border-[#e2dcd2] space-y-3 text-xs">
            <h4 class="font-display font-bold text-sm text-[#151413] mb-2">Privilegios del Socio Acreditado:</h4>
            <div class="flex items-center gap-2.5 text-[#423d37]">
              <span class="material-symbols-outlined text-[#8c6424] text-base fill shrink-0">check_circle</span>
              <span>Inscripción preferente y bonificada en Exposiciones Monográficas CAC.</span>
            </div>
            <div class="flex items-center gap-2.5 text-[#423d37]">
              <span class="material-symbols-outlined text-[#8c6424] text-base fill shrink-0">check_circle</span>
              <span>Acreditación de Afijo en el Directorio Oficial de Criadores del Club.</span>
            </div>
            <div class="flex items-center gap-2.5 text-[#423d37]">
              <span class="material-symbols-outlined text-[#8c6424] text-base fill shrink-0">check_circle</span>
              <span>Voz y voto en la Asamblea General y comisiones de morfología.</span>
            </div>
          </div>

          <div class="p-4 sm:p-5 rounded-xl border border-amber-200 bg-amber-50/60 text-xs text-amber-900 leading-relaxed font-sans">
            <strong>Nota estatutaria:</strong> Conforme al acuerdo de Junta Directiva, la cuota anual se mantiene bonificada. Tras enviar el expediente, la secretaría facilitará los datos de ingreso para formalizar la credencial de socio.
          </div>
        </div>

        <!-- Columna Derecha: Formulario Expediente de Ingreso -->
        <div class="lg:col-span-7">
          <div class="editorial-card p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_-15px_rgba(25,23,20,0.08)]">

            <h3 class="font-display font-bold text-lg sm:text-xl text-[#151413] mb-5 border-b border-[#f0eae0] pb-3 sm:pb-4 flex items-center justify-between">
              <span>Expediente de Ingreso 2026</span>
              <span class="font-label-caps text-[9px] sm:text-[10px] text-[#8c6424]">Formulario Oficial</span>
            </h3>

            <form id="membership-form" class="space-y-4 sm:space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block font-label-caps text-[10px] text-[#7a7064] mb-1.5">Nombre y Apellidos *</label>
                  <input type="text" required placeholder="Ej. Guillermo de Sant Martí" class="w-full px-4 py-3 rounded-lg bg-[#faf8f5] border border-[#dcd6cc] text-[#151413] text-base sm:text-xs focus:outline-none focus:border-[#151413] transition-colors" />
                </div>
                <div>
                  <label class="block font-label-caps text-[10px] text-[#7a7064] mb-1.5">DNI / Pasaporte *</label>
                  <input type="text" required placeholder="12345678Z" class="w-full px-4 py-3 rounded-lg bg-[#faf8f5] border border-[#dcd6cc] text-[#151413] text-base sm:text-xs focus:outline-none focus:border-[#151413] transition-colors" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block font-label-caps text-[10px] text-[#7a7064] mb-1.5">Correo Electrónico *</label>
                  <input type="email" required placeholder="usuario@entidad.es" class="w-full px-4 py-3 rounded-lg bg-[#faf8f5] border border-[#dcd6cc] text-[#151413] text-base sm:text-xs focus:outline-none focus:border-[#151413] transition-colors" />
                </div>
                <div>
                  <label class="block font-label-caps text-[10px] text-[#7a7064] mb-1.5">Teléfono *</label>
                  <input type="tel" required placeholder="+34 600 000 000" class="w-full px-4 py-3 rounded-lg bg-[#faf8f5] border border-[#dcd6cc] text-[#151413] text-base sm:text-xs focus:outline-none focus:border-[#151413] transition-colors" />
                </div>
              </div>

              <div>
                <label class="block font-label-caps text-[10px] text-[#7a7064] mb-1.5">Categoría de Membresía *</label>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  <label class="flex items-center gap-2 p-3 sm:p-3.5 rounded-lg bg-[#faf8f5] border border-[#dcd6cc] cursor-pointer hover:border-[#151413] text-xs font-medium text-[#2c2824] transition-colors min-h-[44px]">
                    <input type="radio" name="categoria" value="Socio Protector" checked class="text-[#151413]" />
                    <span>Socio Protector</span>
                  </label>
                  <label class="flex items-center gap-2 p-3 sm:p-3.5 rounded-lg bg-[#faf8f5] border border-[#dcd6cc] cursor-pointer hover:border-[#151413] text-xs font-medium text-[#2c2824] transition-colors min-h-[44px]">
                    <input type="radio" name="categoria" value="Criador Oficial" class="text-[#151413]" />
                    <span>Criador Oficial</span>
                  </label>
                  <label class="flex items-center gap-2 p-3 sm:p-3.5 rounded-lg bg-[#faf8f5] border border-[#dcd6cc] cursor-pointer hover:border-[#151413] text-xs font-medium text-[#2c2824] transition-colors min-h-[44px]">
                    <input type="radio" name="categoria" value="Aficionado" class="text-[#151413]" />
                    <span>Aficionado</span>
                  </label>
                </div>
              </div>

              <div>
                <label class="block font-label-caps text-[10px] text-[#7a7064] mb-1.5">Afijo o Ejemplar Poseído (Opcional)</label>
                <input type="text" placeholder="Ej. Dels Alans de Tramuntana" class="w-full px-4 py-3 rounded-lg bg-[#faf8f5] border border-[#dcd6cc] text-[#151413] text-base sm:text-xs focus:outline-none focus:border-[#151413] transition-colors" />
              </div>

              <div class="pt-1">
                <label class="flex items-start gap-2.5 cursor-pointer text-[11px] text-[#5c554b]">
                  <input type="checkbox" required checked class="mt-0.5 rounded text-[#151413] focus:ring-0 shrink-0" />
                  <span>Declaro acatar los Estatutos Fundacionales de 1991, el Código Ético de Cría Responsable y el Estándar Morfológico Oficial FCI N° 249 del Ca de Bou.</span>
                </label>
              </div>

              <button type="submit" class="btn-editorial-dark w-full py-4 text-xs mt-3">
                <span>Enviar Expediente a la Secretaría</span>
                <span class="material-symbols-outlined text-[16px]">send</span>
              </button>
            </form>

            <div id="form-feedback" class="hidden mt-4 p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-xs text-emerald-900 font-medium">
              &check; ¡Expediente recibido con éxito! La Secretaría General se pondrá en contacto para formalizar tu credencial de socio.
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
