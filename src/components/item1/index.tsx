import Layout from "../layout";
import TopBar from "../topbar";

const ItemOne = () => {
  return (
    <Layout>
      <TopBar title="Item One" />
      <div className="text-left text-[16px] font-semibold leading-[24px] text-secondary">
        Item One
      </div>
    </Layout>
  );
};

export default ItemOne;
