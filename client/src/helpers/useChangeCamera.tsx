import { useState, ChangeEvent } from 'react';

function useChangeCamera() {
  const [deviceId, setDeviceId] = useState<string>();
  function onChangeCamera(event: ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    setDeviceId(event.target.value);
  }
  return [deviceId, onChangeCamera] as const;
}
export default useChangeCamera;
