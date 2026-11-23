
const CACHE_NAME = "mango-night-admin-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response("ইন্টারনেট সংযোগ নেই। আবার চেষ্টা করুন।", {
        headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    })
  );
});
