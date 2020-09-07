import React from 'react'
import { Heading, HeadingProps, Text, TextProps } from 'rebass/styled-components'

export const H1 = (props: HeadingProps) => {
  return <Heading as="h1" {...props} variant="h1" />
}

export const H2 = (props: HeadingProps) => <Heading {...props} variant="h2" />

export const H3 = (props: HeadingProps) => <Heading {...props} variant="h3" />

export const BodyText = (props: TextProps) => {
  return <Text {...props} variant="body" />
}
