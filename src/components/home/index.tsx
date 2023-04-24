import Layout from "../layout";
import TopBar from "../topbar";
import { HomeTop } from "./components/hometop";
import HomeCharts from "./components/home-charts";

const HomePage = () => {
  return (
    <Layout>
      <TopBar title="Dashboard" />
      <HomeTop />
      <HomeCharts />
    </Layout>
  );
};

export default HomePage;
