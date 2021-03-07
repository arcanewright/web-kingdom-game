import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import AppBar from "@material-ui/core/AppBar"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"

const initialStats = [{name:"Population", id:1, value:50, growthBase:1, growthMods:[]},
{name:"Happiness", id:2, value:70, growthBase:0, growthMods:[]},
{name:"Food", id:3, value:200, growthBase:0, growthMods:[]},
{name:"Production", id:4, value:200, growthBase:0, growthMods:[]},
{name:"Housing", id:5, value:75, growthBase:0, growthMods:[]}]

function MyCard (props, myKey) {
    console.log("Here")
    return (<Grid item key={myKey}><Card><CardContent>
        <Typography variant="h5">{props.name}</Typography>
        <Typography variant="h6">{props.value}</Typography>
        <ButtonGroup>
            <Button>Inc</Button>
            <Button>Dec</Button>
        </ButtonGroup>
    </CardContent></Card></Grid>)
}
export default function MainScreen () {
    return (
        <Box bgcolor="info.main">
            <AppBar position="relative">
                <Tabs>
                    <Tab label="Overview" value={1}></Tab>
                    <Tab label="Ledger" value={2}></Tab>
                    <Tab label="Policies" value={3}></Tab>
                </Tabs>
            </AppBar>
            <Container style={{"padding":"1rem"}}>
                <Grid container spacing={2}>
                    {initialStats.map((stat,index) => MyCard(stat, index))}
                </Grid>
            </Container>
        </Box>
        
    )
}