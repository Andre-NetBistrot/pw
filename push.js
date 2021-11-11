var push = require('web-push');

let vapiKeys = {
    publicKey: 'BJoR_2Tf1SnaouB5ObbP_GAfbfvChl2kH_JW776ZhY56yv_ob1m47g2SM1ly-jUup4rdWykKGqpoUeWrLzpzfbE',
    privateKey: 'LchhLAO8z5WjcxHdyb4MCfHtbJuzmi_oqS62V6LiiCA'
  }

   push.setVapidDetails('mailto:vapi@andremenks.net', vapiKeys.publicKey, vapiKeys.privateKey);

   let sub = {}

   push.sendNotification(sub, 'test mesage' )

console.log(vapiKeys )