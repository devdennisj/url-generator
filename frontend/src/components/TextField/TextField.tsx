import React from 'react';
import './textfield.css';

interface ITextfield {
  type: React.HTMLInputTypeAttribute;
  id: string;
  name: string;
}

export function TextField({ type, id, name }: ITextfield) {
  return (
    <input
      type={type}
      className='textfield'
      placeholder=''
      id={id}
      name={name}
      minLength={5}
      autoFocus
    />
  );
}
