import React, { PropTypes } from "react"

import Loading from "../../components/Loading"

import { Link } from "phenomic"


class Panel extends React.Component {
    componentWillMount() {
        this.setState({page: "", title: this.props.page.title, url: this.props.page.__url, loading: true})
        fetch(this.props.page.__dataUrl).then(r => r.json()).then(r => {
            this.setState({page: r, loading: false})
        })
    }
    render() {
        
        return (
            <div>
                { this.state.loading && <Loading />}
                <h3><Link to={this.state.url}>{this.state.title}</Link></h3>
                <div dangerouslySetInnerHTML={{__html: this.state.page.body}}></div>
            </div>
        );
         
    }
}

Panel.propTypes = {
  page: PropTypes.any
}


export default Panel;