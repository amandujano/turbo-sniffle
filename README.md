<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  turbo-sniffle template
</h1>

## Getting Course Code Running on Your Machine

For windows users, go through the installation instructions for [cross-env](https://github.com/kentcdodds/cross-env) and add it to your `package.json` develop script.

1. `npm install`
1. `npm run develop`
1. Open http://localhost:8000/

### Prerequisites

1. Have a text editor installed, i.e. [VSCode](https://code.visualstudio.com/)
2. Have the Gatsby CLI (gatsby-cli) installed globally by running:
   `npm install -g gatsby-cli`
   
## Course Errata

#### The `gatsby-mdx` plugin was deprecated in favor of `gatsby-plugin-mdx`.

Fixed code: See this [commit to migrate to gatsby-plugin-mdx](https://github.com/FrontendMasters/gatsby-intro/commit/fe9aae6255cc1749205f95e8ca6698476f992a61)

`npm install gatsby-plugin-mdx` instead of `gatsby-mdx`

View the `step4/mdx-blog` branch for final code for the section.

### Video: [Adding Optimized Images to Post](https://frontendmasters.com/courses/gatsby/adding-optimized-images-to-posts/) at 1 minute, 49 seconds where Jason configures remark images.

#### An additional config line needs to be added to configure `gatsby-remark-images`.

Fixed code: See this [commit to configure `gatsby-remark-images'`](https://github.com/FrontendMasters/gatsby-intro/commit/932de28e17f89888d0826e0b6148a9d9452f95cb)

```javascript
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: ['gatsby-remark-images'],
        plugins: ['gatsby-remark-images'],
      },
    },
```

View the `step6/blog-images` branch for final code for the section.

### Video: [Getting Post by Slug](https://frontendmasters.com/courses/gatsby/getting-post-data-by-slug/) at 4 minutes, 55 seconds where Jason gets the post body.

#### gatsby-plugin-mdx no longer requires `body` to be nested in `code` in the query

in ```post.js``` the query should be

```javascript
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`
```

Instead of 

```javascript
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      code {
        body
      }
    }
  }
```

More details in [issue #27](https://github.com/FrontendMasters/gatsby-intro/issues/27)
