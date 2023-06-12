import { LOGIN, USER_LOGOUT } from "./types"
import { message } from 'antd'
// import { toggleNetworkLoading } from "../common/actions"
import ServerApi from "../../utility/ServerApi"

// export const doLogin = (rawData, successCallback) => dispatch => {
  // dispatch(toggleNetworkLoading(true))
  // ServerApi().post(`auth/login`, rawData) 
  //   .then(res => {
  //     const userData = res.data
  //     successCallback(res.data)
  //     localStorage.setItem("userData", JSON.stringify(userData.data))
  //   })
  //   .catch(e => {
  //     message.error("Invalid Email / Password")
  //     console.log(e)
  //   })
  //   .finally(() => {
  //     dispatch(toggleNetworkLoading(false))
  //   })

  
  // if (formError) setFormError("");
  // if (!form.email.includes("@")) {
  //   return setFormError("Please enter a valid email");
  // }

  // if (form.password !== form.confirmPassword) {
  //   return setFormError("Passwords do not match");
  // }

  // // Valid form inputs
  // createUserWithEmailAndPassword(form.email, form.password);
// }

/**
 * 
 * @param { Object } data - The user data from API 
 */
export const handleLogin = (data) => dispatch => {
  dispatch({
    type: LOGIN,
    payload: data
  })
}

export const handleLogout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT })
  }
}

export const changePassword = (rawData, successCallback, errorCallback) => () => {
  ServerApi().post(`auth/change-password`, rawData)
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        message.success("Password Change")
        successCallback()
      } else {
        message.error("Error Changing Password")
        if (errorCallback) {
          errorCallback()
        }
      }
      // successCallback()
    })
    .catch(e => {
      message.error("Error chaning password", e)
      // console.log(e)
      if (errorCallback) {
        errorCallback()
      }
    })
}

export const forgotPassward = (rawData, successCallback, errorCallback) => () => {
  ServerApi().post(`auth/user/forgot-password-reset`, rawData)
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        // message.success("Password Reset Successfull")
        successCallback()
      } else {
        // message.error("Error Changing Password")
        if (errorCallback) {
          errorCallback()
        }
      }
      // successCallback()
    })
    .catch(e => {
      // message.error(e.response.data.message || "Error resetting password!", e)
      console.log(e)
      if (errorCallback) {
        errorCallback()
      }
    })
}


export const validateResetPasswordToken = (rawData, successCallback, errorCallback) => () => {
  ServerApi().post(`auth/user/forgot-password-validate-token`, rawData)
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        // message.success("OK")
        successCallback()
      } else {
        // message.error("Error")
        if (errorCallback) {
          errorCallback()
        }
      }
      // successCallback()
    })
    .catch(e => {
      // message.error(e.response.data.message || "Error resetting password!", e)
      console.error(e)
      if (errorCallback) {
        errorCallback()
      }
    })
}

/******* ================


FIREBASE AUTH ACTION FUNCTIONS


=================== *******/


export const logoutFirebaseUser = () => dispatch => {
  dispatch({ type: USER_LOGOUT })
}