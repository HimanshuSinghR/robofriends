import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super();
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError: true})
    }
    render(){
        if(this.state.hasError === true){
            return <h1>Oops ! Error in Connection</h1>
        }
        return this.props.children
        
    }
}

export default ErrorBoundary;