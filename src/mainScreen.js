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
export default function MainScreen () {
    return (
        <Box bgcolor="info.main">
            <AppBar position="relative">
                <Tabs>
                    <Tab label="Overview"></Tab>
                    <Tab label="Ledger"></Tab>
                    <Tab label="Policies"></Tab>
                </Tabs>
            </AppBar>
            <Container>
                <Grid container spacing={1}>
                    <Grid item>
                        <Card><CardContent>
                            <Typography variant="h5">Population</Typography>
                            <Typography variant="h6">82</Typography>
                            <ButtonGroup>
                                <Button>Inc</Button>
                                <Button>Dec</Button>
                            </ButtonGroup>
                        </CardContent></Card>
                    </Grid>
                    <Grid item>
                        <Card><CardContent>
                            <Typography variant="h5">Happiness</Typography>
                            <Typography variant="h6">58</Typography>
                            <ButtonGroup>
                                <Button>Inc</Button>
                                <Button>Dec</Button>
                            </ButtonGroup>
                        </CardContent></Card>                
                    </Grid>
                    <Grid item>
                        <Card><CardContent>
                            <Typography variant="h5">Income</Typography>
                            <Typography variant="h6">25</Typography>
                            <ButtonGroup>
                                <Button>Inc</Button>
                                <Button>Dec</Button>
                            </ButtonGroup>
                        </CardContent></Card>                
                    </Grid>
                    <Grid item>
                        <Card><CardContent>
                            <Typography variant="h5">Expenses</Typography>
                            <Typography variant="h6">35</Typography>
                            <ButtonGroup>
                                <Button>Inc</Button>
                                <Button>Dec</Button>
                            </ButtonGroup>
                        </CardContent></Card>                
                    </Grid>
                </Grid>
            </Container>
        </Box>
        
    )
}