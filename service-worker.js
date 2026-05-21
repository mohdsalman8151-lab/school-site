const CACHE_NAME = 'educore-cache-v1';

const urlsToCache = [
    '/',
    '/index.html',
    '/assets/css/style.css',
    '/assets/js/nav.js',
    '/assets/js/main.js',
    '/assets/js/footer.js',

];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
