class Poem < ApplicationRecord
  has_and_belongs_to_many :submissions
end
