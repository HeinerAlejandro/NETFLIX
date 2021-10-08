import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getEntryContent } from '../actions/blog'

import { getEntry } from '../selectors/blog'

import EntryContent from '../components/Blog/EntryContent'

import Section from '../components/Section'
import HeaderEntry from '../components/Blog/HeaderEntry'

class EntryContentContainer extends Component {

    componentDidMount = () => {
       
        this.props.entry && !this.props.entry.content &&
        this.props.getEntryContent(this.props.match.params.title)
    }

    render() {
        
        return (
            <Section
                type = 'entry-content'
            >
                
                {
                    this.props.entry &&
                    <EntryContent 
                        content = { 
                            () => (
                                <div dangerouslySetInnerHTML = {{ __html : this.props.entry.content }} ></div>
                            )
                        }
                        isOpen = { true }
                        header = { () => (
                            <HeaderEntry
                                presentation = { this.props.entry.presentation }
                                title = { this.props.entry.title }
                                content = { () => (this.props.entry.content) }
                                footer = ''
                            />
                        )}
                        footer = { () => '' }
                    />
                }
        
            </Section>
        )
    }
}

const mapStateToProps = (state, props) => ({
    entry : getEntry(state, props.match.params.title),
})

const mapDispatchToProps = {
    getEntryContent,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EntryContentContainer)
