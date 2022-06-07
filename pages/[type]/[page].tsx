import { getAllPaths, getPostList } from "../../src/post-list"
import PostList from '../../container/post-list'

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

export default PostList
