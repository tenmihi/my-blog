import { Box, Heading, Link, Text } from "@chakra-ui/react"

export default function PostListItem({ postData }: { postData: any }) {
  return (
    <Box>
      <Heading>
      <Link fontSize="xl" href={postData.post_url}>
        {postData.title}
      </Link>
      </Heading>
      <Text>{postData.created_at}</Text>
    </Box>
  )
}