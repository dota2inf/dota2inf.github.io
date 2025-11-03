import { type FC } from "react";
import { clsx } from "clsx";
import "./BottomText.scss";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
  title?: string;
}

export const BottomText: FC<Props> = ({
  className,
  title,
}) => {
  const { t } = useTranslation();
  return (
    <div className={clsx("component_BottomText", "no_select", className)}>
      {title || t('bottomLine')}
    </div>
  );
};
