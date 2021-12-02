import React from 'react';
import './FormInput.scss';

interface FormInputProps{
  label: string;
  className?:string | undefined;
};


const Wraper: React.FC<FormInputProps> = ({label, children, className}) => (
  <div className={`form_input ${className}`}>
    <label className="label">{label}</label>
		{
      children
    }
  </div>
);

export default Wraper