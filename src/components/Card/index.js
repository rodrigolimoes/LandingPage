import React from 'react'
import './card.css'

function Card(props) {
  const { name, img, price, qtd, porcDescont } = props.items
  

  function formatPrice(num) {
    return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <div className="card">
      <div className="card_img">
        <img src={img} alt="" />
      </div>
      <div className="container_blackFriday">
        <i className="far fa-clock"></i>
        <div>
          <h3>Oferta Expira Em:</h3> <span>24:59:00</span>
        </div>
      </div>
      <div className="container_blackFriday desconto">
        <div>
          Desconto
          <h3>{porcDescont}%</h3>
        </div>
        <div>
          Quantidade
          <h3>{qtd}</h3>
        </div>
      </div>
      <div className="text_card">
        <h2>{name}</h2>
        <p>
          de {formatPrice(price)} por
          <span>{formatPrice(props.descont)}</span>
        </p>
      </div>
      <a href="/#" className="button card">
        <i className="fas fa-shopping-cart"></i> Comprar
      </a>
    </div>
  )
}

export default Card
