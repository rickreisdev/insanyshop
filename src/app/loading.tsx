import Spinner from "@/components/Spinner";
import { LoadingContainer } from "@/styles/global";

export default function Loading() {
  return (
    <LoadingContainer>
      <h3>Carregando produtos</h3>

      <Spinner />
    </LoadingContainer>
  );
}
