import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../api/contacts'
import { toast } from 'react-toastify';

export const fetchContacts = createAsyncThunk(
    'contacts/fetch',
    async (_, thunkAPI) => {
      try {
        const data = await api.getContacts();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
  
  const isDublicate = ({ name }, contacts) => {
    const normalizedName = name.toLocaleLowerCase();
  
    const result = contacts.find(item => {
      return normalizedName === item.name.toLocaleLowerCase();
    });
    return Boolean(result);
  };
  
  export const addContact = createAsyncThunk(
    'contacts/add',
    async (data, { rejectWithValue }) => {
      try {
        const result = await api.addContact(data);
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    },
    {
      condition: (data, { getState }) => {
        const { contacts } = getState();
        if (isDublicate(data, contacts.items)) {
            toast.error(`${data.name} is already in contacts.`, {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
              });
          return false;
        }
      },
    }
  );
  
  export const removeContact = createAsyncThunk(
    'contact/remove',
    async (id, { rejectWithValue }) => {
      try {
        await api.removeContact(id);
        return id;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );