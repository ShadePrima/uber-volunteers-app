import "react-native-gesture-handler";
import RootNavigator from "./src/navigations/RootNavigator";
import {
  DestinationContextProvider,
  OriginContextProvider,
} from "./src/contexts/contexts";

export default function App() {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
        <RootNavigator />
      </OriginContextProvider>
    </DestinationContextProvider>
  );
}
