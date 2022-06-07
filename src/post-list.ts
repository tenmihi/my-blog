import { readFileSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import * as globule from 'globule'
import config from 'config'
import yaml from 'js-yaml'
import MarkdownIt from 'markdown-it'

const POSTS_ROOT_PATH = path.join(process.cwd(), 'posts')

export function getAllPaths(): string[] {
  const list_limit = config.get('posts.list_limit') as number
  const post_types = config.get('posts.types') as string[]

  const paths: string[] = []
  for (const type of post_types) {
    const glob_path = path.join(POSTS_ROOT_PATH, type, '*.md')
    const post_paths = globule.find(glob_path)

    const max_page = Math.ceil(post_paths.length % list_limit)
    for (let i=1; i<=max_page; i++) {
      paths.push(`/${type}/${i}`)
    }
  }
  
  return paths
}

export function getPostList(type: string, page: number): object[] {
  const glob_path = path.join(POSTS_ROOT_PATH, type, '*.md')
  const post_paths = globule.find(glob_path)
  const list_limit = config.get('posts.list_limit') as number

  const md = new MarkdownIt()

  return post_paths
    .splice((page - 1) * list_limit, list_limit)
    .map((post_path: string) => {
      const file = readFileSync(post_path, 'utf-8')
      const post_matter = matter(file, {
        engines: {
          yaml: s => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object
        }
      })

      const content = md.render(post_matter.content)

      const match_result = post_path.match(/^.*\/([0-9]{4})([0-9]{2})([0-9]{2})\.md$/)
      if (!match_result) throw Error('Cannot parse post file name')

      const [_, y, m, d] = match_result
      const post_url = `/posts/${type}/${y}/${m}/${d}`

      return {
        created_at: `${y}-${m}-${d}`,
        post_url,
        content,
        ...post_matter.data
      }
    })
} 