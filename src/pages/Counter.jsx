import React from 'react'
import { useCounter } from '../store/counter'
import { Button } from 'antd';

const Counter = () => {
  
  const { cnt, inc, dec, reset } = useCounter();

  return (
    <>
      <main>
        <br />
        <div className='flex justify-center items-center gap-[10px]'>
            <Button onClick={inc}>+</Button>
            <p>{cnt}</p>
            <Button onClick={dec}>-</Button>
        </div><br />
        <div className='flex items-center justify-center'>
            <Button onClick={reset}>Reset</Button>
        </div>
      </main>
    </>
  )
}

export default Counter