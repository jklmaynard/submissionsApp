class PoemsController < ApplicationController

  def index
    respond_with Poem.all
  end

  def show
    respond_with Poem.find(params[:id])
  end

  def create
    respond_with Poem.create(poem_params)
  end

private
  def poem_params
    params.require(:poem).permit(:title)
  end


end
