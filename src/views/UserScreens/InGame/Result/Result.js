import React from 'react';
import { Button, Result } from 'antd';
import gif from '../../../../assets/logo/dog.gif';

const ResultScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Result
        status="success"
        title="GALTI SE PASS HOGAYA"
        subTitle="NEXT TIME OR PADAI KARKE AAJA"
        extra={[
          <Button key="Home">Home</Button>,
          <Button key="Logout">Logout</Button>,
        ]}
      />
      <img src={gif} alt="Result GIF" style={{ marginTop: '20px' }} />
    </div>
  );
};

export default ResultScreen;
