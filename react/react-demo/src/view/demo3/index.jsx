import React, { useState } from 'react';
let indexId = 0

const AddTodo = () => {
  const formater = () => {
    return {
      name: `good${++indexId}`,
      price: (Math.random()*100).toFixed(2),
      stock: Math.ceil(Math.random()*12),
      number: 0,
      check: false
    }
  }
  
  const [goodInfo, setGoodInfo] = useState(formater());
  const [valitor, setValitor] = useState('');

  const changeHandle = (key, value) => {
    setGoodInfo({
      ...goodInfo,
      [key]: value
    })
  }

  const submitHandle = () => {
    const rex = /^(\d+|\d+\.\d{1,2})$/
    if (!goodInfo.name) {
      setValitor('商品名称不能为空！')
    } else if (!goodInfo.price || !rex.test(goodInfo.price)) {
      setValitor('请输入正确的价格格式')
    } else if (!goodInfo.stock || !/^(\d+)$/.test(goodInfo.stock)) {
      setValitor('请输入正确的库存')
    } else {
      console.log(goodInfo)
      // this.props.goodsTodo(this.state.form)
      setValitor('')
      setGoodInfo(formater())
    }
  }

  return (
    <form className="form-wrap" onSubmit={e => e.preventDefault()}>
      <div className="form-item">
        <label>物品：</label>
        <input
          type="text"
          value={goodInfo.name}
          onChange={e => changeHandle('name', e.target.value)} />
      </div>
      <div className="form-item">
        <label>价格：</label>
        <input
          type="text"
          value={goodInfo.price}
          onChange={e => changeHandle('price', e.target.value)} />
      </div>
      <div className="form-item">
        <label>库存：</label>
        <input
          type="text"
          value={goodInfo.stock}
          onChange={e => changeHandle('stock', e.target.value)} />
      </div>
      <div className="form-item">
        <button className="form-btn" onClick={submitHandle}>确定</button>
      </div>
      <p className="form-err">{valitor}</p>
    </form>
  )
}

const GoodsTodo = () => {
  return (
    <table border="1" className="goods-table">
      <thead>
        <tr>
          <th width="20%">名称</th>
          <th width="20%">价格</th>
          <th width="20%">库存</th>
          <th width="20%">购买</th>
          <th width="20%">
            <input
              type="checkbox" />全选
          </th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td>总数</td>
          <td colSpan="4">24元</td>
        </tr>
      </tfoot>
    </table>
  )
}

export default () => (
	<div>
		<AddTodo />
		<GoodsTodo />
		{/* <Footer /> */}
	</div>
)