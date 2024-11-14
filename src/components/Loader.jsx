import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <span className='canvas-loader' style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#F1F1F1",
        animation: "rotateLoader 1s linear infinite",
      }}></span>
      
      <p
        style={{
          fontSize: "14px",
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        {progress.toFixed(2)}%
      </p>

      <style jsx>{`
        @keyframes rotateLoader {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          p {
            fontSize: "12px";
            marginTop: "15px";
          }
        }

        @media (max-width: 480px) {
          span.canvas-loader {
            width: "40px";
            height: "40px";
          }
          p {
            fontSize: "10px";
          }
        }
      `}</style>
    </Html>
  );
};

export default CanvasLoader;
