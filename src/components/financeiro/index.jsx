import React, { useState, useRef } from 'react';
// ... outras importações

export default function Financeiro() {
    const [dadoInicial, setDadoinicial] = useState({
        revenues: Array(12).fill(0),
        expenses: Array(12).fill(0)
    });

    const inputRef = useRef(null); // Criando uma referência

    const valorAtualizado = (field, index, value) => {
        const valorAtualizado = [...dadoInicial[field]];
        valorAtualizado[index] = Number(value);
        setDadoinicial({ ...dadoInicial, [field]: valorAtualizado });
    };

    // Exemplo de uso do inputRef
    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus(); // Focando no input
        }
    };

    return (
        <div className='dashboard-overview'>
            {/* ... outras partes do componente */}
            <input
                ref={inputRef} // Usando a referência
                type="number"
                onChange={(e) => valorAtualizado('revenues', 0, e.target.value)} // Exemplo
                placeholder="Receita Janeiro"
            />
            <button onClick={focusInput}>Focar no Input</button>
            {/* ... restante do componente */}
        </div>
    );
}


// import React from 'react';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';
// import { useState } from 'react';
// import { Line, Bar } from 'react-chartjs-2';
// import './index.scss';
// import Kpi from './kpi.jsx';

// // Registrando componentes necessários para o Chart.js
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     BarElement
// );

// export default function Financeiro() {

//     const [dadoInicial, setDadoinicial] = useState({

//         revenues: Array(12).fill(0),
//         expenses: Array(12).fill(0)

//     });

//     const valorAtualizado = (field, index, value) => {

//         const valorAtualizado = [...dadoInicial[field]];


//         valorAtualizado[index] = Number(value);

//         setDadoinicial({ ...dadoInicial, [field]: valorAtualizado });

//     };

//     const calcularTotal = (field) => dadoInicial[field].reduce((acc, value) => acc + value, 0);

//     const kpis = [

//         { title: 'Receitas', value: `R$ ${calcularTotal('revenues')}`, color: '#4CAF50' },

//         { title: 'Despesas', value: `R$ ${calcularTotal('expenses')}`, color: '#FF6F61' },

//         { title: 'Lucro', value: `R$ ${calcularTotal('revenues') - calcularTotal('expenses')}`, color: '#2196F3' }

//     ];

//     const chartData = (label, data, color) => ({

//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],

//         datasets: [{ label, data, borderColor: color, backgroundColor: color, fill: false }],

//     });

//     const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

//     return (
//         <div className='dashboard-overview'>

//             <div className='input-section'>

//                 <div className='input-row'>

//                     <div className='input-group'>

//                         <h3>Atualizar Receitas</h3>

//                         {dadoInicial.revenues.map((value, index) => {

//                             const mes = meses[index];

//                             return (

//                                 <div key={`revenue-${index}`}>

//                                     <label htmlFor={`revenue-${index}`}>{`${mes}`}</label>

//                                     <input
//                                         id={`revenue-${index}`}
//                                         type="number"
//                                         value={value || ""}
//                                         onChange={(e) => valorAtualizado('revenues', index, e.target.value)}
//                                         placeholder={`Receita ${mes}`}
//                                     />
//                                 </div>

//                             );

//                         })}

//                     </div>

//                     <div className='input-group'>

//                         <h3>Atualizar Despesas</h3>

//                         {dadoInicial.expenses.map((value, index) => {

//                             const mes = meses[index];

//                             return (

//                                 <div key={`expense-${index}`}>


//                                     <label htmlFor={`expense-${index}`}>{`${mes}`}</label>

//                                     <input
//                                         id={`expense-${index}`}
//                                         type="number"
//                                         value={value || ""}
//                                         onChange={(e) => valorAtualizado('expenses', index, e.target.value)}
//                                         placeholder={`Despesa ${mes}`}
//                                     />

//                                 </div>

//                             );

//                         })}

//                     </div>

//                 </div>

//             </div>

//             <div className='kpi-container'>

//                 {kpis.map((kpi, index) => (

//                     <Kpi key={index} title={kpi.title} value={kpi.value} color={kpi.color} />

//                 ))}

//             </div>

//             <div className='chart-section'>

//                 <div className='chart-container'>

//                     <h3>Receitas</h3>

//                     <Line data={chartData('Receitas', dadoInicial.revenues, '#4CAF50')} />

//                 </div>

//                 <div className='chart-container'>

//                     <h3>Despesas</h3>

//                     <Line data={chartData('Despesas', dadoInicial.expenses, '#FF6F61')} />

//                 </div>

//             </div>

//         </div>

//     );

// }