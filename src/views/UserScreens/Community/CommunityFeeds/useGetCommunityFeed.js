import { collection, getDocs } from "@firebase/firestore"
import { firestore } from "../../../../firebase/clientApp"

export const useGetCommunityFeed = async(callBack) => {

  let feedData = []

  await getDocs(collection(firestore, 'CommunityFeed'))
    .then(res => {
      feedData = res.docs.map((doc) => ({ ...doc.data() }))
      callBack(feedData)
    })
    .catch(err => [
      console.log(err)
    ])
}