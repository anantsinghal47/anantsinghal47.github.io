'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b1946ac92492d2347c6235b4d2611184",
".git/config": "cb54a69326a8b853fa6c3d0362ac0d89",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "651d8f81ed9690ce20aac8ac9bf7fdfb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4079f443bc873d6349f4b5d48abe7a37",
".git/logs/refs/heads/master": "4079f443bc873d6349f4b5d48abe7a37",
".git/logs/refs/remotes/origin/master": "ce11e47babdcd71b07f9308d1066571b",
".git/objects/02/969e3f82d2e9336bf794f8927f15dbe5a69592": "7d82219bcb145351b4bbc2c9e010930e",
".git/objects/04/c7b870118e24c9bb2914a44208e65d40c16c40": "e09f9e53779414a6b5016dff79ce6aff",
".git/objects/0a/be480ed40b6bddf21af5f7780951a605b1f111": "1389a2f19ff6f08940abb4c403d4eb6f",
".git/objects/0c/e964b8d28de1226ff7c50d94b103e9ac4b52a4": "45e08c9017b9a5a94ad9c73e726179cf",
".git/objects/10/0d2732093e03c7da57d05c6f5e0adb5a7961e8": "b9a49af988ebfd47b63f023365353f30",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/80ddc8921e7daeb79051f37031b59bb71cd599": "4fbf50fa82bcd4c5a76a7905da91a1b0",
".git/objects/2d/4da3a6e2a5197fe039e41aaf27f60fe6a58409": "64d75ca7ed10dd24544efad0955dcfee",
".git/objects/39/67a19f250b9f11dc07954292b93c1e65f82afe": "6bb391b43b7c3f99986bc3b180daae05",
".git/objects/39/ebba955401a7709183bab3c6422ab1d71f4491": "ab6104a580fdf0aadbe380965288d765",
".git/objects/3b/ac1a010aea095d8805d24fc7c60f5d34909bd2": "46467053d560739a7221ed867d613120",
".git/objects/3d/d97dd4b42d65c83c0050eeff769a0d58f87275": "d72479fc7f6c8a62cd69fc186a67789f",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/41/8b693f9d5784b24e49b3905a0daf1007c71105": "7fd3aa46d688eb8e41733ef22e67a8a5",
".git/objects/59/26999c6257baea64ddaeb9fff6d5f5aae1e09b": "31f17556b2d1cf9b878109582d939b99",
".git/objects/5d/62d30e30edc50754e599aa115db423b0fbe5b6": "4a665f439695635c52682fd9c6c02c67",
".git/objects/63/afccaeaf55bd5dda67284af9880840f02fe22a": "d1a2385c22dca064d69f55a75cc287ab",
".git/objects/68/3922f9db3aa999fc496dc5d52bc9b4ac0fb66a": "e8e50fcd20d481f42acbcb5da24b48f3",
".git/objects/77/6cd7d656ef8ac8ee75d5a1b66131b089e31a88": "be007dcdfb5c44578ee9a9a5c925bf84",
".git/objects/78/16c9dac384e388cb402c918039253f18f5bc09": "e6e3776eb073db38b7f3b0748432b2fb",
".git/objects/78/c585215e75ccadb029d1abc9dab8f37b3c7ee6": "e86179cc62326fc06fc15531f2943fb7",
".git/objects/79/227b3ad50943a7a20aa81efef7e307c7480670": "0e1ceb12e1a7e232234cb177d9137e6e",
".git/objects/79/acf8386c647f7520bbf0f662f4646a1203fc33": "0d90fa2a5aa6de2280368b9ea7ccdbae",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/ca5ad54540c6e1b55416e1a524bc26a016e5d3": "41228ff72dc3a0e2c887e2600c182879",
".git/objects/85/a724378092d400bf754b7be6da914df6d9a94d": "9799202cbc3b86734fc50e84d6d4ff2d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/676a789bf5438ecaef294a7928dfe04b2abbfe": "2438e7cc3a51f1f30c17b58b95a2b37a",
".git/objects/8c/5f2062640675df0ab2bab5c7e3ccf0ca113c28": "c9ea907fc63dea2e2104d699260cc31d",
".git/objects/8d/8d82f84d5bb79fea15c4b127e39b087dc406c9": "2b6c1994cfe1089a9ca1430f502ed482",
".git/objects/95/d0fe92d0ba73efa8de6be73fa4b3456faa4e3b": "73aac67c9519740b83184e5237c64efb",
".git/objects/96/fabd865df70de92f2a4bdc24d65306759fe726": "acee954947925b2d83e3eeda8a93eee1",
".git/objects/97/f39174afeb45ccface5fdfe69cb8e1ab2694a6": "be14820cedf85fa329d690af1c68443e",
".git/objects/9a/774efe3fb9a36491f6e2d3e899be7614579740": "e83a34b9499d5566e5972ae0f6226680",
".git/objects/9e/7a71a11352a43a3d382d2957c122aab6855d40": "f1a45ccfc3f96e98a15bba1797c7b258",
".git/objects/a0/74fd93629867966467317735257425e84d9b69": "68546524177afeb2e9d0e9674737ace9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/b4/ab9c414213fdfc5e94ef0243a20b9287f11c8f": "49ce0c706dc30e6c1c4c651b541b06d0",
".git/objects/b6/51234ee58e2438c63e26d36358665324db53fd": "c83adf22db7cff20ee188e7fe7002c5c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/83bc662715371536dbbf3c9fc2d84a3a510eea": "2aea23693efb71cea642709406937aa4",
".git/objects/be/f50dbb9266ea49b7395c498f9abf8c92ba0aaf": "402f682c58ef0f36cde60072f87f0721",
".git/objects/c1/394b499aba369f7abebd93a1afdbbd19f0b6ff": "f01f13ac7ec7c8e3e34ef1711824cba2",
".git/objects/c9/54ee9e910d6df1cf7f2f2fbf7c50d144fb4e26": "7494474e53a456ac0c16f6c64f097b36",
".git/objects/cf/4f37d9e893ff7a7c4b6f610bf509b729399461": "d2f59f2fe366f6df13bcc5a4f7cd39a9",
".git/objects/d6/45efd1c31eaa21dd151059723c4281873b1af7": "5f8da41f3e8a07c1916d3e351baa6375",
".git/objects/dc/45f06b59cb61bfca79f7f98f58e896beb5d260": "ca0e3f55780bfd45b719cade5a1ab931",
".git/objects/df/5c45a336663b0531877918628e71a9969dee75": "a5e1c5586c3696f3f02e7fc61eec96d5",
".git/objects/e1/18fa304b44759245af8fa9f19e84cc1a54c97b": "f573d4c79ee412cca4b2299e1ff3d33c",
".git/objects/e1/d621aef454aec7590375a19e5ab27080534194": "44bc914ccd2e65b78ca181308cc6df5a",
".git/objects/e3/c08e80bc4846b1949c7154a4dae17064d80e46": "7b6e52068449314781a9dece05f03f19",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/a53e6f55aebeb8baae86b5399c716e3287c7dc": "2c9304c23fa7e8c6621f861d6366c17a",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/a2bb5429b31feed583eb66d047c18fb77cc187": "cc2a5030381a87317028ba5cfe62885f",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/fb/a0f333daceb59e79077513e20b0e98ccd8f56d": "827a1d3be7121a70b0bc216d809ff7a4",
".git/objects/fd/0be9be679d0fc45ba364bf3ef4c37b51ed5a20": "b3b81340ef19246fa60aa82a8497a076",
".git/objects/fd/2cefd59b3bd911b0c31b2f95e98397cb1c40d1": "ce2e321a811855e71e344c81544f0397",
".git/refs/heads/master": "70923cfec2d36471948993be1f55fc4c",
".git/refs/remotes/origin/master": "70923cfec2d36471948993be1f55fc4c",
"assets/AssetManifest.json": "3898b0b6e9963e7a6659dbc00c6c242c",
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
"assets/assets/images/gi.png": "7217defcf1bd21fb5bc2497c3299cecc",
"assets/assets/images/git.png": "f4bc907dda66653566e33bc7b6e0fd69",
"assets/assets/images/github.png": "0918d78648457def080137b179fc5608",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/insta.png": "47c386c181608eded7f32ff08deafcbc",
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
"index.html": "ffa35f3a9ed269f80d1a928fa482e850",
"/": "ffa35f3a9ed269f80d1a928fa482e850",
"main.dart.js": "9078d827adbbc6bc81b2bcf709fc5501",
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
