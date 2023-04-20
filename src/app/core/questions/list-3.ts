export const listThree = [
  {
    ask: 'Diante da placa de advertência A-10b o condutor deve reduzir a velocidade e manter-se atento, pois à frente existe',
    photo: '../../../assets/signal/A-10b.jpg',
    reacts: [
      { choice: 'Entroncamento, com via lateral à esquerda, com risco de acidente', value: 'mncvber' },
      { choice: 'Trecho da via em declive, com risco de acidente', value: 'klepqe' },
      { choice: 'Entroncamento, com via lateral à direita, com risco de acidente', value: 'lucas' },
      { choice: 'Trecho da via em mão dupla, com risco de acidente', value: 'klepqe' },
    ],
    show: false,
  },
  {
    ask: 'O condutor que tenha Permissão para Dirigir na categoria "B" obterá a Carteira Nacional de Habilitação após um ano, desde que não tenha cometido infração de natureza',
    reacts: [
      { choice: 'Grave ou média, ou não tenha recebido advertência verbal', value: 'mncvber' },
      { choice: 'Média ou leve, ou que não tenha recebido multa por alcoolismo', value: 'klçadsk' },
      { choice: 'Leve ou grave, ou que não seja reincidente em infração leve', value: 'bcvmnkl' },
      { choice: 'Grave ou gravíssima, ou não seja reincidente em infração média', value: 'lucas' },
    ],
    show: false,
  },
  {
    ask: 'Na via com velocidade máxima de 80 km/h, qual a distância mínima para iniciar a sinalização de acidente ocorrido durante o dia, com pista seca?',
    reacts: [
      { choice: 'A 100 metros do veículo ou, aproximadamente, 100 passos', value: 'ewqds' },
      { choice: 'A 80 metros do veículo ou, aproximadamente, 80 passos', value: 'lucas' },
      { choice: 'A 120 metros do veículo ou, aproximadamente, 120 passos', value: 'klepqe' },
      { choice: 'A 60 metros do veículo ou, aproximadamente, 60 passos', value: 'ewquihew' },
    ],
    show: false,
  },
  {
    ask: 'Parar o veículo na área de cruzamento de vias, prejudicando a circulação',
    reacts: [
      { choice: 'Infração de trânsito e uma atitude não cidadã do condutor', value: 'lucas' },
      { choice: 'Infração de trânsito, desde que haja sinalização de pintura na pista', value: 'ewqesda' },
      { choice: 'Permitido, em caso de congestionamento da via', value: 'klepqe' },
      { choice: 'Falta de civilidade, mas não caracteriza infração de trânsito', value: 'ewquihew' },
    ],
    show: false,
  },
  {
    ask: 'O freio do tipo ABS torna mais segura a frenagem porque?',
    reacts: [
      { choice: 'Aplica força menor nas rodas traseiras', value: 'dxzjdsa' },
      { choice: 'Bloqueia todas as rodas simultaneamente', value: 'ewqesda' },
      { choice: 'Aplica força menor nas rodas dianteiras', value: 'klepqe' },
      { choice: 'Evita que a roda bloqueie e o veículo derrape', value: 'lucas' },
    ],
    show: false,
  },
  {
    ask: 'O candidato à primeira habilitação, depois de submetido a todos os exames e considerado apto, receberá',
    reacts: [
      { choice: 'Carteira nacional de habilitação, válida por 5 (cinco) anos', value: 'dxzjdsa' },
      { choice: 'Permissão para dirigir, válida por 2 (dois) anos, em todo o território nacional', value: 'ewqesda' },
      { choice: 'Carteira nacional de habilitação, válida por 1 (um) ano', value: 'klepqe' },
      { choice: 'Permissão para dirigir, válida por 1 (um) ano, em todo o território nacional', value: 'lucas' },
    ],
    show: false,
  },
  {
    ask: 'O estado do condutor é fundamental para que dirija com segurança. Assim, em viagem longa, é correto afirmar',
    reacts: [
      { choice: 'É melhor continuar dirigindo para chegar ao destino mais rápido, onde poderá descansar', value: 'dxzjdsa' },
      { choice: 'O cansaço e o sono podem ser contornados se o condutor ingerir bebidas estimulantes', value: 'ewqesda' },
      { choice: 'O cansaço e o sono podem ser contornados se o condutor ingerir bebida energética', value: 'klepqe' },
      { choice: 'Estando cansado e com sono, ele deve parar em local seguro, descansar e dormir', value: 'lucas' },
    ],
    show: false,
  },
  {
    ask: 'Diante da placa de regulamentação R-15 qual deve ser a interpretação do condutor?',
    photo: '../../../assets/signal/R-15.jpg',
    reacts: [
      { choice: 'A via permite somente passagem de automóveis', value: 'ewquihew' },
      { choice: 'Existe peso mínimo por eixo', value: 'klepqe' },
      { choice: 'A via permite veículos com altura superior a 3 metros', value: 'ewquihew' },
      { choice: 'A via tem limitação de altura máxima', value: 'lucas' },
    ],
    show: false,
  },
]
