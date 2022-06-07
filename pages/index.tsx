import PostList from '../container/post-list'
import { getPostList } from '../src/post-list'

export async function getStaticProps() {
  const post_list = await getPostList('dev', 1)

  return {
    props: {
      post_list,
    }
  }
}

export default PostList