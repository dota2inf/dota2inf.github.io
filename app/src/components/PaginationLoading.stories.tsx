import { PaginationLoading } from "./PaginationLoading";
import { useState } from "react";

export default {
  title: "Components/PaginationLoading",
  component: PaginationLoading,
};

export const Primary = () => {
  const [items, setItems] = useState<any>([]);
  const [isStopLoading, setStopLoading] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {items.map((it) => {
        return <div key={it}>{`item - ${it}`}</div>;
      })}
      <PaginationLoading
        request={async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
  
          if (items.length < 30) {
            setItems([...items, Math.random()]);
          }
          else {
            setStopLoading(true);
          }
          
        }}
        stopLoading={isStopLoading}
      />
    </div>
  );
};
