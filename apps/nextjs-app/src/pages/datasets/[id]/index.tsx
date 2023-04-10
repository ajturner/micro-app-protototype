// pages/datasets/[id].tsx
import { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import DatasetComponent from "../../../components/DatasetComponent";

interface DatasetProps {
  dataset: any;
}

const Dataset: FunctionComponent<DatasetProps> = ({ dataset }) => {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dataset {id}</h1>
      <DatasetComponent dataset={dataset} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
//   const url = `https://hub.arcgis.com/api/v3/datasets/${id}`;
  const url = `https://www.arcgis.com/sharing/rest/content/items/${id}?f=json`;
  const response = await fetch(url);
  const dataset = await response.json();

  return {
    props: {
      dataset,
    },
  };
};

export default Dataset;
