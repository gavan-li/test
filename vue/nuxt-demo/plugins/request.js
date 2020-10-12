export default ({ $axios }) => {
  /* $axios.intercetors.request.use(
    config => {
      // do something before request is sent
      return config
    },
    error => {
      // do something with request error
      return Promise.reject(error)
    }
  )
  $axios.interceptors.response.use(
    response => {
      return response.data
    },
    error => {
      console.log('err' + error) // for debug
      return Promise.reject(error)
    }
  ) */

  // $axios.setHeader('Authorization', '123')

  // $axios.setToken('123', 'Bearer')

  $axios.onRequest(config => {
    console.log(process.client)
  })

  $axios.onResponse(response => {
  	return response.data
  })

	$axios.onError(error => {
		console.log('有错误了')
	})
}