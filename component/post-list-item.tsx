import { Box, Heading, Link, Text } from "@chakra-ui/react"

export default function PostListItem({ postData }: { postData: any }) {
  return (
    <Box>
      <Text fontSize="md">{postData.created_at}</Text>
      <Heading>
        <Link fontSize="2xl" href={postData.post_url}>
          {postData.title}
        </Link>
      </Heading>
    </Box>
  )
}