import axios from 'axios'
let $http = axios.create({
  baseURL: 'https://way.jd.com/jisuapi/driverexamQuery'
})
// 定义题库
export function getTopicData (params) {
  let url = '/appkey'
    // 定义参数
  let paramsData = Object.assign({}, {
    pagenum: 1,
    tab: 'all',
    limit: 40
  }, params)
}