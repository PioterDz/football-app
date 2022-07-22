import { useEffect, useState } from "react";
import { Paper, TableBody, TableCell, TableHead, TableRow, ToggleButtonGroup, Tooltip, Typography } from "@mui/material";
import { DrawBtn, LoseBtn, WinBtn } from "../../shared/Buttons/Buttons";
import { getTeamStatistics } from "../../../services/GetTeamStatistics";
import { Link, useParams } from "react-router-dom";
import { SkeletonLoader } from "../../shared/SkeletonLoader/SkeletonLoader";
import { v4 as uuid } from 'uuid';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { CustomTableContainer, CustomTable } from "../../shared/Table/Table";

export const Statistics = () => {
    const [stats, setStats] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const { teamId, leagueId } = params;
        if(teamId && leagueId) {
            async function fetchData() {
                const data = await getTeamStatistics(leagueId, teamId);
                setStats(data);
                setLoading(false);
            }
            fetchData();
        }
    }, [params]);

    return (
        isLoading ? <SkeletonLoader /> : (
            <CustomTableContainer component={Paper}>
                <Tooltip title='Go back'>
                    <Link className='c-pointer' to={`/league/${params.leagueId}`} style={{position: 'absolute', right: '0', top: '0', margin: '10px'}}>
                        <ChevronLeftIcon />
                    </Link>
                </Tooltip>

                <Typography component="header" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '1rem'}}>
                    <img src={stats.team.logo} alt="team logo" />
                    <h3 style={{marginLeft: '1rem'}}>{stats.team.name} statistics</h3>
                </Typography>
                <CustomTable aria-label="team's statistics table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell colSpan={3}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Form</TableCell>
                            <TableCell colSpan={3}>
                                <ToggleButtonGroup>
                                    {stats.form?.split('').map(letter => {
                                        if(letter === 'W') {
                                            return <WinBtn key={uuid()}>W</WinBtn>
                                        } else if(letter === 'L') {
                                            return <LoseBtn key={uuid()}>L</LoseBtn>
                                        } else {
                                            return <DrawBtn key={uuid()}>D</DrawBtn>
                                        }
                                    })}
                                </ToggleButtonGroup>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Home</TableCell>
                            <TableCell>Away</TableCell>
                            <TableCell>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Played</TableCell>
                            <TableCell>{stats.fixtures?.played.home}</TableCell>
                            <TableCell>{stats.fixtures?.played.away}</TableCell>
                            <TableCell>{stats.fixtures?.played.total}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Wins</TableCell>
                            <TableCell>{stats.fixtures?.wins.home}</TableCell>
                            <TableCell>{stats.fixtures?.wins.away}</TableCell>
                            <TableCell>{stats.fixtures?.wins.total}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Loses</TableCell>
                            <TableCell>{stats.fixtures?.loses.home}</TableCell>
                            <TableCell>{stats.fixtures?.loses.away}</TableCell>
                            <TableCell>{stats.fixtures?.loses.total}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Draws</TableCell>
                            <TableCell>{stats.fixtures?.draws.home}</TableCell>
                            <TableCell>{stats.fixtures?.draws.away}</TableCell>
                            <TableCell>{stats.fixtures?.draws.total}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Goals for</TableCell>
                            <TableCell>{stats.goals?.for.total.home} (avg: {stats.goals?.for.average.home})</TableCell>
                            <TableCell>{stats.goals?.for.total.away} (avg: {stats.goals?.for.average.home})</TableCell>
                            <TableCell>{stats.goals?.for.total.total} (avg: {stats.goals?.for.average.home})</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Goals against</TableCell>
                            <TableCell>{stats.goals?.against.total.home} (avg: {stats.goals?.against.average.home})</TableCell>
                            <TableCell>{stats.goals?.against.total.away} (avg: {stats.goals?.against.average.home})</TableCell>
                            <TableCell>{stats.goals?.against.total.total} (avg: {stats.goals?.against.average.home})</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Clean sheet</TableCell>
                            <TableCell>{stats.clean_sheet?.home}</TableCell>
                            <TableCell>{stats.clean_sheet?.away}</TableCell>
                            <TableCell>{stats.clean_sheet?.total}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Biggest win</TableCell>
                            <TableCell>{stats.biggest?.wins.home}</TableCell>
                            <TableCell>{stats.biggest?.wins.away}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Biggest lose</TableCell>
                            <TableCell>{stats.biggest?.loses.home}</TableCell>
                            <TableCell>{stats.biggest?.loses.away}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </CustomTable>
            </CustomTableContainer>
        )
    );
}