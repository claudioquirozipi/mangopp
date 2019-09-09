import * as React from 'react';
import {MyContext} from '../../context';
import { withRouter} from 'react-router-dom';
import {
    Navbar,
    Nav,
    Dropdown
    // Form,
    // FormControl,
    // Button,
} from 'react-bootstrap';

//interface
interface iNavView {
    history: any;
}
function NavView(props: iNavView) {
    const {history} = props;
    const dataBlog = React.useContext(MyContext);
    return(
        <Navbar bg="primary" variant="dark" fixed="top">
            <Nav className="mr-auto">    
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Blogs
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            dataBlog.map((blog:any, i:any) => {
                                return(
                                    <Dropdown.Item key={i}  onClick={()=>history.push(blog.url)}>
                                        {blog.title}
                                    </Dropdown.Item>
                                )
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
                        <Navbar.Brand onClick={()=>history.push("/")}>Mango PP</Navbar.Brand>
        </Navbar>
    )
}
export default withRouter(NavView);