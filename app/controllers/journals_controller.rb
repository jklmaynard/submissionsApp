class JournalsController < ApplicationController

    def index
      respond_with Journal.all
    end

    def show
      respond_with Journal.find(params[:id])
    end

    def create
      respond_with Journal.create(journal_paraams)
    end
  private
    def journal_params
      params.require(:journal).permit(:title, :url)
    end
end
