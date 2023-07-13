import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import AddTask from "./AddTask";
import { useState } from "react";
function App() {
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(0);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack>
      <header>
        <Button m={6} onClick={toggleColorMode}>
          Change Theme
        </Button>
      </header>
      <VStack sx={{ fontFamily: "Babas Neue" }} mt={["1rem", "2rem", "3rem"]}>
        <Heading
          size={["xl", "xl", "2xl"]}
        >{`${completed}/${total}  Completed`}</Heading>
        {<br />}
        <Text fontSize={["2xl", "2xl", "4xl"]}>You have to do it!</Text>
        {<br />}
        <AddTask
          total={total}
          completed={completed}
          setCompleted={setCompleted}
          setTotal={setTotal}
        />
      </VStack>
    </Stack>
  );
}

export default App;
