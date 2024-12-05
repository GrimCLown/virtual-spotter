import StudioPage from "../StudioPage";

const getStudios = async (id) => {
  const response = await fetch(`http://localhost:3000/api/studios/${id}`);

  if (!response.ok) {
    console.log("Failed to fetch data");
    notFound();
  }

  return await response.json();
};

const StudioPerformance = async ({ params }) => {
  const { id } = await params;
  const studioData = await getStudios(id);

  if (studioData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <StudioPage studios={studioData}/>
    </div>
  );
};

export default StudioPerformance;
