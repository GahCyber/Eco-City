import Link from 'next/link';

const Home = () => {
  return (
    <div className="home">
      {/* Cabeçalho */}
      <header className="header">
        <div className="logo">
          <span>Eco</span>
          <span className="green">City</span>
        </div>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/zonas">Zonas de Coleta</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </nav>
      </header>

      {/* Seção Herói */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="gradient-text">Transforme sua cidade</span>
            <br />
            com o <span className="green">Eco City</span>
          </h1>
          <p className="typewriter">Discarte os resíduos corretamente, promova a sustentabilidade.</p>
          <Link href="/zonas" className="cta-button">
            Explorar Pontos de Coleta
          </Link>
        </div>
      </section>

      {/* Seção de Recursos */}
      <section className="features">
        <h2>O que oferecemos?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Mapeamento dos pontos de coleta.</h3>
            <p>Encontre facilmente os pontos.</p>
          </div>
          <div className="feature-card">
            <h3>Recuperação Ecológica</h3>
            <p>Apoie a recuperação de áreas afetadas por discarte indevido do lixo.</p>
          </div>
          <div className="feature-card">
            <h3>Eventos Ecológicos</h3>
            <p>Participe de eventos e contribua para o verde.</p>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="benefits">
        <h2>Benefícios</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Para Empresas</h3>
            <ul>
              <li>Divulgação da marca.</li>
              <li>Responsabilidade ambiental.</li>
              <li>Incentivos fiscais.</li>
            </ul>
          </div>
          <div className="benefit-card">
            <h3>Para a Sociedade</h3>
            <ul>
              <li>Mais áreas verdes para lazer.</li>
              <li>Melhoria da qualidade do ar.</li>
              <li>Incentivo ao comércio local.</li>
            </ul>
          </div>
          <div className="benefit-card">
            <h3>Para o Governo</h3>
            <ul>
              <li>Menos custos com manutenção.</li>
              <li>Maior engajamento da população.</li>
              <li>Cidade mais sustentável.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;