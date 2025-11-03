import { useNavigate } from "react-router-dom";
import { TestComponent } from "components/TestComponent";
import { WrapperPage } from "components/WrapperPage";

export const TestPage = () => {
  const navigate = useNavigate();

  return (
    <WrapperPage
      topBlock={<></>}
      middleBlock={
        <>
          <div>
            TESTING DEFAULT FUNCTIONALITY OF WEBPACK
            <hr />
            <div id="reader"></div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr />
            <hr />
            <TestComponent />
            <hr />
            <h3>05 test react-router</h3>
            <button onClick={() => navigate("/test1")}>navigate to test</button>
            <hr />
            <h3>
              06 use browser back / fowrard buttons (after navigate to /test)
            </h3>
          </div>
        </>
      }
      bottomBlock={<></>}
    />
  );
};
