import { Title, Text, Anchor, Container } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Container>
        <Title className={classes.title}  mt={300}>
          Below are some of my experiences.
        </Title>

        <Text color="dimmed" size="lg" sx={{ maxWidth: 580 }} mt="xl">
          This starter Next.js project includes a minimal setup for server side rendering, if you
          want to learn more on Mantine + Next.js integration follow{' '}
          <Anchor href="https://mantine.dev/guides/next/" size="lg">
            this guide
          </Anchor>
          . To get started edit index.tsx file.
        </Text>
      </Container>
    </>
  );
}
