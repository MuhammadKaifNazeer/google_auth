"use client";

import { signIn, useSession, Session } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  const { data: session, status } = useSession();

  const handleSignIn = () => {
    signIn("google").catch((error) => {
      console.error("Error signing in:", error);
      // Handle error, e.g., show an error message to the user
    });
  };

  return (
    <>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : session ? (
        <p>Signed in as {session.user.email}</p>
      ) : (
        <button onClick={handleSignIn}>Login with Google</button>
      )}
    </>
  );
};

export default LoginPage;
