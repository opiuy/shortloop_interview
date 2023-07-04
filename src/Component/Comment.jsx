import React from "react";
import { Avatar } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { Grid } from "@mantine/core";
import { Box } from '@mantine/core';
import { commentData } from "../commets";



const Comment = ({props}) => {
  return (
    <>
      <div>
        <Grid gutter={2} gutterXs="sm" gutterMd="xl" gutterXl={50}>
          <Grid.Col span={1} >
            <Box >
            <Avatar color="blue" radius="sm"></Avatar>
            </Box>
          </Grid.Col>
          <Grid.Col span={2}>
            <TextInput placeholder="Commets " withAsterisk />   
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
};

export default Comment;
