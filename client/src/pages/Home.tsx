import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { SiTensorflow } from 'react-icons/si';
import { MdCameraRoll } from 'react-icons/md';
import { RiScreenshot2Line } from 'react-icons/ri';
import useMediaDevices from '../helpers/useMediaDevices';
import useScreenShot from '../helpers/useScreenShot';
import useChangeCamera from '../helpers/useChangeCamera';

function Home() {
  const [deviceId, onChangeCamera] = useChangeCamera();
  const devices = useMediaDevices();

  const [isCapture, setIsCapture] = useState(false);
  function showModal() {
    setIsCapture(!isCapture);
  }
  const [captureTensor, setOutputTensor] = useState<string>();
  const [webcamRef, webcamImg, webcamCapture] = useScreenShot(async () => {
    showModal();
  });

  return <div className="flex h-screen  m-5 " />;
}

Home.propTypes = {};

export default Home;
