import lmyData from '../data.json'

export default {
  getLmyData(){
    return lmyData
  }
  // getLmyData(cb) {
  //   fetch(lmyData).then(res => {
  //     res.json().then(cb)
  //   })
  // }
}