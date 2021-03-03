import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
export default function MainScreen () {
    return (
        <Box bgcolor="info.main">
            <Container>
                Stuff
            </Container>
            <Grid container spacing={3}>
                <Grid item>Hey</Grid>
                <Grid item>There</Grid>
                <Grid item>Just</Grid>
                <Grid item xs>Testing</Grid>
            </Grid>
        </Box>
        
    )
}