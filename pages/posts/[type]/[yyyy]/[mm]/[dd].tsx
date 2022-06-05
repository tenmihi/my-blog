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

export default function Post({ created_at, updated_at, content }: { created_at: string, updated_at: string, content: string}) {
  return (
    <article>
      <p>{created_at}</p>
      <p>{updated_at}</p>
      <p>{content}</p>
    </article>
  )
}
