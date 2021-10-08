import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Blog from '../components/Blog'
import { connect } from 'react-redux'

import { getEntries } from '../actions/blog'

import { getEntries as selectEntries } from '../selectors/blog'

class BlogContainer extends Component {

    constructor(props){

        super(props)

        this.state = {
            countEntry : 0,
            isOpenEntry : false
        }
    
        
        setInterval(
            () => this.setState({countEntry : this.state.countEntry + 1}),
            20000
        )
    }

    componentDidMount = () => {

        if(!this.props.entries === false) this.props.getEntries()

    }
    
    getEntry = () => {
        
        const entriesLen = this.props.entries.length
    
        const entry = this.props.entries[this.state.countEntry % entriesLen]
        
        return entry
    }

    handleClickAction = () => {
        alert("presione click action")
    }

    render() {

        const entry = this.getEntry()
        
        return (
            
            (
                entry && 
                <Blog 
                    entry = { entry } 
                    isOpenEntry = { this.state.isOpenEntry }
                    handleClickAction = { this.handleClickAction }
                />
            ) || <></>
            
        )
    }
}

const mapStateToProps = state => (
    {
        entries : selectEntries(state)
    }
)

const mapDispatchToProps = {
    getEntries
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(BlogContainer)
)