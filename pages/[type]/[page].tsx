import { Box, Container, Text, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import PostListItem from "../../src/component/post-list-item"
import { getAllPaths, getPostList } from "../../src/post-list"

interface RouteParams {
  type: string
  page: number
}

export function getStaticPaths() {
  const paths = getAllPaths()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: RouteParams }) {
  const post_list = await getPostList(params.type, params.page)

  return {
    props: {
      post_list,
    }
  }
}

export default function PostList({ post_list }: { post_list: object[] }) {
  return (
    <Container maxW={'7xl'} p="12">
      <Head>
        <title>tenmihi's blog</title>
        <meta name="description" content="主に開発周りについて" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Heading as="h2">tenmihi's blog</Heading>
        <Text fontSize='xl'>
          主に開発周りについて
        </Text>
      </Box>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        justifyContent="space-between"
        flexDirection={{ base: 'column', sm: 'column' }}>
          {
            post_list.map(post => (
              <Box
                marginBottom={{ base: '8', sm: '8' }}>
                <PostListItem postData={post} />
              </Box>
            ))
          }
      </Box>
    </Container>
  )
}
