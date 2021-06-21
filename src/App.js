import Chart from './Chart'
import './App.css';

function App() {
  const data = [
    {
      country: "China",
      population: 1394015977
    },{
      country: "India",
      population: 1326093247
    },
    {
      country: "United States",
      population: 329877505
    },
    {
      country: "Indonesia",
      population: 267026366
    },
    {
      country: "Pakistan",
      population: 233500636
    }
  ]
  return (
    <div className="App">
        <h3>D3 EXAMPLE</h3>
      <Chart data={data}/>
    </div>
  );
}

export default App;
