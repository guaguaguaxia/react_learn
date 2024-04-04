import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
  name: "channel",
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannels: (state, action) => {
      state.channelList = action.payload;
    },
  },
});

const {setChannels} = channelStore.actions

const fetchChannelList = () => {
  return async (dispatch) => {
    const res = axios.get("http://geek.itheima.net/v1_0/channels")
    dispatch(setChannels((await res).data.data.channels))
  };
};

export { fetchChannelList };

const reducer = channelStore.reducer;

export default reducer;