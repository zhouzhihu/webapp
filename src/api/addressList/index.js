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

function getAById(type, id){
  return new Promise((resolve, reject) => {
    wilddogApp.sync().ref(`${type}/${id}`).once("value", snapshot =>{
      resolve(snapshot.val());
    }, reject)
  })
}

export function toggleFavorite(type, id){
  getAById(type, id).then(addressList =>{

  })
}