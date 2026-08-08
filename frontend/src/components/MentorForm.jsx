import { useEffect, useState } from "react";
import {
    addMentor,
    updateMentor,
} from "../services/MentorService";
import "../styles/MentorForm.css";

function MentorForm({
                        refreshMentors,
                        editingMentor,
                        onCancelEdit,
                    }) {

    const [mentor, setMentor] = useState({
        name: "",
        email: "",
        technology: "",
        experience: "",
        phone: "",
    });

    useEffect(() => {

        if (editingMentor) {

            setMentor({
                name: editingMentor.name || "",
                email: editingMentor.email || "",
                technology: editingMentor.technology || "",
                experience: editingMentor.experience || "",
                phone: editingMentor.phone || "",
            });

        }

    }, [editingMentor]);

    const handleChange = (e) => {

        setMentor({
            ...mentor,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (editingMentor) {

                await updateMentor(
                    editingMentor.id,
                    {
                        ...mentor,
                        experience: Number(mentor.experience),
                    }
                );

                alert("Mentor Updated Successfully!");

            } else {

                await addMentor({
                    ...mentor,
                    experience: Number(mentor.experience),
                });

                alert("Mentor Added Successfully!");

            }

            setMentor({
                name: "",
                email: "",
                technology: "",
                experience: "",
                phone: "",
            });

            refreshMentors();

            if (editingMentor) {
                onCancelEdit();
            }

        } catch (error) {

            console.error(error);

            if (error.response) {
                alert(
                    "Error: " +
                    JSON.stringify(error.response.data)
                );
            } else {
                alert("Cannot connect to backend");
            }

        }
    };

    return (
        <div className="form-container">

            <h2>
                {editingMentor
                    ? "Edit Mentor"
                    : "Add Mentor"}
            </h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={mentor.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={mentor.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="technology"
                    placeholder="Technology"
                    value={mentor.technology}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="experience"
                    placeholder="Experience"
                    value={mentor.experience}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={mentor.phone}
                    onChange={handleChange}
                    required
                />

                <button type="submit">

                    {editingMentor
                        ? "Update Mentor"
                        : "Add Mentor"}

                </button>

                {editingMentor && (

                    <button
                        type="button"
                        onClick={onCancelEdit}
                    >
                        Cancel
                    </button>

                )}

            </form>

        </div>
    );
}

export default MentorForm;