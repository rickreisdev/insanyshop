import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <main
      style={{
        padding: "7rem 10rem",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        fontFamily: "Inter, sans-serif",
        color: "#535353",
      }}
    >
      <h3>Carregando produtos</h3>
      <Spinner />
    </main>
  );
}
