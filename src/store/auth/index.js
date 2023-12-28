import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: 'yusuf',
        fullName: 'yusufx',
        avatar: 'https://w0.peakpx.com/wallpaper/120/786/HD-wallpaper-jake-sully-avatar-2-the-way-of-water.jpg'
    },
    accounts: [
        {
            id: 1,
            username: 'yusuf-x',
            fullName: 'yusuf',
            avatar: 'https://w0.peakpx.com/wallpaper/120/786/HD-wallpaper-jake-sully-avatar-2-the-way-of-water.jpg'
        },
        {
            id: 2,
            username: 'karakaya-x',
            fullName: 'karakaya',
            avatar: 'https://w0.peakpx.com/wallpaper/120/786/HD-wallpaper-jake-sully-avatar-2-the-way-of-water.jpg'
        },
    ]
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const {_addAccount, _removeAccount, _setCurrentAccount} = auth.actions
export default auth.reducer