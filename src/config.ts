import yaml from 'js-yaml'
import { readFileSync  } from 'fs'
import path from 'path'

const CONFIG_PATH = path.join(process.cwd(), 'config.yml')

interface BlogConfig {
  post_list_limit: string
}

class Config {
  private config: BlogConfig

  constructor() {
    this.config = yaml.load(readFileSync(CONFIG_PATH, 'utf-8')) as BlogConfig
  }
}

export default new Config;