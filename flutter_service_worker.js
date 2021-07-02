'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1055b6da4ed113faade12fa188095218",
"assets/assets/fonts/OpenSans-Bold.ttf": "0062c34665a3fc0f2278cd4e955702ec",
"assets/assets/fonts/OpenSans-Regular.ttf": "5a798cdadc7cd321e3f72425b70bface",
"assets/assets/fonts/Quicksand-Bold.ttf": "809cd8ab97c465b57cb1a44b1795f12c",
"assets/assets/fonts/Quicksand-Light.ttf": "5d51b01f8405b8c5ae5df55a8c3019cc",
"assets/assets/fonts/Quicksand-Medium.ttf": "f65d1a07e0f4521c99d900e31e4bc530",
"assets/assets/fonts/Quicksand-Regular.ttf": "678b12a6a938c32eb5fa88f2f439c2df",
"assets/assets/fonts/Raleway-Italic.ttf": "f73026bcd64e5a5265ab616e5083cd48",
"assets/assets/fonts/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/images/aa.jpg": "27f4a2ce0e399e0ae295ef7a53404240",
"assets/assets/images/aaa.png": "32b4ea76a3139377a140af27002d8662",
"assets/assets/images/ab.jpg": "ed8de2c329ce99564ed5ed7350ac3c34",
"assets/assets/images/backCover.jpg": "ae741724b7d6e3652816ce6480b56b2b",
"assets/assets/images/eb.jpg": "e5fff533f77c40517bfa635e94a47afd",
"assets/assets/images/edu.png": "79200e789ae39112fd98c6462f4de981",
"assets/assets/images/edu3.png": "62ea52c80002f15a84aaa8628477eeb0",
"assets/assets/images/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/images/final.png": "2c95f8df06d7403064aaacfff0bf8239",
"assets/assets/images/finalSkill.png": "5fba94f52e45e50fdcef9a5d0e108d6e",
"assets/assets/images/github.png": "0918d78648457def080137b179fc5608",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/instagram.png": "8290266a5fb402a34b96f890bbdb2d60",
"assets/assets/images/linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/images/logo_small.png": "b40255e429d1eb407807605fcecbe3b8",
"assets/assets/images/pro.png": "8222a41aa44c7923e018f78f748db09b",
"assets/assets/images/profilepic.png": "15b9a998a65f062fcfa93f5e41abf79a",
"assets/assets/images/skill.png": "5a834784b4302d40db9aaf9297c10bd7",
"assets/FontManifest.json": "ff88ccdca3085d3efd58f2e5fdc76ec8",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "afa7d7f797b937de5d4fc5225c0b1e33",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "712d4df58631f7aa2c67a4bef72000aa",
"/": "712d4df58631f7aa2c67a4bef72000aa",
"main.dart.js": "c332ff49d31ccb15855c5714f985c165",
"manifest.json": "9fc545dc0a0705c3c95184e4935fc2c4",
"version.json": "49790d2a93e2230b23fc0c7c4cfe49c8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
