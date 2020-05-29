import React from 'react';
import Item from './item';
import EventProxy from './eventProxy';
import {ItemProps} from '../pages';

export const Observe = new EventProxy();

const List = (props: any) => {
  
  const { list } = props
  const getStates = () => {
    console.log(Observe.getState())
  }
  console.log('update list')
  return (
    <div className="">
      {
        list.map((v: ItemProps) => {
          const itemProp = {
            itemKey: v.key
          }
          return (
            <div key={v.key}>
              <span>{v.label}:</span>
              <Item
                {...itemProp}
              />
            </div>
          )
        })
      }
      <button onClick={() => getStates()}>提交</button>
    </div>
  )
}
export default List