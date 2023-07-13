import { v4 as uuidv4 } from "uuid";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CreatedTask from "./CreatedTask";

const AddTask = ({ setCompleted, setTotal, completed }) => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const writeTask = (e) => {
    setTask(e.target.value);
  };

  const writeTime = (e) => {
    setTime(e.target.value);
  };

  const addTaskToBg = () => {
    if (task.trim() === "") {
      alert("Enter Task");
    } else {
      const newTask = {
        id: uuidv4(),
        description: task.trim(),
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTask("");
      setTotal((prev) => prev + 1);
      toast({
        position: "bottom",
        render: () => (
          <Box color="white" p={3} bg="green">
            Added Task Successfully
          </Box>
        ),
      });
    }
  };

  const deleteTask = (ID) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== ID));
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem("Todo_tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, [window]);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("Todo_tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  if (tasks.length === 0) {
    <p>hi</p>;
  }

  return (
    <div>
      <HStack>
        <Button onClick={addTaskToBg} ml={3} colorScheme="teal" size="xs">
          <AddIcon />
        </Button>
        <Input
          minWidth={["12rem", "14rem", "28rem"]}
          onChange={writeTask}
          placeholder="Your Next Task"
          value={task}
        />
      </HStack>
      {tasks.map((task) => (
        <CreatedTask
          completed={completed}
          setCompleted={setCompleted}
          key={task.id}
          task={task}
          deleted={deleteTask}
        />
      ))}
    </div>
  );
};

export default AddTask;
