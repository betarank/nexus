self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('beta-rank-v2').then((cache) => cache.addAll([
      './',
      './index.html',
      './beta_8646539.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
