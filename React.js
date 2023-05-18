# import logo from './logo.svg';
import './App.css';

function NavBar (){
 return <h3> Hello Jurassic Park</h3>
}

const BodyComponent = ()=>{
  return <h3> Body goes here</h3>
}

const Footer = ()=>{
  return <h3> Body goes here</h3>
}
function App() {

const Hello = <h1>Hello Nitika</h1>;

  return (
    <div className="App">
      <NavBar></NavBar>
      <BodyComponent></BodyComponent>
      <Footer></Footer>
    </div>
  );
}

export default App;
