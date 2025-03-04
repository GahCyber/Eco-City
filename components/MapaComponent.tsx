// components/MapaComponent.tsx
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapaComponent = () => {
  const [isClient, setIsClient] = useState(false);
  const [contagem, setContagem] = useState({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const map = L.map('map', {
        center: [-22.1256, -51.3889],
        zoom: 13,
        zoomControl: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      const treeIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      const pontosColeta = [
        { nome: 'Ecoponto Sabará', endereco: 'Rua Adelino Rodrigues Gatto com Rua Afonso Vincoleto', coordenadas: [-22.1250, -51.4120], tipo: 'Recicláveis' },
        { nome: 'Ecoponto Residencial Bongiovani', endereco: 'Rua Maria Lenita de Macedo Bongiovani com Rua Paulo Aniceto Siqueira', coordenadas: [-22.1240, -51.4100], tipo: 'Recicláveis' },
        { nome: 'Praça CEU Alvorada', endereco: 'Praça CEU Alvorada, Ana Jacinta', coordenadas: [-22.1330, -51.4220], tipo: 'Eletrônicos' },
        { nome: 'Praça da Avenida Sussumo Anzai', endereco: 'Avenida Sussumo Anzai', coordenadas: [-22.1330, -51.4180], tipo: 'Eletrônicos' },
        { nome: 'Antigo pátio de veículos', endereco: 'Avenida Juscelino Kubitschek de Oliveira, próximo ao Prudentão', coordenadas: [-22.1310, -51.4160], tipo: 'Eletrônicos' }
      ];

      const contagemInicial = {};
      pontosColeta.forEach(ponto => {
        contagemInicial[ponto.nome] = 0;
      });
      setContagem(contagemInicial);

      pontosColeta.forEach(ponto => {
        const marker = L.marker(ponto.coordenadas, { icon: treeIcon })
          .addTo(map)
          .bindPopup(() => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${ponto.nome}</strong><br>${ponto.endereco}<br>Tipo: ${ponto.tipo}<br><br>
            Coleta: <span id='contagem-${ponto.nome}'>${contagem[ponto.nome]}</span>
            <br><button id='btn-${ponto.nome}'>+1</button>`;
            setTimeout(() => {
              document.getElementById(`btn-${ponto.nome}`).addEventListener('click', () => {
                setContagem(prev => ({ ...prev, [ponto.nome]: prev[ponto.nome] + 1 }));
                document.getElementById(`contagem-${ponto.nome}`).innerText = contagem[ponto.nome] + 1;
              });
            }, 10);
            return div;
          });
      });
    }
  }, [isClient, contagem]);

  if (!isClient) return null;

  return <div id="map" style={{ width: '100vw', height: '100vh' }}></div>;
};

export default MapaComponent;
