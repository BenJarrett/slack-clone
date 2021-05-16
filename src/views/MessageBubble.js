import React from 'react';
import PropTypes from 'prop-types';
// import { rightArrow, rightArrowOverlap } from '../styles/index.scss';

function MessageBubble({ messages }) {
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
            </div>
        </div>
      ))}
    </>
  );
}

MessageBubble.propTypes = {
  messages: PropTypes.array,
};

export default MessageBubble;
