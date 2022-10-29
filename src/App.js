import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="MY WEB PAGE">
      <h1 align="center"> MY WEBPAGE USING REACT </h1>
      <center>
        Table Name
      <input type="text"></input>
      </center>
     
      <br/><br/>
      <hr></hr>
      <table border="2">
        <tr>
          <th>NAME</th>
          <th>SLNO</th>
          <th>ADDRESS</th>
          <th>MOBILENO</th>
        </tr>
        <tr>
          <td>akash</td>
          <td>01</td>
          <td>jeypore</td>
          <td>8637210128</td>
        </tr>
        <tr>
          <td>sumit</td>
          <td>15</td>
          <td>jeypore</td>
          <td>8637456985</td>
        </tr>
        <tr>
          <td>pritam</td>
          <td>24</td>
          <td>bolangir</td>
          <td>8637210128</td>
        </tr>
      </table>

    </div>
  );
}

export default App;
