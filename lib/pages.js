export default function Pages(){
    return [
      { params: { slug: 'index', layout: 'SiteLayout', title: 'Home', zones: ['BeforeContent', 'Content']} }, 
      { params: { slug: 'about', layout: 'TwoColumns', title: 'About', zones: ['Content']} },
      { params: { slug: 'contact', layout: 'TwoColumns', title: 'Contact', zones: ['Content'] } },
      { params: { slug: 'projects', layout: 'Projects', title: 'Projects', zones: ['Sidebar', 'Content']} }
    ]
  }
  