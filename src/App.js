import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import  Container from 'react-bootstrap/Container';
import CCarousel from './CCarousel';
import CrosCardComponent from './CrosCardComponent';

function App() {
  return (
    <div className="App">
      <div >
        <Navbar bg="dark" variant="dark" sticky="top">
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
        </div>
        <CCarousel/> 
        <div className="TextLabel">
            Наша выставка представляет к вашему вниманию кресты Доминика Торрето экей бензиныч экей коленвалыч экей солярыч и так далее.
        </div>
        <CrosCardComponent/>
        
        
        
      <div className="App-header">
      </div>
    </div>
  );
}

export default App;
