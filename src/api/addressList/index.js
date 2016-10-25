import wilddog from 'wilddog'

var wilddogApp = wilddog.initializeApp({
  authDomain : 'web-app.wilddogio.com',
  syncURL : 'https://web-app.wilddogio.com/addressList'
});

export function getALByType(type){
  return new Promise((resolve, reject) => {
    wilddogApp.sync().ref(type).once("value", snapshot => {
      resolve(snapshot.val())
    }, reject)
  })
}

export function watchList(type, cb){
  wilddogApp.sync().ref(type).on("value", snapshot =>{
    cb(snapshot.val())
  })
}

function getAByType(type){
  return new Promise((resolve, reject) => {
    wilddogApp.sync().ref(`${type}`).once("value", snapshot =>{
      resolve(snapshot.val());
    }, reject)
  })
}

function setAByType(type, addressList){
  wilddogApp.sync().ref(`${type}`).update(addressList)
}

export function toggleFavorite(type, id, active){
  getAByType(type).then(addressList =>{
    for(let address of addressList){
      if(id == address.id){
        if(active)
            address.favorite = "true"
        else
            address.favorite = "false"
      }
    }
    return addressList
  }).then(addressList => {
    setAByType(type, addressList);
  })
}