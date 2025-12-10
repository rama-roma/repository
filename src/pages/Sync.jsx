import React, { useState } from 'react'
import { useTodo } from '../store/todo'

import {
  Button,
  Checkbox,
  TextField,
  Modal,
  Box,
  Select,
  MenuItem,
  Typography
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const Sync = () => {
 
  const { data, deleteUser, addUser, editUser, checkedbox } = useTodo();

  const [openAdd, setOpenAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [newStatus, setNewStatus] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editStatus, setEditStatus] = useState(false);

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("all");

  const [openInfo, setOpenInfo] = useState(false);
  const [infoId, setInfoId] = useState(null);

  const handleAdd = () => {
    addUser(newName, newStatus);
    setOpenAdd(false);
    setNewName("");
    setNewStatus(false);
  }

  const handleEdit = () => {
    editUser(editId, editName, editStatus);
    setOpenEdit(false);
    setEditId(null);
    setEditName("");
    setEditStatus(false);
  }

  const filteredData = data
    .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
    .filter((e) => {
      if(selected === "active") return e.status === true;
      if(selected === "inactive") return e.status === false;
      return true;
    })

  return (
    <main>
      <div className='flex items-center gap-[10px] justify-between mb-10'>
        <Button variant='contained' onClick={() => setOpenAdd(true)}>
          Add User
        </Button>

        <TextField
          size='small'
          label="Search"
          value={search}
          sx={{width:"700px"}}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select
          size='small'
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </Select>
      </div>

      <section className='flex items-center justify-center gap-[10px] flex-wrap'>
        {
          filteredData.map((e) => {
            return(
              <div
                key={e.id}
                className='flex w-80 h-80 flex-col items-center justify-center gap-[10px] p-4 border-[2px] border-gray-300 shadow-md rounded-xl'
              >
                <h1>{e.name}</h1>
                <p className={e.status ? "text-green-600" : "text-red-600"}>
                  {e.status ? "Active" : "Inactive"}
                </p>

                <div className='flex items-center gap-[10px]'>
                  <Button variant='outlined' color='error' onClick={() => deleteUser(e.id)}>
                    Delete
                  </Button>

                  <Button variant='outlined' onClick={() => {
                    setOpenEdit(true);
                    setEditId(e.id);
                    setEditName(e.name);
                    setEditStatus(e.status);
                  }}>
                    Edit
                  </Button>

                  <Button variant='outlined' onClick={() => {
                    setOpenInfo(true);
                    setInfoId(e);
                  }}>
                    Info
                  </Button>

                  <Checkbox checked={e.status} onChange={() => checkedbox(e.id)} />
                </div>
              </div>
            )
          })
        }
      </section>


      <Modal open={openAdd} onClose={() => setOpenAdd(false)}>
        <Box sx={style}>
          <Typography variant='h6'>Add User</Typography>

          <TextField
            fullWidth
            label="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            sx={{ mt: 2 }}
          />

          <div className='flex items-center mt-3'>
            <Checkbox
              checked={newStatus}
              onChange={(e) => setNewStatus(e.target.checked)}
            />
            <span>Status</span>
          </div>

          <Button
            fullWidth
            variant='contained'
            sx={{ mt: 2 }}
            onClick={handleAdd}
          >
            Add
          </Button>
        </Box>
      </Modal>


      <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
        <Box sx={style}>
          <Typography variant='h6'>Edit User</Typography>

          <TextField
            fullWidth
            label="Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            sx={{ mt: 2 }}
          />

          <div className='flex items-center mt-3'>
            <Checkbox
              checked={editStatus}
              onChange={(e) => setEditStatus(e.target.checked)}
            />
            <span>Status</span>
          </div>

          <Button
            fullWidth
            variant='contained'
            sx={{ mt: 2 }}
            onClick={handleEdit}
          >
            Save
          </Button>
        </Box>
      </Modal>

      <Modal open={openInfo} onClose={() => setOpenInfo(false)}>
        <Box sx={style}>
          <Typography variant='h6'>User Info</Typography>

          <Typography sx={{ mt: 2, fontSize: 20 }}>
            {infoId?.name}
          </Typography>

          <Typography
            sx={{ mt: 1 }}
            className={infoId?.status ? "text-green-600" : "text-red-600"}
          >
            {infoId?.status ? "Active" : "Inactive"}
          </Typography>
        </Box>
      </Modal>

    </main>
  )
}

export default Sync
