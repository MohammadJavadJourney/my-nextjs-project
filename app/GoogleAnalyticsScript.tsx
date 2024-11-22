import Script from 'next/script'
import React from 'react'

const GoogleAnalyticsScript = () => {
  return (
    <>
    <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`} />
          <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GE720JHXSJ1');`}
          </Script>
    </>
  )
}

export default GoogleAnalyticsScript