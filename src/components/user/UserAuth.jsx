import React from "react";
import UserSignup from "./UserSignup";
import { useDispatch, useSelector } from "react-redux";
import { changeClose } from "../../slice/userSlice";
import { signUp } from "../../utils/constant";
import UserLogin from "./UserLogin";

export default function UserAuth() {
  const dispatch = useDispatch();
  const { currentAuth } = useSelector(({ user }) => user);
  return (
    <>
      <div onClick={() => dispatch(changeClose(false))} className="bg"></div>
      {currentAuth === signUp ? <UserSignup /> : <UserLogin />}
    </>
  );
}
