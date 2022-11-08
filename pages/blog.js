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
  },

  title: {
    fontWeight: 700,
    fontFamily: `Roboto, ${theme.fontFamily}`,
    lineHeight: 1.2,
    fontSize: 22,
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
      <Container>
        {posts.map((post, index) => (
          <Link href={'/blog/' + post.slug} passHref key={index}>
            <Card mt="xl" withBorder radius="md" p={0} className={classes.card}>
              <Group noWrap spacing={0}>
                <div className={classes.body}>
                  <Text className={classes.title} mt="xs" mb="md">
                    {post.frontMatter.title}
                  </Text>
                  <Text transform="uppercase" color="dimmed" weight={700} size="xs">
                    {post.frontMatter.description}
                  </Text>
                  <Group noWrap spacing="xs">
                    <Text size="xs" color="dimmed">
                      {post.frontMatter.date}
                    </Text>
                  </Group>
                </div>
              </Group>
            </Card>
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
