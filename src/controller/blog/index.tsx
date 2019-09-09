import * as React from 'react';

//Components
import BlogView from '../../views/blog';
//Interface
interface iBlogController {
    match: any;
}
function BlogController(props: iBlogController) {
    const {match} = props;
    return(
        <BlogView idBlog={match.params.id}/>
    )
}

export default BlogController;