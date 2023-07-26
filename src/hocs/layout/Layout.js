import {connect} from 'react-redux';

const Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

const mapStatetoProp = state => ({

});

export default connect(mapStatetoProp,{
    
}) (Layout);