import React from 'react';

import {
    ViewContainerSC
} from './styled';

function ViewContainer(props: any) {
    return(
        <ViewContainerSC>
            {props.children}
        </ViewContainerSC>
    )
}
export default ViewContainer;