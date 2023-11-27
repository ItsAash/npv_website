import { Accordion, Badge, Box, Space, Text, Title } from '@mantine/core';

export interface stationList {
  title: string;
  tag: string;
  installed_data: string;
  online_for: string;
}

export interface stationListProps {
  stationListData: stationList[];
}

export function StationList({ stationListData }: stationListProps) {
  return (
    <>
      <Title>Dashboard</Title>
      <Space h={20} />
      <Box mah={230} style={{ overflowY: 'auto' }}>
        <Accordion variant="separated">
          {stationListData.map((value) => (
            <Accordion.Item value={value.tag}>
              <Accordion.Control>{value.title}</Accordion.Control>
              <Accordion.Panel>
                <Text c="blue">{value.tag}</Text>
                <Text>Installed Date: {value.installed_data}</Text>
                <Badge variant="dot" color="green" size="sm">
                  Online For: {value.online_for}
                </Badge>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
    </>
  );
}
