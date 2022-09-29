import React from 'react';
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
  const [webcamRef, webcamImg, webcamCapture] = useScreenShot((image) => {
    console.log(image);
  });

  return (
    <div className="flex h-screen  m-5 ">
      <div className="flex flex-col w-full lg:flex-row my-24 lg:m-auto ">
        <div className="shadow-2xl bg-base-300 rounded-box place-items-center w-full">
          <p className="text-lg p-5 font-bold flex">
            <MdCameraRoll className="w-10 m-1" />
            Camera Input
          </p>
          <Webcam
            audio={false}
            ref={webcamRef}
            videoConstraints={{ deviceId }}
            screenshotFormat="image/jpeg"
            height={`${100}%`}
            width={`${100}%`}
          />
          <div className="flex">
            <div className="w-full max-w-xs p-5 grid sm:flex space-y-5 sm:space-y-0 space-x-0 sm:space-x-6 text-left m-0">
              <select
                className="select select-bordered"
                onChange={onChangeCamera}
              >
                {devices?.map((device, key) => {
                  const value = device.label || `Device ${key + 1}`;
                  return (
                    <option key={value} id={value} value={device.deviceId}>
                      {value}
                    </option>
                  );
                })}
              </select>
              <button
                onClick={webcamCapture}
                className="btn w-16 m-0"
                type="button"
              >
                <RiScreenshot2Line className="rounded-3xl" size={30} />
              </button>
            </div>
          </div>
        </div>

        <div className="divider lg:divider-horizontal">*</div>
        <div className="shadow-2xl bg-base-300 rounded-box place-items-center w-full">
          <p className="text-lg p-5 font-bold flex text-center">
            <SiTensorflow className="w-10 mt-1" />
            Tensor Output
          </p>
          <Webcam
            height={`${100}%`}
            width={`${100}%`}
            audio={false}
            videoConstraints={{ deviceId }}
          />
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
