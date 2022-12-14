const express = require('express');
const router = require('express').Router();
const { Blog, User } = require('../models/');
const path = require('path');
const withAuth = require('../utils/auth');
const fs = require("fs");
const http = require("http");
const util = require("util");


// get all blog posts 
router.get('/', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll()
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("blog",
      {
        blogs,
        logged_in: req.session.logged_in

      })

  } catch (err) {
    res.status(500).json(err);
  }
});

//Create a new blog post
//request at /api/blog
router.post('/', async (req, res) => {
  try {
    const blogData = await Blog.create({
      ...req.body,
      title: req.body.title,
      textarea: req.body.textarea
    });
    req.session.save(() => {
      req.session.logged_in = true;

      res.status(200).json(blogData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;