import { useState } from "react";
import "./App.css";
type Student = {
    name: string;
    email: string;
    phone: string;
    course: string;
    gender: string;
};
function App() {
    const [student, setStudent] = useState<Student>({
        name: "",
        email: "",
        phone : "",
        course: "",
        gender: ""
    });
    const [submittedStudent, setSubmittedStudent] = useState<Student | null>(null);
    const [error, setError] = useState("");
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (
            student.name.trim() === "" ||
            student.email.trim() === "" ||
            student.phone.trim() === "" ||
            student.course === "" ||
            student.gender === ""
        ) {
            setError("Please fill in all fields.");
            setSubmittedStudent(null);
            return;
        }
        setError("");
        setSubmittedStudent(student);
    }
    return (
        <div className="app">
            <h1>Student Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={student.name}
                    onChange={(e) => setStudent({
                        ...student,
                        name: e.target.value
                    })}
                />
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={student.email}
                    onChange={(e) => setStudent({
                        ...student,
                        email: e.target.value
                    })}
                />
                <label>Phone </label>
                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={student.phone}
                    onChange={(e) => setStudent({
                        ...student,
                        phone: e.target.value
                    })}
                />
                <label>Course</label>
                <select
                    value={student.course}
                    onChange={(e) => setStudent({
                        ...student,
                        course: e.target.value
                    })}
                >
                    <option value="">Select Course</option>
                    <option value="React">React</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                </select>
                <label>Gender</label>
                <div className="gender-options">
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={student.gender === "Male"}
                            onChange={(e) => setStudent({
                                ...student,
                                gender: e.target.value
                            })}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={student.gender === "Female"}
                            onChange={(e) => setStudent({
                                ...student,
                                gender: e.target.value
                            })}
                        />
                        Female
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Other"
                            checked={student.gender === "Other"}
                            onChange={(e) => setStudent({
                                ...student,
                                gender: e.target.value
                            })}
                        />
                        Other
                    </label>
                </div>
                <button type="submit">Register Student</button>
            </form>
            {error && (
                <p className="error">{error}</p>
            )}
            {submittedStudent && (
                <div className="student-details">
                    <h2>Student Details</h2>
                    <p>Name: {submittedStudent.name}</p>
                    <p>Email: {submittedStudent.email}</p>
                    <p>Phone: {submittedStudent.phone}</p>
                    <p>Course: {submittedStudent.course}</p>
                    <p>Gender: {submittedStudent.gender}</p>
                </div>
            )}
        </div>
    );
}
export default App;