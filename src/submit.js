import { useStore } from "./store";

export const SubmitButton = () => {
  const { handleSubmit } = useStore((state) => ({
    handleSubmit: state.handleSubmit,
  }));
  return (
    <div style={{ marginTop: "15px" }}>
      <button
        onClick={handleSubmit}
        style={{ margin: "auto" }}
        className="button"
      >
        Submit
      </button>
    </div>
  );
};
