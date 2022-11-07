import { createStyles, Text, Title, Space, Button, Image, Group, Grid } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({

    image: {
        maxWidth: '220px',
        maxHeight: '220px',

        //center horizontally and vertically in the parent
        margin: 'auto',
        marginTop: '20px',

        '@media (max-width: 768px)': {
            maxWidth: '200px',
        },

        '@media (max-width: 500px)': {
            maxWidth: '50%',
            marginTop: '0px',
        },
    },

    title: {
        fontFamily: 'OpenSans',
        color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
        lineHeight: 1,
        fontSize: 35,
        fontWeight: 800,
        marginBottom: theme.spacing.sm,
        paddingTop: theme.spacing.xl * 2,

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
        color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[8],
        fontSize: 16,
        lineHeight: 1.2,
        letterSpacing: 0.9,
        fontWeight: 500,
        // Media query with value from theme
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: 18,
        },

        // Static media query
        '@media (max-width: 425px)': {
            fontSize: 16,
        },
    },

    p2: {
        color: theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[8],
        fontSize: 16,
        lineHeight: 1.2,
        letterSpacing: 0.9,
        fontWeight: 500,
        // Media query with value from theme
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: 18,
        },

        // Static media query
        '@media (max-width: 425px)': {
            fontSize: 16,
        },
    },

    //show only on mobile
    mobile: {
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
                        <Title order={1} className={classes.title}>
                            Hi, I'm Harindu. <br />I make video games
                        </Title>
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
                        <Image src="https://res.cloudinary.com/harindu-dev/image/upload/v1664971567/harindu_fonseka.jpg"
                            alt="harindu fonseka"
                            radius={350}
                            width="250"
                            height="250"
                            className={classes.image}
                        />
                    </Grid.Col>
                </Grid>
            </div>

            <div className={classes.mobile} >

                <Grid justify="space-between">
                    <Grid.Col md={5} lg={3}>
                        <Image src="https://res.cloudinary.com/harindu-dev/image/upload/v1664971567/harindu_fonseka.jpg"
                            alt="harindu fonseka"
                            radius={350}
                            width="250"
                            height="250"
                            className={classes.image}
                        />
                    </Grid.Col>

                    <Grid.Col sm={7} lg={8}>
                        <Title order={1} className={classes.title}>
                            Hi, I'm Harindu. <br />I make video games
                        </Title>
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