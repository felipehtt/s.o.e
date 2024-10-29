import React from 'react';
import './kpi.scss';

//KPI significa "Key Performance Indicator" (Indicador-Chave de Desempenho). É uma métrica usada para avaliar o sucesso de uma organização, departamento ou projeto em alcançar objetivos estratégicos e operacionais.

const Kpi = ({ title, value, color }) => {
    
  return (
    
    <div className="kpi-card" style={{ borderColor: color }}>
        
      <div className="kpi-details">
        
        <h4>{title}</h4>
        
        <p>{value}</p>
        
      </div>
      
    </div>
    
  );
  
};

export default Kpi;
