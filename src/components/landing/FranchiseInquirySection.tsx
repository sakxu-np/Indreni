

import React, { useState } from "react";
import { Button } from "../ui/button";

const FranchiseEnquirySection: React.FC = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    flagship: "National",
    location: "",
    budget: "Rs 35 Lakhs",
    openingDate: "",
    franchiseExperience: "",
    foodServiceIndustry: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    if (!form.location.trim()) newErrors.location = "Preferred location is required.";
    if (!form.budget.trim()) newErrors.budget = "Budget is required.";
    if (!form.openingDate.trim()) newErrors.openingDate = "Planned opening date is required.";
    if (!form.franchiseExperience) newErrors.franchiseExperience = "Please select an option.";
    if (!form.foodServiceIndustry) newErrors.foodServiceIndustry = "Please select an option.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    // Here you can handle the form submission, e.g., send to API
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Express Franchise Enquiry Form</h2>
      {submitted ? (
        <div className="text-green-600 text-center font-semibold">Thank you for your inquiry! We will contact you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium mb-1">Full Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">Email<span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">Contact No.</label>
            <input
              type="text"
              name="contactNo"
              value={form.contactNo}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Flagship:</label>
            <select
              name="flagship"
              value={form.flagship}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="National">National</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Preferred Location<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">Budget<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
              placeholder="Rs 35 Lakhs"
            />
            {errors.budget && <p className="text-red-500 text-sm">{errors.budget}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">When are you planning to open your café?<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="openingDate"
              value={form.openingDate}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
              placeholder="e.g. August 2025"
            />
            {errors.openingDate && <p className="text-red-500 text-sm">{errors.openingDate}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">Do you have experience of owning a franchise?<span className="text-red-500">*</span></label>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="franchiseExperience"
                  value="Yes"
                  checked={form.franchiseExperience === "Yes"}
                  onChange={handleChange}
                  required
                /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="franchiseExperience"
                  value="No"
                  checked={form.franchiseExperience === "No"}
                  onChange={handleChange}
                  required
                /> No
              </label>
            </div>
            {errors.franchiseExperience && <p className="text-red-500 text-sm">{errors.franchiseExperience}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">Are you currently part of the food service industry?<span className="text-red-500">*</span></label>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="foodServiceIndustry"
                  value="Yes"
                  checked={form.foodServiceIndustry === "Yes"}
                  onChange={handleChange}
                  required
                /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="foodServiceIndustry"
                  value="No"
                  checked={form.foodServiceIndustry === "No"}
                  onChange={handleChange}
                  required
                /> No
              </label>
            </div>
            {errors.foodServiceIndustry && <p className="text-red-500 text-sm">{errors.foodServiceIndustry}</p>}
          </div>
          <div className="pt-4">
            <Button type="submit" className="w-full">Submit</Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FranchiseEnquirySection;
