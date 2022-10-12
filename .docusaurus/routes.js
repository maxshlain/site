import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/site/blog',
    component: ComponentCreator('/site/blog', '8ec'),
    exact: true
  },
  {
    path: '/site/blog/archive',
    component: ComponentCreator('/site/blog/archive', 'cb0'),
    exact: true
  },
  {
    path: '/site/blog/first-blog-post',
    component: ComponentCreator('/site/blog/first-blog-post', 'e6e'),
    exact: true
  },
  {
    path: '/site/blog/long-blog-post',
    component: ComponentCreator('/site/blog/long-blog-post', 'b94'),
    exact: true
  },
  {
    path: '/site/blog/mdx-blog-post',
    component: ComponentCreator('/site/blog/mdx-blog-post', '546'),
    exact: true
  },
  {
    path: '/site/blog/tags',
    component: ComponentCreator('/site/blog/tags', 'cba'),
    exact: true
  },
  {
    path: '/site/blog/tags/docusaurus',
    component: ComponentCreator('/site/blog/tags/docusaurus', '5c6'),
    exact: true
  },
  {
    path: '/site/blog/tags/facebook',
    component: ComponentCreator('/site/blog/tags/facebook', 'beb'),
    exact: true
  },
  {
    path: '/site/blog/tags/hello',
    component: ComponentCreator('/site/blog/tags/hello', '9c5'),
    exact: true
  },
  {
    path: '/site/blog/tags/hola',
    component: ComponentCreator('/site/blog/tags/hola', 'e03'),
    exact: true
  },
  {
    path: '/site/blog/welcome',
    component: ComponentCreator('/site/blog/welcome', '043'),
    exact: true
  },
  {
    path: '/site/markdown-page',
    component: ComponentCreator('/site/markdown-page', '41c'),
    exact: true
  },
  {
    path: '/site/docs',
    component: ComponentCreator('/site/docs', '1c4'),
    routes: [
      {
        path: '/site/docs/category/tutorial---basics',
        component: ComponentCreator('/site/docs/category/tutorial---basics', 'e6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/site/docs/category/tutorial---extras',
        component: ComponentCreator('/site/docs/category/tutorial---extras', 'e7d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/site/docs/intro',
        component: ComponentCreator('/site/docs/intro', 'f24'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/site/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/site/docs/tutorial-basics/congratulations', 'd9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/site/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/site/docs/tutorial-basics/create-a-blog-post', '9ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/site/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/site/docs/tutorial-basics/create-a-document', '81a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/site/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/site/docs/tutorial-basics/create-a-page', 'dd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/site/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/site/docs/tutorial-basics/deploy-your-site', '8d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/site/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/site/docs/tutorial-basics/markdown-features', '9f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/site/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/site/docs/tutorial-extras/manage-docs-versions', '2dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/site/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/site/docs/tutorial-extras/translate-your-site', '2ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/site/',
    component: ComponentCreator('/site/', 'ff2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
