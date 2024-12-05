// Importing the JSON file in ES modules
import data from '/public/data/studio_performance_data.json' assert { type: 'json' };

//get studios by importing json file
export async function GET(req) {
    // console.log('data', data)
    // const data = await import('../../../../public/data/studio_performance_data.json');

    return Response.json(data);
}   

