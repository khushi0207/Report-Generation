import { useState, useEffect } from "react";
import { createReport, deleteReport, getAllReport, updateReport } from '../actions/reportAction';
import jsPDF from 'jspdf';
import Temp1 from "./Temp1";

function Home2() {
    const [data, setData] = useState({
        name: "",
        description: "",
        duration: "",
        location: "",
        image: "",
        template: "",
        id: ''
    });
    const [allReport, setAllReport] = useState([]);
    const [selectedReport, setSelectedReport] = useState(null);
    const [loadReport, setLoadReport] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await getAllReport();
            if (response && response.data) {
                setAllReport(response.data);
            } else {
                alert(`Failed to fetch reports: ${response}`);
            }
        } catch (err) {
            alert(`Error: ${err}`);
        }
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!data.name || !data.description || !data.duration || !data.location || !data.image || !data.template) {
            alert('Please fill all the fields.');
            return;
        }
        const body = {
            name: data.name,
            description: data.description,
            duration: data.duration,
            location: data.location,
            image: data.image
        };

        createReport(body)
            .then((res) => {
                alert('Submitted Successfully!');
                setData({
                    name: '',
                    description: '',
                    duration: '',
                    location: '',
                    image: ''
                });
                fetchData();
            })
            .catch(err => {
                console.error('Error:', err);
            });
    };

    const handleDelete = async (id) => {
        try {
            const response = await deleteReport(id);
            alert('Deleted Successfully!');
            fetchData();
        } catch (err) {
            alert(`Error: ${err}`);
        }
    };

    const handleUpdate = async () => {
        if (!data.name || !data.description || !data.duration || !data.location || !data.image) {
            alert('Please fill all the fields.');
            return;
        }

        const body = {
            name: data.name,
            description: data.description,
            duration: data.duration,
            location: data.location,
            image: data.image
        };

        try {
            const response = await updateReport(data.id, body);
            alert('Updated Successfully!');
            setData({
                name: '',
                description: '',
                duration: '',
                location: '',
                image: ''
            });
            fetchData();
        } catch (err) {
            alert(`Error: ${err}`);
        }
    };

    return (
        <>
            <div>
                <h1>Reports</h1>
                <center>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Title for Event"
                            value={data.name}
                            name="name"
                            onChange={handleChange}
                            required
                        /><br />

                        <input
                            type="text"
                            placeholder="Description"
                            value={data.description}
                            name="description"
                            onChange={handleChange}
                            required
                        /><br />

                        <input
                            type="date"
                            placeholder="Event Date"
                            value={data.duration}
                            name="duration"
                            onChange={handleChange}
                            required
                        /><br />

                        <input
                            type="text"
                            placeholder="Event Venue"
                            value={data.location}
                            name="location"
                            onChange={handleChange}
                            required
                        /><br />

                        <input
                            type="text"
                            placeholder="Event Image URL"
                            value={data.image}
                            name="image"
                            onChange={handleChange}
                            required
                        /><br />

                        <button onClick={handleSubmit}>Create Report</button>&nbsp;
                        <button onClick={() => handleDelete(data.id)}>Delete Report</button>&nbsp;
                        <button onClick={handleUpdate}>Edit Report</button>&nbsp;
                    </div>
                </center>
            </div>

            <Temp1 />
        </>
    );
}

export default Home2;
