import { createStyles, Card, Text, Group } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Image from 'next/dist/client/image';

const useStyles = createStyles((theme) => ({
  Carousel: {
    maxWidth: 385,
    minWidth: 385,
    width: 385,

    [`@media (max-width: 435px)`]: {
      minWidth: "100%",
      width: "100%",
      height: 200,
    },
  },

  title: {
    fontFamily: `Quicksand Bold, ${theme.fontFamily}`,
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: 25,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  description: {
    fontSize: 17,
    lineHeight: 1.6,
  },

  body: {
    padding: theme.spacing.md,
  },

  leftwrapper: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? "#1F2225" :"#f9f9f9" ,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
    },

  },

  titlemain: {
    fontFamily: `Greycliff CF`,
    color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.dark,
    fontSize: 36,
    lineHeight: 1.1,
    fontWeight: 800,
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  rightwrapper: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? "#1F2225" :"#f9f9f9" ,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column-reverse',
    },
  },
}));

export function Expierience() {
  const { classes } = useStyles();

  return (
    <div id='highlights'>

      <Text className={classes.titlemain}>Highlights</Text>
      <div>

        <Group spacing="xl">

          <div className={classes.leftwrapper}>
            <Carousel
              mx="auto"
              withIndicators
              height={285}
              className={classes.Carousel}
              styles={{
                indicator: {
                  width: 12,
                  height: 4,
                  transition: 'width 250ms ease',

                  '&[data-active]': {
                    width: 40,
                  },
                },
              }}
            >

              <Carousel.Slide><Image loading='lazy' src="https://res.cloudinary.com/harindu-dev/image/upload/v1668621092/harindu_award_aqyfpl.jpg" layout='fill' /></Carousel.Slide>

            </Carousel>

            <div className={classes.body}>

              <Text className={classes.title} mt="xs" mb="md">
                Best ICT Student in Sri Lanka
              </Text>

              <Text className={classes.description}>
                I won the 2021 best ICT student in Sri Lanka national award at the national ICT conference organized by the computer society of Sri Lanka. I got this award when I was 16 and I'm the youngest person from among other students who got this award in other years.
              </Text>

            </div>
          </div>


          <div className={classes.rightwrapper}>

            <div className={classes.body}>
              <Text className={classes.title} mt="xs" mb="md">
                First Internship when I was 15
              </Text>
              <Group noWrap spacing="xs">

                <Text className={classes.description}>
                  I'm proud to have done an internship at 99x (one of the best software company in Sri Lanka) when I was 15 years old. I got it after winning an all-island coding competition called 'Codeflow' by Ananda College Colombo 10.
                </Text>
              </Group>
            </div>

            <Carousel
              mx="auto"
              withIndicators
              height={285}
              className={classes.Carousel}
              styles={{
                indicator: {
                  width: 12,
                  height: 4,
                  transition: 'width 250ms ease',

                  '&[data-active]': {
                    width: 40,
                  },
                },
              }}
            >
              <Carousel.Slide><Image loading='lazy' src="https://res.cloudinary.com/harindu-dev/image/upload/v1666439267/15_pgf4qk.jpg" layout="fill" /></Carousel.Slide>
              <Carousel.Slide><Image loading='lazy' src="https://res.cloudinary.com/harindu-dev/image/upload/v1666444005/8_ml3aeo.jpg" layout="fill" /></Carousel.Slide>
              {/* ...other slides */}
            </Carousel>
          </div>


          <div className={classes.leftwrapper}>

            <Carousel
              mx="auto"
              withIndicators
              height={285}
              className={classes.Carousel}
              styles={{
                indicator: {
                  width: 12,
                  height: 4,
                  transition: 'width 250ms ease',

                  '&[data-active]': {
                    width: 40,
                  },
                },
              }}
            >
              <Carousel.Slide><Image loading='lazy' src="https://res.cloudinary.com/harindu-dev/image/upload/v1666548652/Untitled_design_4_ehs6ur.jpg" layout="fill" /></Carousel.Slide>
              <Carousel.Slide><Image loading='lazy' src="https://res.cloudinary.com/harindu-dev/image/upload/v1666548513/Untitled_design_3_nynae3.jpg" layout="fill" /></Carousel.Slide>
              <Carousel.Slide><Image loading='lazy' src="https://res.cloudinary.com/harindu-dev/image/upload/v1666548766/Untitled_design_5_s52gcn.jpg" layout="fill" /></Carousel.Slide>
            </Carousel>
            <div className={classes.body}>

              <Text className={classes.title} mt="xs" mb="md">
                Completed over 30+ Hackathons
              </Text>

              <Text className={classes.description}>
                I'm proud to have completed over 31 invention, programming, and game development competitions from 2018 to 2022, and a lot of them are completed during the Covid-19 lockdown time. and I became the winner, 1st and 2nd runners-up, merit, and finalist in 23 of them.            </Text>
            </div>
          </div>

          <div className={classes.rightwrapper}>

            <div className={classes.body}>
              <Text className={classes.title} mt="xs" mb="md">
                First startup company when I was 14
              </Text>
              <Group noWrap spacing="xs">

                <Text className={classes.description}>
                  'Starfun Games' was started in September 2020 by me at the age of 14 as a hobby when I learn game development. when it was started its first name was Harindulk Games and I changed its name to Starfun Games in August 2022.
                </Text>
              </Group>
            </div>

            <Carousel
              mx="auto"
              withIndicators
              height={285}
              className={classes.Carousel}
              styles={{
                indicator: {
                  width: 12,
                  height: 4,
                  transition: 'width 250ms ease',

                  '&[data-active]': {
                    width: 40,
                  },
                },
              }}
            >
              <Carousel.Slide><Image loading='lazy' src="https://res.cloudinary.com/harindu-dev/image/upload/v1666548766/Untitled_design_6_b59vsf" layout="fill" /></Carousel.Slide>
            </Carousel>
          </div>

        </Group>
      </div>
          </div>
  );

}

export default Expierience;
