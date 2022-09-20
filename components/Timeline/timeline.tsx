import { Timeline, Text, Space, createStyles, Container } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  inner: {
    paddingBottom: theme.spacing.xl * 3,
  },

  content: {
    maxWidth: 510,
    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },
}));

function Progress() {
  const { classes } = useStyles();
  return (
    <Container>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Timeline active={4} reverseActive lineWidth={5} bulletSize={22}>
            <Timeline.Item title="2022">
              <Text size="sm">
                got first internship from 99x.
              </Text>
              <Space h="xs" />
            </Timeline.Item>

            <Timeline.Item title="2021">
              <Text  size="sm">
                created my first game called ghost zone and published it on the google play store
                for mobile and on itch.io for windows
              </Text>
              <Space h="xs" />
            </Timeline.Item>

            <Timeline.Item title="2020">
              <Text size="sm">
                started to learn game development 
              </Text>
              <Space h="xs" />
            </Timeline.Item>

            <Timeline.Item title="2019">
              <Text size="sm">
               participated in many Robotics and invention competitions.
                tried to learn HTML and CSS.
              </Text>
              <Space h="xs" />
            </Timeline.Item>

            <Timeline.Item title="2018">
              <Text size="sm">
                made my first invention and it's got selected as the most innovative idea
              </Text>
              <Space h="xs" />
            </Timeline.Item>

            <Timeline.Item title="2017">
              <Text size="sm">Started doing Simple Projects using MicroBit Online Version.</Text>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </Container>
  );
}

export default Progress;
