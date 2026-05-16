# Dashboard App Inatel

Dashboard web desenvolvido para a disciplina de Interface Homem-Máquina (IHM) do Inatel.

## Funcionalidades

- Exibição de mensagens e notificações do aluno
- Componente de aulas do dia com filtro por dia da semana
- Cor do CR dinâmica conforme a nota (verde, laranja ou vermelho)
- Alerta de prova quando `prova_alert` é verdadeiro
- Carrossel de eventos do campus
- Temas: Inatel, Limão e Dark

## Tecnologias

- HTML, CSS e JavaScript puro
- Web Components com Shadow DOM
- JSON para dados das aulas

## Como rodar

```bash
cd rodar
npx serve .
```

Acesse `http://localhost:3000` no navegador.

## Estrutura

```
rodar/
├── index.html
├── style.css
├── script.js
├── script_componente.js
├── styles_componente.css
└── aulas.json
```
