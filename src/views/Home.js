import React from 'react';
import MessagesForm from '../App/components/MessagesForm';

export default function Home() {
  // const handleInputChange = (e) => {
  //   setMessages((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  return (
    <div>
     <h1>Welcome to Slack-Clone</h1>
    <MessagesForm/>
    </div>
  );
}
