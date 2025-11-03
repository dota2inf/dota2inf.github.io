import {  type FC, useEffect, useRef, useState } from "react";
import "./PaginationLoading.scss";

type Props = {
  request: () => Promise<unknown>;
  stopLoading?: boolean;
};

export const PaginationLoading: FC<Props> = ({
  request,
  stopLoading,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (stopLoading) return;

    const element = observerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading) {
          setLoading(true);
          request().finally(() => setLoading(false));
        }
      },
      { threshold: 1.0 },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [request, loading, stopLoading]);

  return (
    <div ref={observerRef} className="component_PaginationLoading">
      {loading && (
        <div className="component_PaginationLoading_loadingBar">
          <div className="component_PaginationLoading_progress" />
        </div>
      )}
    </div>
  );
}
