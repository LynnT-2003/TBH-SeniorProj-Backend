import React from "react";
import { Grid, Item } from "@mui/material";

const SearchAndFilter = () => {
  return (
    <div>
      <Grid container spacing={2} className="">
        <Grid xs={8} className="pl-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 border border-slate-800"
          />
        </Grid>
        <Grid xs={4} className="flex justify-end">
          <select className="border border-slate-800 py-0.5 pr-5">
            <option value="" disabled selected hidden>
              Filter by...
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchAndFilter;
