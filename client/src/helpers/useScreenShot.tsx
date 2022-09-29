import { createRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';

function useScreenShot(
  callback: (imageSrc: string | undefined | null) => void
) {
  const webcamRef = createRef<Webcam>();
  const [webcamImg, setWebcamImg] = useState<string | undefined | null>();
  const webcamCapture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setWebcamImg(imageSrc);
    callback(imageSrc);
  }, [webcamRef, callback]);

  return [webcamRef, webcamImg, webcamCapture] as const;
}
export default useScreenShot;
