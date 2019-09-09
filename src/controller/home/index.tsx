import * as React from 'react';
import {MyContext} from '../../context';

//Components
import Home from '../../views/home';


function HomeController() {
    const dataBlog = React.useContext(MyContext);
    return(
        <Home dataBlog={dataBlog} />
    )
}

export default HomeController;