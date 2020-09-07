import React from 'react'
import { Box, Flex } from 'rebass/styled-components'
import { Layout } from '../components/layout'
import { H1, H2, BodyText } from '../components/text'

const IndexPage = () => (
  <Layout>
    <Flex
      alignItems="flex-end"
      p={['2rem', '3rem', '4rem']}
      height={['20rem', '40rem']}
      sx={{
        background: `url("/static/dtboys.jpg")`,
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        textShadow: '2px 2px 4px #000',
      }}
    >
      <H1 color="white">Downtown 65</H1>
    </Flex>
    <Box p={3}>
      <H2>Seura</H2>
      <BodyText>
        Downtown 65 Endurance ry on Länsi-Vantaalainen kestävyysurheiluseura. Lajeina seuralla on
        mm. suunnistus, triathlon, juoksu, pyöräily ja hiihto. Seura on perustettu xxxx ja jäseniä
        sillä on 2020 noin 60.
      </BodyText>
    </Box>
  </Layout>
)

export default IndexPage
