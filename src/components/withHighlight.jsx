import React from 'react';
import New from "./New";
import Popular from "./Popular";

function withHighlight(Component) {
    return (props, ...args) => {
        if (props.views<100)
        {
            return (<New><Component  {...props} {...args} /></New>);
        }
        if (props.views>=1000)
        {
            return (<Popular><Component  {...props} {...args} /></Popular>);
        }
        return <Component {...props} {...args} />
    }
}

export default withHighlight;