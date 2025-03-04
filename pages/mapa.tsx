import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapaPontosColeta = () => {
  const [isClient, setIsClient] = useState(false);
  const [contagens, setContagens] = useState({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      // Inicializa o mapa centrado em Presidente Prudente
      const map = L.map('map').setView([-22.1256, -51.3889], 13);

      // Adiciona a camada de tiles do OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Define o ícone personalizado relacionado à ecologia
      const ecoIcon = L.icon({
        iconUrl: 'URL_DO_ICONE_ECOLOGIA', // Substitua pela URL do seu ícone
        iconSize: [32, 32], // Tamanho do ícone
        iconAnchor: [16, 32], // Ponto do ícone que estará ancorado no mapa
        popupAnchor: [0, -32] // Ponto de onde o popup aparecerá em relação ao ícone
      });

      // Dados dos pontos de coleta
      const pontosColeta = [
        {
          id: 1,
          nome: 'Ecoponto Sabará',
          endereco: 'Rua Adelino Rodrigues Gatto com Rua Afonso Vincoleto',
          coordenadas: [-22.1250, -51.4120],
          tipo: 'Recicláveis'
        },
        {
          id: 2,
          nome: 'Ecoponto Residencial Bongiovani',
          endereco: 'Rua Maria Lenita de Macedo Bongiovani com Rua Paulo Aniceto Siqueira',
          coordenadas: [-22.1240, -51.4100],
          tipo: 'Recicláveis'
        },
        {
          id: 3,
          nome: 'Praça CEU Alvorada',
          endereco: 'Praça CEU Alvorada, Ana Jacinta',
          coordenadas: [-22.1330, -51.4220],
          tipo: 'Eletrônicos'
        },
        {
          id: 4,
          nome: 'Praça da Avenida Sussumo Anzai',
          endereco: 'Avenida Sussumo Anzai',
          coordenadas: [-22.1330, -51.4180],
          tipo: 'Eletrônicos'
        },
        {
          id: 5,
          nome: 'Antigo pátio de veículos',
          endereco: 'Avenida Juscelino Kubitschek de Oliveira, próximo ao Prudentão',
          coordenadas: [-22.1310, -51.4160],
          tipo: 'Eletrônicos'
        }
      ];

      // Inicializa as contagens com base nos IDs dos pontos de coleta
      const contagensIniciais = {};
      pontosColeta.forEach(ponto => {
        contagensIniciais[ponto.id] = 0;
      });
      setContagens(contagensIniciais);

      // Função para incrementar a contagem de descartes
      const incrementarContagem = (id) => {
        setContagens(prevContagens => ({
          ...prevContagens,
          [id]: prevContagens[id] + 1
        }));
      };

      // Adiciona marcadores no mapa para cada ponto de coleta
      pontosColeta.forEach(ponto => {
        const marker = L.marker(ponto.coordenadas, { icon: ecoIcon }).addTo(map);

        // Cria o conteúdo do popup com botão para incrementar a contagem
        const popupContent = document.createElement('div');
        popupContent.innerHTML = `<strong>${ponto.nome}</strong><br>${ponto.endereco}<br>Tipo: ${ponto.tipo}<br>Descarte realizado: <span id="contagem-${ponto.id}">0</span> vezes<br>`;
        const button = document.createElement('button');
        button.innerText = 'Registrar Descarte';
        button.onclick = () => {
          incrementarContagem(ponto.id);
          document.getElementById(`contagem-${ponto.id}`).innerText = contagens[ponto.id] + 1;
        };
        popupContent.appendChild(button);

        marker.bindPopup(popupContent);
      });
    }
  }, [isClient, contagens]);

  if (!isClient) return null;

  return (
    <div className="mapa">
      <h1>Pontos de Coleta em Presidente Prudente</h1>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default MapaPontosColeta;
