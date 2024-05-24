import express from 'express'
const router = express.Router()
import { HandyCompany } from '../models/HandyCompany.js'


router.post("/", async (req, res) => {
  const { companyName, industry, companyPhone, companyMail, companyDescription } = req.body
  
  // Validate the input
  if (!companyName || !industry || !companyPhone || !companyMail || !companyDescription) {
    return res.status(400).json({ msg: "Please enter all fields" })
  }
  
  try {
    // Create a new HandyHubber
    const newHandyHubber = new HandyCompany({
      companyName,
      industry,
      companyPhone,
      companyMail,
      companyDescription
    })
    
    // Save to database
    await newHandyHubber.save()
    
    res.status(201).json(newHandyHubber)
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: "Server error" })
  }
})

export { router as handyCompanyRouter }