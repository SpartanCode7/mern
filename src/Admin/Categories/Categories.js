import React from 'react'
import './style.scss'

function Categories() {
  return (
    <div className="categories">
        <div className="cate__form">
            <h4>Add new category</h4>
            <div className="form__inner">
                <div className="cate_field">
                    <span>Name</span>
                    <input type="text" className="cate_name" />
                </div>
                <div className="cate_field">
                    <span>Slug</span>
                    <input type="text" className="cate_slug" />
                </div>
                <div className="cate_field">
                    <span>Parent Category</span>
                    <select className="cate_select">
                        <option>none</option>
                        <option value="parent">Parent</option>
                    </select>
                </div>
                <div className="cate_field">
                    <span>Discription</span>
                    <textarea className="cate_discription"></textarea>
                </div>
                <div className="cate_field">
                    <span>Thumnail</span>
                    <input type="file" className="cate_img" />
                </div>
                <div className="cate_field add__cate__button">
                    <button>Add new category</button>
                </div>
            </div>
        </div>
        <div className="cate__list">
            <h1>All Categories</h1>
        </div>
    </div>
  )
}

export default Categories