let push = require('web-push');
console.log(push)
let vapidKeys = {
    publicKey: 'BIlEIDQ9DZSTfHj7PTc_bKI-0GfO3fFAVLFU_73Vbl17W2oM0Jlsj3mOpUSjomgNdZpKihVQGm07HDVB1bWA0dM',
    privateKey: 'hTBY9s8LwtGXjfomWuDTpetyDz9RNOliXiCg8uwMxWk'
    }

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fyZqpopBUGo:APA91bFwhiFMMRH7db78ebXVxq6SI0OZTM0GNOnuvK8KZPR71vXx6jmlLoGA9D485XyCT2W32ooGPFN-hrx6QoXoifAXnNfajNmJ0XfOn9mNwae36FPxMhfmD4DkV9GKOT-kKTyLlOsA","expirationTime":null,"keys":{"p256dh":"BF-UknMZ0HhfgFqsor3wXNGF11cbR0pP0YVJHa23Y0P7tR5BGMapEP2SjxtiTuoofanzTjw7PEWOKwPZOnXhxpE","auth":"Dg_Zpa1rZOaL0IYOplnO8A"}};

let sub2 = {
    "endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABivHZUWAE60AgsPuVoOJKZLXj2eXVmPbX-D5lbIDMZXRyfRMYI5SuMpQG8SuSejVDEy6BrWiCui2I0jlKQeAfOT-ugemp2jkvMcJsdd4Q_wcBMEqaxlz7lb_L15Vw67J195kakG1Pw5UX9mxVjnvofLk3Vn-G5rh2CiOxDHfEoUmysqXc",
    "expirationTime":null,
    "keys":{
        "auth":"mG5UonrLURRxMXnKNuYH-g",
        "p256dh":"BOAEasuzHGo8dVMCxmwStutUDprh_EDhuK8YUhzD9jSr2pkQvaXN6K3oy5vg93s_g6Rd4WL61cLe-Gk1wxyNEUo"}
}
push.sendNotification(sub2, 'test messagea Mozilla')
push.sendNotification(sub, 'test message')
