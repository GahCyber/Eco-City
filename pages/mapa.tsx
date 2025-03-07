import dynamic from 'next/dynamic';

const Mapa = dynamic(() => import('../components/MapaComponent'), { ssr: false });

export default Mapa;
