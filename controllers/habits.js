import { Habit } from "../models/habit.js"

function index(req, res) {
  Habit.find({})
  .populate('owner')
  .then(habit => {
    console.log(habit) //DELETELATER
    res.render('habits/index', {
      habit: habit,
      title: "Habits",
    })
  })
  .catch(err => {
    console.log(err) //KEEP
    res.redirect('/')
  })
}

function create(req, res){
  console.log('init create controller') //DELETELATER
  req.body.owner = req.user.profile._id
  req.body.longName = "abc"
  req.body.description = "description"
  req.body.currentStreak = 0
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
  Habit.findById(req.params.habitId)
  .populate("owner")
  .then(habit => {
    res.render('habits/show', {
      habit: habit,
      title: "Habit Show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/habits')
  })
}

function edit(req, res) {
  Habit.findById(req.params.habitId)
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