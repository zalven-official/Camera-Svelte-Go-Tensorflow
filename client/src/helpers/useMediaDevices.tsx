import { useState, useCallback, useEffect } from 'react';

function useMediaDevices() {
  const [devices, setDevices] = useState<MediaDeviceInfo[]>();
  const handleDevices = useCallback(
    (mediaDevices: MediaDeviceInfo[]): void | PromiseLike<void> =>
      setDevices(mediaDevices.filter(({ kind }) => kind === 'videoinput')),
    [setDevices]
  );
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);
  return devices;
}
export default useMediaDevices;
