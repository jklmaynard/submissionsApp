class Submission < ApplicationRecord
  belongs_to :journal
  has_and_belongs_to_many :poems
end
