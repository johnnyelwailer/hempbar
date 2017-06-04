import React, { PropTypes } from "react"

import { Link } from "phenomic"

class Panel extends React.Component {
    
    render() {
        return (
            <div>
                <h3><Link to={this.props.page.__url}>{this.props.page.title}</Link></h3>
                <div dangerouslySetInnerHTML={{__html: this.props.page.panelBody}}></div>
            </div>
        );
         
    }
}

Panel.propTypes = {
  page: PropTypes.any
}


export default Panel;