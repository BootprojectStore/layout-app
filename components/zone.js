import PageModules from '../lib/modules'
import { useRouter } from "next/router";
import React from 'react';
import { Modules } from './modules'

export default function Zone({name, fullwidth, props}){
    const router = useRouter();

        const slug = props.page.params.slug;
        const route = router.query.slug;

        if(slug==route){
            var found = PageModules.pages.find(p=> p.page==slug && p.modules.find(c=> c.region==name))
            if(found){
                const modulefound = found.modules.find(c=> c.region==name)
 
                if(modulefound){
                    return React.createElement(Modules[modulefound.name], {...props})
                }
               
            }
        }
       
    

   

    // return (
    //     fullwidth == 'true' ? 
    //     <div class="flex-1 flex flex-col sm:flex-row bg-pink-600 text-white">
    //         <main class="flex-1">
    //             <div class="mx-auto max-w-6xl ">
    //                 <h1>{name}</h1>
    //                 <pre>{JSON.stringify(props.page, null, 4)}</pre>
    //             </div>
    //         </main>
    //     </div>
    //     :
    //     <div class="flex-1 flex flex-col sm:flex-row">
    //         <main class="flex-1 p-2">
    //             <div class="mx-auto max-w-6xl">
    //                 {name}
    //                 <pre>{JSON.stringify(props.page, null, 4)}</pre>
    //             </div>
    //         </main>
    //     </div>
    // )
}