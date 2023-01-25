import { TokenProvider } from "./src/Presentation/context/TokenContext";
import { Navigator } from "./src/Presentation/navigator/Navigator";

const TokenState = ({ children }: any) => {
  return <TokenProvider>{children}</TokenProvider>;
};

export default function App() {
  return (
    <TokenState>
      <Navigator />
    </TokenState>
  );
}
