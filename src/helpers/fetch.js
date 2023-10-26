export async function returnFetch(url){
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error('error de los datos');
        }
        const data = await response.json();
        return data
    }catch(error){
        console.log("error de fetch: ",error)
        throw error
    }
    
    
}