import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import { Link } from "react-router-dom";
import { Tooltip } from '@mui/material';

export const LeaguesTable = ({ leagues }) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="leagues table">
                <TableHead>
                    <TableRow>
                        <TableCell>Logo</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {leagues.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>
                                <img className='logo-image' src={row.logo} alt="league logo" />
                            </TableCell>
                            <TableCell>
                                {row.name}
                            </TableCell>
                            <TableCell>
                                <Link to={'team/' + row.id}>
                                    <Tooltip title={`See the ${row.name}'s teams`}>
                                    <GroupsRoundedIcon />
                                    </Tooltip>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}