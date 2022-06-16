import { Box, Heading, Link, forwardRef, BoxProps } from "@chakra-ui/react";
import Profile from "./profile";

const Header = forwardRef<BoxProps, 'div'>((props, ref) => {
  return (
    <Box ref={ref} {...props}>
      <Link href="/">
        <Heading as="h1" fontSize="5xl" mb="16px">blog.tenmihi.dev</Heading>
      </Link>
      <Profile imagePath='/my-avatar.png' />
    </Box>
  )
})

export default Header