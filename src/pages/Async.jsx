import React, { useEffect, useState } from "react";
import { useTodos } from "../store/todos";
import { Box, Button, Checkbox, MenuItem, Modal, Select, TextField, Typography, Card, CardContent, CardHeader, Avatar, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Async = () => {
  const { data, getUser, deleteUser, editUser, addUser, checkedbox } = useTodos();

  const [openEdit, setOpenEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editStatus, setEditStatus] = useState(false);

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("all");

  const [openAdd, setOpenAdd] = useState(false);
  const [newAvatar, setNewAvatar] = useState("");
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newStatus, setNewStatus] = useState(false);

  function handleEdit() {
    editUser({ id: editId, name: editName, description: editDesc, status: editStatus });
    setOpenEdit(false);
    setEditId(null);
    setEditName("");
    setEditDesc("");
    setEditStatus(false);
  }

  function handleAdd() {
    addUser({ name: newName, description: newDesc, status: newStatus, avatar: newAvatar });
    setOpenAdd(false);
    setNewAvatar("");
    setNewName("");
    setNewDesc("");
    setNewStatus(false);
  }

  const filteredData = data
    .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
    .filter((e) => {
      if (selected === "active") return e.status === true;
      if (selected === "inactive") return e.status === false;
      return true;
    });

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
    <div className="hidden md:block">
    <Box sx={{ p: 4 }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={4} alignItems="center">
        <Button variant="contained" color="primary" onClick={() => setOpenAdd(true)}>
          Add User
        </Button>

        <TextField
          size="small"
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ minWidth: 200, flex: 1 }}
        />

        <Select
          size="small"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </Select>
      </Stack>

      <Stack spacing={3}>
        {filteredData.map((e) => (
          <Card key={e.id} sx={{ display: "flex", alignItems: "center", p: 2, boxShadow: 3 }}>
            <Avatar src={e.avatar} alt={e.name} sx={{ width: 64, height: 64, mr: 2 }} />

            <Box sx={{ flex: 1 }}>
              <Typography variant="h6">{e.name}</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {e.description}
              </Typography>
              <Typography variant="body2" color={e.status ? "green" : "red"}>
                {e.status ? "Active" : "Inactive"}
              </Typography>
            </Box>

            <Stack direction="row" spacing={1}>
              <Button variant="outlined" color="error" onClick={() => deleteUser(e.id)}>
                Delete
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  setOpenEdit(true);
                  setEditId(e.id);
                  setEditName(e.name);
                  setEditDesc(e.description);
                  setEditStatus(e.status);
                }}
              >
                Edit
              </Button>
              <Checkbox checked={e.status} onChange={() => checkedbox(e.id)} />
              <Link to={`/info/${e.id}`}>
                <Button variant="contained">Info</Button>
              </Link>
            </Stack>
          </Card>
        ))}
      </Stack>

      <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6">Edit User</Typography>

          <TextField
            fullWidth
            label="Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            sx={{ mt: 2 }}
          />

          <TextField
            fullWidth
            label="Description"
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            sx={{ mt: 2 }}
          />

          <Stack direction="row" alignItems="center" spacing={1} mt={2}>
            <Checkbox checked={editStatus} onChange={(e) => setEditStatus(e.target.checked)} />
            <Typography>Status</Typography>
          </Stack>

          <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleEdit}>
            Save
          </Button>
        </Box>
      </Modal>

      <Modal open={openAdd} onClose={() => setOpenAdd(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6">Add User</Typography>

          <TextField
            fullWidth
            label="Avatar"
            value={newAvatar}
            onChange={(e) => setNewAvatar(e.target.value)}
            sx={{ mt: 2 }}
          />

          <TextField
            fullWidth
            label="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            sx={{ mt: 2 }}
          />

          <TextField
            fullWidth
            label="Description"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            sx={{ mt: 2 }}
          />

          <Stack direction="row" alignItems="center" spacing={1} mt={2}>
            <Checkbox checked={newStatus} onChange={(e) => setNewStatus(e.target.checked)} />
            <Typography>Status</Typography>
          </Stack>

          <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleAdd}>
            Save
          </Button>
        </Box>
      </Modal>
    </Box>
    </div> 
    
    <div className="block md:hidden">
  <Box sx={{ p: 2 }}>
    <Stack spacing={2} mb={2}>
      <Button variant="contained" color="primary" onClick={() => setOpenAdd(true)}>
        Add User
      </Button>

      <TextField
        size="small"
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Select
        size="small"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="inactive">Inactive</MenuItem>
      </Select>
    </Stack>

    <Stack spacing={2}>
      {filteredData.map((e) => (
        <Card key={e.id} sx={{ p: 2, boxShadow: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src={e.avatar} alt={e.name} sx={{ width: 48, height: 48 }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1">{e.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {e.description}
              </Typography>
              <Typography variant="body2" color={e.status ? "green" : "red"}>
                {e.status ? "Active" : "Inactive"}
              </Typography>
            </Box>
          </Stack>

          <Stack direction="column" spacing={1} mt={2}>
            <Button variant="outlined" color="error" size="small" onClick={() => deleteUser(e.id)}>
              Delete
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => {
                setOpenEdit(true);
                setEditId(e.id);
                setEditName(e.name);
                setEditDesc(e.description);
                setEditStatus(e.status);
              }}
            >
              Edit
            </Button>
            <Checkbox checked={e.status} onChange={() => checkedbox(e.id)} size="small" />
            <Link to={`/info/${e.id}`} style={{ textDecoration: "none" }}>
              <Button variant="contained" size="small">
                Info
              </Button>
            </Link>
          </Stack>
        </Card>
      ))}
    </Stack>
  </Box>
    </div>
    </>
  );
};

export default Async;
