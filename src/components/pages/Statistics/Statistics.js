import { useEffect, useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ToggleButtonGroup } from "@mui/material";
import { DrawBtn, LoseBtn, WinBtn } from "../../shared/Buttons/Buttons";
import { getTeamStatistics } from "../../../services/GetTeamStatistics";
import { useParams } from "react-router-dom";

export const Statistics = () => {
    const [stats, setStats] = useState([]);
    const params = useParams();

    useEffect(() => {
        const { teamId, leagueId } = params;
        if(teamId && leagueId) {
            async function fetchData() {
                const data = await getTeamStatistics(leagueId, teamId);
                console.log(data);
                setStats(data.response);
            }
            fetchData();
        }
    }, [params]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="leagues table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Form</TableCell>
                        <TableCell>
                            <ToggleButtonGroup>
                                {stats.form.split('').map(letter => {
                                    if(letter === 'W') {
                                        return <WinBtn>W</WinBtn>
                                    } else if(letter === 'L') {
                                        return <LoseBtn>L</LoseBtn>
                                    } else {
                                        return <DrawBtn>D</DrawBtn>
                                    }
                                })}
                            </ToggleButtonGroup>
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableHead>
                    <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell>Home</TableCell>
                        <TableCell>Away</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Played</TableCell>
                        <TableCell>{stats.fixtures.played.home}</TableCell>
                        <TableCell>{stats.fixtures.played.away}</TableCell>
                        <TableCell>{stats.fixtures.played.total}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Wins</TableCell>
                        <TableCell>{stats.fixtures.wins.home}</TableCell>
                        <TableCell>{stats.fixtures.wins.away}</TableCell>
                        <TableCell>{stats.fixtures.wins.total}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Loses</TableCell>
                        <TableCell>{stats.fixtures.loses.home}</TableCell>
                        <TableCell>{stats.fixtures.loses.away}</TableCell>
                        <TableCell>{stats.fixtures.loses.total}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Draws</TableCell>
                        <TableCell>{stats.fixtures.draws.home}</TableCell>
                        <TableCell>{stats.fixtures.draws.away}</TableCell>
                        <TableCell>{stats.fixtures.draws.total}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Goals for</TableCell>
                        <TableCell>{stats.goals.for.total.home} (avg: {stats.goals.for.average.home})</TableCell>
                        <TableCell>{stats.goals.for.total.away} (avg: {stats.goals.for.average.home})</TableCell>
                        <TableCell>{stats.goals.for.total.total} (avg: {stats.goals.for.average.home})</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Goals against</TableCell>
                        <TableCell>{stats.goals.against.total.home} (avg: {stats.goals.against.average.home})</TableCell>
                        <TableCell>{stats.goals.against.total.away} (avg: {stats.goals.against.average.home})</TableCell>
                        <TableCell>{stats.goals.against.total.total} (avg: {stats.goals.against.average.home})</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Clean sheet</TableCell>
                        <TableCell>{stats.clean_sheet.home}</TableCell>
                        <TableCell>{stats.clean_sheet.away}</TableCell>
                        <TableCell>{stats.clean_sheet.total}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Biggest win</TableCell>
                        <TableCell>{stats.biggest.wins.home}</TableCell>
                        <TableCell>{stats.biggest.wins.away}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Biggest lose</TableCell>
                        <TableCell>{stats.biggest.loses.home}</TableCell>
                        <TableCell>{stats.biggest.loses.away}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}