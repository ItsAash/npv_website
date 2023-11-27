import { Grid, Skeleton, Container } from '@mantine/core';
import { StationList } from './StationList';
import { StationsMap } from './StationsMap';

const child = <Skeleton height={300} radius="md" animate={false} />;

const stationListData = [
  {
    title: 'Kalanki-1',
    tag: '#rsp-ktm-kal-01',
    installed_data: '2069-01-28',
    online_for: '122days 2hrs',
  },
  {
    title: 'Kalanki-2',
    tag: '#rsp-ktm-kal-02',
    installed_data: '2069-01-28',
    online_for: '122days 2hrs',
  },
  {
    title: 'Kalanki-3',
    tag: '#rsp-ktm-kal-03',
    installed_data: '2069-01-28',
    online_for: '122days 2hrs',
  },
  {
    title: 'Kalanki-4',
    tag: '#rsp-ktm-kal-04',
    installed_data: '2068-01-28',
    online_for: '122days 2hrs',
  },
];

export function Dashboard() {
  return (
    <Container my="md" size="90vw" pl={{ md: '5rem', sm: '0.1rem', xs: '0.01rem' }}>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <StationList stationListData={stationListData} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <StationsMap />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
      </Grid>
    </Container>
  );
}
