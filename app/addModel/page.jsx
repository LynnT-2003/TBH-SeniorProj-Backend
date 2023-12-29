export default function AddTopic() {
  return (
    <div>
      <form className="flex flex-col gap-3">
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Model Name"
        />
      </form>
    </div>
  );
}
