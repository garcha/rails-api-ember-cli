class PublisherSerializer < ActiveModel::Serializer
  attributes :id, :name, :price
  has_many :books
  has_many :authors
end
