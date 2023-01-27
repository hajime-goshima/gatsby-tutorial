import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
    return (
        <Layout pageTitle="わたしのGatsbyサイトへようこそ！">
            <p>このページはGatsbyチュートリアルに沿って作られています。</p>
            <StaticImage alt="画像" src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" />
            <StaticImage alt="画像" src="../images/icon.png" />
        </Layout>
    )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage