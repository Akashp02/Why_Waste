importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyADAtJOq3u6AeOls4DgWPHvNa2FUD0v-V4",
    authDomain: "why-waste-cd23e.firebaseapp.com",
    projectId: "why-waste-cd23e",
    storageBucket: "why-waste-cd23e.appspot.com",
    messagingSenderId: "197605221555",
    appId: "1:197605221555:web:123cfc69d3ea8f6ec2bcc6",
    measurementId: "G-LGSCL7VXG3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging =firebase.messaging();
messaging.setBackgroundMessageHandler((payload)=>{
    const title='Hello WOrld';
    const options={
        body: payload.data.status
    };
    return self.registration.showNotification(title,options);
});