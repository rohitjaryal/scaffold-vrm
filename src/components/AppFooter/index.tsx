import {ActionIcon, Container, Group, rem, Text} from "@mantine/core";
import {IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandYoutube,} from "@tabler/icons-react";
import classes from "./index.module.css";

export function AppFooter() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.afterFooter}>
        <Text variant="subtle" style={{ color: "var(--mantine-color-white)" }}>
          Developed by <a href={"https://rohitjaryal.dev"} >rohitjaryal.dev</a>  © 2023 All rights reserved.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" variant="subtle">
            <IconBrandTiktok
              style={{ width: rem(28), height: rem(28) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(28), height: rem(28) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(28), height: rem(28) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="subtle">
            <IconBrandFacebook
              style={{ width: rem(28), height: rem(28) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
