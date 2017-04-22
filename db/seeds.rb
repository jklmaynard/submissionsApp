# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Journal.create!(title: 'journal one', url: 'www.journalone.com')
Journal.create!(title: 'journal two', url: 'www.journaltwo.com')
Poem.create!(title: 'Poem One')
Poem.create!(title: 'Poem Two')
Poem.create!(title: 'Poem Three')
Submission.create!(name: 'Submission to Journal One', journal_id: 1, poems:[Poem.first, Poem.last])
Submission.create!(name: 'Submission to Journal Two', journal_id: 2)
