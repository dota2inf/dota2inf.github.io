import { useState } from "react";

import { WrapperModal } from "components/WrapperModal";
import "./TestModal.scss";
import { SVG_Delete } from "svg/SVG_Delete";

import { SpinnerCircle } from "components/SpinnerCircle";

type Props = {
  onClose?: (result: boolean | null) => void;
};

export const TestModal = ({ onClose }: Props) => {
  const [isLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   Promise.all([
  //     // Level yourData
  //     requestWrap(
  //       "/api/achievements/v1/level/recalculate",
  //       {
  //         method: "POST",
  //         credentials: "include",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       },
  //       null,
  //       (data, response, status) => {
  //         return { data, response, status };
  //       },
  //     ),
  //     // Accuracy
  //     requestWrap(
  //       "/api/v1/clay_tracer/best-accuracy",
  //       {
  //         method: "GET",
  //         credentials: "include",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       },
  //       null,
  //       (data, response, status) => {
  //         return { data, response, status };
  //       },
  //     ),
  //     // Levels data
  //     requestWrap(
  //       "/api/achievements/v1/level/levels",
  //       {
  //         method: "GET",
  //         credentials: "include",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       },
  //       null,
  //       (data, response, status) => {
  //         return { data, response, status };
  //       },
  //     ),
  //   ])
  //     .then(([result1, result2, result3]) => {
  //       setLoading(false);
  //       if (result1?.status === 200 && result1?.data) {
  //         // setYouData(result1?.data);
  //       }
  //       if (result2?.status === 200 && result2?.data) {
  //         // setBestAccuracy(result2?.data);
  //       }
  //       if (result3?.status === 200 && result3?.data) {
  //         // setLevelsData(result3?.data?.levels);
  //       }
  //     })
  //     .catch((err) => console.error("Error:", err));
  // }, []);

  return (
    <div className="modal_TestModal">
      <WrapperModal
        topBlock={
          <div className="modal_TestModal_topBar">
            <div />
            <SVG_Delete
              className="no_select"
              onClick={() => {
                onClose?.(null);
              }}
            />
          </div>
        }
        middleBlock={
          isLoading ? (
            <div className="modal_TestModal_loading">
              <SpinnerCircle />
            </div>
          ) : (
            <div className="modal_TestModal_content">
              
            </div>
          )
        }
      />
    </div>
  );
};
