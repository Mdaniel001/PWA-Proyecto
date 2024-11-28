self.addEventListener('install', function(event){
    event.waitUntil(
     caches.open('first-app')
     .then(function(cache) {
         cache.addAll([
             './',
              './index.html',
              './pages/cotizacion.html',
              './css/styleCotizacion.css',
              './css/stylePrincipal.css',
              './dist/serviceWork.js',
              './dist/cotizacion.js',
              './pages/cotizacion.html',
         ])
     })
    );
    return self.clients.claim();
 });
 
 self.addEventListener('fetch', function(event){
     event.respondWith(
         caches.match(event.request)
         .then(function(res){
             return res;
         })
     );
 });
