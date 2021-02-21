const form=document.querySelector('#add-ngo');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('ngo').add({
        name: form.name.value,
        city: form.city.value,
        address: form.address.value,
        phone: form.phone.value,
        email: form.email.value
    })
    db.collection('ngo').get().then((snapshot)=>{
        snapshot.docs.forEach(element => {
            console.log(element);
        });
    });
    form.reset();
});

const messaging =firebase.messaging();
messaging.usePublicVapidKey('BOQvgAnLzagCvCD6D9ukKlj-Eeni9KQK7V8jVrijq7YkLVAN1y-ZoiVMz3yGwcWUulGIknJTBeGaLJYDx-4Ggaw');

messaging.requestPermission()
.then(()=>{
    console.log('Have Permission');
    messaging.getToken().then((token)=>{
        console.log(token);
    }).catch((err)=>{
        console.log(err);
        showToken(err);
        setTokenSentToServer(false);
    });
})
.catch((err)=>{
    console.log('Error Occured');
})

messaging.onMessage((payload)=>{
    console.log('onMessage: ', payload);
});