import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LockKeyhole,
  Eye,
  EyeOff,
  Mail,
  ArrowRight,
  MapPin,
  User,
} from "lucide-react";

const Signform = ({ role }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    primarySkillArea: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSignup(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:8000/api/signup", {
        ...formData,
        role,
      });
      if (response.data.success) {
        setSuccess(response.data.message || "Account Created Successfully");
        setFormData({
          name: "",
          email: "",
          primarySkillArea: "",
          password: "",
        });
      } else {
        setError(response.data.message || "Signup Failed!");
      }
    } catch (error) {
      console.log(error);
      setError(
        error.response?.data?.message ||
          "Unable to connect with the server please try again...",
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleSignup}>
      <div className="flex flex-col px-2 py-4 gap-1 justify-center relative">
        <User className="absolute left-4 top-[64%] -translate-y-1/2 text-gray-400" />
        <label className="font-semibold pb-0.5">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Alexa Rivera"
          className="w-full border border-[#d1d5db] rounded-lg py-2 pl-9 pr-3"
          required
        />
      </div>
      <div className="flex flex-col px-2  gap-1 justify-center relative">
        <label className="font-semibold pb-0.5">Email Address</label>
        <Mail
          size={18}
          className="absolute ml-1 left-4 top-[72%] -translate-y-1/2 text-gray-400"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="name@company.com"
          className="w-full border border-[#d1d5db] rounded-lg py-2 pl-8 pr-3"
          required
        />
      </div>
      <div className="flex flex-col px-2 pt-4 pb-3 gap-1 justify-center relative">
        <label className="font-semibold pb-0.5">Primary Skill Area</label>
        <MapPin
          size={20}
          className="absolute left-4 top-[66%] -translate-y-1/2 text-gray-400"
        />
        <select
          name="primarySkillArea"
          onChange={handleChange}
          value={formData.primarySkillArea}
          className="w-full border border-[#d1d5db] pl-6 py-2 text-[#6b7280] rounded-lg"
        >
          <option disabled selected>
            Select an area
          </option>
          <option value="Design & Creative">Design & Creative</option>
          <option value="Development & IT">Development & IT</option>
          <option value="Business & Marketing">Business & Marketing</option>
          <option value="Language">Language</option>
          <option value="Lifestyles & wellness">Lifestyles & wellness</option>
        </select>
      </div>
      <div className="flex flex-col px-2 justify-center gap-1">
        <label className="font-semibold pb-0.5">Password</label>
        <div className="relative">
          <LockKeyhole
            className="absolute left-3 top-[50%] -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Enter your password"
            className="w-full border border-[#d1d5db] pl-8 py-2 text-[#6b7280] rounded-lg"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="absolute right-3 top-[50%] -translate-y-1/2 text-gray-400 cursor-pointer" />
            ) : (
              <Eye className="absolute right-3 top-[50%] -translate-y-1/2 text-gray-400 cursor-pointer" />
            )}
          </button>
        </div>
        <p className="text-xs">
          Minimum 8 characters with at least one symbol.
        </p>
      </div>
      <div className="p-2">
        <button
          disabled={loading}
          className="w-full py-2 bg-[#4f46e5] shadow-gray-300 shadow-2xl transition-all focus:scale-95 text-white rounded-lg hover:bg-[#4338ca] mt-2 flex items-center justify-center"
          type="submit"
        >
          {loading ? "Create Account..." : "Create Account"}{" "}
          <ArrowRight className="ml-1" size={18} />
        </button>
      </div>
      {error && <p className="text-red-600 text-sm px-3 align-bottom">{error}</p>}
      {success && <p className="text-green-600 text-sm px-3">{success}</p>}
    </form>
  );
};

export default Signform;
