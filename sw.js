self.addEventListener('push', function (e) {
    let options = {
        body: "This notification was generated from a push!",
        icon: "image/example.png",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {action: 'explore', title: "Explore this new world", image: "image/checkmark.png"},
            {action: 'close', title: 'Close', icon: 'images/xmark.png'},
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Hello world!', options)
    );
});
