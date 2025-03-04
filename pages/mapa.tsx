// pages/mapa.tsx
import dynamic from 'next/dynamic';
import GraficoColetas from '../components/GraficoColetas';

// Carregar o componente de mapa dinamicamente, sem SSR
const MapaComponent = dynamic(() => import('../components/MapaComponent'), { ssr: false });

const MapaPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MapaComponent />
      <GraficoColetas />
    </div>
  );
};

export default MapaPage;
