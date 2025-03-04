// components/GraficoColetas.tsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraficoColetas = ({ contagem }) => {
  const data = {
    labels: Object.keys(contagem),
    datasets: [
      {
        label: 'Quantidade de Coletas',
        data: Object.values(contagem),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ position: 'absolute', top: 10, right: 10, width: 300, height: 200, background: 'white', padding: 10, borderRadius: 8, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h3>Coletas por Ponto</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraficoColetas;
