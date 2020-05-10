import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Sort extends Component {

  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps);
  // }

  onClickSort = (sortBy,sortValue) => {
    this.props.onSort({
      by: sortBy,
      value: sortValue
    }) 
  }

  render() {  

    var {sort} = this.props;
      
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Sắp Xếp</button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={()=> this.onClickSort('name',1)}>
              <button
                className={(this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'sort-selected' : ''}
              >
                <i className="fa fa-sort-alpha-asc pr-5">Tên A-Z</i>
              </button>
            </li>
            <li onClick={()=> this.onClickSort('name',-1)}>
              <button
                className={(this.props.sort.by ==='name' && this.props.sort.value === -1) ? 'sort-selected' : ''}
              >
                <i className="fa fa-sort-alpha-desc pr-5">Tên Z-A</i>
              </button>
            </li>
            <li role="separator" className="divider" />
            <li  onClick={()=> this.onClickSort('status',1)}>
              <button 
                className={(this.props.sort.by ==='status' && this.props.sort.value === 1) ? 'sort-selected' : ''}
                >
                Trạng Thái Kích Hoạt
              </button>
            </li>
            <li onClick={()=> this.onClickSort('status',-1)}>
              <button
                className={(this.props.sort.by ==='status' && this.props.sort.value === -1) ? 'sort-selected' : ''}
              >
                Trạng Thái Ẩn
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    sort: state.sort
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSort: (sort) => {
      dispatch(actions.sortTask(sort))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)