import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FormInput from "../components/input/FormInput";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../slices/usersApiSlice";

import { useState } from "react";

const Profile = () => {
  const { id } = useParams();
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);

  const { data: profileData, isLoading, error } = useGetProfileQuery(id);
  const [updateProfle, { isLoading: isUpdating }] = useUpdateProfileMutation();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  useState(() => {
    if (profileData) {
      setFormData({
        username: profileData.username,
        email: profileData.email,
      });
    }
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfle({
        id,
        profileData: formData,
      }).unwrap();
    } catch (error) {}
  };

  if (isLoading) return <p>Loading profile...</p>;
  if (error) return <p>Error loading profile: {error.message}</p>;

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 shadow rounded">
      <h1 className="text-xl font-bold">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border w-full rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
