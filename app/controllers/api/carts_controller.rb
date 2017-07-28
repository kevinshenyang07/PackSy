class Api::CartsController < ApplicationController

  def create
    @cart = Cart.new(user_id: current_user.id)
    if @cart.save
      render :show
    else
      render json: @cart.errors.messages, status: 422
    end
  end

  def show
    @cart = current_user.carts[-1]
    render :show
  end

  def index
    if current_user
      @carts = current_user.carts
      render :index
    end
  end

  def update
    @cart = Cart.find(cart_params[:id])
    @cart.user_id = current_user.id

    if @cart.update(cart_params)
      render :show
    else
      render json: @cart.errors.messages, status: 422
    end
  end

  private
  def cart_params
    params.require(:cart).permit(:id, :purchased)
  end

end
