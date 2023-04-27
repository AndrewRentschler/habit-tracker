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
    res.redirect('/habits')
  })
}

function create(req, res){
  console.log('init create controller') //DELETELATER
  req.body.owner = req.user.profile._id
  req.body.longName = "abc"
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
    res.render("habits/edit", {
      habit: habit,
      title: "Edit Habits",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/habits')
  })
}

function allHabits(req, res) {
  Habit.find({})
  .populate('owner')
  .then(habit => {
    console.log(habit) //DELETELATER
    res.render('habits/allHabits', {
      habit: habit,
      title: "All Habits",
    })
  })
  .catch(err => {
    console.log(err) //KEEP
    res.redirect('/habits')
  })
}

function update(req, res) {
  Habit.findById(req.params.habitId)
  .then(habit => {
    console.log(habit) //DELETELATER
    habit.currentStreak += 1
    console.log(habit) //DELETELATER
    habit.save()
    .then(()=> {
      res.redirect('/habits')
    })
  })
  .catch(err => {
    console.log(err) //KEEP
    res.redirect('/habits')
  })
}

function resetStreak(req, res) {
  Habit.findById(req.params.habitId)
  .then(habit => {
    console.log(habit) //DELETELATER
    habit.currentStreak = 0
    console.log(habit) //DELETELATER
    habit.save()
    .then(()=> {
      res.redirect('/habits')
    })
  })
  .catch(err => {
    console.log(err) //KEEP
    res.redirect('/habits')
  })

}

function changeName(req, res) {
  Habit.findById(req.params.habitId)
  .then(habit => {
    console.log(habit) //DELETELATER
    habit.btnName = req.body.newName
    console.log(habit) //DELETELATER
    habit.save()
    .then(()=> {
      res.redirect('/habits')
    })
  })
  .catch(err => {
    console.log(err) //KEEP
    res.redirect('/habits')
  })

}

export {
  index,
  create,
  show,
  edit,
  allHabits,
  update,
  resetStreak,
  changeName
}