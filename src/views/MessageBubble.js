import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { deleteMessage, getMessages } from '../helpers/data/messagesData';
// import { rightArrow, rightArrowOverlap } from '../styles/index.scss';

function MessageBubble({
  messages, user, setMessages, communicationID
}) {
  // console.warn(user, 'user');
  // const rightArrow = ({
  //   rightArrow: {
  //     position: 'absolute',
  //     backgroundColor: '#0078fe',
  //     // backgroundColor:'red',
  //     width: 20,
  //     height: 25,
  //     bottom: 0,
  //     borderBottomLeftRadius: 25,
  //     right: -10
  //   },
  // });

  // const rightArrowOverlap = ({
  //   rightArrowOverlap: {
  //     position: 'absolute',
  //     backgroundColor: '#eeeeee',
  //     // backgroundColor:'green',
  //     width: 20,
  //     height: 35,
  //     bottom: -6,
  //     borderBottomLeftRadius: 18,
  //     right: -20
  //   },
  // });

  const handleDeleteMessageButton = (messageID) => {
    deleteMessage(messageID, communicationID).then(getMessages(communicationID).then((response) => setMessages(response)));
  };

  return (
    <>
      {messages.map((msgObj) => (
        <div key={msgObj.messageID} style={{
          backgroundColor: '#0078fe',
          padding: 10,
          marginLeft: '45%',
          borderRadius: 5,
          marginTop: 5,
          marginRight: '5%',
          maxWidth: '50%',
          // alignSelf: 'flex-end',
          // borderRadius: 20,
        }}>
           <div>
            { msgObj.userUID === user.uid ? <Button
          style={{
            backgroundColor: 'transparent',
            borderWidth: '0rem'
          } }
          onClick={() => (handleDeleteMessageButton(msgObj.messageID))}>
          <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="black"
                    className="bi bi-trash"
                    viewBox="0 0 16 16">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                  </svg>
          </Button> : '' }
        </div>
          <div>
            <div style={{ fontSize: 16, color: '#fff' }} >{msgObj.text}</div>
            <div style={{ fontSize: 12, color: '#fff' }} >{msgObj.timestamp}</div>
            </div>
        </div>
      ))}
    </>
  );
}

MessageBubble.propTypes = {
  messages: PropTypes.array,
  user: PropTypes.any,
  setMessages: PropTypes.func,
  communicationID: PropTypes.string
};

export default MessageBubble;
