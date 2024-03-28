import Card from 'react-bootstrap/Card';
import './App.css';
import Description from './components/description';
import Name from './components/name';
import Image from './components/image';
import Price from "./components/price";

function App() {

  let username ="iphone"
  return (
    <div style={{justifyContent:"center"}}>
      <Card style={{ width: '18rem' }}>
     <Image/>
      <Card.Body>
        <Card.Title style={{color:"green"}}>
          <Name/>
        </Card.Title>
        <Card.Text style={{fontSize:"30px"}}>
          <Description/>
        </Card.Text>
        <Card.Title>
          <Price/>
        </Card.Title>
      </Card.Body>
    </Card>

    <h1 style={{color:"green",justifyContent:"center",fontSize:"25px"}}>{(username)? `this product ${username}` : "this product , not exist"}</h1>
    {username && <img class="img" src="https://tse4.mm.bing.net/th?id=OIP.Un-PCuWEoK8ZKR286wUb3AHaE8&pid=Api&P=0&h=180" alt='not found' style={{width:"100px"}}/>}
    </div>
    
   
  );
}
 
export default App;
