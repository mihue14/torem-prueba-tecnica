import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { ChatsState, ChatTabProps, TicketData } from '../types/chat';

const initialState: ChatsState = {
  chats: [],
  modalTicket: [],
  isAllowedExpand: true
};

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setChatsData: (state, action: PayloadAction<Array<ChatTabProps>>) => {
      state.chats = action.payload;
    },
    setIsAllowedExpand: (state, action: PayloadAction<boolean>) => {
      state.isAllowedExpand = action.payload;
    },
    setModalTicket: (state, action: PayloadAction<Array<TicketData>>) => {
      state.modalTicket = action.payload;
    }
  }
});

export const { setChatsData, setIsAllowedExpand, setModalTicket } = chatsSlice.actions;

export const getChats = (state: RootState) => state.chats;
export const getIsAllowedExpand = (state: RootState) => state.chats.isAllowedExpand;
export const getModalTicket = (state: RootState) => state.chats.modalTicket;

export default chatsSlice.reducer;
