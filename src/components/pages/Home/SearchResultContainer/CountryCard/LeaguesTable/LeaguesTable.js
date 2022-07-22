import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import { Link } from "react-router-dom";
import { Tooltip } from '@mui/material';
import { CustomTable, CustomTableContainer } from '../../../../../shared/Table/Table';

export const LeaguesTable = ({ leagues }) => {

    return (
        <CustomTableContainer component={Paper}>
            <CustomTable sx={{ minWidth: 400, height: 'max-content' }} aria-label="leagues table">
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
                                <Link className='c-pointer' to={'league/' + row.id}>
                                    <Tooltip title={`See the ${row.name}'s teams`}>
                                        <GroupsRoundedIcon />
                                    </Tooltip>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </CustomTable>
        </CustomTableContainer>
    )
}