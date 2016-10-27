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
  return getAByType(type).then(addressList =>{
    for(let i = 0;i < addressList.length; i++){
      if(id == addressList[i].id){
        if(active)
          addressList[i].favorite = "true"
        else
          addressList[i].favorite = "false"
      }
    }
    return addressList
  }).then(addressList => {
    setAByType(type, addressList);
  })
}