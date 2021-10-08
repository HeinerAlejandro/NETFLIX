import React from 'react'
import Text from '../Text'
import { BLACK, RED } from '../../constants/styles'
import List from '../ListItems'
import Category from '../Category'
import Actions from '../Actions'
import NetflixButton from '../NetflixButton'
import EntryTitle from './EntryTitle'

const BlogDesktop = ({ entry, isOpenEntry, handleClickAction }) => (
    <>
        <div className = 'info-blog'>

            <EntryTitle 
                title = { entry.title }
                color = { BLACK }
            />

            <div className = 'info'>
                <Text
                    text = { entry.short_description }
                    color = { 'GRAY' }
                    size = '1rem'
                    width = '100%'
                    position = 'none' 
                    align = 'justify'
                />
    
                <List
                    propsWrapped = {
                        {
                            style : {
                                margin : '20px'
                            }
                        }
                    }
                    items = { entry.categories }
                    iterLogic = {
                        category => (
                            
                            <Category                            
                                key = { category }
                                text = { category }
                            />
                            
                        )
                    }
                />

                <Actions>
                    { 
                        entry.actions && entry.actions.map(
                            (action, index) => (
                                <NetflixButton
                                
                                    key = { action.title }
                                    type = 'rect'
                                    color = { RED }
                                    text = { action.title } 
                                    link = { `blog/${entry.title}` }
                                />
                            )
                        )
                    }
                </Actions>
            </div>
        </div>
    </>
)


export default BlogDesktop