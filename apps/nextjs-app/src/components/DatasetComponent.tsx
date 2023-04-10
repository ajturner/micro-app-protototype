// components/DatasetComponent.tsx
import { FunctionComponent } from "react";

interface DatasetComponentProps {
  dataset: any;
}

const DatasetComponent: FunctionComponent<DatasetComponentProps> = ({ dataset }) => {
  return (
    <div>
      {/* Render the dataset content */}
      <pre>{JSON.stringify(dataset, null, 2)}</pre>
    </div>
  );
};

export default DatasetComponent;
