import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../component/header";
import PostListItem from "../component/post-list-item";

export default function PostList({ post_list }: { post_list: object[] }) {
  return (
    <Container maxW={'80%'} p="12">
      <Head>
        <title>tenmihi's blog</title>
        <meta name="description" content="主に開発周りについて" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
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