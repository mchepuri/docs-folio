import React,{Suspense,useState} from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Landing } from '../../components';
const About = React.lazy(() => import('../../components/About/About'));
const Skills = React.lazy(() => import('../../components/Skills/Skills'));
const Education = React.lazy(() => import('../../components/Education/Education'));
const Contacts = React.lazy(() => import('../../components/Contacts/Contacts'));
const Achievement = React.lazy(() => import('../../components/Achievement/Achievement'));
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
