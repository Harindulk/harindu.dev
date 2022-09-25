import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  createStyles,
  Card,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  Container,
} from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  cardcopy: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
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
        <Paper
          shadow="md"
          p="xl"
          radius="md"
          sx={{ backgroundImage: `url(${image})` }}
          className={classes.cardcopy}
        ></Paper>
      </Container>
    </Link>
  );
}

const data = [
  {
    image: 'http://localhost:3000/_next/static/media/micro-rally.fae05684.jpg',
    href: '/games',
  },
  {
    image: 'http://localhost:3000/_next/static/media/the-final-room.c53087e7.jpg',
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
  const slides = data.map((item) => (
    <Carousel.Slide>
      <Cardtest {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container>
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
