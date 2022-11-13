import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Member: [],
  EditForm: true,
  EditMember: {
    key: "",
    firstname: "",
    lastname: "",
    job: "",
    rank: "",
    totalAge: "",
    status: "",
  },
};

export const crudReducer = createSlice({
  name: "crud",
  initialState: initialState,
  reducers: {
    ADD_MEMBER: (state, action) => {
      state.Member.push(action.payload);
    },

    DELETE_MEMBER: (state, action) => {
      state.Member = state.Member.filter((m) => m.key !== action.payload.key);
    },

    FORM_EDIT: (state, action) => {
      state.EditForm = false;
      state.EditMember.key = action.payload.key;
      state.EditMember.firstname = action.payload.fname;
      state.EditMember.lastname = action.payload.lname;
      state.EditMember.job = action.payload.job;
      state.EditMember.rank = action.payload.rank;
      state.EditMember.totalAge =action.payload.totalAge;
      state.EditMember.status = action.payload.status;
    },

    POPUP_CLOSE: (state, ac) => {
      state.popEdit = false;
    },

    UPDATE_MEMBER: (state, action) => {
      state.Member.map((m) => {
        if (m.key === action.payload.key) {
          m.fname = action.payload.fname;
          m.lname = action.payload.lname;
          m.fullname = action.payload.fullname;
          m.job = action.payload.job;
          m.rank = action.payload.rank;
          m.totalAge = action.payload.totalAge;
          m.status = action.payload.status;
        }
      })
      state.EditForm = true;
      ;
    },
  },
});
export const {
  ADD_MEMBER,
  DELETE_MEMBER,
  FORM_EDIT,
  POPUP_CLOSE,
  UPDATE_MEMBER,
} = crudReducer.actions;
export default crudReducer.reducer;
