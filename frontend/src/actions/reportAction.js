import { ENDPOINT_URL } from '../constants/Constant';
export const createReport = async(report) =>{
    try{
        const response = await fetch(ENDPOINT_URL + '/createReport', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept : 'application/json'
        },
        body: JSON.stringify(report)
    });

    if (!response.ok) {
        throw new Error(`Cannot create report ${response.status}`);
    }

    return await response.json();
} catch (err) {
    console.error('Error while creating the report:', err);
    throw err; 
}
};

export const getAllReport = async()=>{
    try{
        const response = await fetch(ENDPOINT_URL + '/getAllReport', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept : 'application/json'
            }  

        });
        if (!response.ok) {
            throw new Error(`Cannot get all report ${response.status}`);
            }
            return await response.json();
    }catch(err){
        throw new Error(`HTTP ERROR !! STATUS: ${err.status}`)

    }
};

export const getReportById = async(id) =>{
    try{
        const response = await fetch(ENDPOINT_URL+`/getReportById/${id}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                Accept : 'application/json'
            }
        });

        if(!response.ok){
            throw new Error(`Cannot get report by id ${response.status}`);
        }
        return await response.json();

    }catch(err){
        console.error('Error while getting the report:', err);
        throw err;
    }
};

export const deleteReport = async(id) =>{
    try{
        const response = await fetch(ENDPOINT_URL+`/deleteReport/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                Accept : 'application/json'
            }
        });

        if(!response.ok){
            throw new Error(`Cannot get report by id ${response.status}`);
        }
        return await response.json();

    }catch(err){
        console.error('Error while getting the report:', err);
        throw err;
    }
};

export const updateReport = async(id) =>{
    try{
        const response = await fetch(ENDPOINT_URL+`/updateReport/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
                Accept : 'application/json'
            },
        });

        if(!response.ok){
            throw new Error(`Cannot get report by id ${response.status}`);
        }
        return await response.json();

    }catch(err){
        console.error('Error while getting the report:', err);
        throw err;
    }
};

