import Link from 'next/link';

const Zonas = () => {
  return (
    <div className="zonas">
      <h1>Pontos de Coleta</h1>
      <p>Explore as zonas verdes disponíveis para adoção em Presidente Prudente.</p>

      <div className="zona-list">
        <div className="zona-card">
          <h3>Eco-Mapa</h3>
          <img id='rotatoria' src="/img/rotatoria.jpg" alt="Rotatória do Shopping" />
          <p>Pontos de coleta.</p>
          <Link href="/adocao" className="cta-button">Visualizar</Link>
        </div>
        <div className="zona-card">
          <h3>Parque Ecológico</h3>
          <img id='rotatoria' src="/img/parque-ecologico.png" alt="Rotatória do Shopping" />
          <p>Ótima opção para promover áreas de lazer e ecologia.</p>
          <Link href="/adocao" className="cta-button">Adotar esta zona</Link>
        </div>
      </div>
    </div>
  );
};

export default Zonas;
