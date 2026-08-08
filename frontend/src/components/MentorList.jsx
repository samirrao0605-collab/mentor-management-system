import { useEffect, useState } from "react";
import { getAllMentors, deleteMentor } from "../services/MentorService";
import "../styles/MentorList.css";

function MentorList({ refresh, onEdit }) {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        const loadMentors = async () => {
            try {
                const response = await getAllMentors();
                setMentors(response.data);
            } catch (error) {
                console.error("Error fetching mentors:", error);
            }
        };

        loadMentors();
    }, [refresh]);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this mentor?")) {
            try {
                await deleteMentor(id);

                const response = await getAllMentors();
                setMentors(response.data);

                alert("Mentor deleted successfully!");
            } catch (error) {
                console.error("Error deleting mentor:", error);
                alert("Failed to delete mentor.");
            }
        }
    };

    return (
        <div className="list-container">

            <h2>Mentor List</h2>

            {mentors.length === 0 ? (

                <p className="empty-message">
                    No mentors found. Add your first mentor above.
                </p>

            ) : (

                <table>

                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Technology</th>
                        <th>Experience</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>

                    {mentors.map((mentor) => (

                        <tr key={mentor.id}>

                            <td>{mentor.id}</td>
                            <td>{mentor.name}</td>
                            <td>{mentor.email}</td>
                            <td>{mentor.technology}</td>
                            <td>{mentor.experience} years</td>
                            <td>{mentor.phone}</td>

                            <td>

                                <button
                                    className="edit-btn"
                                    onClick={() => onEdit(mentor)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(mentor.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                    </tbody>

                </table>

            )}

        </div>
    );
}

export default MentorList;