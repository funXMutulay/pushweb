const { sendNotification } = require('web-push')
var  push = require ('web-push')

let vapIdKeys =  {
    publicKey: 'BFEtXeBEvNpbtvNS2sw7wFhL4cwn30cJzrX8Af5TcO4YSku4-ZaRqfg6DZ9eE1hsLP7bywehwxq_gr1QKP-V6j0',
    privateKey: 'eRLoXJ4th2DEHEibdcXd1PNtmcVDU5xdcjlvAxQTQCs'
  }

  push.setVapidDetails('mailto:mmdukb@hotmail.com',vapIdKeys.publicKey,vapIdKeys.privateKey)

let sub = {} ;

  push.sendNotification(sub,'test message')