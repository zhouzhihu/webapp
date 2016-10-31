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
          console.log(snap.val().favorite)
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

function getAByType(type){
  return new Promise((resolve, reject) => {
    wilddogApp.sync().once("value", snapshot =>{
      resolve(snapshot.val());
    }, reject)
  })
}

function setAByType(type, addressList){
  wilddogApp.sync().update(addressList)
}

export function toggleFavorite(type, id, active){
  return getAByType(type).then(addressList =>{
    for(let i = 0;i < addressList.length; i++){
      if(id == addressList[i].id){
        if(active)
          addressList[i].favorite = true
        else
          addressList[i].favorite = false
      }
    }
    return addressList
  }).then(addressList => {
    setAByType(type, addressList);
  })
}