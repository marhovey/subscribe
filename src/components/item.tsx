import React from 'react';
import subscription from './subscribe';
const Item = (props: any) => {
  return (
    <input
      type="text"
      {...props}/>
  )
}

export default subscription(Item)