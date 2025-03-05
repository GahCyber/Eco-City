// pages/mapa.tsx
import dynamic from 'next/dynamic';

// Carregar o componente de mapa dinamicamente, sem SSR
const MapaComponent = dynamic(() => import('../components/MapaComponent'), { ssr: false });

const MapaPage = () => {
  return (
    <div>
      <h1>Página do Mapa</h1>
      <MapaComponent />
    </div>
  );
};

export default MapaPage;
