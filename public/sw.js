if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let t={};const c=e=>s(e,r),o={module:{uri:r},exports:t,require:c};a[r]=Promise.all(n.map((e=>o[e]||c(e)))).then((e=>(i(...e),t)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"a7aafcc8b47dc97c5e8b394ffd096e3b"},{url:"/_next/static/chunks/131-f47eb11a996e7987.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/336-bff3396cf761bd83.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/479ba886-f0718798c3cf5832.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/4bd1b696-89256c155db12fe2.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/517-5e76d6073155ba3e.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/736-a6bd4f8b7d08bffa.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/795d4814-815c56cd2ea6ccee.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/814-a72d1307adf6caf9.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/app/_not-found/page-17484f35d3e94ba6.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/app/create/page-eadf8bdf9e9a4d37.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/app/join/page-3a1b33a7644b0b9c.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/app/layout-f8c49a8ca85e8c2b.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/app/page-9f77e2c5114c5348.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/app/room/%5Bcode%5D/page-5f68a86eda524f79.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/main-98e6f18a2968b47a.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/main-app-067f0fc96b544f8e.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-dcd4afc27a247624.js",revision:"gAZC6g2Ymjfibs_aplAPD"},{url:"/_next/static/css/3bc2a8caadfbc109.css",revision:"3bc2a8caadfbc109"},{url:"/_next/static/css/713d7ae5776b62f3.css",revision:"713d7ae5776b62f3"},{url:"/_next/static/css/eb4a6fa1c8808f1f.css",revision:"eb4a6fa1c8808f1f"},{url:"/_next/static/css/fc34c95e6f290772.css",revision:"fc34c95e6f290772"},{url:"/_next/static/gAZC6g2Ymjfibs_aplAPD/_buildManifest.js",revision:"bbe831f24a59c124139e1a865f9c4890"},{url:"/_next/static/gAZC6g2Ymjfibs_aplAPD/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/24edbf34e0987146-s.p.woff2",revision:"881a1f777ba1e64e7c49104a1418655a"},{url:"/_next/static/media/297a96cec19ecec0-s.woff2",revision:"f7aa35b97751318b5c3ae0244ba0feea"},{url:"/_next/static/media/55245e1beedb912e-s.p.woff2",revision:"bb74046b04591cc9466466b139859b89"},{url:"/_next/static/media/5bdd123024424e08-s.woff2",revision:"6bdf13fa90f26fdccf0884a8f7a7ffb7"},{url:"/_next/static/media/613d42af50f2ab62-s.woff2",revision:"b5424d817ed7cab055cb16c8b13cb693"},{url:"/_next/static/media/620a715b5f5b6b78-s.woff2",revision:"a4f4661eb2f73592ce1c856ecff2bf07"},{url:"/_next/static/media/894e994111e7e412-s.p.woff2",revision:"a542ccddd5c3597070c638aed6a2e79d"},{url:"/_next/static/media/8f573b926e9070b6-s.woff2",revision:"882e5d2d28b26381a8e72aa0c655df99"},{url:"/_next/static/media/e5e37ee3fad142ae-s.woff2",revision:"40e3ee47c5d26aa84788ab8e64714441"},{url:"/_next/static/media/ff6bb22db40a75c6-s.p.woff2",revision:"17dcc3f58b14768e1a8b5538f6b22142"},{url:"/free-parking.png",revision:"006701493eddf7ccd2580edb7528b09f"},{url:"/logo192.png",revision:"9405e937acbb924b24ff21c610771ab1"},{url:"/logo384.png",revision:"cffbac03508358986ca0fdfd71c7db73"},{url:"/logo512.png",revision:"b8869d197a66d415b7ce1cb0c00db996"},{url:"/manifest.json",revision:"fa7c90c92c1e95823cf4c5123b3bc876"},{url:"/property-images/atlantic-avenue-front.png",revision:"3d5169e81cd2e06dee4060b54423b567"},{url:"/property-images/b-o-railroad-front.png",revision:"37733340a81d14cad31d26711aeb8a72"},{url:"/property-images/baltic-avenue-front.png",revision:"2498be246d66ae2485f252b6b3087824"},{url:"/property-images/boardwalk-front.png",revision:"de2d3840b0842176ea452f0510e2a5f9"},{url:"/property-images/connecticut-avenue-front.png",revision:"38aa37413690cd593dcb60c78bc94169"},{url:"/property-images/electric-company-front.png",revision:"e900475018614870ad8b927f4da4defb"},{url:"/property-images/illinois-avenue-front.png",revision:"e3d1cbacb83f0da3fbb7b2db942ee04c"},{url:"/property-images/indiana-avenue-front.png",revision:"ea54ddfb01db81749f1ba7ed6a2be292"},{url:"/property-images/kentucky-avenue-front.png",revision:"cf54b29ccc9dc8a4fb00c5aa1a4ff802"},{url:"/property-images/marvin-gardens-front.png",revision:"33860d75747460bc57e857f88f98cd18"},{url:"/property-images/mediterranean-avenue-front.png",revision:"a11611818e7f3edd3d9d660349149b38"},{url:"/property-images/new-york-avenue-front.png",revision:"acb02e153a1cf70ce316fe59150f3632"},{url:"/property-images/north-carolina-avenue-front.png",revision:"a5df1a61f8953547834b69a1d391a9bb"},{url:"/property-images/oriental-avenue-front.png",revision:"5b9f63caf2c29b4c1d1c959750296e81"},{url:"/property-images/pacific-avenue-front.png",revision:"cb5db26856ef9517997a8f111488133b"},{url:"/property-images/park-place-front.png",revision:"390c0417302a42e1d94c3e4219f1f68e"},{url:"/property-images/pennsylvania-avenue-front.png",revision:"ec8f053c3925da5898043785a28f9239"},{url:"/property-images/pennsylvania-railroad-front.png",revision:"fda2c2881953391db0f43888ae15f8f4"},{url:"/property-images/reading-railroad-front.png",revision:"afe918a8f5f5aec61720fe839da7d7e5"},{url:"/property-images/short-line-railroad-front.png",revision:"c1e6ff08900a74dd841ad051feed92e5"},{url:"/property-images/st-charles-place-front.png",revision:"1a3e3aa64ea09c29be15a686c9f198ab"},{url:"/property-images/st-james-place-front.png",revision:"12e820e5b0eba185708c401cf08467c0"},{url:"/property-images/states-avenue-front.png",revision:"ab46889517b17c1c480b354db7e57256"},{url:"/property-images/tennessee-avenue-front.png",revision:"42257f82d8e2ce93b4b619a6a4e285bf"},{url:"/property-images/ventnor-avenue-front.png",revision:"6eb10835a10ad731b8b8e567b81dba4f"},{url:"/property-images/vermont-avenue-front.png",revision:"8c85e5ae308ba2b5767b9eb82a79d809"},{url:"/property-images/virginia-avenue-front.png",revision:"bd8bf1c9f130d696436aefd8bafbcf8c"},{url:"/property-images/water-works-front.png",revision:"6394c1166a87be150a49495e40204a5b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
