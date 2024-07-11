import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const LoginSignUpSlice = createSlice({
    name : "LoginSignUpSlice",
    initialState : {
        token : null,
        userId : null,
        email : null,
        password : null,
        Profileimage : null,
        name : null,
        phone: null,
        registered : false,
        loginpageActive : false,
        signupPageActive : false
    },
    reducers : {
        signup(state, action){
          console.log(action.payload);
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.email = action.payload.email;
            state.name = action.payload.name,
            state.phone = action.payload.phone

        },
        signIn(state, action) {
          console.log(action.payload);
          state.token = action.payload.token;
          state.userId = action.payload.userId;
          state.email = action.payload.email;
          state.name = action.payload.name,
          state.phone = action.payload.phone
          },
          logout(state) {
            state.token = null,
            state.userId = null,
            state.email = null,
            state.password = null,
            state.Profileimage = null,
            state.name = null,
            state.registered = false,
            state.loginpageActive = false,
            state.signupPageActive = false
          },
          updateNumber(state, action) {
            console.log(action);
            state.phone = action.payload
          },
          updateToken(state, action) {
            console.log(action);
            state.token = action.payload
          },
          activePages(state, action){
            console.log(action);
            state.loginpageActive = action.payload.login,
            state.signupPageActive = action.payload.signup
          },
          registered(state,action){
            state.registered = action.payload
          }
    }
})

const Islogin = createSlice({
  name : "Islogin",
  initialState : {
    login : false,
    signupp : false
  },
  reducers : {
    login(state){
      state.login = true
    //  if(state.login){
    //   state.login = false;
    //  }
    //  else{
    //   state.login = true;
    //  }
    },
    signupCheck(state){
      // if(state.signupp){
      //   state.signupp = false;
      //  }
      //  else{
      //   state.signupp = true;
      //  }
    }
  }
})

export const loginreducer =  Islogin.reducer;
export const {login,signupCheck} =  Islogin.actions;
export const  LoginSignUpSlicee  = LoginSignUpSlice.reducer;
export const {signup ,registered, signIn,logout,update,messages,updateName,activePages,updateNumber,updateToken}  = LoginSignUpSlice.actions;