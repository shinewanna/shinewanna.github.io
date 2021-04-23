importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDQ1Kj0M_6CMnt7PvG9dJdiGU0x6qqsc0g",
    authDomain: "share-notification-abc3f.firebaseapp.com",
    projectId: "share-notification-abc3f",
    storageBucket: "share-notification-abc3f.appspot.com",
    messagingSenderId: "690191939123",
    appId: "1:690191939123:web:7f2f83a8082e64b63f5546",
    measurementId: "G-XWL1BV5FGF"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
            };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});