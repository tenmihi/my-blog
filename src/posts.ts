import { readFileSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import * as globule from 'globule'
import yaml from 'js-yaml'
import MarkdownIt from 'markdown-it'

const POSTS_ROOT_PATH = path.join(process.cwd(), 'posts')

export function getAllPaths(): string[] {
  const glob_path = path.join(POSTS_ROOT_PATH, '**', '*.md')
  const post_paths = globule.find(glob_path)

  return post_paths.map((post_path: string) => {
    return post_path.replace(/^.*\/([a-z]*)\/([0-9]{4})([0-9]{2})([0-9]{2})\.md$/, '/posts/$1/$2/$3/$4')
  })
}

export function getPost(type: string, year: number, month: number, day: number): object {
  const file_name = `${year.toString()}${month.toString()}${day.toString()}.md`
  const post_path = path.join(POSTS_ROOT_PATH, type, file_name)

  const post_file = readFileSync(post_path, 'utf-8')

  // https://github.com/jonschlinkert/gray-matter/issues/62
  const post_matter = matter(post_file, {
    engines: {
      yaml: s => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object
    }
  })

  const md = MarkdownIt()
  const content = md.render(post_matter.content)

  const created_at = `${year}/${month}/${day}`

  return {
    created_at,
    content,
    ...post_matter.data
  }
}
