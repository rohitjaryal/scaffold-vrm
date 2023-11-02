import {Container, SimpleGrid,} from "@mantine/core";
import classes from "./index.module.css";

export default function Landing() {

  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        Landing Page
      </SimpleGrid>
    </Container>
  );
}
