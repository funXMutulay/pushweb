self.addEventListener('push', () => {
self.ServiceWorkerRegistration.sendNotifications('test message',{});        
} )