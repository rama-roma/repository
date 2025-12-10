import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTodos } from "../store/todos";
import { Box, Button, Card, CardContent, CardHeader, Avatar, Typography, Stack } from "@mui/material";

const Info = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dataById, getById } = useTodos();

  useEffect(() => {
    getById(id);
  }, [id]);


  return (
    <>
     <div className="hidden md:block">
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 5,
      }}
    >
      <Card sx={{ maxWidth: 400, width: "100%", p: 2, boxShadow: 6 }}>
        <CardHeader
          avatar={<Avatar src={dataById?.avatar} alt={dataById?.name} sx={{ width: 56, height: 56 }} />}
          title={
            <Typography variant="h5" component="div">
              {dataById?.name}
            </Typography>
          }
          subheader={
            <Typography
              variant="body2"
              sx={{ color: dataById?.status ? "green" : "red" }}
            >
              {dataById?.status ? "Active" : "Inactive"}
            </Typography>
          }
        />

        <CardContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {dataById?.description}
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
              Back
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
     </div>

     <div className="block md:hidden">
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 5,
      }}
    >
      <Card sx={{ maxWidth: 400, width: "100%", p: 2, boxShadow: 6 }}>
        <CardHeader
          avatar={<Avatar src={dataById?.avatar} alt={dataById?.name} sx={{ width: 56, height: 56 }} />}
          title={
            <Typography variant="h5" component="div">
              {dataById?.name}
            </Typography>
          }
          subheader={
            <Typography
              variant="body2"
              sx={{ color: dataById?.status ? "green" : "red" }}
            >
              {dataById?.status ? "Active" : "Inactive"}
            </Typography>
          }
        />

        <CardContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {dataById?.description}
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
              Back
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
     </div>
    </>
  );
};

export default Info;
