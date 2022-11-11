import { Timeline, Text, Space, createStyles, Container, List } from '@mantine/core';
import { link } from 'fs';
import timelinedata from '../data/timeline.json';

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
    color: theme.colorScheme === 'dark' ? theme.colors.red[6] : theme.colors.red[7],
  },
}));

interface Timelinedata {
  data: {
    year: string;
    item: { info: string }[];
  }[];
}


export function Progress({ data }: Timelinedata) {
  const { classes } = useStyles();
  data = timelinedata.data;
  const groups = data.map((timelineinfo) => {
    const list = timelineinfo.item.map((info, index) => (

      <List.Item key={index}>{info.info}</List.Item>

    ));

    return (
      <Timeline.Item key={timelineinfo.year} title={timelineinfo.year}>
        <Space h="xs" />
        <List size="sm">
          {list}
        </List>
        <Space h="xs" />
      </Timeline.Item>
    );
  });

  return (
    <Container>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Timeline active={4} reverseActive lineWidth={5} bulletSize={22}>
            {groups}
          </Timeline>
        </div>
      </div>
    </Container>
  );
}

export default Progress;
