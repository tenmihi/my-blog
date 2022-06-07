import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../../../../../component/header";
import { getAllPaths, getPost } from "../../../../../src/posts";

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
        sx={{
          "*": {
            mb: 4,
            listStyle: "none",
          },
          h1: { fontSize: "2xl", fontWeight: "bold" },
          h2: { fontSize: "1xl", fontWeight: "bold" },
          p: { fontSize: "md" },
          blockquote: {
            borderLeft: "3px solid",
            borderColor: "gray.500",
            pl: 4,
          },
          a: {
            fontWeight: "bold",
          },
          li: {
            mb: 2,
          },
          "pre code": {
            borderRadius: 10,
          },
          img: {
            w: "100%",
            h: { base: 200, sm: 300, md: 400 },
            objectFit: "cover",
            borderRadius: 10,
          },
        }}>
        <p>{created_at}</p>
        <Heading as="h1">{title}</Heading>
        <Box dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </Container>
  )
}
