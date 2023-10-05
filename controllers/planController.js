const express = require("express");
const router = express.Router();
const Plan = require("../models/plan");
const User = require("../models/user");

//Index
router.get("/", async (req, res) => {
  try {
    res.json(await Plan.find());
  } catch (error) {
    res.status(400).json(error);
  }
});

//Create
router.post("/", async (req, res) => {
  try {
    res.json(await Plan.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

// seed route
router.get("/seed", async (req, res) => {
  const user = await User.findById(req.session.userId);
  const seededTrips = await Plan.create([
    {
      userId: req.session.userId,
      title: "Trip to Japan",
      description: "Conference in Osaka, sightseeing in Kyoto",
      startDate: "October 9, 2023",
      endDate: "October 16, 2023",
      checklist: [
        {
          item: "Passport",
          checked: false,
        },
        {
          item: "Clothes",
          checked: false,
        },
        {
          item: "Phone",
          checked: false,
        },
        {
          item: "Wallet",
          checked: false,
        },
        {
          item: "Medicine",
          checked: false,
        },
        {
          item: "Camera",
          checked: false,
        },
        {
          item: "Books",
          checked: false,
        },
        {
          item: "Snacks",
          checked: false,
        },
        {
          item: "Travel Pillow",
          checked: false,
        },
        {
          item: "Travel Documents",
          checked: false,
        },
        {
          item: "Travel Insurance",
          checked: false,
        },
        {
          item: "Travel Tickets",
          checked: false,
        },
      ],
      budget: {
        foodAmount: 500,
        attractionAmount: 500,
        accommodationAmount: 1000,
        totalAmount: 2000,
      },
    },
    {
      userId: req.session.userId,
      title: "New Year's in Disney World",
      description: "Family vacation to Disney World for New Year's",
      startDate: "December 27, 2023",
      endDate: "January 3, 2024",
      checklist: [
        {
          item: "Park Tickets",
          checked: false,
        },
        {
          item: "Hotel Reservations",
          checked: false,
        },
        {
          item: "Disney Costumes",
          checked: false,
        },
        {
          item: "Winter Clothes",
          checked: false,
        },
        {
          item: "Camera",
          checked: false,
        },
        {
          item: "Cash for Souvenirs",
          checked: false,
        },
        {
          item: "Snacks",
          checked: false,
        },
        {
          item: "Gifts",
          checked: false,
        },
        {
          item: "Christmas Decorations",
          checked: false,
        },
        {
          item: "Travel Documents",
          checked: false,
        },
        {
          item: "Travel Insurance",
          checked: false,
        },
        {
          item: "Flight Tickets",
          checked: false,
        },
      ],
      budget: {
        foodAmount: 800,
        attractionAmount: 1000,
        accommodationAmount: 2000,
        totalAmount: 3800,
      },
    },
    {
      userId: req.session.userId,
      title: "Weekend in Cape Cod",
      description: "Short getaway to Cape Cod for the weekend",
      startDate: "May 3, 2024",
      endDate: "May 5, 2024",

      checklist: [
        {
          item: "Beach Gear",
          checked: false,
        },
        {
          item: "Sunscreen",
          checked: false,
        },
        {
          item: "Swimsuits",
          checked: false,
        },
        {
          item: "Towels",
          checked: false,
        },
        {
          item: "Picnic Supplies",
          checked: false,
        },
        {
          item: "Biking Gear",
          checked: false,
        },
        {
          item: "Hiking Shoes",
          checked: false,
        },
        {
          item: "Local Maps",
          checked: false,
        },
        {
          item: "Cash",
          checked: false,
        },
        {
          item: "Hotel Reservations",
          checked: false,
        },
        {
          item: "Travel Documents",
          checked: false,
        },
        {
          item: "Travel Insurance",
          checked: false,
        },
        {
          item: "Gas for Car",
          checked: false,
        },
      ],

      budget: {
        foodAmount: 200,
        attractionAmount: 300,
        accommodationAmount: 400,
        totalAmount: 900,
      },
    },
  ]);

  const seededTripIds = [];
  seededTrips.forEach((trip) => seededTripIds.push(trip._id));

  await User.findByIdAndUpdate(
    req.session.userId,
    { $set: { trips: seededTripIds } },
    { new: true }
  );
  res.redirect("/trips");
});

//Delete
router.delete("/:id", async (req, res) => {
  try {
    res.json(await Plan.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

//Show
router.get("/:id", async (req, res) => {
  try {
    res.json(await Plan.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
