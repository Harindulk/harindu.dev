import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Container } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { Image, Code, Title, createStyles } from '@mantine/core';
import Head from 'next/head'

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF`,
    fontWeight: 900,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
    fontSize: 42,
    textheight: 1.2,

    '@media (max-width: 700px)': {
      fontSize: 33,
    },
  },

  margin: {
    marginTop: 120,
  },

  table: {
    borderStyle: 'solid',
  },

  tableitem: {
    fontSize: 10,
  },

  Space: {
    //only on mobile
    '@media (max-width: 500px)': {
      marginTop: 50,
    },
  },


}));

const components = { Prism, Image, Code }

const PostPage = ({ frontMatter: { title, date, thumbnailUrl, description }, mdxSource }) => {
  const { classes } = useStyles();
  return (
    <Container size={800}>
      <Head>
        <title>{title + ' - Harindu Fonseka'}</title>

        <meta name="title" content={title + ' - Harindu Fonseka'} />
        <meta name="description" content={description} />
        <meta name="author" content="Harindu Fonseka" />

        <meta property="og:title" content={title + ' - Harindu Fonseka'} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harindu.dev" />
        <meta property="og:image" content={thumbnailUrl} />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.Space}>
        <Title className={classes.title}>{title}</Title>
        <h5>Posted on {date}</h5>
        <MDXRemote {...mdxSource} components={components} />
      </div>
      <div className={classes.margin} />
    </Container>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts',
    slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage