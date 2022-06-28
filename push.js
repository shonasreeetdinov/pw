let push = require('web-push');
let vapidKeys = {
    publicKey: 'BIlEIDQ9DZSTfHj7PTc_bKI-0GfO3fFAVLFU_73Vbl17W2oM0Jlsj3mOpUSjomgNdZpKihVQGm07HDVB1bWA0dM',
    privateKey: 'hTBY9s8LwtGXjfomWuDTpetyDz9RNOliXiCg8uwMxWk'
    }

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {}
push.sendNotification(sub, 'test message')
