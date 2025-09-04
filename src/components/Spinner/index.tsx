export default function Spinner() {
  return (
    <>
      <div className="spinner" />
      <style>
        {`
          .spinner {
            width: 48px;
            height: 48px;
            border: 4px solid #e0e0e0;
            border-top: 4px solid #1b9847;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
}
