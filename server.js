const express = require('express');
const app = express();
app.use(express.json());

 

let partidas = [
  {
    id: 1,
    time_casa: "Ceará",
    time_visitante: "Fortaleza",
    status: "Em andamento",
    gols_casa: 1,
    gols_visitante: 1,
    competicao: "Campeonato Cearense"
  },
  {
    id: 2,
    time_casa: "Flamengo",
    time_visitante: "Palmeiras",
    status: "Não iniciada",
    gols_casa: 0,
    gols_visitante: 0,
    competicao: "Brasileirão"
  },
  {
    id: 3,
    time_casa: "Real Madrid",
    time_visitante: "Barcelona",
    status: "Encerrado",
    gols_casa: 2,
    gols_visitante: 1,
    competicao: "La Liga"
  }
];

let gols = [
  {
    id: 1,
    partida_id: 1,
    minuto: 15,
    jogador: "Vina",
    tipo: "Normal",
    tempo_etapa: "1º Tempo",
    assistencia: "Erick"
  },
  {
    id: 2,
    partida_id: 1,
    minuto: 42,
    jogador: "Lucero",
    tipo: "De Pênalti",
    tempo_etapa: "1º Tempo",
    assistencia: "Nenhuma"
  },
  {
    id: 3,
    partida_id: 3,
    minuto: 89,
    jogador: "Vinicius Jr",
    tipo: "Normal",
    tempo_etapa: "2º Tempo",
    assistencia: "Bellingham"
  }
];





app.get('/partidas', (req, res) => {
  res.status(200).json(partidas);
});


app.get('/partidas/:id', (req, res) => {
  const partida = partidas.find(p => p.id == req.params.id);
  if (!partida) return res.status(404).json({ erro: "Partida não encontrada" });
  res.status(200).json(partida);
});


app.post('/partidas', (req, res) => {
  const novaPartida = { id: partidas.length + 1, ...req.body };
  partidas.push(novaPartida);
  res.status(201).json(novaPartida);
});


app.put('/partidas/:id', (req, res) => {
  const index = partidas.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ erro: "Partida não encontrada" });
  
  partidas[index] = { id: Number(req.params.id), ...req.body };
  res.status(200).json(partidas[index]);
});


app.delete('/partidas/:id', (req, res) => {
  const index = partidas.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ erro: "Partida não encontrada" });
  
  partidas.splice(index, 1);
  res.status(200).json({ mensagem: "Partida removida com sucesso" });
});



 
app.get('/gols', (req, res) => {
  res.status(200).json(gols);
});


app.get('/gols/:id', (req, res) => {
  const gol = gols.find(g => g.id == req.params.id);
  if (!gol) return res.status(404).json({ erro: "Gol não encontrado" });
  res.status(200).json(gol);
});


app.post('/gols', (req, res) => {
  const novoGol = { id: gols.length + 1, ...req.body };
  gols.push(novoGol);
  res.status(201).json(novoGol);
});


app.put('/gols/:id', (req, res) => {
  const index = gols.findIndex(g => g.id == req.params.id);
  if (index === -1) return res.status(404).json({ erro: "Gol não encontrado" });
  
  gols[index] = { id: Number(req.params.id), ...req.body };
  res.status(200).json(gols[index]);
});


app.delete('/gols/:id', (req, res) => {
  const index = gols.findIndex(g => g.id == req.params.id);
  if (index === -1) return res.status(404).json({ erro: "Gol não encontrado" });
  
  gols.splice(index, 1);
  res.status(200).json({ mensagem: "Gol removido com sucesso" });
});



app.listen(3000, () => {
  console.log('http://localhost:3000');
});
