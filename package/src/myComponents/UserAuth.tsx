"use client";
import { useEffect, useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";

export default function UserAuth() {
  const [user, setUser] = useState({ userId: "", username: "" });

  useEffect(() => {
    (async () => {
      try {
        const { username, userId } = await getCurrentUser();
        console.info("username", username);
        if (user.userId !== userId) {
          setUser((preData) => {
            const newDara = { ...preData };
            newDara.userId = userId;
            newDara.username = username;
            return newDara;
          });
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return user;
}
