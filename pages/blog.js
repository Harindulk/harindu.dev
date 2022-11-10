import {
  createStyles, Card, Container, Text, Group
} from '@mantine/core';
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image';
import Head from 'next/head'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    cursor: 'pointer',

  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.black,
    fontWeight: 600,
    lineHeight: 1.2,
    fontSize: 25,
    cursor: 'pointer',
    fontFamily: `Greycliff CF Bold, ${theme.fontFamily}`,
    '&:hover': {
      //underline text with a transition
      transition: 'all 0.3s ease',
    },
    //transition to onclick other page
  },

  description: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

  },

  body: {
    padding: theme.spacing.md,
  },
}));


export function Blog({ posts }) {
  const { classes } = useStyles();

  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container size={900}>

        {posts.map((post, index) => (
          <Link href={`/blog/${encodeURIComponent(post.slug)}`} passHref key={index}>
              <Group noWrap spacing={0}>
                <div className={classes.body}>
                  <Text className={classes.title}  mb="xs">
                    {post.frontMatter.title}
                  </Text>
                  <Group noWrap spacing="xs">
                    <Text size="xs" color="dimmed">
                      {post.frontMatter.date}
                    </Text>
                  </Group>
                  <Text className={classes.description}>
                    {post.frontMatter.description}
                  </Text>
                </div>
              </Group>
          </Link>
          
        ))}
      </Container>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Blog;
