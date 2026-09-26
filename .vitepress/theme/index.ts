import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import GitHubEditLink from './GitHubEditLink.vue'
import './wikijs.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, { 'doc-footer-before': () => h(GitHubEditLink) }),
}
