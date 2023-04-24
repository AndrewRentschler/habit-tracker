import { Habit } from "../models/habit.js"

function index(req, res) {
  Habit.find({})
  .populate('owner')
  .then(habits => {
    console.log(habits) //DELETELATER
    res.render('habits/index'), {
      habits,
      title: "Habits"
    }
  })
  .catch(err => {
    console.log(err) //KEEP
    res.redirect('/')
  })
}

function create(req, res){
  console.log('init create controller') //DELETELATER
  req.body.owner = req.user.profile._id
  Habit.create(req.body)
  .then(habit => {
    res.redirect('/habits')
  })
  .catch(err => {
    console.log(err) //KEEP
    res.redirect('/habits')
  })
}

function show(req, res) {
  Habit.findById(req.params.habitID)
  .populate("owner")
  .then(habit => {
    res.render('habits/show', {
      habit,
      title: "Habit Show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/habits')
  })
}

function edit(req, res) {
  Habit.findById(req.params.habitID)
  .then(habit => {
    res.render('habits/edit'), {
      habit,
      title: "Edit Habit"
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/habits')
  })
}

export {
  index,
  create,
  show,
  edit

}