import { type FC } from "react";
import { clsx } from "clsx";
import "./WrapperPage.scss";

interface Props {
  className?: string;

  topBlock?: React.ReactNode;
  topBlockHeight?: number;

  middleBlock: React.ReactNode;

  bottomBlock?: React.ReactNode;
  bottomBlockHeight?: number;
}

export const WrapperPage: FC<Props> = ({
  className,
  topBlockHeight = 60,
  topBlock,
  middleBlock,
  bottomBlock,
  bottomBlockHeight = 70,
}) => {
  return (
    <div className={clsx("component_WrapperPage", className)}>
      {topBlock ? (
        <div
          className={"component_WrapperPage_topBlock"}
          style={{ height: `${topBlockHeight}px` }}
        >
          {topBlock}
        </div>
      ) : null}

      {middleBlock ? (
        <div
          className={"component_WrapperPage_middleBlock"}
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
          className={"component_WrapperPage_bottomBlock"}
          style={{ height: `${bottomBlockHeight}px` }}
        >
          {bottomBlock}
        </div>
      ) : null}
    </div>
  );
};
