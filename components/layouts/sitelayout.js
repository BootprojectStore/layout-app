import Nav from '../nav'
import Pages from '../../lib/pages'
import Zone from '../zone'
import Footer from '../footer'
import Hero from '../modules/herosection'

export default function SiteLayout(props, {children}){
    return (
        <div className="min-h-screen flex flex-col h-screen">
            <Nav pages={props.pages}/>
            <div className="flex p-2 flex-grow">
                <main className="flex mx-auto max-w-6xl flex-grow">
                    <div className="w-full flex-grow">
                        <Zone name="BeforeContent" props={props}/>
                        <Zone name="Content" props={props}/>
                        <Zone name="AfterContent" props={props}/>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    ) 
}