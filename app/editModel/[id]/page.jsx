import EditModelForm from "@/components/EditModelForm";

const getModelById = async (id) => {
  try {
    const res = await fetch(
      `https://tbh-chat-essentials.vercel.app/api/models/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch Model.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditModel({ params }) {
  const { id } = params;
  console.log(id); // being received correctly

  const { model } = await getModelById(id);
  if (model) {
    console.log(model); // Ensure model is not undefined
    // ... rest of the code
  } else {
    console.error("Model is undefined or null");
  }
  const {
    Available_in_local_market,
    Battery,
    Brand,
    Charging_Rate,
    Display_Size,
    Display_Type,
    Main_Camera,
    Price,
    Product_Name,
    SOC,
    Weight,
    Note,
    Ram,
    Storage,
    Antutu_Score,
    DXO_Score,
    Refresh_Rate,
    Resolution,
    Camera_Opinion,
    Performance_Opinion,
    Shop,
    Review_Link,
    p_to_p,
  } = model;
  return (
    <EditModelForm
      id={id}
      Available_in_local_market={Available_in_local_market}
      Battery={Battery}
      Brand={Brand}
      Charging_Rate={Charging_Rate}
      Display_Size={Display_Size}
      Display_Type={Display_Type}
      Main_Camera={Main_Camera}
      Price={Price}
      Product_Name={Product_Name}
      SOC={SOC}
      Weight={Weight}
      Note={Note}
      Ram={Ram}
      Storage={Storage}
      Antutu_Score={Antutu_Score}
      DXO_Score={DXO_Score}
      Refresh_Rate={Refresh_Rate}
      Resolution={Resolution}
      Camera_Opinion={Camera_Opinion}
      Performance_Opinion={Performance_Opinion}
      Shop={Shop}
      Review_Link={Review_Link}
      p_to_p={p_to_p}
    />
  );
}
