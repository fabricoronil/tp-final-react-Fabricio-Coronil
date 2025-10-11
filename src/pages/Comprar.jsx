import React, { useState } from 'react';

const Comprar = () => {
  const [cart] = useState([
    { name: 'Venusaur', price: 1500 },
    { name: 'Charizard', price: 2500 },
    { name: 'Blastoise', price: 2000 }
  ]);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    metodoPago: 'tarjeta'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    alert(`¡Pedido realizado con éxito, ${formData.nombre}! Has comprado: ${cart.map(p => p.name).join(', ')}`);
  };

  const subtotal = cart.reduce((acc, p) => acc + (p.price || 0), 0);
  const envio = subtotal > 5000 ? 0 : 500;
  const total = subtotal + envio;

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#FFF8E7',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: '#2C3E50',
          textAlign: 'center',
          marginBottom: '10px',
          fontWeight: 'bold'
        }}>
          🛒 Finalizar Compra
        </h1>
        <p style={{ 
          textAlign: 'center', 
          color: '#5D6D7E',
          fontSize: '1rem',
          marginBottom: '40px'
        }}>
          Completa tus datos para recibir tus Pokémones
        </p>

        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              marginBottom: '20px'
            }}>
              <h2 style={{ 
                color: '#F39C12',
                fontSize: '1.5rem',
                marginBottom: '20px',
                borderBottom: '3px solid #FFC107',
                paddingBottom: '10px'
              }}>
                📋 Información Personal
              </h2>
              <input 
                type="text" 
                name="nombre" 
                placeholder="Nombre completo" 
                value={formData.nombre} 
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '15px',
                  marginBottom: '15px',
                  border: '2px solid #FFE0B2',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s',
                  boxSizing: 'border-box'
                }}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '15px',
                  marginBottom: '15px',
                  border: '2px solid #FFE0B2',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              <input 
                type="tel" 
                name="telefono" 
                placeholder="Teléfono" 
                value={formData.telefono} 
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '15px',
                  marginBottom: '15px',
                  border: '2px solid #FFE0B2',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              marginBottom: '20px'
            }}>
              <h2 style={{ 
                color: '#F39C12',
                fontSize: '1.5rem',
                marginBottom: '20px',
                borderBottom: '3px solid #FFC107',
                paddingBottom: '10px'
              }}>
                📍 Dirección de Envío
              </h2>
              <input 
                type="text" 
                name="direccion" 
                placeholder="Calle y número" 
                value={formData.direccion} 
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '15px',
                  marginBottom: '15px',
                  border: '2px solid #FFE0B2',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              <div style={{ display: 'flex', gap: '15px' }}>
                <input 
                  type="text" 
                  name="ciudad" 
                  placeholder="Ciudad" 
                  value={formData.ciudad} 
                  onChange={handleInputChange}
                  style={{
                    flex: 1,
                    padding: '15px',
                    marginBottom: '15px',
                    border: '2px solid #FFE0B2',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                <input 
                  type="text" 
                  name="codigoPostal" 
                  placeholder="C.P." 
                  value={formData.codigoPostal} 
                  onChange={handleInputChange}
                  style={{
                    flex: 1,
                    padding: '15px',
                    marginBottom: '15px',
                    border: '2px solid #FFE0B2',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ 
                color: '#F39C12',
                fontSize: '1.5rem',
                marginBottom: '20px',
                borderBottom: '3px solid #FFC107',
                paddingBottom: '10px'
              }}>
                💳 Método de Pago
              </h2>
              <label style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: formData.metodoPago === 'tarjeta' ? '#FFF3E0' : '#FAFAFA',
                borderRadius: '10px',
                cursor: 'pointer',
                border: formData.metodoPago === 'tarjeta' ? '2px solid #FF9800' : '2px solid #E0E0E0',
                transition: 'all 0.3s'
              }}>
                <input 
                  type="radio" 
                  name="metodoPago" 
                  value="tarjeta" 
                  checked={formData.metodoPago === 'tarjeta'} 
                  onChange={handleInputChange}
                  style={{ marginRight: '15px', width: '20px', height: '20px', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '1rem', color: '#2C3E50' }}>💳 Tarjeta de crédito/débito</span>
              </label>
              <label style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: formData.metodoPago === 'transferencia' ? '#FFF3E0' : '#FAFAFA',
                borderRadius: '10px',
                cursor: 'pointer',
                border: formData.metodoPago === 'transferencia' ? '2px solid #FF9800' : '2px solid #E0E0E0',
                transition: 'all 0.3s'
              }}>
                <input 
                  type="radio" 
                  name="metodoPago" 
                  value="transferencia" 
                  checked={formData.metodoPago === 'transferencia'} 
                  onChange={handleInputChange}
                  style={{ marginRight: '15px', width: '20px', height: '20px', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '1rem', color: '#2C3E50' }}>🏦 Transferencia bancaria</span>
              </label>
              <label style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '15px',
                backgroundColor: formData.metodoPago === 'efectivo' ? '#FFF3E0' : '#FAFAFA',
                borderRadius: '10px',
                cursor: 'pointer',
                border: formData.metodoPago === 'efectivo' ? '2px solid #FF9800' : '2px solid #E0E0E0',
                transition: 'all 0.3s'
              }}>
                <input 
                  type="radio" 
                  name="metodoPago" 
                  value="efectivo" 
                  checked={formData.metodoPago === 'efectivo'} 
                  onChange={handleInputChange}
                  style={{ marginRight: '15px', width: '20px', height: '20px', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '1rem', color: '#2C3E50' }}>💵 Efectivo contra entrega</span>
              </label>
            </div>
          </div>

          <div style={{ flex: '1 1 350px' }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              position: 'sticky',
              top: '20px'
            }}>
              <h2 style={{ 
                color: '#F39C12',
                fontSize: '1.5rem',
                marginBottom: '20px',
                borderBottom: '3px solid #FFC107',
                paddingBottom: '10px'
              }}>
                📦 Resumen del Pedido
              </h2>
              
              {cart.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#95A5A6', fontSize: '1rem' }}>
                  Tu carrito está vacío
                </p>
              ) : (
                <>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0,
                    marginBottom: '20px'
                  }}>
                    {cart.map((p, i) => (
                      <li key={i} style={{
                        padding: '12px 0',
                        borderBottom: '1px solid #F5F5F5',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: '#2C3E50'
                      }}>
                        <span style={{ fontSize: '0.95rem' }}>{p.name}</span>
                        <span style={{ fontWeight: 'bold', color: '#FF9800' }}>${p.price || 0}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div style={{ borderTop: '2px solid #FFE0B2', paddingTop: '15px' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      marginBottom: '10px',
                      fontSize: '1rem',
                      color: '#5D6D7E'
                    }}>
                      <span>Subtotal:</span>
                      <span>${subtotal}</span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      marginBottom: '15px',
                      fontSize: '1rem',
                      color: '#5D6D7E'
                    }}>
                      <span>Envío:</span>
                      <span style={{ color: envio === 0 ? '#27AE60' : '#2C3E50' }}>
                        {envio === 0 ? 'GRATIS ✨' : `$${envio}`}
                      </span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#2C3E50',
                      paddingTop: '15px',
                      borderTop: '2px solid #FF9800'
                    }}>
                      <span>Total:</span>
                      <span style={{ color: '#FF9800' }}>${total}</span>
                    </div>
                  </div>
                </>
              )}

              <button 
                onClick={handleSubmit} 
                style={{ 
                  width: '100%',
                  marginTop: '25px', 
                  padding: '18px', 
                  fontSize: '1.1rem', 
                  cursor: 'pointer', 
                  borderRadius: '15px', 
                  backgroundColor: '#FF9800',
                  background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
                  color: 'white', 
                  fontWeight: 'bold',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(255, 152, 0, 0.3)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(255, 152, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(255, 152, 0, 0.3)';
                }}
              >
                ⚡ Confirmar Pedido
              </button>

              {subtotal > 0 && subtotal < 5000 && (
                <p style={{
                  marginTop: '15px',
                  textAlign: 'center',
                  fontSize: '0.85rem',
                  color: '#7F8C8D',
                  backgroundColor: '#FFF3E0',
                  padding: '10px',
                  borderRadius: '10px'
                }}>
                  💡 Envío gratis en compras mayores a $5000
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