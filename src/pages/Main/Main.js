import React,{Suspense,useState} from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Landing } from '../../components';
const About = React.lazy(() => import(/* webpackChunkName: "about"*/'../../components/About/About'));
const Skills = React.lazy(() => import(/* webpackChunkName: "skills"*/'../../components/Skills/Skills'));
const Education = React.lazy(() => import(/* webpackChunkName: "education"*/'../../components/Education/Education'));
const Contacts = React.lazy(() => import(/* webpackChunkName: "contacts"*/'../../components/Contacts/Contacts'));
const Achievement = React.lazy(() => import(/* webpackChunkName: "achievement"*/'../../components/Achievement/Achievement'));
import { headerData } from '../../data/headerData'

function Main() {
    const [paheOneComplete,setPaheOneCompleted] = useState(false);
    const  ladingPageLoaded = () => {
        console.log('PhaseOneCompleted');
        setPaheOneCompleted(true);
    }

    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />        
            <Landing afterLandingComplete={ladingPageLoaded}/>
            <Suspense fallback={<div>Loading...</div>}>
             <About />
            </Suspense>
            {
            paheOneComplete ?  (
            <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Skills />
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <Education /> 
            </Suspense>

            <Suspense fallback={<div>Loading...</div>}>
                <Achievement />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
             <Contacts />
            </Suspense> </div>
            ) :<div>Loading...</div> }
        </div>
    )
}

export default Main
