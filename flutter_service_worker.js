'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ddd1410c73a8d20b2d3af6964f2e949c",
".git/config": "e07c02aa7df2d78ff052f25c3146431d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a1babe31f0b7ed0774c0ca8da5afe26f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "304257ab233b989c525fd93c83ef9660",
".git/logs/refs/heads/main": "304257ab233b989c525fd93c83ef9660",
".git/logs/refs/remotes/origin/HEAD": "6218858f225bf7feb1497b3c47730fd1",
".git/logs/refs/remotes/origin/main": "723c4b557edf6c9424262c7e0c88f47b",
".git/objects/03/6ac5c43262cec0b39213ddb9dc7d1fcd9996b9": "68f09f5c05fe1ff157e9018e55d66aee",
".git/objects/07/80628abf0f9e7f1a8d70185deb7f2edb5f5622": "db6ccfe96ea38cecd4d444ea4f7e6f98",
".git/objects/17/44b7c212339f5a92d01874f42db8131a242b74": "81a7764d3738b4a34c491460a36933f5",
".git/objects/25/d96a8def68083d0754add44133e80d73715821": "de14f8f909258e0e835d48a0c63a5ad6",
".git/objects/43/3f69f7832288581cbdac9340f2304fcbcb4eaa": "03d285b808de1b7becb28f555b4aa1b4",
".git/objects/7c/4b70789c7c1b0a0e58c492728c55dcfa6f0cf0": "294beb0d0961af2f28fa56ca7230e656",
".git/objects/88/dcd6d6b30ac0bd24fb176b3fc89064d044d473": "4e184d6f7105168c3140b0783b5e08c4",
".git/objects/88/efaedf726fea2d4008e865a697b663521ea918": "f0296d7b139ca6672d88cd63625d24c5",
".git/objects/8d/43abb9c7d0849f5ef187baf9dc191a3cd1e1fd": "0d216874b42fcbd46284b4c421707ee6",
".git/objects/8e/277100150e4921a45f70e7a482e570c8e7a7b6": "b1b2c90513c21ead0dd8f4e9a24f6a1e",
".git/objects/a2/2b21d7251cf7831cc9399dd608b128d5663602": "4716e2fe5aacd6149aca30634a18f348",
".git/objects/a5/9131ca56bc23852cc3fd322bb8ba3f1695b05e": "5867c8ea977b36079bcf4829ef87e640",
".git/objects/a6/8eb5e50f3baa4e0271b1c2899376199a543b26": "38e16676dae3a42ef748b7b4f97fd5dd",
".git/objects/c0/78718efe70b592f9e558ff3d92edea0e6eef4f": "f81161bb818b37abac39c1b389a17665",
".git/objects/d8/719bb1452bc787955127631404d03857d9be46": "c13eb80fa3302e3cf4c76c29f8e55d69",
".git/objects/dc/155065025450ec3f2379d705a666ee59344c4d": "bac7bebdf7d6bd57b120c8bfccc52ca5",
".git/objects/dc/8ede106b1368b66e05070838f6bc7ba981629f": "359084e78358e7cf929ddcf06ec6a694",
".git/objects/pack/pack-edeb7ee4f2358b992d7a22a056bc119dab573db1.idx": "cff4f1256b77f504a805eb554c173096",
".git/objects/pack/pack-edeb7ee4f2358b992d7a22a056bc119dab573db1.pack": "bf70e78fdabb14035afd9bc1f2bc2d78",
".git/objects/pack/pack-edeb7ee4f2358b992d7a22a056bc119dab573db1.rev": "451ce793055584c166e214c64e5d2ae8",
".git/packed-refs": "6f4396afd93af7697d2e4866ec834a30",
".git/refs/heads/main": "9d9aef3996f5ad36bf58da5e1d9f0ae9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9d9aef3996f5ad36bf58da5e1d9f0ae9",
"assets/AssetManifest.bin": "8b0459c7ae01af80cda2a9223a3d1e1f",
"assets/AssetManifest.bin.json": "6901343d7c800dae1b1f0fac1fe1980f",
"assets/AssetManifest.json": "282a99d2da0f3d5a0173b0b2cc6ab6b8",
"assets/assets/es.csv": "f427481dc90eda422a3082dbe6fd0d8c",
"assets/assets/lemma_map.json": "96cbadceb5569b8b2d68df3ebb26d4ad",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5d6983de48a989a322292bc77faf5078",
"assets/NOTICES": "0282458d1c98638668ae4eef9274f48c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5528b2a89545936b8311e2db0b0da5dd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "81b62a415d199c75a600c6c2261e27fc",
"/": "81b62a415d199c75a600c6c2261e27fc",
"main.dart.js": "1366f949c02073bbb13f9b8db98245d8",
"manifest.json": "daf215b796003cbd6c099e6aa384d00a",
"version.json": "cb8d960895089f239ff1109e3c2a82f6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
