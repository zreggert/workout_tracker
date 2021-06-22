const router = require("express").Router();
const Exercise = require("../models");

router.post("/api/exercise", ({ body }, res) => {
    Exercise.create(body)
        .then(dbExercise => {
            re.json(dbExercise);
        })
        .cath(err => {
            res.status(400).json(err);
        });
});

router.get("/api/exercise", (req, res) => {
    Exercise.find({})
        .then(dbExercise => {
            re.json(dbExercise);
        })
        .cath(err => {
            res.status(400).json(err);
        });
});
