import {
  createStyles, Card, Container, Text, Group, Space
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

  Space: {
    //only on mobile
    '@media (max-width: 500px)': {
      marginTop: 70,
    },
  },

  margin: {
    marginTop: 120,
  },

  cover: {
    pointerEvents: 'none',
    WebkitUserSelect: 'none',
    marginTop: 20,
    objectFit: 'cover',
    top: 0,
    left: 0,
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.black,
    fontWeight: 600,
    lineHeight: 1.2,
    fontSize: 27,
    cursor: 'pointer',
    fontFamily: `Greycliff CF`,
    '&:hover': {
      transition: 'all 0.3s ease',
    },
    //small font size on mobile
    '@media (max-width: 500px)': {
      fontSize: 21,
    },
  },

  description: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    '@media (max-width: 500px)': {
      fontSize: 15,
    },
  },

  body: {
    paddingBottom: 40,
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
      <Container className={classes.Space} size={900} >
        {posts.map((post, index) => (
          <Link href={`/blog/${encodeURIComponent(post.slug)}`} passHref key={index}>
            <Group noWrap spacing={0}>
              <div className={classes.body}>
                <Text className={classes.title} mb="xs">
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
      <div className={classes.margin} />
      
      <Container>
      <img src="https://res.cloudinary.com/harindu-dev/image/upload/v1668265496/diplomats_Protagonist_ENFJ_workplace_habits_zacnwc.svg" className={classes.cover} />
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
