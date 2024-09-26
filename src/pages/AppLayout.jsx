import Sidebar from "../components/Sidebar";
import style from "./AppLayout.module.css";
import Map from "../components/Map";
import User from "../components/User";
export default function AppLayout() {
  return (
    <div className={style.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
