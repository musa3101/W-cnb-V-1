import './index.css';
import { championsData } from './data/champions.js';
import { monographicsData } from './data/monographics.js';
import { breedersData } from './data/breeders.js';
import { breedStandard } from './data/standard.js';
import {
  Header,
  Hero,
  BentoGrid,
  Standard,
  Champions,
  Monographics,
  Breeders,
  MembershipForm,
  Footer,
  MobileDock,
} from './components/index.js';

// Estado interactivo de la aplicación
const state = {
  activeSection: 'inicio',
  championFilter: 'all',
  championSearch: '',
  monographicSearch: '',
  breederFilter: 'all',
  membershipCategory: 'Socio Protector',
  mobileMenuOpen: false,
};

// Selectores y filtrado reactivo
function getFilteredChampions() {
  return championsData.filter(c => {
    const matchesFilter = state.championFilter === 'all' || c.gender === state.championFilter;
    const matchesSearch = !state.championSearch || 
      c.name.toLowerCase().includes(state.championSearch.toLowerCase()) ||
      c.years.includes(state.championSearch);
    return matchesFilter && matchesSearch;
  });
}

function getFilteredMonographics() {
  if (!state.monographicSearch) return monographicsData;
  const q = state.monographicSearch.toLowerCase();
  return monographicsData.filter(m => 
    m.edition.toLowerCase().includes(q) ||
    m.judge.toLowerCase().includes(q) ||
    m.male.toLowerCase().includes(q) ||
    m.female.toLowerCase().includes(q) ||
    m.date.includes(q)
  );
}

function getFilteredBreeders() {
  if (state.breederFilter === 'all') return breedersData;
  return breedersData.filter(b => b.type === state.breederFilter);
}

// Orquestador Principal de Renderizado
function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const filteredChampions = getFilteredChampions();
  const filteredMonographics = getFilteredMonographics();
  const filteredBreeders = getFilteredBreeders();

  app.innerHTML = `
    ${Header({ mobileMenuOpen: state.mobileMenuOpen })}
    <main class="flex-grow pb-16 sm:pb-0">
      ${Hero()}
      ${BentoGrid()}
      ${Standard()}
      ${Champions({ champions: filteredChampions, currentFilter: state.championFilter })}
      ${Monographics({ monographics: filteredMonographics, searchQuery: state.monographicSearch })}
      ${Breeders({ breeders: filteredBreeders, currentFilter: state.breederFilter })}
      ${MembershipForm()}
    </main>
    ${Footer()}
    ${MobileDock()}
  `;

  attachEventListeners();
}

function attachEventListeners() {
  // Toggle Menú Móvil
  const menuToggle = document.getElementById('mobile-menu-toggle');
  if (menuToggle) {
    menuToggle.onclick = () => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
      renderApp();
    };
  }

  // Cerrar menú móvil al hacer click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.onclick = () => {
      state.mobileMenuOpen = false;
      renderApp();
    };
  });

  // Filtros de Campeones
  document.querySelectorAll('.champion-filter-btn').forEach(btn => {
    btn.onclick = (e) => {
      state.championFilter = e.currentTarget.getAttribute('data-filter');
      renderApp();
    };
  });

  // Búsqueda en Monográficas (Sincronizada con vista escritorio y tarjetas móviles)
  const monoSearch = document.getElementById('monographic-search');
  if (monoSearch) {
    monoSearch.oninput = (e) => {
      state.monographicSearch = e.target.value;
      const filtered = getFilteredMonographics();
      
      // Actualizar tabla escritorio
      const tbody = document.getElementById('monographics-desktop-tbody');
      if (tbody) {
        tbody.innerHTML = filtered.map(m => `
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
        `).join('');
      }

      // Actualizar tarjetas móviles
      const mobileList = document.getElementById('monographics-mobile-list');
      if (mobileList) {
        mobileList.innerHTML = filtered.map(m => `
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
        `).join('');
      }
    };
  }

  // Filtros de Criadores
  document.querySelectorAll('.breeder-filter-btn').forEach(btn => {
    btn.onclick = (e) => {
      state.breederFilter = e.currentTarget.getAttribute('data-bfilter');
      renderApp();
    };
  });

  // Formulario Expediente de Ingreso
  const form = document.getElementById('membership-form');
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const feedback = document.getElementById('form-feedback');
      if (feedback) {
        feedback.classList.remove('hidden');
        form.reset();
      }
    };
  }
}

// Inicialización
document.addEventListener('DOMContentLoaded', renderApp);
renderApp();
