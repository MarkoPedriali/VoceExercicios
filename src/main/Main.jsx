import { BrowserRouter} from 'react-router-dom';
import './Main.css';
import NavBar from '../componentes/navbar/NavBar';
import Container from '../componentes/container/Container';
import Criar from '../paginas/criar/Criar';


export default function Main(){
    return(
        <BrowserRouter>
            <NavBar/>
            <Container>
               
            </Container>
        </BrowserRouter>
      
    )
}