const { sendNotification } = require('web-push')
var  push = require ('web-push')

let vapIdKeys =  {
    publicKey: 'BFEtXeBEvNpbtvNS2sw7wFhL4cwn30cJzrX8Af5TcO4YSku4-ZaRqfg6DZ9eE1hsLP7bywehwxq_gr1QKP-V6j0',
    privateKey: 'eRLoXJ4th2DEHEibdcXd1PNtmcVDU5xdcjlvAxQTQCs'
  };

  push.setVapidDetails(
    'mailto:mmdukb@hotmail.com',
    vapIdKeys.publicKey,
    vapIdKeys.privateKey
    );

let sub ={endpoint:
            "https://fcm.googleapis.com/fcm/send/eo6WvHzUkE8:APA91bH7akoE-3DEGmdLhnaXyEFVhLNa12IiaJ8JFU9u1c7tEv0NBv-sta99xsUR3Np_m2Xpsg5m2EUJH6YKEufl2Tqw9xbk3p9axXnvWwTpLFxsOtWnr6cxvcLNMXfukWm6oTuApn7c",
          expirationTime:null,
          keys:{
            p256dh:
            "BGKen4URVhVmtxb5gOx1EQgrr32Ga_aBuymBpEjIEb7WDo5maQyuLDoiWYmXabfzTRkasUpvJulvdEZQeg40AUw",
            auth:"juo_27X9kRe4qLlNEw1-hA"
                }
          } ;

  push.sendNotification(sub,'test message')