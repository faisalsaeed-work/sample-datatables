import logo from "./logo.svg";
import "./App.css";
import DataTables from "./components/DataTables";

function App() {

  const data = [
    {
      name:'Tyson',
      email: 'tyson@gmail.com',
    },
    {
      name:'mike',
      email: 'mike@gmail.com',
    },
    {
      name:'Carter',
      email: 'carter@gmail.com',
    }
  ]

  const columns = [{label:'Name', value:'name'}, {label:'Email', value:'email'}]
	return (
		<div className="App mt-5">
			<div className="container">
				<DataTables data={data} columns={columns}/>
			</div>
		</div>
	);
}

export default App;
