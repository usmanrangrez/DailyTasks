import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CreatedTask = ({ task, deleted, setCompleted, completed, time }) => {
  const [taskColor, setTaskColor] = useState("#c7aea3");
  const toast = useToast();
  const handleDelete = () => {
    deleted(task.id);
    toast({
      position: "bottom",
      render: () => (
        <Box color="white" p={3} bg="red">
          Deleted Task Successfully
        </Box>
      ),
    });
  };
  const handleCompletion = (event) => {
    if (event.target.checked) {
      setCompleted((prevCompleted) => prevCompleted + 1);
      setTaskColor("green");
      toast({
        position: "bottom",
        render: () => (
          <Box color="white" p={3} bg="black">
            Completed Task Successfully
          </Box>
        ),
      });
    } else {
      setCompleted((prevCompleted) => prevCompleted - 1);
      setTaskColor("#c7aea3");
      toast({
        position: "bottom",
        render: () => (
          <Box color="white" p={3} bg="black">
            You need to do it!
          </Box>
        ),
      });
    }
  };

  return (
    <HStack
      p={1}
      borderRadius={8}
      width={["16rem", "16rem", "36rem"]}
      display={"flex"}
      alignItems={"center"}
      bgColor={taskColor}
      m={8}
    >
      <Checkbox
        onChange={handleCompletion}
        ml={3}
        size="lg"
        borderColor="teal"
        left={0}
      />

      <Stack
        justifyContent={"space-evenly"}
        alignItems={"center"}
        flexDir={"row"}
      >
        <Text ml={4} minWidth={"16rem"} borderRadius={9} fontSize={"3xl"}>
          {`${task.description}`}
        </Text>
      </Stack>
      <Button onClick={handleDelete} left={[-110, -110, 40]}>
        <DeleteIcon boxSize={5} />
      </Button>
    </HStack>
  );
};

export default CreatedTask;
