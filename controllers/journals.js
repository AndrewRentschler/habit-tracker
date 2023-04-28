import { Journal } from "../models/journal.js"

function journals(req, res) {
  Journal.find({})
  .populate('owner')
  .then(journal => {
    res.render('habits/journal', {
      journal,
      title: "Journal",
    })
  })
  .catch(err => {
    console.log(err) //KEEP
    res.redirect('/habits')
  })
}

function create(req, res){
  req.body.owner = req.user.profile._id
  Journal.create(req.body)
  .then(journal => {
    res.redirect('/habits/journals')
  })
  .catch(err => {
    console.log(err) //KEEP
    res.redirect('/habits')
  })
}

export {
  journals,
  create,
}