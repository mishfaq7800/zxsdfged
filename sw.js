// Google Drive hosted Service Worker (sw.js)
self.addEventListener('install', function(e) {
  console.log('Service Worker installed');
});

self.addEventListener('activate', function(e) {
  console.log('Service Worker activated');
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  clients.openWindow(event.notification.data);
});