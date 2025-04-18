'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1cca890e38e4f817bc89d5746f4f54e0",
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
".git/index": "b12df4a2729860b1134e5a2cb6b42d54",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "252bd881b7b77443feac89e2affbec53",
".git/logs/refs/heads/main": "252bd881b7b77443feac89e2affbec53",
".git/logs/refs/remotes/origin/HEAD": "6218858f225bf7feb1497b3c47730fd1",
".git/logs/refs/remotes/origin/main": "d3a9768c7f2e8860969d92ff7d96c4a8",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/6ac5c43262cec0b39213ddb9dc7d1fcd9996b9": "68f09f5c05fe1ff157e9018e55d66aee",
".git/objects/07/80628abf0f9e7f1a8d70185deb7f2edb5f5622": "db6ccfe96ea38cecd4d444ea4f7e6f98",
".git/objects/0b/0f6a5ca803f96d34b116effe45ba07543c70f5": "2fa70b4dca9d8702670b00e250de89d1",
".git/objects/17/44b7c212339f5a92d01874f42db8131a242b74": "81a7764d3738b4a34c491460a36933f5",
".git/objects/1f/95434df88993158427ff3a9d3e6d8bdb586fa3": "f3ff2a5e7cba027b93856b7c85a4d245",
".git/objects/25/d96a8def68083d0754add44133e80d73715821": "de14f8f909258e0e835d48a0c63a5ad6",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/eea3b2d496c4f9167d5ea79ff71a2689cd0017": "26161a2d86703ab996006aeb0b5d0f00",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/3f69f7832288581cbdac9340f2304fcbcb4eaa": "03d285b808de1b7becb28f555b4aa1b4",
".git/objects/47/e0aedc05d465bfc5a798f50714769e33036ad0": "4b0e994819b7410f4464fcde20266e35",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/b5be4044634848ad78e42d74cf10ccad91039d": "da920d50ec2bf006aafb81c463785cc3",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/67bc9f5e7b13902c914177f177249f48745b12": "9f98c6e4a64549cb27c52d62123d5944",
".git/objects/6e/59368b251a8fe31e3460dc2e233957a1cd4b02": "2a0b775bc7130626af928e4f6c9867c9",
".git/objects/70/13a150582a2a652f973c2517ce6a6515d7e69a": "ddf2f1e29771483993c67eb319e05b77",
".git/objects/7c/4b70789c7c1b0a0e58c492728c55dcfa6f0cf0": "294beb0d0961af2f28fa56ca7230e656",
".git/objects/88/dcd6d6b30ac0bd24fb176b3fc89064d044d473": "4e184d6f7105168c3140b0783b5e08c4",
".git/objects/88/efaedf726fea2d4008e865a697b663521ea918": "f0296d7b139ca6672d88cd63625d24c5",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8d/43abb9c7d0849f5ef187baf9dc191a3cd1e1fd": "0d216874b42fcbd46284b4c421707ee6",
".git/objects/8e/277100150e4921a45f70e7a482e570c8e7a7b6": "b1b2c90513c21ead0dd8f4e9a24f6a1e",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9e/1287224ec7f1905d2de00f0fe497197aff2b34": "e0389940c4bba341a913f83d15f58b71",
".git/objects/a1/a29dae30d6ec70eb299b40ad5475e000bc7ad2": "b83a880ae64922a802631a61ba85c669",
".git/objects/a2/2b21d7251cf7831cc9399dd608b128d5663602": "4716e2fe5aacd6149aca30634a18f348",
".git/objects/a5/783ead20f100904d72b0bdcfe6d95bf37c748b": "9088fd5e77c0c9caffbfdf459f1a82dd",
".git/objects/a5/9131ca56bc23852cc3fd322bb8ba3f1695b05e": "5867c8ea977b36079bcf4829ef87e640",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/8eb5e50f3baa4e0271b1c2899376199a543b26": "38e16676dae3a42ef748b7b4f97fd5dd",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/67aa3d2d478e818b279dba80fe188118e9d25d": "9b77c12442e5a3fc1c3b4f201e97b746",
".git/objects/b4/d18eef9c8ac3998af717c545f1b0464ecb0e62": "4f5f2ffb56b5da33d56441c99b16c1e6",
".git/objects/c0/78718efe70b592f9e558ff3d92edea0e6eef4f": "f81161bb818b37abac39c1b389a17665",
".git/objects/cc/7b82462105b0a0ade934b2b90cccba8f5393fe": "8fb31686d0cf5c09a29815bedec27312",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/719bb1452bc787955127631404d03857d9be46": "c13eb80fa3302e3cf4c76c29f8e55d69",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/6d7b088b8fd6152ebd57df3d60cf6cf7c5ec60": "7af613ba4b1f75e6ca268cb941ce58e6",
".git/objects/db/a526733ed6f66ec6db9971b7e88f19641ec015": "fa17ef1996f6850e8387c8c8625cb9d7",
".git/objects/dc/155065025450ec3f2379d705a666ee59344c4d": "bac7bebdf7d6bd57b120c8bfccc52ca5",
".git/objects/dc/8ede106b1368b66e05070838f6bc7ba981629f": "359084e78358e7cf929ddcf06ec6a694",
".git/objects/e4/7335cfc9a63a6024f7a110edeef4aba35626ed": "32c66ca28a637cee6dd06d805892e2bd",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/5a153719b765cab06665bb459fbb8dbb601de3": "9a775eacdb2c28a30da2c02901603342",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/31bb85a79a6d09f3582c37b244118207b3040f": "8652075d7c410c9244b1e6a4533c8821",
".git/objects/f6/bb910371b52662f77ffb4a2337128e666d90b0": "b422315f2726549c41d15368c5a69a32",
".git/objects/f9/7c5998808e7c6703b6375e39fd1334b0867184": "de64c6d4d494ddef6f76377ab49306b5",
".git/objects/pack/pack-edeb7ee4f2358b992d7a22a056bc119dab573db1.idx": "cff4f1256b77f504a805eb554c173096",
".git/objects/pack/pack-edeb7ee4f2358b992d7a22a056bc119dab573db1.pack": "bf70e78fdabb14035afd9bc1f2bc2d78",
".git/objects/pack/pack-edeb7ee4f2358b992d7a22a056bc119dab573db1.rev": "451ce793055584c166e214c64e5d2ae8",
".git/packed-refs": "6f4396afd93af7697d2e4866ec834a30",
".git/refs/heads/main": "a09ceb04da7dcb4d4ab709c86fb0e2bd",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a09ceb04da7dcb4d4ab709c86fb0e2bd",
"assets/AssetManifest.bin": "8b0459c7ae01af80cda2a9223a3d1e1f",
"assets/AssetManifest.bin.json": "6901343d7c800dae1b1f0fac1fe1980f",
"assets/AssetManifest.json": "282a99d2da0f3d5a0173b0b2cc6ab6b8",
"assets/assets/es.csv": "f427481dc90eda422a3082dbe6fd0d8c",
"assets/assets/lemma_map.json": "96cbadceb5569b8b2d68df3ebb26d4ad",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c60fa94b0901b215010b5fa536b07c70",
"assets/NOTICES": "c8b573848ffc0c7ce360a74ac64dc0f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a38532e3f1338eaf15967420a64e12e5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "81b62a415d199c75a600c6c2261e27fc",
"/": "81b62a415d199c75a600c6c2261e27fc",
"main.dart.js": "0497e74f549e602b1abd55594533d39a",
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
