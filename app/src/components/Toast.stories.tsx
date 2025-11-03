import { ToastContainer, Slide, toast } from "react-toastify";

export default {
  title: "Components/Toast",
  component: ToastContainer,
};

export const Primary = () => (
  <div>
    <ToastContainer
      position="top-center"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
    />
    <button
      onClick={() => {
        toast("Simple toast");
      }}
    >toast</button>
    <br />
    <button
      title="toast warn"
      onClick={() => {
        toast.warn("Toast warn");
      }}
    >toast warn</button>
    <br />
    <button
      onClick={() => {
        toast.error("Toast error");
      }}
    >toast Error</button>
  </div>
);
