import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  createStyles,
  Card,
  Paper,
  Text,
  Title,
  Button,
  Image,
  useMantineTheme,
  BackgroundImage,
  Container,
  Space,
} from '@mantine/core';
import Link from 'next/link';
import { ClassNames } from '@emotion/react';
import microrally from '../../public/images/micro-rally.jpg';

const useStyles = createStyles((theme) => ({
  cardcopy: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer',
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  href: string;
}

function Cardtest({ image, href }: CardProps) {
  const { classes } = useStyles();

  return (
    <Link href={href}>
      <Container>
        <Paper shadow="md" p="xl" radius="md" className={classes.cardcopy}>
        <Image
        radius="md"
        src={microrally.src}
        alt="Random unsplash image"
      />
        </Paper>
      </Container>
    </Link>
  );
}

const data = [
  {
    image: '../../public/images/micro-rally.jpg',
    href: '/games',
  },
  {
    image: '',
    href: '',
  },
  {
    image: 'http://localhost:3000/_next/static/media/bug-star.b0f85694.jpg',
    href: '',
  },
  {
    image: 'http://localhost:3000/_next/static/media/ghost-zone.00a32f95.jpg',
    href: '',
  },
];

function Demo() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const { classes } = useStyles();

  const slides = data.map((item) => (
    <Carousel.Slide>
      <Cardtest {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container>
      <Space h={60} />
      <Title className={classes.title}>Games</Title>
      <Space h={30} />

      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: 'xs', slideSize: '100%', slideGap: 3 }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Container>
  );
}

export default Demo;
