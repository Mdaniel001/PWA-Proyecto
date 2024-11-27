
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
    const precioSeccion = 200000;
    const precioLogo = 120000;
    const precioSEO = 100000;

    // Determinar precio base según tipo
    switch(tipo) {
      case 'restaurante':
        precioBase = 110000;
        break;
      case 'construccion':
        precioBase = 800000;
        break;
      case 'general':
        precioBase = 1000000;
        break;
    }

    // Calcular precio total segun pagina
    let precioTotal = precioBase + (secciones * precioSeccion);
    if (necesitaLogo) precioTotal += precioLogo;
    if (necesitaSEO) precioTotal += precioSEO;

    // Mostrar resultado de la cotizacion 
    const resultado = document.getElementById('resultado');
    const precioFinal = resultado.querySelector('.precio-final');
    const detalles = resultado.querySelector('.detalles');

    precioFinal.textContent = `$${precioTotal} Pesos`;
    
    let detallesHTML = `
      <h3>Detalles de tu cotización:</h3>
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
