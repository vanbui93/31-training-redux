This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Install react
`npm install --save`

Install redux
`npm install redux --save`

Install react-redux
`npm install react-redux --save`

Tại src tạo folder reducers
constants để lưu các hằng số của ACTION, actions để chứa các Action

## Available Scripts

In the project directory, you can run:

### `npm start`

muốn kết nối Store với view cần có Provider
`import { Provider } from 'react-redux';`

Trong index.js 

<Provider store={store}>
	<App />
</Provider>

Sau khi kết nối store xong tiến hành kết nối components với store
Trong components muốn kết nối

`import { connect } from 'react-redux';`

`const mapStateToProps = (state) => {
  return {  
    tasks: state.tasks  // lấy trên state trên store reducer/index, ở đây trả về gì thì state.tasks
  }
}`

export default connect(mapStateToProps,null)(TaskList);


Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3500) to view it in the browser.
