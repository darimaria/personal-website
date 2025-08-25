import React, { useRef, useState, useEffect } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const [loading, setLoading] = useState(false);

  const CANVAS_SIZE = 280; // Large drawing area for user comfort
  const TARGET_SIZE = 28; // What we send to Lambda

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // White background (important for MNIST-like inputs)
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
  }, []);

  const startDrawing = (e) => {
    isDrawing.current = true;
    draw(e);
  };

  const stopDrawing = () => {
    isDrawing.current = false;
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
  };

  const draw = (e) => {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.beginPath();
  };

  const submitDrawing = async () => {
    // setLoading(true);
    const canvas = canvasRef.current;

    // Create offscreen canvas for resizing
    const offscreen = document.createElement("canvas");
    offscreen.width = TARGET_SIZE;
    offscreen.height = TARGET_SIZE;
    const offCtx = offscreen.getContext("2d");

    // Draw scaled down image
    offCtx.drawImage(canvas, 0, 0, TARGET_SIZE, TARGET_SIZE);

    // Get pixel data (RGBA)
    const imgData = offCtx.getImageData(0, 0, TARGET_SIZE, TARGET_SIZE);
    const pixels = imgData.data;

    // Convert to grayscale array
    const grayscale = [];
    for (let i = 0; i < pixels.length; i += 4) {
      // Use average of RGB for grayscale
      const avg = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
      grayscale.push(avg / 255); // normalize 0-1
    }

    console.log(grayscale);

    try {
      const response = await fetch(
        "https://pux0gq888a.execute-api.us-east-2.amazonaws.com/default/mnistLambdaFunction",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: grayscale }),
        }
      );

      const data = await response.json();
      console.log("Prediction:", data.prediction);
      alert("Predicted digit: " + data.prediction); // simple way to show result
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        className="border border-black rounded"
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseLeave={stopDrawing}
      />
      <div className="flex gap-2">
        <button
          onClick={clearCanvas}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Clear
        </button>
        <button
          onClick={submitDrawing}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
