const _addressList = [
  {
    id : '1',
    name : '周志虎',
    tel : '13560107927',
    mail : '13560107927@139.com',
    desc : '主要从事技术管理工作，现担任技术总监职位'
  },
  {
    id : '2',
    name : '周志强',
    tel : '18680586202',
    mail : '18680586202@139.com',
    desc : '主要从事运维管理工作，现担任运维经理职位',
    type : 'recently'
  }
]

export default {
  getAL : (cb) => {
    setTimeout(() => cb(_addressList), 1000)
  },
  getALByType : (type, cb) => {
    var addressLists = [];
    _addressList.forEach(address =>{
      if((address.type && type == address.type) || "all" == type) addressLists.push(address)
    })
    setTimeout(() => cb(addressLists), 1000);
  }
}