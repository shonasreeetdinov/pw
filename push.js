let push = require('web-push');
console.log(push)
let vapidKeys = {
    publicKey: 'BIlEIDQ9DZSTfHj7PTc_bKI-0GfO3fFAVLFU_73Vbl17W2oM0Jlsj3mOpUSjomgNdZpKihVQGm07HDVB1bWA0dM',
    privateKey: 'hTBY9s8LwtGXjfomWuDTpetyDz9RNOliXiCg8uwMxWk'
    }

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/epUo-T_TxIo:APA91bE4_4Ej90dEUTf_hbptRUkx1As_VmEhAMEjEdPjN7CRwBeNqJMWItr5WXlagRTyXYbRN9mee66tySa782BB0jCYu3qDNqaiF7VQymLipA-5EDmpGz6YoaJ_eGqkC05OlNK4WXo_",
    expirationTime:null,
    keys:{
    p256dh:"BGoiOQIgr3qoq3P6hahX-SbbRlKEuiYf7fUOMB_DA9jVwncsQa-YDZ9R3NSFQ4KT00quALhUL0G6gHTt9ZylQp4",auth:"d2DOgV9IoWERLyUtg9eACg"
}
};
push.sendNotification(sub, 'test message')
