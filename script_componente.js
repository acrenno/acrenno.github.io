class AulasComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.hoje = "ter";
  }

  connectedCallback() {
    this.loadData();
  }

  async loadData() {
    try {
      const response = await fetch('aulas.json');
      const aulas = await response.json();
      this.render(aulas);
    } catch (error) {
      console.error('Erro ao carregar os dados das aulas:', error);
    }
  }

  getNotaColor(nota) {
    const valor = parseFloat(nota);
    if (valor < 6) return '#e24b4a';
    if (valor < 8) return '#ef9f27';
    return '#3b6d11';
  }

  render(aulas) {
    const aulasDia = aulas.filter(a => a.data === this.hoje);
    this.shadowRoot.innerHTML = `
      <style>
        .comp-aula { background:#fff; border-radius:12px; border:1px solid #e5e7eb; padding:14px 16px; margin-bottom:12px; }
        .titulo_aula { font-weight:bold; font-size:15px; }
        .p { font-size:13px; color:#555; margin:6px 0 10px 0; }
        .lables { display:flex; }
        .lable-prova, .lable-frequencia, .lable-nota { padding:7px 15px; margin-bottom:10px; border-radius:500px; text-align:center; margin-right:10px; background-color:#126ae2; }
        .p_lable { font-size:13px; color:white; }
      </style>
      <div>
        ${aulasDia.map(a => `
          <div class="comp-aula">
            <div class="lable-prova p_lable" style="${a.prova_alert ? '' : 'display:none;'}">PROVA: <b>${a.prova}</b></div>
            <div class="titulo_aula">${a.disciplina}</div>
            <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
            <div class="lables">
              <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
              <div class="lable-nota p_lable" style="background-color:${this.getNotaColor(a.nota)}">CR: <b>${a.nota}</b></div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

customElements.define('aulas-component', AulasComponent);