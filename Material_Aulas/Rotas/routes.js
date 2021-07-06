//RESPONSÁVEL PELO ROTEAMENTO
import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Erro from './pages/Erro';
import Produto from './pages/Produto'

import Header from './components/Header'


const Routes = () => {
    return(
        <BrowserRouter> 
        <Header/> {/* Colocou aqui, se não daria erro de redirecionamento do 'ir para sobre' do Header. 
        Se colocasse o Header no App, daria erro por não existir aqui ou seja, não consegue acessar esse Link.*/}
        <Switch>
            <Route exact path="/" component={Home} /> 
            {/* home padrão. Pega exatamente (exact) se for só "/", se não em qualquer "/sobre" ele abriria a home */}
            
            <Route exact path="/sobre" component={Sobre}/> 
            {/* Se não, se digitar '/sobre/tanana' abre o '/sobre' */}

            
            <Route path='/produto/:id' component={Produto} />

            <Route path="*" component={Erro}/>{/* Tem que ser por último */}
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;

//Switch -> vai fazer com que chame uma rota só ao mesmo tempo, vai exibir/carregar apenas um componente