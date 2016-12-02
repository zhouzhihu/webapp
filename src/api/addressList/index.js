import axios from 'axios'

export function getALByType(type){
  return new Promise((resolve, reject) => {
    axios.get('http://webapp-node.daoapp.io/addressList?type=' + type).then(function(response){
      resolve(response.data)
    })
  })
}

export function getAddressList(id){
  return new Promise((resolve, reject) => {
    axios.get('http://webapp-node.daoapp.io/addressList/' + id).then(function(response){
      resolve(response.data)
    })
  })
}

export function toggleFavorite(id){
  return new Promise((resolve, reject) => {
    let _id = parseInt(id)
    axios.put('http://webapp-node.daoapp.io/addressList', {id: _id}).then(function (response) {
      resolve(response.data)
    })
  })
}