import React, {
    Suspense
} from 'react'

import Header from '../components/Header'
import BlogContainer from '../containers/BlogContainer'
import RecentMoviesContainer from '../containers/RecentMoviesContainer'
import EntryContentContainer from '../containers/EntryContentContainer'
import LoginContainer from '../containers/LoginContainer'
import RegisterSection from '../components/RegisterSection'
import ShowModalRegisterForm from '../components/ShowModalRegisterForm'

const routes = {

    home : {
        exact : false,
        path : '/',
        render(){

            const TextHeader = '¡Conectate a Netflix con cualquier dispositivo!'

            return(
                <Suspense>
                    <Header title = { TextHeader } />
                    <BlogContainer />
                    <RecentMoviesContainer />
                    <RegisterSection />
                </Suspense>
            )
        }
    },
    entry_content : {
        exact : false,
        path : '/blog/:title', 
        component : EntryContentContainer
    },
    login : {
        exact : false,
        path : '/login',
        component : LoginContainer
    },
    register : {
        exact : false,
        path : '/register',
        component : ShowModalRegisterForm
        
    }
}

export default routes