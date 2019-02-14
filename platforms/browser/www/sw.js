/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

if (!workbox) {
  console.log('Workbox didn\'t load');
}

workbox.setConfig({ debug: false });

const contentHandler = workbox.strategies.cacheFirst({
  cacheName: 'content-cache',
});
const jsHandler = workbox.strategies.cacheFirst({
  cacheName: 'scripts-cache',
});
const cssHandler = workbox.strategies.cacheFirst({
  cacheName: 'styles-cache',
});

const imageHandler = workbox.strategies.cacheFirst({
  cacheName: 'image-cache',
  //plugins: [
  //  new workbox.expiration.Plugin({
  //     Cache for a maximum of 30 days
  //    maxAgeSeconds: 60 * 60 * 24 * 30,
  //  }),
  //],
});

workbox.routing.registerRoute(
  /.*\.html/,
  contentHandler
);
workbox.routing.registerRoute(
  /.*\.css/,
  cssHandler
);
workbox.routing.registerRoute(
  /.*\.js/,
  jsHandler
);
workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif|png|ico)/,
  imageHandler
);
