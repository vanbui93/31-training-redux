import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class TaskItem extends Component {

  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  }

  onDelete = () => {
    // console.log(this.props.task.id);
    this.props.onDelete(this.props.task.id);
  }

  onUpdate = () => {
    // console.log(this.props.task.id);
    this.props.onUpdate(this.props.task.id);
  }

  render() {
    var {task,index} = this.props;
    // console.log(task.status);
    return (
      <tr>
        <td>{index +1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span 
            className={ task.status === true ? 'label btn btn-success' : 'label btn btn-warning'} 
            onClick = { this.onUpdateStatus }
          >
            {task.status === true ? 'Kích Hoạt' : 'Ẩn'}
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning mr-3"
            onClick = { this.onUpdate }
          >
            <i className="fa fa-pencil mr-2" />Sửa
          </button>
          <button type="button" className="btn btn-danger"
            onClick={this.onDelete}
          >
            <i className="fa fa-trash mr-2" />Xóa
          </button>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatusTask(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem)