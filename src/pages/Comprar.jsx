import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';
import './Comprar.css';

const Comprar = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    metodoPago: 'tarjeta'
  });

  const [cardData, setCardData] = useState({
    numeroTarjeta: '',
    vencimiento: '',
    cvv: ''
  });

  const [comprobante, setComprobante] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  const handleComprobanteChange = (e) => {
    setComprobante(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío");
      return;
    }
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.direccion) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }
    if (formData.metodoPago === 'tarjeta') {
      if (!cardData.numeroTarjeta || !cardData.vencimiento || !cardData.cvv) {
        alert("Por favor completa todos los datos de la tarjeta");
        return;
      }
    }
    if (formData.metodoPago === 'transferencia') {
      if (!comprobante) {
        alert("Por favor sube el comprobante de pago");
        return;
      }
    }
    alert(`¡Pedido realizado con éxito, ${formData.nombre}! Has comprado: ${cart.map(p => p.name).join(', ')}`);
    dispatch(clearCart());
    navigate('/');
  };

  const subtotal = cart.reduce((acc, p) => acc + (p.price || 0), 0);
  const envio = subtotal > 5000 ? 0 : 10;
  const total = subtotal + envio;

  return (
    <div className="comprar-container">
      <div className="comprar-content">
        <h1 className="comprar-title">🛒 Finalizar Compra</h1>
        <p className="comprar-subtitle">Completa tus datos para recibir tus Pokémones</p>

        <div className="comprar-flex">
          <div className="comprar-form-section">
            <div className="comprar-card">
              <h2 className="comprar-card-title">📋 Información Personal</h2>
              <input type="text" name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleInputChange} className="comprar-input" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="comprar-input" />
              <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleInputChange} className="comprar-input" />
            </div>

            <div className="comprar-card">
              <h2 className="comprar-card-title">📍 Dirección de Envío</h2>
              <input type="text" name="direccion" placeholder="Calle y número" value={formData.direccion} onChange={handleInputChange} className="comprar-input" />
              <div className="comprar-input-flex">
                <input type="text" name="ciudad" placeholder="Ciudad" value={formData.ciudad} onChange={handleInputChange} className="comprar-input" />
                <input type="text" name="codigoPostal" placeholder="C.P." value={formData.codigoPostal} onChange={handleInputChange} className="comprar-input" />
              </div>
            </div>

            <div className="comprar-card">
              <h2 className="comprar-card-title">💳 Método de Pago</h2>
              {['tarjeta', 'transferencia', 'efectivo'].map(metodo => (
                <label key={metodo} className={`comprar-radio-label ${formData.metodoPago === metodo ? 'selected' : ''}`}>
                  <input type="radio" name="metodoPago" value={metodo} checked={formData.metodoPago === metodo} onChange={handleInputChange} className="comprar-radio-input" />
                  <span className="comprar-radio-text">
                    {metodo === 'tarjeta' && '💳 Tarjeta de crédito/débito'}
                    {metodo === 'transferencia' && '🏦 Transferencia bancaria'}
                    {metodo === 'efectivo' && '💵 Efectivo contra entrega'}
                  </span>
                </label>
              ))}
              {formData.metodoPago === 'tarjeta' && (
                <div className="comprar-tarjeta-form">
                  <input type="text" name="numeroTarjeta" placeholder="Número de tarjeta" value={cardData.numeroTarjeta} onChange={handleCardInputChange} className="comprar-input" />
                  <div className="comprar-input-flex">
                    <input type="text" name="vencimiento" placeholder="MM/AA" value={cardData.vencimiento} onChange={handleCardInputChange} className="comprar-input" />
                    <input type="text" name="cvv" placeholder="CVV" value={cardData.cvv} onChange={handleCardInputChange} className="comprar-input" />
                  </div>
                </div>
              )}
              {formData.metodoPago === 'transferencia' && (
                <div className="comprar-transferencia-info">
                  <p>Datos de la cuenta de Mercado Pago <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRooqX_tEjlq63fL2GQIpdJ50tuKZ7qT-qJ8A&s" alt="Mercado Pago" className="mercado-pago-icon" />:</p>
                  <p><span className="comprar-transferencia-info-label">Alias:</span> fabricoronil</p>
                  <p><span className="comprar-transferencia-info-label">CVU:</span> 0000003100038334723070</p>
                  <h3 className="comprar-card-title">Comprobante de pago</h3>
                  <input type="file" name="comprobante" onChange={handleComprobanteChange} className="comprar-input" />
                </div>
              )}
            </div>
          </div>

          <div className="comprar-summary-section">
            <div className="comprar-summary-card">
              <h2 className="comprar-summary-title">📦 Resumen del Pedido</h2>
              
              {cart.length === 0 ? (
                <p className="comprar-cart-empty">Tu carrito está vacío</p>
              ) : (
                <>
                  <ul className="comprar-cart-list">
                    {cart.map((p, i) => (
                      <li key={i} className="comprar-cart-item">
                        <span className="comprar-cart-item-name">{p.name}</span>
                        <span className="comprar-cart-item-price">${p.price || 0}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="comprar-summary-details">
                    <div className="comprar-summary-row">
                      <span>Subtotal:</span>
                      <span>${subtotal}</span>
                    </div>
                    <div className="comprar-summary-row">
                      <span>Envío:</span>
                      <span style={{ color: envio === 0 ? '#27AE60' : '#2C3E50' }}>
                        {envio === 0 ? 'GRATIS ✨' : `$${envio}`}
                      </span>
                    </div>
                    <div className="comprar-summary-total-row">
                      <span>Total:</span>
                      <span className="comprar-summary-total-price">${total}</span>
                    </div>
                  </div>
                </>
              )}

              <button onClick={handleSubmit} className="comprar-submit-button">
                ⚡ Confirmar Pedido
              </button>

              {subtotal > 0 && subtotal < 5000 && (
                <p className="comprar-shipping-info">
                  💡 Envío gratis en compras mayores a $200
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprar;
