import * as React from 'react';
import {MyContext} from '../../context';

//BoostrapComponents
import {
    Container
} from 'react-bootstrap';
//Container-Library
import ViewContainer from '../../components/viewContainer/viewContainer';

function BlogView(props: any) {
    const {idBlog} = props;
    const dataBlog = React.useContext(MyContext);
    
    return(
        <ViewContainer>
            <Container className="pt-5">
                {dataBlog.filter(blog => blog.idBlog === idBlog )[0].blogContent}
            </Container>
        </ViewContainer>
    )
}
export default BlogView;