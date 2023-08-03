
import Channel from '@/components/chat/Channel';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { channel } from 'diagnostics_channel';
import { type } from 'os';
import { set } from 'zod';

type InitialState = {
    channel: Channel;
    channels: Channel[];
    user: userDto;
    isopen: boolean;
};

interface Message {
    content: string;
    from: string;
}

type userDto  = {
    id: number;
    username: string; 
    name: string;
    image: string;
    fact2Auth: boolean;
    level: number;
    XP: number;
}
type Channel = {
    id: number;
    name: string;
    image: string;
    type: string;
    password: string;
    messages: Message[];
    memberships: any[];
};
const initialState = {

    channel:{} as Channel,
    channels: [] as Channel[],
    user: {} as userDto,
    isopen: false,

} as InitialState

export const currentChannelSlice = createSlice({
    name: 'currentChannel',
    initialState,
    reducers: {
        setcurrentChannel: (state , action: PayloadAction<any>) => {
            console.log('action.payload', action.payload)
            state.channel  = action.payload;
        },
        setMessage: (state: any, action: PayloadAction<any>) => {
            console.log('action.payload11', action.payload)
            state.channel.messages.push(action.payload );

        },
        setChannels: (state: any, action: PayloadAction<any>) => {
            state.channels = action.payload;
        },
        setnewchannel: (state: any, action: PayloadAction<any>) => {
            state.channels.unshift(action.payload);
        },
        setisopen: (state: any, action: PayloadAction<any>) => {
            state.isopen = action.payload;
        },
        setuser: (state: any, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
        setMembership: (state: any, action: PayloadAction<any>) => {
            state.channel.memberships.push(action.payload);
        }


    }
})


export const {setcurrentChannel, setMessage, setChannels, setnewchannel, setisopen, setuser, setMembership} = currentChannelSlice.actions;
export default currentChannelSlice.reducer;