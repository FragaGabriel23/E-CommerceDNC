import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'


const ProductDetail = ({ data }) => {
  return (
    <section className="ProductDetail">
      <aside className="ProductDetail__Left">
        <div className='ProductDetail__Card'>
          <img src={`/${data.imgPath}`} alt={data.title} />
          <div>
            <p>{data.title}</p>
          </div>
        </div>
        <div className="ProductDetail__Description">
          <h1>Descrição</h1>
          <h2>{data.title}</h2>
          <div className='bar'></div>
        </div>
      </aside>
      <main className="ProductDetail__Right">
        <h1 className='ProductDetail__Right--Title'>Informações Sobre o Produto</h1>
        <div className='bar'></div>
        <div className='ProductDetail__main'>
          <h1>{data.price}</h1>
          <h2>
            Cor:{" "}
            {
              data.colors.map((color, index) =>
                index + 1 === data.colors.length ?
                  (<span key={index}>{color}</span>) :
                  (<span key={index}>{color}, </span>)
              )
            }
          </h2>
          <div className='ProductDetail__cubeColor'>
            {
              data.colors.map((color, i) => (
                <label key={i}>
                  <input className="cubeColor-input" type="radio" name="color" value={color}/>
                  <span className="cubeColor-tile" style={{backgroundColor: color}}>
                    <span className="cubeColor-label"></span>
                  </span>
                </label>
              ))
            }
          </div>
          <h2>Tamanho:</h2>
          <div className='ProductDetail__cubeSizes'>
            {
              data.sizes.map((size, i) => (
                <label key={i}>
                  <input className="size-input" type="radio" name="size" value={size}/>
                  <span className="size-tile">
                    <span className="size-label">{size}</span>
                  </span>
                </label>
              ))
            }
          </div>
        </div>
        <button><Link to={`/pay/${data.id}`}>Finalizar Compra</Link></button>
      </main>
    </section>
  )
}

export default ProductDetail