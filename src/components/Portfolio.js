import React from 'react';
import PORTFOLIO from '../data/portfolio';
import '../bootstrap-grid.css';


const Portfolio = props => {
    const { title, image, description } = props.portfolio;
  
    return (
      <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
        <h3>{title}</h3>
        <img src={image} alt='profile' style={{ display: 'inline-block', width: 300, margin: 10, padding:10}}/>
        <p>{description}</p>
      </div>
    )
  }

const Portfolios = () => {
  return <div>
      <h2>Featured Websites</h2>
      <div>
        {
          PORTFOLIO.map(PORTFOLIO => (
            <Portfolio key={PORTFOLIO.id} portfolio={PORTFOLIO} />
          ))
        }
      </div>
    </div>
  }

export default Portfolios;