import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../../../../../component/header";
import { getAllPaths, getPost } from "../../../../../src/post";

export function getStaticPaths() {
  const paths = getAllPaths()

  console.log(paths)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: any }) {
  const post = getPost(params.type,params.yyyy, params.mm, params.dd)

  return {
    props: {
      ...post
    }
  }
}

export default function Post({ created_at, title, content }: { created_at: string, title: string, content: string}) {
  return (
    <Container maxW={'80%'} p="12">
      <Head>
        <title>tenmihi's blog - FIXME</title>
        <meta name="description" content="主に開発周りについて" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box
        as="article"
        mt={12}
        >
        <p>{created_at}</p>
        <Heading as="h1" fontSize="3xl" mb="16px">{title}</Heading>
        <Box
          className="znc"
          dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </Container>
  )
}
