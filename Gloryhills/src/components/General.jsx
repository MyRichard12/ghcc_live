import React from 'react'
import {useSiteMetadata} from './hooks/siteMetaHook';
import {Helmet} from 'react-helmet'


export function SiteMeta ({title, description, pathname, image}){
    
    const { title: defaultTitle, description: defaultDescription, siteUrl} = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
        image: `${siteUrl}${image}`
    }

    return (
        <>
        <Helmet>
        <html lang="en"/>
        <title>{seo.title}</title>
        <link type="icon" href={seo.image} />
        <meta name="image" content={seo.image}/>
        <meta name="description" content={seo.description} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:url" content={seo.url} />
        </Helmet>
        </>
    )

}


