import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="私のプロフィール">
            <p>私のプロフィールです。</p>
        </Layout>
    )
}

export const Head = () => <title>About Page</title>

export default AboutPage