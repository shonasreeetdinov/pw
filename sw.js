self.addEventListener('push', function (e) {
    let options = {
        body: "Changed",
        icon: "img/bell.png",
        sound: "sound/a",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {action: 'explore', title: "change", image: "image/checkmark.png"},
            {action: 'close', title: 'Close', icon: 'images/xmark.png'},
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Hello world!', options)
    );
});
