import { doc, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { firestore } from '../../../../firebase/clientApp';

const CommunityFeeds = () => {
  
  useEffect(() => {

    async function fetchData() {

      const db = doc(firestore, "CommunityFeed");
      const communitFeedsRef = db.collection('communityFeed');
      
      const documents = await communitFeedsRef.getDocs();
      
      console.log(documents)
    }

    fetchData()
  }, [])

  return (
    <div>CommunityFeeds</div>
  )
}

export default CommunityFeeds