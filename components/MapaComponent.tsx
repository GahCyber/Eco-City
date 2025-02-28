import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapaPontosColeta = () => {
  const [isClient, setIsClient] = useState(false);

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

      // Dados dos pontos de coleta
      const pontosColeta = [
        {
          nome: 'Ecoponto Sabará',
          endereco: 'Rua Adelino Rodrigues Gatto com Rua Afonso Vincoleto',
          coordenadas: [-22.1250, -51.4120],
          tipo: 'Recicláveis'
        },
        {
          nome: 'Ecoponto Residencial Bongiovani',
          endereco: 'Rua Maria Lenita de Macedo Bongiovani com Rua Paulo Aniceto Siqueira',
          coordenadas: [-22.1240, -51.4100],
          tipo: 'Recicláveis'
        },
        {
          nome: 'Praça CEU Alvorada',
          endereco: 'Praça CEU Alvorada, Ana Jacinta',
          coordenadas: [-22.1330, -51.4220],
          tipo: 'Eletrônicos'
        },
        {
          nome: 'Praça da Avenida Sussumo Anzai',
          endereco: 'Avenida Sussumo Anzai',
          coordenadas: [-22.1330, -51.4180],
          tipo: 'Eletrônicos'
        },
        {
          nome: 'Antigo pátio de veículos',
          endereco: 'Avenida Juscelino Kubitschek de Oliveira, próximo ao Prudentão',
          coordenadas: [-22.1310, -51.4160],
          tipo: 'Eletrônicos'
        }
      ];

      // Adiciona marcadores no mapa para cada ponto de coleta
      pontosColeta.forEach(ponto => {
        L.marker(ponto.coordenadas)
          .addTo(map)
          .bindPopup(`<strong>${ponto.nome}</strong><br>${ponto.endereco}<br>Tipo: ${ponto.tipo}`);
      });
    }
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="mapa">
      <h1>Pontos de Coleta em Presidente Prudente</h1>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default MapaPontosColeta;
