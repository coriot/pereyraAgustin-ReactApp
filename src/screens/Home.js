import logo from '../logo.svg'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../components/NavBar';

import { Button } from 'react-bootstrap';

export default function Home(){
    return (
        <div className="App">

            <NavBar />

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
      );
}