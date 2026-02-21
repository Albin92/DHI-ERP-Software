import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Local "temporary" storage for the hackathon
const users = []; 

export const register = async (req, res) => {
  try {
    const { name, email, password, role, usn, semester } = req.body;
    
    // Simulate a user object
    const newUser = { 
        name, email, role, usn, semester, 
        status: role === "admin" ? "approved" : "pending" 
    };
    
    users.push(newUser);
    
    res.status(201).json({ 
      message: "Registered (Local Mode). Pending approval.", 
      user: newUser 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    
    // Simulate a successful login for testing
    const token = "mock-token-for-hackathon";
    
    res.json({ 
      message: "Login successful (Mock Mode)", 
      token, 
      user: { name: "Test User", role: "admin" } 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};