// Importing the JSON file in ES modules
import data from '/public/data/studio_performance_data.json' assert { type: 'json' };

//get studios by importing json file
export async function GET(req, { params }) {
    const { id } = await params;
    const filteredData = data.filter(item => item.studio_id === parseInt(id));
    console.log('filteredData', filteredData)

    return Response.json(filteredData);
}   

