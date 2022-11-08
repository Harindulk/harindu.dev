import { useState } from 'react';
import {
    createStyles,
    Table,
    Text,
    TextInput,
    Badge,
    useMantineTheme
} from '@mantine/core';
import { keys } from '@mantine/utils';
import { IconSearch } from '@tabler/icons';
import competitionsdata from '../data/competitions.json';

interface RowData {
    name: string;
    rank: string;
    year: string;
}

interface TableSortProps {
    data: RowData[];
}

const jobColors: Record<string, string> = {
    winner: 'red',
    '2nd runners up': 'red',
    '2nd runner up': 'red',
    '4th': 'green',
    '5th': 'green',
    'top 10': 'green',
    finalist: 'yellow',
    'semi-finalist': 'yellow',
    'n/a': 'gray',
    pending: 'gray',
    'best idea': 'red',
};
  
function filterData(data: RowData[], search: string) {
    data = competitionsdata.competitions;

    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
    );
}

function sortData(
    data: RowData[],
    payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
    const { sortBy } = payload;

    if (!sortBy) {
        return filterData(data, payload.search);
    }

    return filterData(
        [...data].sort((a, b) => {
            if (payload.reversed) {
                return b[sortBy].localeCompare(a[sortBy]);
            }
            return a[sortBy].localeCompare(b[sortBy]);
        }),
        payload.search
    );
}

export function TableSort({ data }: TableSortProps) {
    data = competitionsdata.competitions;
    const theme = useMantineTheme();

    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
    };

    const rows = sortedData.map((row) => (
        <tr key={row.name}>
            <td>{row.name}</td>
            <td> <Badge
          color={jobColors[row.rank.toLowerCase()]}
          variant={theme.colorScheme === 'dark' ? 'light' : 'outline'} >
          {row.rank}
        </Badge></td>
        </tr>
    ));

    return (
        <div>
            <TextInput
                placeholder="Search by any field"
                mb="md"
                icon={<IconSearch size={14} stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
            <Table withBorder horizontalSpacing="md" verticalSpacing="xs">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rank</th>
                    </tr>
                </thead>

                <tbody>
                    {rows.length > 0 ? (
                        rows
                    ) : (
                        <tr>
                            <td colSpan={Object.keys(data[0]).length}>
                                <Text weight={500} align="center">
                                    Nothing found
                                </Text>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}