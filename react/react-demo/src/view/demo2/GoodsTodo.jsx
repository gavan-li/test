import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCars } from '../../actions/todo'

class goodsTodo extends Component {
  render() {
    const { goods, setCars, total } = this.props
    return (
      <table border="1" className="goods-table">
        <thead>
          <tr>
            <th width="25%">名称</th>
            <th width="25%">价格</th>
            <th width="25%">库存</th>
            <th width="25%">购买</th>
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
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>总数</td>
            <td colSpan="3">{total}元</td>
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

const mapDispatchToProps = {
  setCars
}

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
    total: reduceTatol(state.goods).toFixed(2)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(goodsTodo)