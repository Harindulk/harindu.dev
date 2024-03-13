import { createStyles, Text, Space, Button, Group, Grid } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({

    image: {
        maxWidth: '220px',
        maxHeight: '220px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '20px',

        '@media (max-width: 768px)': {
            maxWidth: '200px',
        },

        '@media (max-width: 375px)': {
            maxWidth: '60%',
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
        lineHeight: 1,
        fontSize: 35,
        fontWeight: 800,
        marginBottom: theme.spacing.sm,
        paddingTop: theme.spacing.xl * 2,
        fontFamily: `Greycliff CF`,
        [theme.fn.smallerThan('sm')]: {
            paddingTop: theme.spacing.xl * 1,
        },

        '@media (max-width: 500px)': {
            fontSize: 33,
        },

    },

    controls: {
        display: 'flex',
        marginTop: theme.spacing.xl,
    },

    flex: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    inputWrapper: {
        width: '100%',
        flex: '1',
    },

    input: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
    },

    control: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },

    p: {
        fontFamily: `Greycliff CF`,
        color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[9],
        fontSize: 17,
        lineHeight: 1.2,
        letterSpacing: 0.9,
        fontWeight: 500,
        // Media query with value from theme
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: 16,
        },

        // Static media query
        '@media (max-width: 425px)': {
            fontSize: 16,
        },
    },

    p2: {
        letterSpacing: 0.9,
        fontSize: 16,
        lineHeight: 1.4,
        fontWeight: 400,
    },

    //show only on mobile
    mobile: {
        marginTop: 60,
        display: 'none',
        '@media (max-width: 768px)': {
            display: 'block',
        },
    },

    //show only on desktop
    desktop: {
        display: 'block',
        '@media (max-width: 768px)': {
            display: 'none',
        },
    },
}));

export function Home() {
    const { classes } = useStyles();
    return (
        <div>
            <div className={classes.desktop}  >
                <Grid justify="space-between">

                    <Grid.Col sm={7} lg={8}>
                        <Text className={classes.title}>
                            Hi, I'm Harindu. <br />I make video games
                        </Text>
                        <Text className={classes.p}>
                            2021 Best ICT student in Sri Lanka
                        </Text>

                        <Text mt={20} className={classes.p2}>
                            Founder of Starfun Games || Youngest Google Verified Student in LK
                        </Text>
                        <Text className={classes.p2}>
                            trying to expand the gaming industry in sri lanka
                        </Text>


                        <Space h="sm" />
                        <Group>
                            <Link href="/about" passHref>
                                <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} className={classes.flex}>
                                    About Harindu
                                </Button>
                            </Link>

                            <Link href="/games" passHref>
                                <Button variant="default" className={classes.flex}>
                                    Video Games
                                </Button>
                            </Link>
                        </Group>

                    </Grid.Col>

                    <Grid.Col sm={5} lg={3}>
                        <div className={classes.image}>
                            <Image src="https://res.cloudinary.com/harindu-dev/image/upload/v1710351535/IMG_20230918_153812_969_krpgyx.jpg"
                                alt="harindu fonseka"
                                width="250"
                                height="250"
                                priority={true}
                                style={{ borderRadius: '50%' }}
                            />
                        </div>
                    </Grid.Col>
                </Grid>
            </div>

            <div className={classes.mobile} >

                <Grid>
                    <Grid.Col md={5} lg={3}>
                        <div className={classes.image}>
                            <Image src="https://res.cloudinary.com/harindu-dev/image/upload/v1710351535/IMG_20230918_153812_969_krpgyx.jpg"
                                alt="harindu fonseka"
                                width="250"
                                height="250"
                                priority={true}
                                style={{ borderRadius: '50%' }}
                            />
                        </div>
                    </Grid.Col>

                    <Grid.Col sm={7} lg={8}>
                        <Text className={classes.title}>
                            Hi, I'm Harindu. <br />I make video games
                        </Text>
                        <Text className={classes.p}>
                            2021 Best ICT student in Sri Lanka
                        </Text>

                        <Text mt={20} className={classes.p2}>
                            Founder of Starfun Games || Youngest Google Verified Student in LK
                        </Text>
                        <Text className={classes.p2}>
                            trying to expand the gaming industry in sri lanka
                        </Text>


                        <Space h="sm" />
                        <Group>
                            <Link href="/about" passHref>
                                <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} className={classes.flex}>
                                    About Harindu
                                </Button>
                            </Link>

                            <Link href="/games" passHref>
                                <Button variant="default" className={classes.flex}>
                                    Video Games
                                </Button>
                            </Link>
                        </Group>

                    </Grid.Col>
                </Grid>
            </div>
        </div>
    );
}

export default Home;