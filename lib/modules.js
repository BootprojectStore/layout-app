export const PageModules = {
    pages: 
    [
        {
            page: 'index', 
            modules: [
                { name: 'Hero', region: 'BeforeContent'},
                { name: 'Code', region: 'Content'}
            ]
        },
        {
            page: 'about', 
            modules: [
                { name: 'Content', region: 'Content'}
            ]
        },
        {
            page: 'contact', 
            modules: [
                { name: 'ContactForm', region: 'Content'},
                { name: 'Content', region: 'Sidebar'}
            ]
        },
        {
            page: 'projects', 
            modules: [
                { name: 'Posts', region: 'Content'},
                { name: 'Content', region: 'Sidebar'}
            ]
        }

    ]
}

export default PageModules