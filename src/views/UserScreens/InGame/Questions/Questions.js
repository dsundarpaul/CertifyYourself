import React from 'react'
import  Question from "./Question/Question";
import { BIO } from "../../../../consts/mid";
const Questions = () => {
return (
<div>
{BIO.map((que, idx) => {
          return (
            <Question key ={idx}
        question={que.question}
        options={que.options}
            />
          );
        })}
</div>
);
}
export default Questions