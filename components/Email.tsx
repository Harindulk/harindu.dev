import { createStyles, Text, TextInput, Button, Image, Container } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing.xl * 2,
        borderRadius: theme.radius.md,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
            }`,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: 'column-reverse',
            padding: theme.spacing.xl,
        },
    },

    image: {
        maxWidth: '40%',

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: '100%',
        },
    },

    body: {
        paddingRight: theme.spacing.xl * 4,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            paddingRight: 0,
            marginTop: theme.spacing.xl,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        lineHeight: 1,
        marginBottom: theme.spacing.md,
    },

    controls: {
        display: 'flex',
        marginTop: theme.spacing.xl,
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
}));

export function Email() {
    const { classes } = useStyles();
    return (
        <Container>
            <div className={classes.wrapper}>
                <Image src="https://ui.mantine.dev/_next/static/media/image.969ed1dc.svg" className={classes.image} />

                <div className={classes.body}>
                    <Text className={classes.title}>Wait a minute...</Text>
                    <Text weight={500} size="lg" mb={5}>
                        Subscribe to our newsletter!
                    </Text>
                    <Text size="sm" color="dimmed">
                        You will never miss important product updates, latest news and community QA sessions. Our
                        newsletter is once a week, every Sunday.
                    </Text>

                    <div className={classes.controls}>
                        <TextInput
                            placeholder="Your email"
                            classNames={{ input: classes.input, root: classes.inputWrapper }}
                        />
                        <Button className={classes.control}>Subscribe</Button>
                    </div>
                </div>
            </div>
        </Container>

    );
}

export default Email;