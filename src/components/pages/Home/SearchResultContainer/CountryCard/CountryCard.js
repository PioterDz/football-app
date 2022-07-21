import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { LeaguesTable } from './LeaguesTable/LeaguesTable';

export const CountryCard = ({ country, leagues }) => {

    return (
        <Card sx={{ width: 600, height: 600 }}>
            <Typography gutterBottom variant="h5" component="div">
                <img className='flag-image' src={country.flag} alt="country flag" /> {country.name} ({country.code})
            </Typography>
            <CardContent>
                <Typography variant="body2" color="text.secondary" component="div">
                    <LeaguesTable leagues={leagues} />
                </Typography>
            </CardContent>
        </Card>
    )
}