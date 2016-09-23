class Author < ApplicationRecord
  has_many :books
  has_many :publishers, through: :books
  
  validates :name, uniqueness: { message: 'already exists in database' }
end
