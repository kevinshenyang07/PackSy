class Api::CartItemsController < ApplicationController
  def index
    carts = current_user.carts
    if carts.empty?
      @cart_items = []
    else
      # get items from last cart
      @cart_items = current_user.carts[-1].cart_items
    end
    render :index
  end

  def create
    @cart_item = CartItem.find_by(
      cart_id: cart_item_params[:cart_id],
      item_id: cart_item_params[:item_id]
    )
    if @cart_item
      if @cart_item.update(item_quantity: cart_item_params[:item_quantity])
        render :show
      else
        render json: @cart_item.errors.messages, status: 422
      end
    else
      @cart_item = current_user.cart_items.new(cart_item_params)
      if @cart_item.save
        render :show
      else
        render json: @cart_item.errors.messages, status: 422
      end
    end
  end

  def update
    @cart_item = CartItem.find(cart_item_params[:id])

    if @cart_item.update(cart_item_params)
      render :show
    else
      render json: @cart_item.errors.messages, status: 422
    end
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
    render :show
  end

  private

  def cart_item_params
    params.require(:cart_item).permit(:id, :cart_id, :item_id, :item_quantity)
  end
end
