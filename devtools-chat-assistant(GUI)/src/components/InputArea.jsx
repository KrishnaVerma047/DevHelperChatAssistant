import React from 'react';

function InputArea({ value, onChange, onSend }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === 'Enter' && onSend()}
      />
      <button onClick={onSend}>Send</button>
    </div>
  );
}

export default InputArea;
