import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Indica que estamos no lado do cliente
  }, []);

  useEffect(() => {
    if (isClient) {
      const map = L.map('map').setView([-22.12918223115807, -51.39940012356393], 12);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      const ecoIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/2921/2921822.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });

      map.on('click', function(e) {
        L.marker([e.latlng.lat, e.latlng.lng], { icon: ecoIcon }).addTo(map)
          .bindPopup("🌍 Ponto Ecológico Adicionado!");
      });
    }
  }, [isClient]);

  if (!isClient) {
    return null; // Retorna null no lado do servidor
  }

  return (
    <div className="mapa">
      <h1>Eco-Mapa</h1>
      <p>Adote uma zona verde e contribua para um ambiente melhor!</p>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default Mapa;
