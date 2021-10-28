import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import  Container from 'react-bootstrap/Container';
import CCarousel from './CCarousel';

function App() {
  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://avatars.mds.yandex.net/get-pdb/1942510/6e4cc5b6-94d1-4a60-a95a-483529b46327/s1200"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            Онлайн выставка "Кресты бензиныча"
            </Navbar.Brand>
          </Container>
        </Navbar>
        <CCarousel/> 
      <div className="App-header">
      </div>
    </div>
  );
}

export default App;
