import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site(siteMetadata: {}) {
                id
                siteMetadata {
                    title
                    siteUrl
                    description
                }
            }
        }
    `)

    return (
        <title>{title} | {data.site.siteMetadata.title}</title>
    )
}

export default Seo