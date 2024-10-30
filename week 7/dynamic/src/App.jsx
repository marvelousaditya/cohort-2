import { useRecoilValue, RecoilRoot } from "recoil";
import {
  networkAtom,
  notificationAtom,
  messageAtom,
  jobsAtom,
  countSelector,
} from "./store/atom/atoms";

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
  const network = useRecoilValue(networkAtom);
  const job = useRecoilValue(jobsAtom);
  const notifications = useRecoilValue(notificationAtom);
  const message = useRecoilValue(messageAtom);
  const totalCount = useRecoilValue(countSelector);
  return (
    <div>
      <button>Home</button>

      <button>Network({network >= 100 ? "99+" : network})</button>
      <button>Jobs({job})</button>
      <button>Messaging({message})</button>
      <button>Notifications({notifications})</button>

      <button>Me({totalCount})</button>
    </div>
  );
}
export default App;
