"use client";
import React, { useState } from "react";

const createProfile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [message, setMessage] = useState("");
  const formHandler = async (e) => {
    e.preventDefault();
    const data = await fetch("/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        occupation,
      }),
    });
    const res = await data.json();
    if (!res.created) {
      setMessage("failed to get data.");
    } else setMessage("profile created");
  };
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="my-4 text-3xl font-semibold">Creating your profile</h1>
      <div className="p-10 border rounded">
        <form onSubmit={formHandler} className="flex flex-col gap-4">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="enter your name..."
            name="name"
            className="border border-slate-600 rounded px-4 py-2"
          />
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="enter your age..."
            name="age"
            className="border border-slate-600 rounded px-4 py-2"
          />
          <input
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            type="text"
            placeholder="enter your occupation..."
            name="occupation"
            className="border border-slate-600 rounded px-4 py-2"
          />
          <button
            type="submit"
            className="bg-lime-600 w-full rounded py-2 text-center"
          >
            Create one
          </button>
        </form>
        {message && (
          <h1>
            {message} for {name}
          </h1>
        )}
      </div>
    </div>
  );
};
export default createProfile;
