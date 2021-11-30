//api de google 
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js')


//iniciar el precaching para los archivos
workbox.precaching.precacheAndRoute([
  './index.html',
  './js/getData.js',
  './js/getDataCharacter.js',
  './js/getDataCharacters.js',
  './js/getDataLocations.js',
  './serviceworker.js',
  './manifest.webmanifest',
  './characters.html',
  './locations.html'
]);
//Registros de los archivos que no se han guardado en el precachin con un nuevo nombre
workbox.routing.registerRoute(
  new RegExp('\\.*'),
  new workbox.strategies.CacheFirst({
    cacheName: 'CacheHTML',
  })
);

workbox.routing.registerRoute(
  new RegExp('\\.json'),
  new workbox.strategies.NetworkFirst()
);

// // Files to cache
// const cacheName = 'app-V1';

// const contentToCache= [
// './index.html',
// './js/getData.js',
// './js/getDataCharacter.js',
// './js/getDataCharacters.js',
// './js/getDataLocations.js',
// './serviceworker.js',
// './manifest.webmanifest',
// './characters.html',
// './locations.html'
// ]

// //para instalar y para mandar al cache
// // Installing Service Worker
// self.addEventListener('install', (e) => {
//   console.log('[Service Worker] Install');
//   e.waitUntil((async () => {
//     const cache = await caches.open(cacheName);
//     console.log('[Service Worker] Caching all: app shell and content');
//     await cache.addAll(contentToCache);
//   })());
// });



// //vamos a solicitar el cache 
// // Fetching content using Service Worker
// self.addEventListener('fetch', (e) => {
//   e.respondWith((async () => {
//     const r = await caches.match(e.request);
//     console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
//     if (r) return r;
//     const response = await fetch(e.request);
//     const cache = await caches.open(cacheName);
//     console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
//     cache.put(e.request, response.clone());
//     return response;
//   })());
// });