import  '../css/tailwind.css'
import React from 'react'
import { Layouts } from '../components/layouts'

function MyApp({ Component, pageProps }) {
  if(pageProps && pageProps.layout){
    return React.createElement(Layouts[pageProps.layout], {...pageProps})
  }
  else{
    return <Component {...pageProps} />;
  }
}

export default MyApp
