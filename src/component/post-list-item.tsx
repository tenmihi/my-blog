import Link from "next/link"

export default function PostListItem({ postData }: { postData: any }) {
  return (
    <div>
      <Link href={postData.post_url}>
        <a>{postData.title}</a>
      </Link>
      <p>{postData.content}</p>
    </div>
  )
}