import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import MessagesForm from '../App/components/MessagesForm';
// import { rightArrow, rightArrowOverlap } from '../styles/index.scss';

function MessageBubble({ messages, text }) {
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

  const [editMessage, setEditMessage] = useState(false);

  const handleClick = () => {
    // if ('edit') {
    //   setEditMessage((prevState) => !prevState);
    // } else {
    //   console.warn('nothing selected');
    // }
    setEditMessage((prevState) => !prevState);

    // (setEditMessage((prevState) => console.warn(!prevState)));
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
            <div style={{ fontSize: 16, color: '#fff' }} >{msgObj.text}</div>
            <div style={{ fontSize: 12, color: '#fff' }} >{msgObj.timestamp}</div>
          <Button color='danger'onClick={() => handleClick()}>
            {editMessage ? 'close' : 'edit'}
          </Button>
          {editMessage && <MessagesForm
            value={text}
          />}
            </div>
        </div>
      ))}
    </>
  );
}

MessageBubble.propTypes = {
  text: PropTypes.string,
  messages: PropTypes.array,
  // message: PropTypes.object
  editMessage: PropTypes.bool
};

export default MessageBubble;
