import {Box, Burger, Group} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {NavLink, useLocation} from "react-router-dom";
import classes from "./index.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/other-page", label: "Other Page" },
];

export function AppHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      className={classes.link}
      data-active={location.pathname === link.link || undefined}
      to={link.link}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <header className={classes.header}>
      <Box className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="xs"
          size="sm"
        >
          {opened && (
            <div
              style={{
                position: "absolute",
                top: 20,
                width: 200,
                left: 30,
                marginLeft: "15px",
                zIndex: 99,
                color: "black",
              }}
            >
              {items}
            </div>
          )}
        </Burger>
      </Box>
    </header>
  );
}
