import axios from "axios";
// import { DbUrl } from "../Constants/URLs";

// export const UpdateProfile = async (payload) => {
//   const { name , phone , ragistered,token ,id } = payload;

//   console.log(name);
//   console.log(phone);
//   console.log(ragistered);
//   console.log(token);
//   console.log(id);


//   // Ensure all required fields are present
//   if (!ragistered || !id || !name  || !phone) {
//     console.error('Missing required fields for profile update');
//     return;
//   }

//   try {
//     const response = await axios.put(`http://localhost:8000/api/profileupdate/${id}`, {
//       name : name,
//       mobile_number : phone,
//       // token : token
//     }, {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     });

//     console.log('Profile updated successfully:', response.data);
//     alert("updated")

//     return response;
//     // Optionally update UI or show success message
//   } catch (error) {
//     console.error('Error updating profile:', error);
//     // Handle error
//   }
// };


export const UpdateName = async (payload) => {
  const { name , registered,token ,id } = payload;

  console.log(name);
  console.log(registered);
  console.log(token);
  console.log(id);


  // Ensure all required fields are present
  if (!registered || !id || !name) {
    console.error('Missing required fields for profile update');
    return;
  }

  try {
    const response = await axios.put(`http://localhost:8000/api/updatename/${id}`, {
      name : name,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Profile updated successfully:', response.data);
    alert("updated")

    return response;
    // Optionally update UI or show success message
  } catch (error) {
    console.error('Error updating profile:', error);
    // Handle error
  }
};

export const sendNumberOTP = async (payload) => {
  const { phone , registered,token ,id } = payload;

  console.log(phone);
  console.log(registered);
  console.log(token);
  console.log(id);


  // Ensure all required fields are present
  if (!registered || !id || !phone || !id) {
    console.error('Missing required fields for profile update');
    return;
  }

  try {
    console.log(phone);
    const response = await axios.put(`http://localhost:8000/api/send-otp/${id}`, {
      phone : phone,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Profile updated successfully:', response.data);

    return response;
    // Optionally update UI or show success message
  } catch (error) {
    console.error('Error updating profile:', error);
    // Handle error
  }
};



export const verifyNumberOtp = async (payload) => {
  const { phone , registered,token ,id } = payload;

  console.log(phone);
  console.log(registered);
  console.log(token);
  console.log(id);


  // Ensure all required fields are present
  if (!registered || !id || !phone) {
    console.error('Missing required fields for profile update');
    return;
  }

  try {
    console.log(phone);
    const response = await axios.put(`http://localhost:8000/api/verify-otp/${id}`, {
      otp : phone,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Profile updated successfully:', response.data);

    return response;
    // Optionally update UI or show success message
  } catch (error) {
    if(error.response.data.message === 'Invalid OTP'){
      alert(error.response.data.message)
    }
    console.error('Error updating profile:', error);
    // Handle error
  }
};

