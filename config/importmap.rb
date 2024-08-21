# Pin npm packages by running ./bin/importmap

pin 'application', preload: true
pin 'tailwindcss', to: 'https://cdn.tailwindcss.com'
pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
