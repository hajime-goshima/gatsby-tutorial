import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="私のプロフィール">
            <p>私のプロフィールです。</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Page" />

export default AboutPage