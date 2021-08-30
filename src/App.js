import React, { useState } from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
function App() {
  const { isLoading } = useAuth0();
  const [selectedImg, setSelectedImg] = useState(null);
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      {/* <Profile /> */}
    </>
  );
}

export default App;
