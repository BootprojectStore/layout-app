import Link from 'next/link'
import Logo from './logo'

export default function Nav({pages}){
    return (
        <header className="bg-gray-50 p-2 border-b-[1px]">
            <div className="mx-auto max-w-6xl flex">
                <Logo size="32" className="mr-2"/>
            {pages.map((page)=> (
                    page.params.slug==='index'
                    ? (<Link className="mr-2 mt-1" key={page.params.slug} as="/" href={`/${page.params.slug}`}>{page.params.title}</Link>)
                    : <Link className="mr-2 mt-1" key={page.params.slug} href={`/${page.params.slug}`}>{page.params.title}</Link>
                ))}
            </div>
      </header>

    )
}