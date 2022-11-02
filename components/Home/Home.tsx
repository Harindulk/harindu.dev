import { createStyles, Text, Title, Space, Button, Image, Container, Group } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: theme.spacing.xl * 2,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: 'column-reverse',
        },
    },

    image: {
        maxWidth: '269px',
        maxHeight: '269px',
        pointerEvents: 'none',
        WebkitUserSelect: 'none',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            maxWidth: '100%',
        },
        '@media (max-width: 768px)': {
            maxWidth: '280px',
        },

        '@media (max-width: 500px)': {
            maxWidth: '60%',
        },
    },

    body: {
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            paddingRight: 0,
            marginTop: theme.spacing.xl,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
        marginBottom: theme.spacing.md,
        paddingTop: theme.spacing.xl * 2,

        [theme.fn.smallerThan('sm')]: {
            paddingTop: theme.spacing.xl * 1,
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
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontSize: 19,
        lineHeight: 1.2,
        letterSpacing: 0.9,

        // Media query with value from theme
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: 18,
            fontFamily: `Inconsolata, ${theme.fontFamily}`,
        },

        // Static media query
        '@media (max-width: 425px)': {
            fontSize: 17,
            letterSpacing: 0.4,
        },
    },
}));

export function Home() {
    const { classes } = useStyles();
    return (
        <Container>
            <div className={classes.wrapper}>
                <div className={classes.body}>
                    <Title className={classes.title}>
                        Hi, I'm Harindu. <br /> I make video games
                    </Title>
                    <Text mt={30} className={classes.p}>
                        I'm a 16 year old game developer & a student studying GCE O/l at Nalanda College
                        Colombo 10.
                    </Text>

                    <Text mt={20} className={classes.p}>
                        2021 Best ICT student in Sri Lanka Award Winner
                    </Text>
                    <Text className={classes.p}>
                        The youngest Google Verified Student in Sri Lanka.
                    </Text>
                    <Space h="md" />
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
                </div>
                <Image
                    src="https://res.cloudinary.com/harindu-dev/image/upload/v1664971567/harindu_fonseka.jpg"
                    alt="harindu fonseka"
                    radius={350}
                    width="299"
                    height="299"
                    className={classes.image}
                />
            </div>
        </Container>
    );
}

export default Home;