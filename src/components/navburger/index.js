import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles((theme) => ({
  menuIconContainer: {
    marginLeft: "50vw",
  },
}));

export default function Nav() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Drawer
        anchor="right"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <List>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>
                <Link href="/aboutus">
                  <a>Sobre Nós</a>
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>
                <Link href="/services">
                  <a>Serviços</a>
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>
                <Link href="/contact">
                  <a>Contato</a>
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>
                <Link href="/empresasparceiras">
                  <a>Empresas Parceiras</a>
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>
                <Link href="/transformesp">
                  <a>Transforme SP</a>
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button>
            <ListItemIcon>
              <ListItemText>
                <Link href="/services">
                  <a>CONTRATE UMA EJ</a>
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        className={classes.menuIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
