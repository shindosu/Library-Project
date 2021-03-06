class Book < ApplicationRecord
    has_one_attached :file #upload file on book, create record in database 
    has_one_attached :banner
    has_many_attached :volumes
    validates :title, presence: true
    validates :author, presence: true
    validates_presence_of :description
    validates :status, presence: true
    validates_presence_of :volumes
    
    before_save do
        self.genre.gsub!(/[\[\]\"]/, "") if attribute_present?("genre")
      end
end