import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from './State/index';
import { bindActionCreators } from 'redux';

function Shop() {

  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <br /><br /><br /><br />

      <button className='btn btn-success mx-2' onClick={() => { dispatch(actions.depositMoney(500)) }}>+</button>
      Deposit or Withdraw balance by 500
      <button className='btn btn-danger mx-2' onClick={() => { dispatch(actions.withdrawMoney(500)) }}>-</button>
    </div>
  )
}

export default Shop;