import { Box, Heading, forwardRef, BoxProps, Img } from "@chakra-ui/react";
import { Github, Twitter } from "@icons-pack/react-simple-icons";

type ProfileProp = {
  imagePath: string
}

const Profile = forwardRef<BoxProps & ProfileProp, 'div'>((props, ref) => {
  return (
    <Box
      ref={ref}
      {...props}
      display="flex"
      flexDirection="row">
      <Img src={props.imagePath} w="48px" h="48px" borderRadius="24px" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        ml="8px"
        p="5px 0">
        <Heading as="h4" fontSize='md'>tenmihi</Heading>
        <Box
          display="flex"
          flexDirection="row">
          <Twitter size="16px"/>
          <Github size="16px" style={{ marginLeft: '4px' }}/>
        </Box>
      </Box>
    </Box>
  )
})

export default Profile