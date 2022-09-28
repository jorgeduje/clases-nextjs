import { Spacer, Text, useTheme, Link } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"

export const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            padding: "0 20px",
            backgroundColor: theme?.colors.gray300.value
        }}>

            <Image
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}
                alt="Icono de la aplicacion"
                width={70}
                height={70}
            />
            <NextLink href="/" passHref>
                <a style={{ display: 'flex' }}>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okemon</Text>
                </a>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href="/favorites" passHref>
                <a>
                    <Text color="white">Favoritos</Text>
                </a>
            </NextLink>
            

        </div>
    )
}
