import React, { useState, useCallback, useEffect, ChangeEvent } from 'react';
import Webcam from 'react-webcam';
import { SiTensorflow } from 'react-icons/si';
import { MdCameraRoll } from 'react-icons/md';
import { TbArrowBarRight } from 'react-icons/tb';

function Home() {
  const [deviceId, setDeviceId] = useState<string>();
  const [devices, setDevices] = useState<MediaDeviceInfo[]>();

  const handleDevices = useCallback(
    (mediaDevices: MediaDeviceInfo[]): void | PromiseLike<void> =>
      setDevices(mediaDevices.filter(({ kind }) => kind === 'videoinput')),
    [setDevices]
  );
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);
  function onChangeCamera(event: ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    setDeviceId(event.target.value);
  }
  return (
    <div className="flex h-screen -z-40 m-10">
      <div className="flex flex-col w-full lg:flex-row mt-24 lg:m-auto overflow-y-scroll">
        <div className="grid flex-grow h-full card bg-base-300 rounded-box place-items-center w-full">
          <div className="w-full max-w-xs p-5 absolute bottom-0 left-0">
            <p className="label">
              <span className="label-text">Pick Camera</span>
            </p>
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
          </div>
          <p className="text-lg p-5 font-bold flex">
            <MdCameraRoll className="w-10 m-1" />
            Original Camera
          </p>
          <Webcam
            audio={false}
            videoConstraints={{ deviceId }}
            height={`${100}%`}
            width={`${100}%`}
          />
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="rid flex-grow h-full card bg-base-300 rounded-box place-items-center w-full">
          <p className="text-lg p-5 font-bold flex ">
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
