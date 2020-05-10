import React, { Component } from 'react'
import TaskItem from './TaskItem'
import { connect } from 'react-redux';
import * as actions from './../actions/index'


class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName :'',
      filterStatus: -1 // Quy ước giá trị -1-hiển thị tất cả , 0-ẩn, 1-kích hoạt
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;     // nếu input là checkbox thì target.checked

    //filter {key,value}
    var filter = {
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? value : this.state.filterStatus
    }
    this.props.onfilterTask(filter);
    this.setState({
      [name]: value
    });
    // console.log(this.state);
  }
  
  render() {
    
    var {tasks, filterTask,sort,keyword} = this.props;
    console.log(sort);
    
    //Tiến hành filterTask trên reducer
    if(filterTask) { //Nếu tồn tại biến filterTask
      if(filterTask.name !=='') {   //kiểm tra nếu filterTask có giá trị, tức nếu người dùng nhập
        tasks = tasks.filter((taskFilter) => {
          return taskFilter.name.toLowerCase().indexOf(filterTask.name) !== -1; //indexOf trả về vị trí đầu tiên của 1 chuỗi, #-1 nghĩa là có tìm thấy giá trị filterTask
        })
      }
      // ở status ko cần kiểm tra vì mặc định đã có giá trị
      tasks = tasks.filter((taskFilter) => {
        if(filterTask.status === -1) { // nếu status === -1 thì trả về tất cả, do set state từ trước
          return taskFilter
        } else {
          return taskFilter.status === (filterTask.status === 1 ? true : false) // nếu status : 1 thì true, ngược lại false
        }
      })
    }


    var {filterName,filterStatus} = this.props;

    // console.log(keyword);
    

    if(keyword){
      tasks = tasks.filter((taskFilter) => {
        return taskFilter.name.toLowerCase().indexOf(keyword) !== -1; //indexOf trả về vị trí của 1 chuỗi
      })
    }

    if(sort.by === 'name'){  // sort theo name
        tasks.sort((a,b) => {
          if(a.name >b.name) return sort.value;
          else if(a.name < b.name) return -sort.value;
          else return 0;
        });
      } else { // sort theo status
        tasks.sort((a,b) => {
          if(a.status >b.status) return -sort.value; //nếu return -1 thì 'name' tăng dần, trả về sortValue (đã set giá trị rồi) chứ ko set cứng
          else if(a.status < b.status) return sort.value; //nếu return 1 thì 'name' giảm dần
          else return 0;
        });
      }


    var elmTasks = tasks.map((task, index) => {
      return <TaskItem 
        key={index} 
        index={index}  
        task={task}
      />
    })
    return (
      <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th className="text-center">STT</th>
          <th className="text-center">Tên</th>
          <th className="text-center">Trạng Thái</th>
          <th className="text-center">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td />
          <td>
            <input type="text" 
              className="form-control"
              name="filterName"
              value={ filterName }
              onChange={ this.onChange }
            />
          </td>
          <td>
            <select 
              className="form-control"
              name="filterStatus"
              value={ filterStatus }
              onChange={ this.onChange }
            >
              <option value={-1}>Tất Cả</option>
              <option value={0}>Ẩn</option>
              <option value={1}>Kích Hoạt</option>
            </select>
          </td>
          <td />
        </tr>
        {elmTasks}
      </tbody>
    </table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,  // lấy trên state trên store reducer/index, ở đây trả về gì thì state.tasks
    filterTask: state.filterTask,
    keyword: state.Search,
    sort: state.sort
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onfilterTask: (filter) => {      
      dispatch(actions.filterTask(filter))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);