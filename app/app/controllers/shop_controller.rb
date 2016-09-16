class ShopController < ApplicationController

  def index
    shop = Shop.all  
    render :json => shop.to_json()
  end

end
