import axios from "axios";

const getLoggedInUser = () => {
    const user = localStorage.getItem('userData')
    if (user) return JSON.parse(user)
    return null
}

function ServerApi(props) {
    let token = ''

    try {
        token = getLoggedInUser().accessToken
    } catch (e) {
        token = ''
    }
    return (axios.create({
        baseURL: `localhost:5000/`,
        headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    },
    redirect: 'follow',
    transformResponse: [
      (data) => {

        //manage session timeouts
        if (data === '{"statusCode":401,"message":"Unauthorized"}') {
          console.log('Not authorized ---- ')
          // localStorage.removeItem('userData')
          window.location = '/not-authorized'
        }

        return JSON.parse(data)
      }
    ],
    ...props
    }))
}