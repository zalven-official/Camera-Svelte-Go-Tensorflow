import { createRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';

function useScreenShot(
  callback: (imageSrc: string | null | undefined) => void
) {
  const webcamRef = createRef<Webcam>();
  const [webcamImg, setWebcamImg] = useState<string | null>();
  const webcamCapture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setWebcamImg(webcamImg);
    callback(imageSrc);
  }, [webcamRef, callback, webcamImg]);

  return [webcamRef, webcamImg, webcamCapture] as const;
}
export default useScreenShot;
