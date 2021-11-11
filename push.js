var push = require("web-push");

let vapiKeys = {
  publicKey: "BJoR_2Tf1SnaouB5ObbP_GAfbfvChl2kH_JW776ZhY56yv_ob1m47g2SM1ly-jUup4rdWykKGqpoUeWrLzpzfbE",
  privateKey: "LchhLAO8z5WjcxHdyb4MCfHtbJuzmi_oqS62V6LiiCA",
};

push.setVapidDetails("mailto:vapi@andremenks.net", vapiKeys.publicKey, vapiKeys.privateKey);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/f5Kv5oKDYtc:APA91bEi6uFWjyJ-rH_bQVTRGOMMKar7d7GMWYKrlIkpRbTWg2Iaqwjibo_rFK0C0gPpNF1U2U5-HySvXEvrLR3bQaHQsMJjlup-GFvDVNqu4tQZEUaD7HCYEqBPVYvjvsq3uJsfQTtH",
  expirationTime: null,
  keys: {
    p256dh: "BONCRPoB7fSzEoIOspyRJbZduk1T8WaXjPivT42lZg1zTFIvekg67tlUpZnhAw6s_p87pcRRMA1Ap7y1883QKRo",
    auth: "BW6P19q74PyqlGNsSqrCqw",
  },
};

push.sendNotification(sub, "test mesage");

console.log(vapiKeys);
