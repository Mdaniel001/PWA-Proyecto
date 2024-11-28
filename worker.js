const CACHE_NAME = 'CacheFar';
const urlsToCache = [
  './',
  './index.html',
  './css/styleCotizacion.css',
  './css/stylePrincipal.css',
  './worker.js',
  './PWA-Proyecto-FartTek/manifest.json',
  './pages/cotizacion.html',
  './dist/cotizacion.js',
  './imagenes/Bog Shoes.png',
  './imagenes/brayan.jpeg',
  './imagenes/Daniel Laguna.jpeg',
  './imagenes/facebook.png',
  './imagenes/instagram.png',
  './imagenes/linkedin.png',
  './imagenes/Logo FARTTEK.png',
  './imagenes/maps.png',
  './imagenes/marketing.png',
  './imagenes/portada.jpg',
  './imagenes/Portada2.jpg',
  './imagenes/puntaDAnca.png',
  './imagenes/whatsapp.png',
  './imagenes/logoapp1.png',
  './imagenes/logoapp2.png',
  './imagenes/logoapp3.png',
  './imagenes/pan1.png',
  './imagenes/pan2.png',
];


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch((err) => {
        console.error('Error cacheando archivos:', err);
      });
    })
  );
});


self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Eliminando cache antiguo:', cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});


self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => {
          if (event.request.destination === 'document') {
            return caches.match('./index.html'); 
          }
        })
      );
    })
  );
});