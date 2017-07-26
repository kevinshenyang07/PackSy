class Api::ReviewsController < ApplicationController

  def index
    if params.has_key?(:item_id)
      @reviews = Review.where(item_id: params[:item_id])
    else
      @reviews = current_user.reviews
    end
    render :index
  end

  def review_params
    params.require(:review).permit(:item_id, :rating, :body)
  end
end
