import React from 'react';
import List from '../components/list';
export interface ItemProps {
  label: string,
  key: string
}
const Index = (props: any) => {
  const list: Array<ItemProps> = [
    {
      label: '姓名',
      key: 'name'
    },
    {
      label: '电话',
      key: 'phone'
    },
    {
      label: '邮箱',
      key: 'email'
    }
  ]
  
  return (
    <div className="index">
      <List
        list={list}
      />
    </div>
  )
}

export default Index