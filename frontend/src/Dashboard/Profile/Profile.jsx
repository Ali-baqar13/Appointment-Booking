import React, { useContext, useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadCloudinaryImage from "../../utils/uploadCloudinary";
import { BASE_URL } from "../../../config";
import { toast } from "react-toastify";
import { authContext } from "../../context/AuthContext";

const Profile = ({ doctorData }) => {
  const { token } = useContext(authContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    gender: "",
    specialization: "sugeon",
    ticket: 0,
    qualification: [
      { startingDate: "", endDate: "", university: "", degree: "" },
    ],
    exprience: [{ startingDate: "", endDate: "", position: "", hospital: "" }],
    timeslot: [{ day: "", endDate: "", startDate: "" }],
    about: "",
    photo: 0,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    const data = await uploadCloudinaryImage(file);
    console.log("here is data", data);
    setFormData({ ...formData, photo: data.url });
    // ;
  };
  const updateProfileHandler = async e => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/doctor/${doctorData._id}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
           Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) {
        throw Error(result.message);
      }
      console.log("response",result)
      
      toast.success(result.message)
    } catch (err) {toast.error(err.message)}
  };

  useEffect(() => {
    if (doctorData) {
        setFormData({
            email: doctorData.email || "",
            password: doctorData.password || "",
            name: doctorData.name || "",
            phone: doctorData.phone || "",
            gender: doctorData.gender || "",
            specialization: doctorData.specialization || "surgeon",
            ticket: doctorData.ticket || 0,
            qualification: doctorData.qualification || [ 
                { startingDate: "", endDate: "", university: "", degree: "" },
            ],
            exprience: doctorData.exprience || [
                { startingDate: "", endDate: "", position: "", hospital: "" },
            ],
            timeslot: doctorData.timeslot || [
                { day: "", endDate: "", startDate: "" },
            ],
            about: doctorData.about || "",
            photo: doctorData.photo || 0,
        });
    }
}, [doctorData]);


  //...........................ReusableContent...........................................................

  const addItems = (key, items) => {
    setFormData((perFormData) => ({
      ...perFormData,
      [key]: [...perFormData[key], items],
    }));
  };

  const deleteItem = (key, index) => {
    setFormData((perFormData) => ({
      ...perFormData,
      [key]: perFormData[key].filter((_, i) => i !== index),
    }));
  };
  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((perFormData) => {
      const updateForm = [...perFormData[key]];
      updateForm[index][name] = value;
      return { ...perFormData, [key]: updateForm };
    });
  };
  //......................Qualification.............................................................

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualification", index);
  };
  const addQualification = (e) => {
    e.preventDefault();
    addItems("qualification", {
      startingDate: "",
      endDate: "",
      university: "",
      degree: "",
    });
  };
  //.......................Exprience...............................................................

  const deleteExprience = (e, index) => {
    e.preventDefault();
    deleteItem("exprience", index);
  };

  const addExprience = (e) => {
    e.preventDefault();
    addItems("exprience", {
      startingDate: "",
      endDate: "",
      position: "",
      hospital: "",
    });
  };
  //............................TimeSlot................................................................

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeslot", index);
  };

  const addTimeSlot = (e) => {
    e.preventDefault();
    addItems("timeslot", {
      day: "",
      endDate: "",
      startDate: "",
    });
  };

  //..............................handleChange............................................................
  const handleQualifictionChange = (event, index) => {
    handleReusableInputChangeFunc("qualification", index, event);
  };
  const handleExprienceChang = (event, index) => {
    handleReusableInputChangeFunc("exprince", index, event);
  };
  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc("timeSlot", index, event);
  };
  return (
    <div>
      <h2 className="text-headingColor leading-9 mb-10 text-[24px]">
        Profle Information
      </h2>
      <form>
        <div className="mb-5">
          <p className="text-headingColor text-[18px]">Name*</p>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Fulname"
            className="w-full leading-7 border border-solid border-black h-[50px] placeholder:pl-[5px]"
          ></input>
        </div>
        <div className="mb-5">
          <p className="form__label">Email</p>
          <input
            name="email"
            type="email"
            value={formData?.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Phone Numer</p>
          <input
            name="phone"
            type="number"
            value={formData?.phone}
            onChange={handleInputChange}
            placeholder="Phone"
            className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">password</p>
          <input
            name="password"
            type="password"
            value={formData?.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
          />
          <div className="mt-5 ">
            <div className="grid grid-cols-3 gap-[20px]">
              <div>
                <p className="form__label">Gender</p>
                <select
                  name="gender"
                  onChange={handleInputChange}
                  value={formData?.gender}
                  className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <p className="form__label">specialization</p>
                <select
                  name="specialization"
                  onChange={handleInputChange}
                  value={formData?.specialization}
                  className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
                >
                  <option value="surgeon">Surgeon</option>
                  <option value="Neurologist">Neurologists</option>
                  <option value="Nermatologists">Dermatologits</option>
                </select>
              </div>

              <div>
                <p className="form__label">Ticket Price</p>
                <input
                  name="ticket"
                  type="number"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  placeholder="Ticket Price"
                  className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="form__label">Qualification</p>
              {formData.qualification?.map((item, index) => (
                <div key={index}>
                  <div>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <p className="form__label">Starting Date*</p>
                        <input
                          type="date"
                          name="startingDate"
                          value={item.startingDate}
                          onChange={(e) => handleQualifictionChange(e, index)}
                          className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
                        />
                      </div>
                      <div>
                        <p className="form__label">End Date*</p>
                        <input
                          type="date"
                          name="endDate"
                          value={item.endDate}
                          onChange={(e) => handleQualifictionChange(e, index)}
                          className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
                        />
                      </div>
                      <div>
                        <p className="form__label">Degree*</p>
                        <input
                          type="text"
                          name="degree"
                          value={item.degree}
                          onChange={(e) => handleQualifictionChange(e, index)}
                          className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
                        />
                      </div>
                      <div>
                        <p className="form__label">University*</p>
                        <input
                          type="text"
                          name="university"
                          value={item.university}
                          onChange={(e) => handleQualifictionChange(e, index)}
                          className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
                        />
                      </div>
                    </div>
                    <button
                      onClick={(e) => deleteQualification(e, index)}
                      className="bg-red-600 text-white p-2 rounded-full mt-2 mb-[30px] cursor-pointer"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={addQualification}
                className="bg-[#000] cursor-pointer px-5 text-white py-2"
              >
                Add Qualification
              </button>
            </div>
          </div>
          <div className="mt-5 ">
            <div className="grid grid-cols-3 gap-[20px]"></div>
            <div className="mt-5">
              <p className="form__label">Exprience*</p>
              {formData.exprience?.map((item, index) => (
                <div key={index}>
                  <div>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <p className="form__label">Starting Date*</p>
                        <input
                          type="date"
                          name="startingDate"
                          value={item.startingDate}
                          onChange={(e) => handleExprienceChang(e, index)}
                          className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
                        />
                      </div>
                      <div>
                        <p className="form__label">End Date*</p>
                        <input
                          type="date"
                          name="endDate"
                          value={item.endDate}
                          onChange={(e) => handleExprienceChang(e, index)}
                          className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
                        />
                      </div>
                      <div>
                        <p className="form__label">Position*</p>
                        <input
                          type="text"
                          name="position"
                          value={item.position}
                          onChange={(e) => handleExprienceChang(e, index)}
                          className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
                        />
                      </div>
                      <div>
                        <p className="form__label">Hospital*</p>
                        <input
                          type="text"
                          name="hospital"
                          value={item.hospital}
                          onChange={(e) => handleExprienceChang(e, index)}
                          className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
                        />
                      </div>
                    </div>
                    <button
                      onClick={(e) => deleteExprience(e, index)}
                      className="bg-red-600 text-white p-2 rounded-full mt-2 mb-[30px] cursor-pointer"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={addExprience}
                className="bg-[#000] cursor-pointer px-5 text-white py-2"
              >
                Add Experience
              </button>
            </div>

            <div className="mt-5">
              <p className="form__label">TimeSlot*</p>
              {formData.timeslot?.map((item, index) => (
                <div key={index}>
                  <div>
                    <div className="grid grid-cols-4 gap-5">
                      <div>
                        <p className="form__label">Day</p>
                        <select
                          name="day"
                          className="form__input py-3.5"
                          onChange={(e) => handleTimeSlotChange(e, index)}
                        >
                          <option value="">Select</option>
                          <option value="monday">Monday</option>
                          <option value="tuesday">Tuesday</option>
                          <option value="wednesday">Wednesday</option>
                          <option value="thursday">Thursday</option>
                          <option value="friday">Friday</option>
                          <option value="saturday">Saturday</option>
                          <option value="sunday">Sunday</option>
                        </select>
                      </div>
                      <div>
                        <p className="form__label">Starting Time*</p>
                        <input
                          type="date"
                          name="startingTime"
                          value={item?.startTime}
                          onChange={(e) => handleTimeSlotChange(e, index)}
                          className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
                        />
                      </div>
                      <div>
                        <p className="form__label">Ending Time*</p>
                        <input
                          type="date"
                          name="endTime"
                          value={item?.endTime}
                          onChange={(e) => handleTimeSlotChange(e, index)}
                          className="w-full border placeholder:pl-[5px] border-solid border-black h-[50px]"
                        />
                      </div>
                    </div>
                    <button
                      onClick={(e) => deleteTimeSlot(e, index)}
                      className="bg-red-600 text-white p-2 rounded-full mt-2 mb-[30px] cursor-pointer"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={addTimeSlot}
                className="bg-[#000] cursor-pointer px-5 text-white py-2"
              >
                Add Time Slot
              </button>
            </div>
          </div>
          <div className="mt-5">
            <textarea
              className="w-full placeholder:pl-[5px] border border-solid border-black"
              rows={5}
              placeholder="write something here"
            ></textarea>
          </div>
          <div className="mb-5 flex items-center gap-3">
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img
                className="w-full h-full rounded-full"
                src={`${formData.photo}`}
              ></img>
            </figure>
            <div className="relative w-[130px] h-[50px]">
              <input
                type="file"
                name="photo"
                id="customFile"
                accept=".jpg, .png, .gif"
                onChange={handleFileInputChange}
                style={{ display: "none" }}
              />
              <label
                htmlFor="customFile"
                className="absolute left-0 right-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
              >
                upload photo
              </label>
            </div>
          </div>
          <button onClick={updateProfileHandler} type="submit" className="w-full btn cursor-pointer px-5 text-white py-2 mt-5">
            update profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
