import { collection, getDocs } from "@firebase/firestore"
import { firestore } from "../firebase/clientApp"

export const useUserDetails = async(getDetails, uid) => {

  let userDetails = []

  await getDocs(collection(firestore, `users/${uid}/userDetails`))
    .then(res => {
      userDetails = res.docs.map((doc) => ({ ...doc.data() }))
      getDetails(userDetails[userDetails.length - 1])
    })
    .catch(err => [
      console.log(err)
    ])
}