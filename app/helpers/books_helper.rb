module BooksHelper
    def checked_genre(area)
        @book.genre.nil? ? false : @book.genre.match(area)
      end
end
