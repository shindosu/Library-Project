class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]

  # GET /books
  # GET /books.json
  def index
    @books = Book.all
  end

  def list 
    @books = Book.all
  end


  # GET /books/1
  # GET /books/1.json
  def show
    @book = Book.find(params[:id]) #get individual post page
  end

  # GET /books/new
  def new
    @book = Book.new
  end

  # GET /books/1/edit
  def edit
    @book = Book.find(params[:id])
    
  end

  # POST /books
  # POST /books.json
  def create
    @book = Book.new(book_params)
   # params[:book][:genre] ? @book.genres = params[:book][:genre].join(",") : false
    respond_to do |format|
      if @book.save
        format.html { redirect_to @book, notice: 'Book was successfully created.' }
        format.json { render :show, status: :created, location: @book }
      else
        format.html { render :new }
        format.json { render json: @book.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /books/1
  # PATCH/PUT /books/1.json
  def update
    @book = Book.find(params[:id])
      if(@book.update(book_params))
        redirect_to @book, notice: 'Book was successfully updated.' 
      else
        render 'edit'
      end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    respond_to do |format|
      format.js {render :layout => false}
      format.html { redirect_to books_url, notice: 'Book was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def search #searches for manga titles
    if params[:search].blank?
    redirect_to(books_url, notice:"Enter a word at least!") and return
    else
     @parameter = params[:search]
     @results = Book.where("title LIKE ?", "%#{@parameter}%")
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def book_params
      params.require(:books).permit(:title, :author, :description, :status, :rating, {mangaTitle: []}, :file, :banner, volumes: [],genre:[])
    end
end
