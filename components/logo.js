import Image from 'next/image'

export default function Logo({size, className}){
    return (<Image src="/logo.svg" alt="Logo" className={className} width={size} height={size} />)
}