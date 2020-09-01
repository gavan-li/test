import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCars, toggleCheck, toggleAllCheck } from '../../actions/todo'

class goodsTodo extends Component {
  render() {
    const { goods, setCars, toggleCheck, total, active, toggleAllCheck } = this.props
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
                type="checkbox"
                checked={active}
                onChange={e => toggleAllCheck(active)} />全选
            </th>
          </tr>
        </thead>
        <tbody>
          {goods.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>
                <button disabled={item.number < 1} onClick={e => setCars(false, item.id)}>-</button>
                <span className="bug-num">{item.number}</span>
                <button disabled={item.number >= item.stock} onClick={e => setCars(true, item.id)}>+</button>
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={item.check}
                  onChange={e => toggleCheck(item.id)} />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>总数</td>
            <td colSpan="4">{total}元</td>
          </tr>
        </tfoot>
      </table>
    )
  }
}

const reduceTatol = (goods) => {
  return goods.reduce((total, item) => {
    return total + (item.number * parseFloat(item.price))
  }, 0)
}

const toggleAll = (goods) => {
  if (goods.length === 0) return false
  return goods.every(item => item.check)
}

const mapDispatchToProps = {
  setCars,
  toggleCheck,
  toggleAllCheck
}

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
    total: reduceTatol(state.goods).toFixed(2),
    active: toggleAll(state.goods)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(goodsTodo)