let push = require('web-push');
console.log(push)
let vapidKeys = {
    publicKey: 'BIlEIDQ9DZSTfHj7PTc_bKI-0GfO3fFAVLFU_73Vbl17W2oM0Jlsj3mOpUSjomgNdZpKihVQGm07HDVB1bWA0dM',
    privateKey: 'hTBY9s8LwtGXjfomWuDTpetyDz9RNOliXiCg8uwMxWk'
    }

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:
        "https://fcm.googleapis.com/fcm/send/cc9jVzFrKnI:APA91bF1dGqrIyFHe63VL45WQp_3SPQULgCxygEE9invkuPNzx0JqvMy54px1qqAZXyBybgLOpN23AWJTK8Z6SFAvHFfFyQ61NlBaq2Z4zjZ43mvDBL8n1aAUItnr3ls_1q_WHnoQn7L",
    expirationTime:null,
    keys:{
    p256dh:"BJ2xNjYu-qDZifl3SD1dn9Z9z8L7c41ajL-hfqPhr938y5daSQyIudEkEHkYPgOMa9dSjlXBAAoWCGmmnRX8Pd8",
    auth:"bIPuXTruEFjFgZIqm1cObw"}};

let sub2 = {
    "endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABiv…lb_L15Vw67J195kakG1Pw5UX9mxVjnvofLk3Vn-G5rh2CiOxDHfEoUmysqXc",
    "expirationTime":null,
    "keys":{
        "auth":"mG5UonrLURRxMXnKNuYH-g",
        "p256dh":"BOAEasuzHGo8dVMCxmwStutUDprh_EDhuK8YUhzD9jSr2pkQvaXN6K3oy5vg93s_g6Rd4WL61cLe-Gk1wxyNEUo"}
}
push.sendNotification(sub, 'test message')
push.sendNotification(sub2, 'test messagea Mozilla')
