import React from 'react'
import { NextSeo } from 'next-seo'
import { Box, Flex, Link } from 'rebass/styled-components'
import { Layout } from '../components/layout'
import { H1, H2, BodyText } from '../components/text'

const IndexPage = () => (
  <>
    <NextSeo
      title="Downtown65"
      description="Downtown 65 Endurance ry. Länsi-Vantaalainen urheiluseura"
    />
    <Layout>
      <Flex
        alignItems="flex-end"
        p={['2rem', '3rem', '4rem']}
        height={['20rem', '40rem']}
        sx={{
          background: `url("/static/dtboys.jpg")`,
          backgroundRepeat: 'none',
          backgroundSize: 'cover',
          backgroundPositionY: '40%',
          textShadow: '2px 2px 4px #000',
        }}
      >
        <H1 color="white">Downtown 65</H1>
      </Flex>
      <Box p={3}>
        <H2>Seura</H2>
        <BodyText my={2}>
          Downtown 65 Endurance ry on Länsi-Vantaalainen kestävyysurheiluseura. Lajeina seuralla on
          mm. suunnistus, triathlon, juoksu, pyöräily ja hiihto. Seura on perustettu 2015 ja jäseniä
          sillä on sillä noin 60.
        </BodyText>
        <BodyText my={2}>
          Parhaiten pääset tutustumaan seuran toimintaan&nbsp;
          <Link href="https://www.facebook.com/downtown65endurance" variant="link">
            Downtown65 Facebookista
          </Link>
        </BodyText>
      </Box>
    </Layout>
  </>
)

export default IndexPage
