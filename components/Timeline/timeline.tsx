import { Timeline, Text, Space, createStyles, Container, List } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  inner: {
    paddingBottom: theme.spacing.xl * 3,
  },

  content: {
    maxWidth: 800,
    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  bold: {
    fontWeight: 700,
    color : theme.colorScheme === 'dark' ? theme.colors.red[6] : theme.colors.red[7],
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
            <Space h="xs" />
      
              <Space h="xs" />
              <List size="sm">
                <List.Item>Got Selected for the "Best ICT Student in Sri Lanka" National Award</List.Item>
                <List.Item>3rd Place in IDEALIZE 2022 - AIESEC in University of Moratuwa</List.Item>
                <List.Item>4th Place in Cutting Edge Coding Competition IIT</List.Item>
                <List.Item>made "Pain and Dice" Game in 48 hours</List.Item>
                <List.Item>got first internship from 99x at the age of 15</List.Item>
                <List.Item>made "Poly Car" Game in 14 days</List.Item>
                <List.Item>
                  Won the Codeflow Hackathon - organized by Ananda College Colombo 10
                </List.Item>
                <List.Item>
                  Bug Star Game Live-Steamed by Mish Manners and It got attension from foreign
                  Gamers.
                </List.Item>
              </List>

              <Space h="xs" />
            </Timeline.Item>

            <Timeline.Item title="2021">
              <Text size="sm">
                <List size="sm">
                  <List.Item>Released Bug Star Game</List.Item>
                  <List.Item>Released Ghost zone game for Android and PC</List.Item>
                  <List.Item>
                    Got 5th Place From Sri Lanka in INSTINCTUS 20 Innovation competition and got
                    media coverage from TV's
                  </List.Item>
                  <List.Item>Got 1st Place in Novus Technica 2020 - Nalanda College </List.Item>
                </List>
              </Text>
              <Space h="xs" />
            </Timeline.Item>

            <Timeline.Item title="2020">
              <Text size="sm">
                <List size="sm">
                  <List.Item>made my first video game on October 21</List.Item>
                  <List.Item>Started "Starfun Games" company in September</List.Item>
                  <List.Item>Released harindu.dev website on June 09</List.Item>
                  <List.Item>INNOV8 2020 - NSBM 3rd Place</List.Item>
                  <List.Item>Got 1st Place in Novus Technica 2019 - Nalanda College </List.Item>
                  <List.Item>
                    one of my invention got selected to the top 10 inventions in Aurora 2019
                    organized by Ananda College
                  </List.Item>
                </List>
              </Text>
              <Space h="xs" />
            </Timeline.Item>

            <Timeline.Item title="2019">
              <Text size="sm">
                <List size="sm">
                  <List.Item>
                    Participated Sri lanka's Robotic Challenge 2019 and scored 12th place
                  </List.Item>
                  <List.Item>
                    Participated my first ever Innovation competition "INNOVATIVE SAINTS 2019" and
                    got 3rd place
                  </List.Item>
                  <List.Item>
                    Participated my first ever robotic competition organized by Gateway College.
                  </List.Item>
                </List>
              </Text>
              <Space h="xs" />
            </Timeline.Item>

            <Timeline.Item title="2018">
              <Text size="sm">
                <List size="sm">
                  <List.Item>Started learning Arduino and Robotics.</List.Item>
                  <List.Item>
                    First Invention got selected as the Most Innovative Idea - Novus Technica 2018
                    Nalanda College
                  </List.Item>
                </List>
              </Text>
              <Space h="xs" />
            </Timeline.Item>

            <Timeline.Item title="2017">
              <Text size="sm">December: Hello World! using Microbit Online Editor</Text>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </Container>
  );
}

export default Progress;
