import React, { useState } from "react";

const BookingPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Submitted:", formData);
        alert("Booking successful!");
        // Future: API call to backend
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
                    Book Your Experience
                </h2>

                <label className="block mb-4">
                    <span className="text-gray-700">Name</span>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Email</span>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </label>

                <label className="block mb-6">
                    <span className="text-gray-700">Date of Visit</span>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </label>

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
                >
                    Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default BookingPage;
