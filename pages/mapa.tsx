// pages/mapa.tsx
import dynamic from 'next/dynamic';
import GraficoColetas from '../components/GraficoColetas';

// Carregar o componente de mapa dinamicamente, sem SSR
const MapaComponent = dynamic(() => import('../components/MapaComponent'), { ssr: false });

const MapaPage = () => {
  return (
    <div>
      <MapaComponent />
    </div>
  );
};

export default MapaPage;
