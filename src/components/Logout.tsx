import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { AppState } from "../redux/reducers";
import { logout } from "../redux/actions/userActions";

function Logout() {
  const { data } = useSelector((state: AppState) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);

  if (!data.username) return <Redirect to="/login" />;

  return <div>Logging out...</div>;
}

export default Logout;
