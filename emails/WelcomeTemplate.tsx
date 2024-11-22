import React from 'react'
import { Html, Body, Container, Text, Link, Preview } from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome to Our Community!</Preview>
      <Body>
        <Container className="bg-gray-400">
          <Text className="px-[12px] text-white">
            Hello. This is your first email testing if the code works or not using react eamil! It is responsive and nice!!
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default WelcomeTemplate