import { createRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';

function useScreenShot(callback: (imageSrc: string | undefined) => void) {
  const webcamRef = createRef<Webcam>();
  const [webcamImg, setWebcamImg] = useState<string | undefined>();
  const webcamCapture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot()?.toString();
    setWebcamImg(imageSrc);
    callback(imageSrc);
  }, [webcamRef, callback]);

  return [webcamRef, webcamImg, webcamCapture] as const;
}
export default useScreenShot;
