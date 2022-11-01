import { Card, Text, Metric } from "@tremor/react";

const CardComp = () => {
  return (
    <>
      <Card maxWidth="max-w-sm">
        <Text>Sales</Text>
        <Metric>$ 71,465</Metric>
      </Card>
    </>
  );
};

export default CardComp;
