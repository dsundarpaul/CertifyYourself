import { Button, Form, Input, Typography, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../../../../firebase/clientApp'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'

const CreateFeed = () => {

  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [messageApi, contextHolder] = message.useMessage();

  const handleCreateCommunityFeed = async(values) => {

    setLoading(true)

    try {
      const CommunityFeedRef = doc(firestore, "CommunityFeed", values.feedTitle);
      const communityDoc = await getDoc(CommunityFeedRef);

      if (communityDoc.exists()) {
        throw new Error('these feed exists!')
      }

      await setDoc(CommunityFeedRef, {
        creatorId: user?.uid,
        createdAt: serverTimestamp(),
        communityFeedTitle: values.feedTitle,
        communityFeedContent: values.feedContent,
      })

      messageApi.success('Sucessfully Created Feed');

    } catch (error) {
      console.log(error);
      messageApi.error('Error Creating Feed');
      setError(error)
    }

    setLoading(false)
  }

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div>
      {contextHolder}
      <Typography.Title level={2}>Create Post</Typography.Title>

      <Form
				name="basic"
				initialValues={{ remember: true }}
				onFinish={handleCreateCommunityFeed}
				autoComplete="off"
      >
        <Form.Item
          name='feedTitle'
          rules={[
            { 
              required: true, 
              message: 'Please provide some content before creating a Post!!.' 
            }
          ]}
        >
          <Input placeholder='Post title' />
        </Form.Item>

        <Form.Item 
          name='feedContent'
          rules={[
            { 
              required: true, 
              message: 'Please provide some content before creating a Post!!.' 
            }
          ]}
        >
          <TextArea 
            status={error ? 'error' : 'default'}
            rows={4} 
            placeholder='Wirte your feed content here!' 
            autoSize={{ minRows: 4, maxRows: 8 }}
          />
        </Form.Item>
        
        <Form.Item>
          <Button 
            htmlType="submit" 
            loading={loading}
          >
            Create Post
          </Button>
        </Form.Item>
      </Form>

      <Button>Cancel</Button>
    </div>
  )
}

export default CreateFeed