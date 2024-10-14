import React from 'react';

const Button = ({
  text = true,
  icon = false,
  rounded = false,
  outlined = false,
  iconLeft = false,
  dropdown = false,
  previous = false,
  next = false,
  play = false,
  ghost=false,
  action,
  children,
}) => {

  const baseStyles = `
    py-2 px-5 font-semibold shadow-md focus:outline-none focus:ring focus:ring-opacity-75
  `;

  const dynamicStyles = `
    ${text ? 'text-base' : ''}
    ${icon ? 'flex items-center justify-center' : ''}
    ${rounded ? 'rounded-full' : 'rounded-md'}
    ${outlined ? 'border-2 border-violet-500 bg-transparent text-violet-500' : 'bg-violet-500 text-white'}
    ${dropdown ? 'relative' : ''}
    ${previous ? 'pr-10' : ''}
    ${next ? 'pl-10' : ''}
  `;


  const handleClick = () => {

  };

  const renderIcon = () => {
    if (previous) return <i className="fa-solid fa-chevron-left"></i>;
    if (next) return <i className="fa-solid fa-chevron-right"></i>;
    if (play) return <i className="fa-solid fa-play"></i>;
    if (dropdown) return <i className="fa-solid fa-caret-down"></i>;
    if(ghost) return <i className='far fa-phone'></i>
    return null;
  };

  return (
    <button onClick={handleClick} className={`${baseStyles} ${dynamicStyles}`}>
      {iconLeft && renderIcon()}
      {children}
      {!iconLeft && renderIcon()}
    </button>
  );
};

export default Button;
