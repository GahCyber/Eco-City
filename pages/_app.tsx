import type { AppProps } from 'next/app';
import '../styles/global.scss';
import "../styles/mapa.scss"
import "../styles/contato.scss"
import "../styles/empresas.scss"
import "../styles/zonas.scss"
import Footer from '../components/footer';
import React from 'react';  
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="layout">
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer /> {/* Adicione o Footer aqui */}
    </div>
  );
}

export default MyApp;