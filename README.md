# api_matbet
API MATBET (MB)
API REST desenvolvida para gerenciamento de placares em tempo real.

Tecnologias
Node.js

Express.js

Recursos e Campos
Partidas (/partidas)
id (Número) - Identificador único.

time_casa (Texto) - Nome do mandante.

time_visitante (Texto) - Nome do visitante.

status (Texto) - Estado atual da partida.

gols_casa (Número) - Placar do mandante.

gols_visitante (Número) - Placar do visitante.

competicao (Texto) - Nome da competição.

Gols (/gols)
id (Número) - Identificador único.

partida_id (Número) - ID da partida correspondente.

minuto (Número) - Momento do gol.

jogador (Texto) - Autor do gol.

tipo (Texto) - Tipo do gol (ex: Normal, Pênalti).

tempo_etapa (Texto) - Período (ex: 1º Tempo, 2º Tempo).

assistencia (Texto) - Autor da assistência.

Execução
Bash
git clone https://github.com/andrefrota10/api_matbet.git
cd api_matbet
npm install
node index.js
A aplicação roda em http://localhost:3000.

Endpoints
GET /partidas: Lista todas as partidas

GET /partidas/:id: Retorna uma partida específica

POST /partidas: Cadastra nova partida

PUT /partidas/:id: Atualiza uma partida

DELETE /partidas/:id: Remove uma partida

GET /gols: Lista todos os gols

GET /gols/:id: Retorna um gol específico

POST /gols: Cadastra novo gol

PUT /gols/:id: Atualiza um gol

DELETE /gols/:id: Remove um gol
