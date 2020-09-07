import React, { PropsWithChildren } from 'react'
import { Flex, Text, Box, Link } from 'rebass/styled-components'
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import styled from 'styled-components'
import { colors } from '../styles'
import { BodyText } from './text'

interface Props {
  prop?: string
}

const Faceook = styled(FacebookSquare)`
  color: ${colors.pink};
  height: 5rem;
`

export const Layout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <>
      <Flex px={2} color="white" bg="black" alignItems="center" height="6rem">
        <Text variant="logo" p={2} fontWeight="bold">
          DT65
        </Text>
        <Box mx="auto" />
      </Flex>
      <Box>{children}</Box>
      <Flex
        justifyContent="center"
        mx="auto"
        my="2rem"
        height="6rem"
        flexDirection="column"
        alignItems="center"
      >
        <Box>
          <a href="https://www.facebook.com/downtown65endurance">
            <Faceook />
          </a>
        </Box>

        <BodyText>Downtown 65 Endurance ry {new Date().getFullYear()}</BodyText>
      </Flex>
    </>
  )
}
