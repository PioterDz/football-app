import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StatsDialog } from './StatsDialog/StatsDialog';

export const TeamsList = ({ teams }) => {

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="teams table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Logo</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Founded</TableCell>
                            <TableCell>Stadium</TableCell>
                            <TableCell>Capacity</TableCell>
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <StatsDialog />
        </div>
    )
}

