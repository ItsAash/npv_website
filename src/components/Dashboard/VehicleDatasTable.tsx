import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea } from '@mantine/core';
import classes from './VehicleDatasTable.module.css';
import { VehicleData } from '../../hooks/useVehicleDatas';

interface VehicleDatasProps {
  vehicleDatas: VehicleData[];
}

export function VehicleDatasTable({ vehicleDatas }: VehicleDatasProps) {
  const [scrolled, setScrolled] = useState(false);

  const rows = vehicleDatas.map((row, i) => (
    <Table.Tr key={i}>
      <Table.Td>{row.Location}</Table.Td>
      <Table.Td>{row.NumberPlate}</Table.Td>
      <Table.Td>{row.Timestamp.toString()}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={700}>
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <Table.Tr>
            <Table.Th>Location</Table.Th>
            <Table.Th>NumberPlate</Table.Th>
            <Table.Th>Timestamp</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
