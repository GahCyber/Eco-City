import { useState } from 'react';

const Adocao = () => {
  const [zonaAdotada, setZonaAdotada] = useState(false);

  const adotarZona = () => {
    setZonaAdotada(true);
  };

  return (
    <div className="adocao">
      <h1>Adoção de Zona Verde</h1>
      <p>Adote uma zona verde e contribua para um ambiente melhor!</p>

      {!zonaAdotada ? (
        <button onClick={adotarZona} className="adotar-button">
          Adotar Zona
        </button>
      ) : (
        <p>Zona adotada com sucesso! Obrigado pela sua contribuição.</p>
      )}
    </div>
  );
};

export default Adocao;
