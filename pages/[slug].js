import Nav from '../components/nav'
import { Pages } from '../lib/pages'

/**
 * Dummy function. Really never used.
 * @returns 
 */
export default function DynamicPage(){
  return <></>
}

export async function getStaticProps(context) {
  const page = Pages.find(c=> c.params.slug == context?.params?.slug)

  return {
      props: {
          layout: page?.params?.layout || 'SiteLayout',
          page: page,
          pages: Pages
      },
  };
}

export async function getStaticPaths() {
  return {
    paths: Pages,
    fallback: false,
  };
}