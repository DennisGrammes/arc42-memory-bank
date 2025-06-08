import yaml from 'js-yaml';

export function parseFrontMatter(content) {
  return yaml.load(content);
}
