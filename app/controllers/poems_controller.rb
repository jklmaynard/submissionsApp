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

    def update
        poem = Poem.find(params[:id])
        poem.update(updated_params)

        respond_with poem
    end

  private
    def poem_params
        params.require(:poem).permit(:title)
    end

    def updated_params
        params.require(:poem).permit(:accepted, :journal_accepted)
    end

end
