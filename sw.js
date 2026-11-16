/* Service worker: makes the app work with no internet.
   IMPORTANT: change VERSION every time any file in the app changes,
   otherwise phones keep showing the old copy. */
var VERSION = 'rebuild-v2';
var FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/app.css',
  'js/util.js',
  'js/placement.js',
  'js/lessons-math.js',
  'js/lessons-math-2.js',
  'js/lessons-physics.js',
  'js/lessons-chemistry.js',
  'js/lessons-biology.js',
  'js/lessons-biochemistry.js',
  'js/lessons-anatomy.js',
  'js/lessons-statistics.js',
  'js/lessons-neuroscience.js',
  'js/reference.js',
  'js/app.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (c) {
      return c.addAll(FILES.map(function (f) { return new Request(f, { cache: 'reload' }); }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      return fetch(e.request).catch(function () {
        if (e.request.mode === 'navigate') return caches.match('index.html');
        return Response.error();
      });
    })
  );
});
