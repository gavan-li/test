import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goodsTodo } from '../../actions/todo'
let indexId = 0

class AddTodo extends Component {
  constructor(props) {
    super(props)
    const form = this.formater()
    this.state = {
      form,
      valitor: ''
    }
  }

  formater = () => {
    return {
      name: `good${++indexId}`,
      price: (Math.random()*100).toFixed(2),
      stock: Math.ceil(Math.random()*12),
      number: 0
    }
  }

  changeHandle = (key, value) => {
    const { form } = this.state
    form[key] = value
    this.setState({ form })
  }

  submitHandle = () => {
    const { name='', price='', stock='' } = this.state.form
    const rex = /^(\d+|\d+\.\d{1,2})$/
    if (!name) {
      this.setState({valitor: '商品名称不能为空！'})
    } else if (!price || !rex.test(price)) {
      this.setState({valitor: '请输入正确的价格格式'})
    } else if (!stock || !/^(\d+)$/.test(stock)) {
      this.setState({valitor: '请输入正确的库存'})
    } else {
      this.props.goodsTodo(this.state.form)
      this.setState({valitor: ''})
      this.setState({
        form: this.formater()
      })
    }
  }

  render() {
    const {name, price, stock} = this.state.form
    return (
      <form className="form-wrap" onSubmit={e => e.preventDefault()}>
        <div className="form-item">
          <label>物品：</label>
          <input
            type="text"
            value={name}
            onChange={e => this.changeHandle('name', e.target.value)} />
        </div>
        <div className="form-item">
          <label>价格：</label>
          <input
            type="text"
            value={price}
            onChange={e => this.changeHandle('price', e.target.value)} />
        </div>
        <div className="form-item">
          <label>库存：</label>
          <input
            type="text"
            value={stock}
            onChange={e => this.changeHandle('stock', e.target.value)} />
        </div>
        <div className="form-item">
          <button className="form-btn" onClick={this.submitHandle}>确定</button>
        </div>
        <p className="form-err">{this.state.valitor}</p>
      </form>
    )
  }
}

const mapDispatchToProps = {
  goodsTodo
}

export default connect(null, mapDispatchToProps)(AddTodo)