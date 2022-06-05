import PostListItem from "../../src/component/post-list-item";
import { getAllPaths, getPostList } from "../../src/post-list";

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

export function getStaticProps({ params }: { params: RouteParams }) {
  const post_list = getPostList(params.type, params.page)

  return {
    props: {
      post_list,
    }
  }
}

export default function PostList({ post_list }: { post_list: object[] }) {
  return (
    <>
      <li>
        {
          post_list.map(post => (
            <ul>
              <PostListItem postData={post} />
            </ul>
          ))
        }
      </li>
    </>
  );
}
