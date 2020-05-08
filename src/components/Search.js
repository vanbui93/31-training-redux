import React, { Component } from 'react';
import * as actions from './../actions/index'
import { connect } from 'react-redux';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }

  onChangeKeyword = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }

  onSearch = () => {
    this.props.onSearch(this.state.keyword)  //dispatch searchTask
  }
  
  render() {
    var {keyword} = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mb-3">
        <form className="form-inline">
          <div className="form-group">
            <input type="text" 
              className="form-control mr-3" 
              placeholder="Nhập từ khóa..." 
              name="keyword"
              value={keyword}
              onChange={this.onChangeKeyword}
            />
            <button 
              className="btn btn-primary" 
              type="button"
              onClick={ this.onSearch }
            >
              <i className="fa fa-search mr-2" />Tìm
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    prop: state.prop
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(actions.searchTask(keyword))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)