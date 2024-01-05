export default function AddModel() {
  return (
    <div>
      <form className="flex flex-col gap-3">
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Brand Name"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Name"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Price"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Antutu Score"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="DXO Score"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Battery Capacity"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Charging Rate"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Display Size"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Display Type"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="ID"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Main Camera"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="SOC"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Weight"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="RAM"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Storage"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Note"
        />
        <select
          className="border border-slate-500 px-8 py-2 w-fit"
          id="availability"
        >
          <option value="" disabled selected hidden>
            Available in Local Market?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Add Model
        </button>
      </form>
    </div>
  );
}
