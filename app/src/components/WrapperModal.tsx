import { type FC } from "react";
import { clsx } from "clsx";
import "./WrapperModal.scss";

interface Props {
  className?: string;

  topBlock?: React.ReactNode;
  topBlockHeight?: number;

  middleBlock: React.ReactNode;

  bottomBlock?: React.ReactNode;
  bottomBlockHeight?: number;
}

export const WrapperModal: FC<Props> = ({
  className,
  topBlockHeight = 56,
  topBlock,
  middleBlock,
  bottomBlock,
  bottomBlockHeight = 56,
}) => {
  return (
    <div className={clsx("component_WrapperModal", className)}>
      {topBlock ? (
        <div
          className={"component_WrapperModal_topBlock"}
          style={{ height: `${topBlockHeight}px` }}
        >
          {topBlock}
        </div>
      ) : null}

      {middleBlock ? (
        <div
          className={"component_WrapperModal_middleBlock"}
          style={{
            paddingTop: `${topBlock ? topBlockHeight : 0}px`,
            paddingBottom: `${bottomBlock ? bottomBlockHeight : 0}px`,
          }}
        >
          {middleBlock}
        </div>
      ) : null}

      {bottomBlock ? (
        <div
          className={"component_WrapperModal_bottomBlock"}
          style={{ height: `${bottomBlockHeight}px` }}
        >
          {bottomBlock}
        </div>
      ) : null}
    </div>
  );
};
