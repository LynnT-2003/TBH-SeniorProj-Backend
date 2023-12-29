export default function EditModelForm() {
  return (
    <div>
      <form className="flex flex-col gap-3">
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Model Name"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Model Description"
        />
        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Update Model
        </button>
      </form>
    </div>
  );
}
