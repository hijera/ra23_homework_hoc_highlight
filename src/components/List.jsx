import React from 'react';
import PropTypes from 'prop-types';
import Article from "./Article";
import Video from "./Video";
import withHighlight from "./withHighlight";
List.propTypes = {

};

function List(props) {
    return props.list.map(item => {
        let WrapItem=null;
        switch (item.type) {
            case 'video':
                    WrapItem=withHighlight(Video);
                break;
            case 'article':
                    WrapItem=withHighlight(Article);
                break;
        }
        return (
            <WrapItem {...item} />
        );

    });
};

export default List;