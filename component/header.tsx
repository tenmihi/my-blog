import { Box, Heading, Text, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box>
      <Link href="/">
        <Heading as="h2">tenmihi's blog</Heading>
      </Link>
      <Text fontSize='xl'>
        主に開発周りについて
      </Text>
    </Box>
  )
}