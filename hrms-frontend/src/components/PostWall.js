import React from "react";
import { Card, CardContent, Typography, Divider, Box } from "@mui/material";

const posts = [
  {
    id: 1,
    type: "birthday",
    title: "🎂 Happy Birthday, Priya!",
    message: "Wishing you a wonderful year ahead! 🎉",
  },
  {
    id: 2,
    type: "kudos",
    title: "🌟 Kudos to Rajesh!",
    message: "Great work on completing the project milestone ahead of time 👏",
  },
    {
    id: 3,
    type: "birthday",
    title: "🎂 Happy Birthday, Priya!",
    message: "Wishing you a wonderful year ahead! 🎉",
  },
  {
    id: 4,
    type: "kudos",
    title: "🌟 Kudos to Rajesh!",
    message: "Great work on completing the project milestone ahead of time 👏",
  },
    {
    id: 5,
    type: "birthday",
    title: "🎂 Happy Birthday, Priya!",
    message: "Wishing you a wonderful year ahead! 🎉",
  },
  {
    id: 6,
    type: "kudos",
    title: "🌟 Kudos to Rajesh!",
    message: "Great work on completing the project milestone ahead of time 👏",
  },
    {
    id: 7,
    type: "birthday",
    title: "🎂 Happy Birthday, Priya!",
    message: "Wishing you a wonderful year ahead! 🎉",
  },
  {
    id: 8,
    type: "kudos",
    title: "🌟 Kudos to Rajesh!",
    message: "Great work on completing the project milestone ahead of time 👏",
  },
      {
    id: 9,
    type: "birthday",
    title: "🎂 Happy Birthday, Priya!",
    message: "Wishing you a wonderful year ahead! 🎉",
  },
  {
    id: 10,
    type: "kudos",
    title: "🌟 Kudos to Rajesh!",
    message: "Great work on completing the project milestone ahead of time 👏",
  },
      {
    id: 11,
    type: "birthday",
    title: "🎂 Happy Birthday, Priya!",
    message: "Wishing you a wonderful year ahead! 🎉",
  },
  {
    id: 12,
    type: "kudos",
    title: "🌟 Kudos to Rajesh!",
    message: "Great work on completing the project milestone ahead of time 👏",
  },
];

export default function PostWall() {
  return (
    <Card sx={{ p: 2, borderRadius: 3, boxShadow: 2,minHeight: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Post Wall
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {posts.map((post) => (
          <Box key={post.id} sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {post.title}
            </Typography>
            <Typography variant="body2">{post.message}</Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
