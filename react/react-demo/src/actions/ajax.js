export const fetchPosts = () => {
  return (dispatch) => {
    fetch('http://192.168.1.21:3001/data1').then(res => {
      dispatch(receivePosts('fe'))
    })
  }
}

const receivePosts = (tag) => {
  return {
    type: 'RECEIVE_POSTS',
    tag
  }
}