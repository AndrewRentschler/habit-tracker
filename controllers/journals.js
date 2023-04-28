import { Journal } from "../models/journal.js"

function journals(req, res) {
  Journal.find({})
  .populate('owner')
  .then(journal => {
    res.render('journals/index', {
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
    res.redirect('/journals')
  })
  .catch(err => {
    console.log(err) //KEEP
    res.redirect('/habits')
  })
}

function edit(req, res) {
  Journal.findById(req.params.journalId)
  .then(journal => {
    res.render("journals/edit", {
      journal,
      title: "Edit Journal",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/habits')
  })
}

function update(req, res) {
  Journal.findById(req.params.journalId)
  .then(journal => {
    journal.entry = req.body.editJournal
    journal.save()
    .then(()=> {
      res.redirect('/journals')
    })
  })
  .catch(err => {
    console.log(err) //KEEP
    res.redirect('/habits')
  })
}

function deleteJournal(req, res) {
  Journal.findByIdAndDelete(req.params.journalId)
  .then(entry => {
    res.redirect("/journals")
  })
  .catch(err => {
    console.log(err) //KEEP
    res.redirect('/habits')
  })
}

export {
  journals,
  create,
  edit,
  update,
  deleteJournal as delete
}