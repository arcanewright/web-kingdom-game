import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import MenuIcon from "@material-ui/icons/Menu"
import Box from "@material-ui/core/Box"

function TopBar () {
    return (
            <AppBar position="static">
                <Toolbar>
                    <Typography  variant="h6">Kingdom Manager</Typography>
                    <Box style={{flexGrow:1}}></Box>
                    <Button>Save</Button>
                    <Button>Load</Button>
                    <Button color="secondary">Reset</Button>
                    <IconButton>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                </Toolbar>
            </AppBar>
    )
}

export default TopBar