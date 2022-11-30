import PageModules from '../lib/modules'
import { useRouter } from "next/router";
import React from 'react';
import { Modules } from './modules'

export default function Zone({name, fullwidth, props}){
    const router = useRouter();
    const slug = props.page.params.slug;
    const route = router.query.slug;
    console.log(name)
    /**
     * Todo loop each module from array
     */
    if(slug==route){
        var found = PageModules.pages.find(p=> p.page==slug && p.modules.find(c=> c.region==name))
        if(found){
            const modulefound = found.modules.find(c=> c.region==name)
           
            if(modulefound){
                
                return React.createElement(Modules[modulefound.name], {...props})
            }
        }
    }
}