// import store from "@/src/store";
// import { Provider } from "react-redux";
import "@/styles/globals.scss";
// import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "@/context/ChatContext";
import { AuthContextProvider } from "@/context/AuthContext";
export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ChatContextProvider>
        <Component {...pageProps} />
      </ChatContextProvider>
    </AuthContextProvider>
  );
}
