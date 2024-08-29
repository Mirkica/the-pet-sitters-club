import "./profile";

import { Turbo } from "@hotwired/turbo-rails";
Turbo.start();

import { Application } from "@hotwired/stimulus";

// Initialize Stimulus application
const application = Application.start();

// Load all Stimulus controllers from the controllers directory
const context = require.context("controllers", true, /\.js$/);
context.keys().forEach((key) => {
  application.register(
    key.split("/").pop().replace(/\..+$/, ""),
    context(key).default
  );
});
