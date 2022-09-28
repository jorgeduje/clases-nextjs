import Head from "next/head"
import { FC } from "react"
import { Navbar } from '../ui';

export const Layout: FC<Props> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Jorge Duje" />
                <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            </Head>

            <Navbar />

            <main style={{
                padding: "0 20px"
            }}>
                {children}
            </main>
        </>
    )
}

interface Props {
    children?: JSX.Element | JSX.Element[];
    title?: string
  }
