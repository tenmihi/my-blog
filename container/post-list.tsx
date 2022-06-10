import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../component/header";
import PostListItem from "../component/post-list-item";

export default function PostList({ post_list }: { post_list: object[] }) {
  return (
    <Container maxW={'70%'} p="12">
      <Head>
        <title>tenmihi's blog</title>
        <meta name="description" content="主に開発周りについて" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header 
        mb="32px"/>
      <Box
        display="flex"
        flexDirection="column">
          {
            post_list.map(post => (
              <Box
                mb="16px">
                <PostListItem postData={post} />
              </Box>
            ))
          }
      </Box>
    </Container>
  )
}