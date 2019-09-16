class AddMangaTitleToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :mangaTitle, :string
  end
end
