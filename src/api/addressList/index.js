import wilddog from 'wilddog'

let wilddogApp = wilddog.initializeApp({
  authDomain : 'web-app.wilddogio.com',
  syncURL : 'https://web-app.wilddogio.com/addressList'
});

export function getALByType(type){
  return new Promise((resolve, reject) => {
    wilddogApp.sync().once("value", snapshot => {
      if("all" == type)
        resolve(snapshot.val())
      else{
        let newValues = []
        snapshot.forEach(snap => {
          snap.val().favorite ? newValues.push(snap.val()) : ""
        })
        resolve(newValues)
      }
    }, reject)
  })
}

export function watchList(type, cb){
  wilddogApp.sync().on("value", snapshot =>{
    if("all" == type)
        cb(snapshot.val());
    else{
      let newValues = []
      snapshot.forEach(snap => {
        snap.val().favorite ? newValues.push(snap.val()) : ""
      })
      cb(newValues);
    }
  })
}

function getAddressList(){
  return new Promise((resolve, reject) => {
    wilddogApp.sync().once("value", snapshot =>{
      resolve(snapshot);
    }, reject)
  })
}

export function toggleFavorite(id, active){
  return getAddressList().then(snapshot =>{
    let key = -1
    snapshot.forEach(snap => {
      id == snap.val().id ? key = snap.key() : -1
    })
    return key
  }).then(key => {
    wilddogApp.sync().child(key).update({"favorite" : active});
  })
}