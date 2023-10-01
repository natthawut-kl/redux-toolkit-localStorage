import { PayloadAction, createSlice, nanoid, current } from '@reduxjs/toolkit';

const initialState = {
    users: []
};

const dataSlice = createSlice({
    name: 'addUserSlice',
    initialState,
    reducers: {
        // Pose new
        addUser: (state: any, action: any) => {
            console.log(action);
            
            const data = {
                id: nanoid(),
                name: action.payload,
                // lastName: action.payload.lastName,
                // word: action.payload,
                // birthday: action.payload,
                // nationality: action.payload,
                // idCardNumber: action.payload,
                // sex: action.payload,
                // phoneNumber: action.payload,
                // passport: action.payload,
                // expectedSalary: action.payload
            }
            state.users.push(data)

            let userDataTest = JSON.stringify(current(state.users))
            localStorage.setItem("users", userDataTest)

            // console.log(action);
        },
        // Delete
        removeUser: (state: any, action: any) => {
            const data = state.users.filter((item: any) => {
                return item.id !== action.payload
            })
            state.users = data
        }
    },
});

export const { addUser, removeUser } = dataSlice.actions;

export default dataSlice.reducer;