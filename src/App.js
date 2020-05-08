import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import _ from 'lodash';
import * as actions from './actions/index';
import { connect } from 'react-redux';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        name: '',
        status: -1
      },
      keyword:'',
      sortBy:'name', //mặc định sắp xếp theo tên
      sortValue: 1
    }
  // }
  }
  

  // Xử lý khi nhấp vào button thêm mới, kiểm tra nếu trước đó bấm vào 'sửa button' -> 'thêm mới button', thì TH1, vẫn cho hiển thị form và reset giá trị form
  onToggleForm = () => {
    if(this.props.itemEditing !== '') {  //Trường hợp 'sửa button' -> 'thêm mới button'
      this.props.onOpenForm();
      this.props.onClearTask({
        id: '',
        name: '',
        status: false
      });
    } else {
      this.props.onToggleForm();
    }
  }

  onCloseForm = () => {
    // this.setState({
    //   taskEditItem: null //clear data
    // })
    this.props.onCloseForm();
  }

  //khi click button sửa thì show form ra
  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }


 onSearch = (keyword) => {
  //  console.log(keyword);
  this.setState({
    keyword: keyword
  })
 }

 onClickSort = (sortBy,sortValue) => {
  this.setState({
    sortBy:sortBy,
    sortValue:sortValue
  });
  console.log(this.state.sortBy,this.state.sortValue);
 }


  render() {
    var { isDisplayForm } = this.props;
    var { 
      // filter,
      // keyword,
      sortBy,
      sortValue
      } = this.state;
    

  
    

    // if(sortBy === 'name'){  // sort theo name
    //   tasks.sort((a,b) => {
    //     if(a.name >b.name) return sortValue;
    //     else if(a.name < b.name) return -sortValue;
    //     else return 0;
    //   });
    // } else { // sort theo status
    //   tasks.sort((a,b) => {
    //     if(a.status >b.status) return -sortValue; //nếu return -1 thì 'name' tăng dần, trả về sortValue (đã set giá trị rồi) chứ ko set cứng
    //     else if(a.name < b.name) return sortValue; //nếu return 1 thì 'name' giảm dần
    //     else return 0;
    //   });
    // }

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-4">
            <TaskForm/>
          </div>
          <div className={ isDisplayForm ? 'col-8' : 'col-12' }>
            <button type="button" className="btn btn-primary mb-3 mr-2" onClick={ this.onToggleForm }><i className="fa fa-plus mr-2"/>Thêm Công Việc</button>
            {/* <button type="button" className="btn btn-danger mb-3" onClick={() => this.onGenerateData()}><i className="fa fa-plus mr-2"/>Generate data</button> */}
            <Control 
              onClickSort={this.onClickSort}
              sortBy={sortBy}
              sortValue={sortValue}
            />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,  //lấy trên store file isDisplayForm true/false
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task)); //actions.addTask(task) lấy từ action.js import vào.
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
