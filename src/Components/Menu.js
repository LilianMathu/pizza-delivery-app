import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
            <div className="container">
              <h3 className="h3">Pizza Menu </h3>
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <div className="menu-grid">
                <div className="menu-item1">
                    <a href="/">
                        <img className="pic-1" src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </a>
                    <ul className="social">
                        <li><a href="/" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                        <li><a href="/" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="/" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    
                    <span className="product-discount-label">-10%</span>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="/">Pepino Pizza</a></h3>
                    <div className="price">
                        $14.40
                        <span>$16.00</span>
                    </div>
                    <a className="add-to-cart" href="/">ADD TO CART</a>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="menu-grid">
                <div className="menu-item1">
                    <a href="/">
                        <img className="pic-1" src="https://images.pexels.com/photos/3343626/pexels-photo-3343626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    </a>
                    <ul className="social">
                        <li><a href="/" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                        <li><a href="/" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="/" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span className="product-discount-label">-12%</span>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="/">Extra vegetable Toping's Pizza</a></h3>
                    <div className="price">
                        $17.60
                        <span>$20.00</span>
                    </div>
                    <a className="add-to-cart" href="/">ADD TO CART</a>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="menu-grid">
                <div className="menu-item1">
                    <a href="/">
                        <img className="pic-1" src="https://images.pexels.com/photos/1028433/pexels-photo-1028433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
                    </a>
                    <ul className="social">
                        <li><a href="/" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                        <li><a href="/" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="/" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span className="product-discount-label">-10%</span>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="/">Hawaiian Pizza</a></h3>
                    <div className="price">
                        $14.40
                        <span>$16.00</span>
                    </div>
                    <a className="add-to-cart" href="/">ADD TO CART</a>
                </div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="menu-grid">
                <div className="menu-item1">
                    <a href="/">
                        <img className="pic-1" src="https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pepperoni pizza with basil leaves" />
                    </a>
                    <ul className="social">
                        <li><a href="/" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                        <li><a href="/" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="/" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span className="product-discount-label">-10%</span>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="/">Pepperoni Pizza</a></h3>
                    <div className="price">
                        $14.40
                        <span>$16.00</span>
                    </div>
                    <a className="add-to-cart" href="/">ADD TO CART</a>
                </div>
            </div>
        </div>

        <div className="col-md-3 col-sm-6">
            <div className="menu-grid">
                <div className="menu-item1">
                    <a href="/">
                        <img className="pic-1" src="https://images.pexels.com/photos/1253737/pexels-photo-1253737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
                    </a>
                    <ul className="social">
                        <li><a href="/" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                        <li><a href="/" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="/" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span className="product-discount-label">-10%</span>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="/">Peper & Cheese</a></h3>
                    <div className="price">
                        $14.40
                        <span>$16.00</span>
                    </div>
                    <a className="add-to-cart" href="/">ADD TO CART</a>
                </div>
            </div>
        </div>

        <div className="col-md-3 col-sm-6">
            <div className="menu-grid">
                <div className="menu-item1">
                    <a href="/">
                        <img className="pic-1" src="https://images.pexels.com/photos/2180875/pexels-photo-2180875.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
                    </a>
                    <ul className="social">
                        <li><a href="/" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                        <li><a href="/" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="/" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span className="product-discount-label">-10%</span>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="/">Assorted Flavor</a></h3>
                    <div className="price">
                        $14.40
                        <span>$16.00</span>
                    </div>
                    <a className="add-to-cart" href="/">ADD TO CART</a>
                </div>
            </div>
        </div>

        <div className="col-md-3 col-sm-6">
            <div className="menu-grid">
                <div className="menu-item1">
                    <a href="/">
                        <img className="pic-1" src="https://images.pexels.com/photos/3343620/pexels-photo-3343620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
                    </a>
                    <ul className="social">
                        <li><a href="/" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                        <li><a href="/" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="/" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span className="product-discount-label">-10%</span>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="/">Roasted Pizza</a></h3>
                    <div className="price">
                        $14.40
                        <span>$16.00</span>
                    </div>
                    <a className="add-to-cart" href="/">ADD TO CART</a>
                </div>
            </div>
        </div>

        <div className="col-md-3 col-sm-6">
            <div className="menu-grid">
                <div className="menu-item1">
                    <a href="/">
                        <img className="pic-1" src="https://images.pexels.com/photos/2608049/pexels-photo-2608049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  />
                    </a>
                    <ul className="social">
                        <li><a href="/" data-tip="Quick View"><i className="fa fa-eye"></i></a></li>
                        <li><a href="/" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="/" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span className="product-discount-label">-10%</span>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="/">Baked Pizza</a></h3>
                    <div className="price">
                        $14.40
                        <span>$16.00</span>
                    </div>
                    <a className="add-to-cart" href="/">ADD TO CART</a>
                </div>
            </div>
        </div>
    </div>
</div>
<hr />
<hr />
</div>
        )
    }
}
