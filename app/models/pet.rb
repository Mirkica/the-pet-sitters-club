class Pet < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  validates :breed, presence: true
  validates :age, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
