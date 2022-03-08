import React from 'react';
import './textfield.css';

interface ITextfield {
  type: React.HTMLInputTypeAttribute;
  id: string;
  name: string;
  onChange: React.Dispatch<string>;
}

export function TextField({ type, id, name, onChange }: ITextfield) {
  return (
    <input
      type={type}
      className='textfield'
      placeholder=''
      id={id}
      name={name}
      minLength={5}
      onChange={({ target }) => onChange(target.value)}
      autoFocus
    />
  );
}
