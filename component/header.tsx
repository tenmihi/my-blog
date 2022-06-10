import { Box, Heading, Text, Link, forwardRef, BoxProps } from "@chakra-ui/react";
import Profile from "./profile";

const Header = forwardRef<BoxProps, 'div'>((props, ref) => {
  return (
    <Box ref={ref} {...props}>
      <Link href="/">
        <Heading as="h2">tenmihi's blog</Heading>
      </Link>
      <Text
        mb="16px"
        fontSize='xl'>
        主にJS, TSについて
      </Text>
      <Profile imagePath='/my-avatar.png' />
    </Box>
  )
})

export default Header