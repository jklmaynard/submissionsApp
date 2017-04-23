class PoemsController < ApplicationController

  def index
    respond_with Poem.all
  end

  def show
    poem = Poem.find(params[:id])
    submissions = poem.submissions
    respond_with [poem, submissions]
  end

  def create
    respond_with Poem.create(poem_params)
  end

private
  def poem_params
    params.require(:poem).permit(:title)
  end


end
