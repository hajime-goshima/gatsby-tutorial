import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <Layout pageTitle="わたしのGatsbyサイトへようこそ！">
            <p>このページはGatsbyチュートリアルに沿って作られています。</p>
            <StaticImage alt="画像" src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" />
            <StaticImage alt="画像" src="../images/icon.png" />
        </Layout>
    )
}

export const Head = () => <title>Index Page</title>

export default IndexPage