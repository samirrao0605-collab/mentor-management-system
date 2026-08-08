import { useState } from "react";
import Navbar from "./components/Navbar";
import MentorForm from "./components/MentorForm";
import MentorList from "./components/MentorList";
import "./styles/App.css";

function App() {

    const [refresh, setRefresh] = useState(false);
    const [editingMentor, setEditingMentor] = useState(null);

    const refreshMentors = () => {
        setRefresh((prev) => !prev);
    };

    const handleEdit = (mentor) => {
        setEditingMentor(mentor);
    };

    const handleCancelEdit = () => {
        setEditingMentor(null);
    };

    return (
        <>
            <Navbar />

            <MentorForm
                refreshMentors={refreshMentors}
                editingMentor={editingMentor}
                onCancelEdit={handleCancelEdit}
            />

            <MentorList
                refresh={refresh}
                onEdit={handleEdit}
            />
        </>
    );
}

export default App;