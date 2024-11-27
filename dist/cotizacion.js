
document.getElementById('cotizadorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const secciones = parseInt(document.getElementById('secciones').value);
    const tipo = document.getElementById('tipo').value;
    const necesitaLogo = document.getElementById('logo').checked;
    const necesitaSEO = document.getElementById('seo').checked;

    // Precios base
    let precioBase = 0;
    const precioSeccion = 50;
    const precioLogo = 300;
    const precioSEO = 400;

    // Determinar precio base según tipo
    switch(tipo) {
      case 'restaurante':
        precioBase = 800;
        break;
      case 'construccion':
        precioBase = 1000;
        break;
      case 'general':
        precioBase = 600;
        break;
    }

    // Calcular precio total
    let precioTotal = precioBase + (secciones * precioSeccion);
    if (necesitaLogo) precioTotal += precioLogo;
    if (necesitaSEO) precioTotal += precioSEO;

    // Mostrar resultado
    const resultado = document.getElementById('resultado');
    const precioFinal = resultado.querySelector('.precio-final');
    const detalles = resultado.querySelector('.detalles');

    precioFinal.textContent = `$${precioTotal} USD`;
    
    let detallesHTML = `
      <h3>Detalles de la cotización:</h3>
      <ul>
        <li>Precio base (${tipo}): $${precioBase}</li>
        <li>Secciones (${secciones}): $${secciones * precioSeccion}</li>
        ${necesitaLogo ? `<li>Diseño de logo: $${precioLogo}</li>` : ''}
        ${necesitaSEO ? `<li>Posicionamiento SEO: $${precioSEO}</li>` : ''}
      </ul>
      <p><strong>Proyecto:</strong> ${nombre}</p>
    `;

    detalles.innerHTML = detallesHTML;
    resultado.classList.add('mostrar');
  });
