import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tooltip } from '@mui/material';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { Link } from 'react-router-dom';
import { CustomTable, CustomTableContainer } from '../../../shared/Table/Table';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const TeamsList = ({ teams, season }) => {

    return (
        <div className='results'>
            <Tooltip title='Go back'>
                <Link className='c-pointer' to='..' style={{position: 'absolute', right: '0', top: '0', margin: '10px'}}>
                    <ChevronLeftIcon />
                </Link>
            </Tooltip>
            <CustomTableContainer component={Paper}>
                <CustomTable aria-label="teams table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Logo</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Founded</TableCell>
                            <TableCell>Stadium</TableCell>
                            <TableCell>Capacity</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teams.map((row) => (
                            <TableRow
                                key={row.team.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    <img className='logo-image' src={row.team.logo} alt="team logo" />
                                </TableCell>
                                <TableCell>
                                    {row.team.name}
                                </TableCell>
                                <TableCell>
                                    {row.venue.city}
                                </TableCell>
                                <TableCell>
                                    {row.team.founded}
                                </TableCell>
                                <TableCell>
                                    {row.venue.name}
                                </TableCell>
                                <TableCell>
                                    {row.venue.capacity}
                                </TableCell>
                                <TableCell>
                                    <Link className='c-pointer' to={'team/' + row.team.id + `?season=${season}`}>
                                        <Tooltip title={`See the ${row.team.name}'s statistics`}>
                                            <QueryStatsIcon />
                                        </Tooltip>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </CustomTable>
            </CustomTableContainer>
        </div>
    )
}

