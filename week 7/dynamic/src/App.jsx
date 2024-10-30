import { useRecoilValue, RecoilRoot, useRecoilState } from "recoil";
import {
  notificationAtom,
  totalNotificationSelector,
} from "./store/atom/atoms";
import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </div>
  );
}

function MainApp() {
  // const [network, setNetwork] = useState({});
  const [network, setNetwork] = useRecoilState(notificationAtom);
  const totalNotification = useRecoilValue(totalNotificationSelector);

  // useEffect(() => {
  //   fetch("http://localhost:3000/notifications").then(async (res) => {
  //     const json = await res.json();
  //     setNetwork(json);
  //   });
  // }, []);
  return (
    <div>
      <button>notification {network.notifications}</button>
      <button>network {network.network}</button>
      <button>jobs {network.jobs}</button>
      <button>message {network.messaging}</button>

      <button>Me {totalNotification}</button>
    </div>
  );
}
export default App;
