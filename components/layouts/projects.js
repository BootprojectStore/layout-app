import Nav from '../nav'
import Zone from '../zone'
import Footer from '../footer'

export default function Projects(props, {children}){
    return (
        <div className="min-h-screen flex flex-col h-screen">
        <Nav pages={props.pages}/>
        <div className="flex p-2 flex-grow">
            <main className="flex mx-auto max-w-6xl flex-grow">
                <div className="w-full">
                    <Zone nameName="Content" props={props}/>
                </div>
                <div className="w-72 hidden md:block lg:block">
                    <Zone name="Sidebar" props={props}/>
                </div>
            </main>
        </div>
        <Footer/>
    </div>
    ) 
}