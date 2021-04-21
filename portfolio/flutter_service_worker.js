'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "7536651eb42e02f92482678a9c6fb47d",
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
".git/index": "e7b5a7404c766405a009a219353f84ce",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a228863a1ac9800638ec3a8f0598762c",
".git/logs/refs/heads/master": "a228863a1ac9800638ec3a8f0598762c",
".git/logs/refs/remotes/origin/master": "5beba930a89d84efd57db7148fdffff5",
".git/objects/01/1f23b0ba5912db9615fbf72d9cb4809d137694": "14fe9d291303fe2ab941df7ea1a4d2d0",
".git/objects/02/1860ab8d218478b3cc289d738a02f29d06d93e": "14b86e8027840594b6e87de9949d5da6",
".git/objects/04/0b2b8ee0845ef8287da12877688b341d6514e7": "1d6efc1b8a75ca4a2f7f96da3daa2006",
".git/objects/0f/f18fabdef3b3edbee7c768cbb9032f67281914": "71b6c5ad0eed931f988377a1dd026365",
".git/objects/12/4948db40ea7d5423b1af65b9fd65b3349f0ed8": "8259960cf5390680fe2afd4b2281ef61",
".git/objects/13/fd82769a3ba278efc5821667303da5d1e8a760": "8ec08e7ced8e19112de5b59eff2b4794",
".git/objects/14/e9841427fab14ace7ce611625df0a9d3a1b956": "020f2fb0bfe6d4c786f22d8fece7e4f9",
".git/objects/18/01f5a7c0f01541bf4f56a506fe345b5e1e5c71": "c7934cc7bdaf41d230a41fa7fcb71039",
".git/objects/1e/963202bd77b9bfe9abc7c202d187d7bb7c68e9": "8c17b879c806a64d703f27dc257f513c",
".git/objects/1e/e4ba639c3011ee66175ea2097dcb2052db3a71": "238e50b54b2fe736d8684e340079b257",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/ebbb9bad16e3cbfebb9c22ae532babd8e49686": "b5c702bb88b0243a35d58c66efa12083",
".git/objects/2a/d65df03dc7e4c88b919f98221c8f228da8854b": "c6aec85c972b8363ad6706e73b3805bf",
".git/objects/2b/9d14c404dac54740bf0a7c739b00bafb723de7": "cb72528bbd522f704440d0031ca15ca7",
".git/objects/30/5335a0692ca680211b8fefebd75aa597c79000": "a6b2c88aa49d9894c8fb7208ccc1463f",
".git/objects/31/3479028eb8f961bda037568293112cebbbc93b": "53df6af64e196e17b9a681fadc733f38",
".git/objects/37/39ceca59e67fd91db1c1f707659647bf234257": "118e1c1bf514563ad0a8a76c9dd19e76",
".git/objects/38/4812fea9e5aa93b9012475c18385132635cedd": "da8e4738b335049f30455fdd1199398c",
".git/objects/3a/d7dd700beaccd217cabe79280d285f5962964c": "9f2083b14b6b6dfd76fa77b6536dfd5a",
".git/objects/3b/4d27d0072d9835189d590962756d10bb0d51f6": "4e0427dea129496d72d908a175d9cc20",
".git/objects/3c/57a00b72381e52e9f3a198318ea702db19b193": "99dd807fb03fc9356809b42ed4c0e781",
".git/objects/3c/7b12dbf62a76baac54a6e802ca91cd08e58808": "6acdbda98c9c80ba38f8873bc91f2972",
".git/objects/3e/ed6fc51caeacb1e117fceb0d22f53587606da3": "19b4f7bc73458d5f3cd1a651c293eb08",
".git/objects/45/dff8fbf3aaf036c3f37a3f489268973fc7bb7d": "159703f70fbcd53b406df234ae6cef5d",
".git/objects/46/126487cba770878f820fe72e924702f9e8dde9": "b851b2a16b4e7bb2ea3f46a636834023",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/a4f9a0a6364801a9c175712376f099109e34d0": "0275ba4bb699d3cb7d3b42dcb9d8be8b",
".git/objects/49/cd7d181ebd8ea17f0ed78bd2e40bde40f03309": "b834942b8699ab15c4f5e1cad8f0faee",
".git/objects/4d/35b0bfcc0dc5196588144384f3aaa2731e3415": "949563740c31854d374ff507aa200e7b",
".git/objects/4e/c1fccf752151045471d1dcb24962694bb4f62a": "4f1037b1ffa05e53db5fa7462defd59d",
".git/objects/52/15a24f57a4b293f8039f7cc53135f6904f011b": "4b9afef7ab803280052272ec35d66bf2",
".git/objects/69/aa72d0d548279b406bd753ea040f12a2f7dd23": "46a29add94e95d09d8f77e2baa38b541",
".git/objects/6a/a5c008063b5f6452df25259d42b91c98a66b83": "629bbaf466f3529f0f95811e1fb4123c",
".git/objects/6b/0a06b2cc786b8c11c952b5dff54ae2651d6a2e": "9e10320ffdd8b35b93dbca29814aed04",
".git/objects/6f/78f6fc42973f53a213cddc09c7eeb44bf01e3b": "7967ad2d3068bbeacd4ed6cfaea345da",
".git/objects/6f/88b8e4f8f2b8b412e20159bc797884e80da6e8": "70ae88f803165751e1c7ac1cb9a15476",
".git/objects/6f/d3773ede14e9c16165bfb35858ad503db68d2b": "01b1008be1580c49a587f2b790560bd3",
".git/objects/73/7ca64c0e5d32470b97f90aca951b3420d2a907": "7f83dc701bed257b8a1985fe6c5e5d63",
".git/objects/76/e5e9c817e79f21ddc486dca81cf804b4970390": "b2a4145967d9416c3816e75830d0b2c2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/3e1e5e7967dccbab1b862691aa0f0bfbcf09a3": "69b8cde264f47b9afdbaf50016183de9",
".git/objects/80/4b0ab37524d10cd400f85fe13eb7b6c864c586": "e4665466ea7533b7651ba452ea7c8edb",
".git/objects/81/0002e1085f23632616dd522740e5bd7832fde4": "e3b0d180e43a87cc0d8d861ed6c77d76",
".git/objects/82/1a9b67ae9bfa9c701d552d1ffaaa5ea245a4cd": "f93e63b3161a3779002dddb7bae3fc62",
".git/objects/84/31d1d3f27f7b8f4fd74f34501f6720a7080b17": "d64b07f7c8d555763383cab2ac24089a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/dd5becce9644136ec0ec9e811bf3f1b0e78a0f": "25df37ab9d50ec07935165b6ec4c12dd",
".git/objects/95/d0fe92d0ba73efa8de6be73fa4b3456faa4e3b": "73aac67c9519740b83184e5237c64efb",
".git/objects/99/dfe909a4956f71dd510f2f665c3702c91a8fdf": "999cbbf08c1f950e84014265863b7357",
".git/objects/99/fb06e80e8c8b7739d7b4fda88c4b8a673c7c44": "03d778a247118442f0ea92db91f3c0d1",
".git/objects/9b/7d4852f560b26db45e42a86959f9b293246ec8": "dee748f411cbe997d78e1519b55ff755",
".git/objects/9c/9d89d61f8a7db7550f5b04996b0b1e91fe3f14": "47c8e696b9716e78573fb3c06eb2cf78",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/debad2c3a159915a1880c2389be37b353a4eb5": "376b87596da48a497b95cfc5c8b7b403",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/c6dcee9e92f9078a43a9f4da4733b29f9718f7": "5e2d6191e28299aa55c8e4cb1821a68f",
".git/objects/aa/c7c8c97168c205f49f480b655e8ac58eb22f07": "1a971bba904141477e34bb1ec5aa757a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/ca9d3a3771a30e2217414dc259e588efc0a524": "8fe9c3f8d983c869820235ce5e1b44da",
".git/objects/ae/835b76dc11657bfb59cd0a9ce8fed17e380e20": "25550ae928ca046dec50c1f3f945c593",
".git/objects/b1/d4ebfab88f8f56f44fee34ea4eea47d9028351": "f8c523b794fb10d846daa35f8c96a456",
".git/objects/b2/66808202b8eed264c6c1b35eeb3a334e7be671": "a4917cdd2c4f2b2ad9ae0681de9ba5c6",
".git/objects/b3/b6e59d9b4980d23563341a3bc6ec0140d03852": "86f771849ed9175850e518f24492b19c",
".git/objects/b4/4f792a105fbc034b92a718eb10cc6cd986a22b": "75f8433b154a00e8d8905d0e32053724",
".git/objects/b6/f8081c4c41eda260ab8d668efba4cb480c5afb": "03c61a638b7e53a8740b059e0a11231d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0499bbb194c571d05eed2d10b99361a6690c49": "5852db874311bc30237d48de356734eb",
".git/objects/c0/40652983a7fc43349f4e1d22b1088bd5908b7d": "1d4b352c71ff7137dadba1140c1b2377",
".git/objects/c2/3d402ed5e5a922b7f62498c752a18c45517043": "49ed856ba9764269bede582950d69fad",
".git/objects/c2/cb280aa34504aa2f969a95937512bf75f90f7b": "7b20262b8917b83b016e7d5005674cd5",
".git/objects/c3/e74c71a78507dd9d500ae80d48d33a4382bfe1": "8d5f99989bc6e0250d7aa7722c8e4901",
".git/objects/cc/579254978246aa5d002ea00c9cced7548bd44d": "6f00592b784a24e42ead881ef6e305ed",
".git/objects/cd/43df59a69cde6464e15bc9f6f482f152cf4f29": "0a554c136eab41441257b4624da02062",
".git/objects/ce/a2b2d1c2f9ca364e6ddbfc5b545419e17b31b1": "fe1fee295ab500e0c431b4be9269ff69",
".git/objects/cf/bdb08e03dfe0e1949494bce1e00d5948e04c12": "26e42846cc3eb2b9a2b6abfac6091461",
".git/objects/d1/3957a028fc7418b7d881829a021f30203ca442": "6d7413e64e5eed8f538c7c24ee06e01a",
".git/objects/d1/5c0d50bbe59f4e715e9c569e5b75ffc25f6b80": "1b9ec87ab507616111c93f86735fc567",
".git/objects/d8/73cb4b08e8409e6295cff11cf1d1f2843e76d3": "d210da67a5571d132b63874f16beae47",
".git/objects/db/6fc60b51b42bb85e80d0e7c981258b86fc0f05": "9a8e8f4a3ae5c2c5f6058eb9dc48509a",
".git/objects/df/d283b24e28b343ff6b511828d3e739dff8d2a1": "d7e6febc8d91e49992ce309c87b93ba5",
".git/objects/e0/18c53af56206a60cbcd75c850d05aa1dd4758d": "61303874f3ef8a8b5006a0b1c07dcc87",
".git/objects/e3/6f659ea4e13a59342e6c3385954e27bcfcb200": "ad49eb3cdbbd477584f0b96397373506",
".git/objects/e5/8e3579afedab5f23eac2148af6451963da5173": "cb8d49042fa06a9d0faf2d2c6b921f5c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/9a1f8e00b00ae6389c74d0e78e7071fc2498f2": "8dbb055579325c3c800bc22435ac21ac",
".git/objects/ea/5c5e4be5fe04935255f81aa663337570c9530d": "657cc1fc6ec6d6fb3cdaa494c5555eb1",
".git/objects/eb/d97c4a8fd3cd133737165cb3f6d956a8e8cb68": "912675553a1f5e0cb0eac1f4981f0923",
".git/objects/f0/593fd07a9c0babb10971f520913818bc16b80a": "673f3509f2500625df9e7f54c47146f3",
".git/objects/f1/3be5e69f988191cc1e39114cd6abe4a47e4ba7": "81dae5c8c054ae875ab19abf232ceda1",
".git/objects/f1/f1b25af8edd9fcff20ef8d4e82468a163c1c6b": "7cfe537b8576d51f23368dc922569376",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f6/ce2f9d55e39fd67f50af9db1a276722317d92d": "58b5bccc1fbb51e162224557b189b7eb",
".git/objects/fa/edf62fc0e63cada49c2005845e033f6da4db1f": "a0d325815b1520e2052838f7c97e3077",
".git/objects/fd/6cb205811439da6d4a69eb46415dca36487255": "cfa4034824a693e54c66b6e17e343e12",
".git/refs/heads/master": "8664a625952b243aa8019c472608bc16",
".git/refs/remotes/origin/master": "8664a625952b243aa8019c472608bc16",
"assets/asset/Icon-192.png": "a7f4f2a1f8531b2c37e86cf7fbd19761",
"assets/asset/icons/facebook.png": "d03d1cb8afb8da75756264994a9ce4d4",
"assets/asset/icons/github.png": "0918d78648457def080137b179fc5608",
"assets/asset/programmer_without_background.gif": "12ad90be755707c56d4598bef3f79be7",
"assets/asset/projects/chat.jpg": "91fb9851553d15ba1b9726658a44df1f",
"assets/asset/projects/cmtfdn.jpg": "fb099d87db864f4f0529a0a6acb0fcfc",
"assets/asset/projects/flare_bottom_navigation.gif": "d1ddea263f1a4088d8c25f4958be4f3b",
"assets/asset/projects/flare_character.gif": "0633698fe9c00202b26980a8c98a7e51",
"assets/asset/projects/house.jpg": "82b0679c0722933942901767aec6f262",
"assets/asset/projects/lazy_sms.jpg": "f3632100af57a74789d57f7a934a2ba1",
"assets/asset/projects/text_hider.jpg": "9a14f1fd9208624f86f111dc46d22a55",
"assets/asset/projects/zay.jpg": "2ebb1b7d0eca84352addfffc59cacb8c",
"assets/AssetManifest.json": "fd908f4454666ee8ba1f3d22fac6fb65",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "9d94fb076103a73efeb96a340c6d0657",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "a7f4f2a1f8531b2c37e86cf7fbd19761",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a151ebbdfc60c7c604be3bdc7e4d67f4",
"/": "a151ebbdfc60c7c604be3bdc7e4d67f4",
"main.dart.js": "f17d9aa0d66ab394048a3440b4ac2ffe",
"manifest.json": "727d587ee3b142b7c5d488fc23741187",
"styles.css": "6c8dd4843be655c6333cce176ed9f078",
"version.json": "862a18947c280eb57aa85998be96bde2"
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
