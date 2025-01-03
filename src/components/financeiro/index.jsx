
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import './index.scss';
import Kpi from './kpi.jsx';

// Registrando componentes necessários para o Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,    
    Legend
);

export default function Financeiro() {

    const [dadoInicial, setDadoinicial] = useState({

        revenues: Array(6).fill(0),
        expenses: Array(6).fill(0)

    });

    const valorAtualizado = (field, index, value) => {

        const valorAtualizado = [...dadoInicial[field]];


        valorAtualizado[index] = Number(value);

        setDadoinicial({ ...dadoInicial, [field]: valorAtualizado });

    };

    const calcularTotal = (field) => dadoInicial[field].reduce((acc, value) => acc + value, 0);

    const kpis = [

        { title: 'Receitas', value: `R$ ${calcularTotal('revenues')}`, color: '#4CAF50' },

        { title: 'Despesas', value: `R$ ${calcularTotal('expenses')}`, color: '#FF6F61' },

        { title: 'Lucro', value: `R$ ${calcularTotal('revenues') - calcularTotal('expenses')}`, color: '#2196F3' }

    ];

    const chartData = (label, data, color) => ({
        labels: ['Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5', 'Mês 6'],
        datasets: [
            {
                label,
                data,
                borderColor: color,
                backgroundColor: color,
                pointBackgroundColor: color,
                pointHoverRadius: 8,
                pointHoverBorderColor: '#fff',
                fill: true,
                tension: 0.2
            }
        ]
    });

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#161515'
                }
            },
            tooltip: {
                callbacks: {
                    label: (context) => `R$ ${context.raw}`
                },
                backgroundColor: '#161515',
                borderColor: '#FFF',
                borderWidth: 1,
                cornerRadius: 10,
                titleFont: {
                    size: 16,
                    weight: 'bold'
                },
                bodyFont: {
                    size: 14
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#111'
                },
                grid: {
                    color: '#161515'
                }
            },
            y: {
                ticks: {
                    color: '#111',
                    callback: (value) => `R$ ${value}`
                },
                grid: {
                    color: '#161515'
                }
            }
        }
    };

    const meses = ['Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5', 'Mês 6'];

    return (
        <div className='dashboard-overview'>

            <h3>Visão Geral: Últimos 6 Meses.</h3>

            <div className='section'>

                <div className='input-section'>

                    <div className='input-row'>

                        <div className='input-group'>

                            <h3>Atualizar Receitas</h3>

                            {dadoInicial.revenues.map((value, index) => {

                                const mes = meses[index];

                                return (

                                    <div key={`revenue-${index}`}>

                                        <label htmlFor={`revenue-${index}`}>{`${mes}`}</label>

                                        <input
                                            id={`revenue-${index}`}
                                            type="number"
                                            value={value || ""}
                                            onChange={(e) => valorAtualizado('revenues', index, e.target.value)}
                                            placeholder={`Receita ${mes}`}
                                        />
                                    </div>

                                );

                            })}

                        </div>

                        <div className='input-group'>

                            <h3>Atualizar Despesas</h3>

                            {dadoInicial.expenses.map((value, index) => {

                                const mes = meses[index];

                                return (

                                    <div key={`expense-${index}`}>


                                        <label htmlFor={`expense-${index}`}>{`${mes}`}</label>

                                        <input
                                            id={`expense-${index}`}
                                            type="number"
                                            value={value || ""}
                                            onChange={(e) => valorAtualizado('expenses', index, e.target.value)}
                                            placeholder={`Despesa ${mes}`}
                                        />

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                </div>

                <div className='kpi-container'>

                    {kpis.map((kpi, index) => (

                        <Kpi key={index} title={kpi.title} value={kpi.value} color={kpi.color} />

                    ))}

                </div>

            </div>

            <div className='chart-section'>

                <div className='chart-container'>

                    <h3>Receitas</h3>

                    <Line data={chartData('Receitas', dadoInicial.revenues, '#4CAF50')} options={chartOptions} />

                </div>

                <div className='chart-container'>

                    <h3>Despesas</h3>

                    <Line data={chartData('Despesas', dadoInicial.expenses, '#FF6F61')} options={chartOptions} />

                </div>

            </div>

        </div>

    );

}